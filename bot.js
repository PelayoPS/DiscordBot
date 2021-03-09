const Discord = require("discord.js");// Se usa para conseguir la api de discord
const bot = new Discord.Client();// Sirve para acceder al bote de discord


/**
 * Llama a las constantes que están dentro del json
 */
const {
  prefix,
  token,
  serverID,
  bienvenidasID,
  consoleChannel,
  logMSGChannel
} = require('./commands/commandConfig.json');

/**
 * Avisa de cuando está encendido el bot a través de consola
 */
bot.on("ready", () => {

  console.log("I am ready!");// console.log manda a la terminal el mensaje pasado como parámetro

  /**
   * Pone un estado al bot y le permite al usuario acceder al link de twitch especificado
   */
  bot.user.setActivity("Type " + prefix + "help", {
    type: "STREAMING",
    url: "https://www.twitch.tv/pelayo_p_s"
  });
});

/**
 * Sirve para avisar cuando se una un miembro nuevo
 */
bot.on("guildMemberAdd", member => {
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
});

bot.on("message", message => {
  messageLogged = false;
  if (message.channel.id !== consoleChannel && message.channel.id !== logMSGChannel && !message.content.startsWith(prefix)) {
    logMessage(message,logMSGChannel,message.author.bot);
    messageLogged = true;
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
    if(!messageLogged){
    console.log(logMessage(message,consoleChannel,false));
    }
    message.channel.send("Reloaded");
    return;
  }

  /**
   * Sirve para llamar a cada comando usando el nombre del archivo y pasando como parámetros los argumentos, el mensaje y el cliente
   */

  try {

    let comandos = require(`./commands/${command}.js`); //Buesca el comando en la carpeta

    comandos.run(bot, message, args); //Ejecuta el comando con los parámetros
    if(!messageLogged){
      console.log(logMessage(message,consoleChannel,false));
    }
    
    return;
  } catch (e) {
    message.channel.send("Ha ocurrido un error con " + command);
    message.channel.send(e.toString());
    console.log(logMessage(e.stack,logMSGChannel,true)); //Guarda la excepción

  }


});


function logMessage(message, channel, cond) {
  if (cond){
    return;
  }
  msg = message.author.tag + " Envió: "
    + message.content, "en: " + message.guild.name; //Informa por consola lo que ocurre a modo de log
  try {
    message.guild.channels.cache.get(channel).send(msg);
  } catch (error) {
    console.log(error);
  }
  return msg;
}


bot.login(token);