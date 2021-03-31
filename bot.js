const Discord = require("discord.js");// Se usa para conseguir la api de discord
const bot = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });// Sirve para acceder al bote de discord


/**
 * Llama a las constantes que están dentro del json
 */
const {
    prefix,
    token,
    serverID,
    bienvenidasID,
    consoleChannel,
    logMSGChannel,
    dmLog,
    twitchLink
} = require('./commands/commandConfig.json');

/**
 * Avisa de cuando está encendido el bot a través de consola
 */

bot.on("ready", onReady);

/**
 * Sirve para avisar cuando se una un miembro nuevo
 */
bot.on("guildMemberAdd", onMemberAdd);

/**
 * Ejecuta lo que tenga dentro cada vez que se lanza un mensaje
 */
bot.on("message", onMessage);



//*Aquí empiezan las distintas funciones encargadas de actuar en bot.on

function onMemberAdd(member) {
    if (member.guild.id === serverID) {
        let embed = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
            .setTitle("Bienvenido:")//Asigna un título
            .setDescription("Encantado de tenerte por este server " + `<@!${member.id}>` + " 💕💕")//`<@!${message.author.id}>` sirve para hacer un @ a la persona que pone el mensaje
            .setThumbnail()
            .setColor('RANDOM'); //Cambia el color de la barrera que sale al lado del mensaje
        const server = bot.guilds.cache.get(serverID);
        const channel = server.channels.cache.get(bienvenidasID);
        channel.send(embed);
        console.log(embed);
    }
}

function onMessage(message) {
    messageLogged = false;
    if (message.channel.id !== consoleChannel && message.channel.id !== logMSGChannel && !message.content.startsWith(prefix)) {
        if (message.channel.type === "dm") {
            logDM(message, dmLog, message.author.bot);
        } else {
            logMessage(message, logMSGChannel, message.author.bot);
            messageLogged = true;
        }
    }

    /**
     * Si ningún mensaje empieza con prefijo para de hacer cosas o si es el mensaje de un bot
     */
    if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;

    /**
     * Asegura que el mensaje sea un comando
     */
    if (message.content.indexOf(prefix) !== 0) return;

    /**
     * Slice quita el prefijo(en este caso al menos)
     * Resultado = comando arg1 arg2...
     * Trim retira los espacios al inicio y al final
     * Split elimina los espacios y con el parámetro / + /g elimina también dobles espacios por si se tropieza
     */
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    /**
     * Shift nos devuelve el primer elemento de la array
     */
    const command = args.shift();

    /**
     * lo pongo por separado para evitar tener que añadir el token en commandConfig.json
     */
    if (command === "reload") {
        bot.destroy()//cierra el bot

        bot.login(token);
        if (!messageLogged) {
            console.log(logMessage(message, consoleChannel, false));
        }
        message.channel.send("Reloaded");
        return;
    }

    /**
     * Sirve para llamar a cada comando usando el nombre del archivo y pasando como parámetros los argumentos, el mensaje y el cliente
     */
    try {

        let comandos = require(`./commands/${command}.js`); //Busca el comando en la carpeta
        comandos.run(bot, message, args); //Ejecuta el comando con los parámetros
        if (!messageLogged) {
            console.log(logMessage(message, consoleChannel, false));
        }

        return;
    } catch (e) {
        message.channel.send("Ha ocurrido un error con " + command);
        message.channel.send(e.toString());
        console.log(logError(message, e.toString(), consoleChannel, false)); //Guarda la excepción

    }
}

function onReady() {
    console.log("I am ready!");// console.log manda a la terminal el mensaje pasado como parámetro

    /**
     * Pone un estado al bot y le permite al usuario acceder al link de twitch especificado
     */
    bot.user.setActivity("Type " + prefix + "help", {
        type: "STREAMING",
        url: twitchLink
    });
}
//*Aquí acaban las distintas funciones encargadas de actuar en bot.on

//*Funciones de log
/**
 * Hace un log de los mensajes mandados por cualquier canal
 * @param {*} message 
 * @param {*} channel 
 * @param {*} cond 
 * @returns 
 */
function logError(message, error, channel, cond) {
    if (cond) {
        return;
    }
    try {
        message.guild.channels.cache.get(channel).send(error);//manda el mensaje por el canal de log de consola
    } catch (e) {
        console.log(e);//loggea en consola el error, si se usase el comando node bot.js >> log.txt para lanzarlo se guardarían todos los errores
    }
    return error;
}

/**
 * Hace un log de los mensajes mandados por cualquier canal
 * @param {*} message 
 * @param {*} channel 
 * @param {*} cond 
 * @returns 
 */
function logMessage(message, channel, cond) {
    if (cond) {
        return;
    }
    getIdFromMention(message);
    msg = message.author.tag + " Envió: "
        + message.content, "en: " + message.guild.name; //Informa por consola lo que ocurre a modo de log
    try {
        message.guild.channels.cache.get(channel).send(msg);//manda el mensaje por el canal de log normal
    } catch (error) {
        console.log(error);//loggea en consola el error, si se usase el comando node bot.js >> log.txt para lanzarlo se guardarían todos los errores
    }
    return msg;
}

/**
 * Manda un log de los mensajes mediante el dm
 * @param {*} message 
 * @param {*} channel 
 * @param {*} cond 
 * @returns 
 */
function logDM(message, channel, cond) {
    if (cond) {
        return;
    }
    let embed = new Discord.MessageEmbed()
        .setDescription(`<@!${message.author.id}> ha dicho: \n` + message.content)
        .setColor('RANDOM');
    try {
        bot.guilds.cache.get(serverID).channels.cache.get(channel).send(embed);//manda el mensaje al canal de log de dm
    } catch (error) {
        console.log(error);//loggea el error en consola, si el host del bot utiliza el comando node bot.js >> console.log tendría todo en un archivo
    }
    return embed;
}

/**
 * Saca la id de una mención porque me resulta más cómodo tratar todo con ids
 * @param {*} mention 
 * @returns 
 */
function getIdFromMention(message) {
    if (message.content == undefined) {
        return;
    }
    const args = message.content.trim().split(/ +/g);
    if (!args) return;
    for (let index = 0; index < args.length; index++) {
        if (args[index].startsWith('<@') && args[index].endsWith('>')) {//el formato de una mención es <@id>
            args[index] = args[index].slice(3, -1);
            if (message.mentions.members.first() != undefined) {//si no es una mención a usuario continua
                args[index] = message.mentions.members.first().user.username;
            }
            if (message.guild.roles.cache.get(args[index]) != undefined) {//su no es una mención a rol después de no ser a usuario no hace nada
                args[index] = message.guild.roles.cache.get(args[index]).name
            }
        }
    }
    message.content = args.join(" ");


}



bot.login(token);