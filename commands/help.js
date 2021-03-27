const Discord = require('discord.js');
/**
 * Muestra ayuda de cada comando
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {




    //!Embed general
    //Crea un nuevo mensaje mucho más personalizable que los mensajes base
    let embedMessage = new Discord.MessageEmbed()
        .setTitle("Comandos generales")//Asigna un título
        .setColor('RANDOM')//Cambia el color de la barrera que sale al lado del mensaje
        .addFields(
            {
                name: "Avatar: ",
                value: "avatar {@user}: muestra la foto de perfil de un usuario. " +
                    "En caso de no tener argumento usa el del autor del mensaje y acepta ids y @usuario.",
                inline: true
            },
            {
                name: "Buenos: ",
                value: "buenos días/tardes/noches/empty: saluda educadamente al usuario según la hora del día.",
                inline: true
            },
            {
                name: "Github: ",
                value: "github: envía el link de git hub donde se desarrolla el bot.",
                inline: true
            },
            {
                name: "Help: ",
                value: "help: muestra una pequeña ayuda de todos los comandos.",
                inline: true
            },
            {
                name: "Invitar: ",
                value: "invitar: envía el link de invitación al servidor.",
                inline: true
            },
            {
                name: "Ping: ",
                value: "ping: evalua la latencia del servidor y de la api.",
                inline: true
            },
            {
                name: "Poll: ",
                value: "poll emojis | text: crea una encuesta que puede ser cerrada por el creador del bot.",
                inline: true
            },
            {
                name: "RoleMembers: ",
                value: "rolemembers @role: muestra el número de usuarios con un rol.",
                inline: true
            },
            {
                name: "Social: ",
                value: "social redSocial: muestra el usuario o link de la red social especificada. " +
                "Redes disponibles: instagram,youtube,twitch,battlenet,epic,steam,uplay,spotify,riot",
                inline: true
            },
            {
                name: "UserInfo: ",
                value: "userInfo @user: muestra la información relativa al usuario mencionado.",
                inline: true
            },
        )
    //!Embed Admins
    let modEmbed = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setTitle("Comandos de moderación")//Asigna un título
        .setColor('RANDOM')//Cambia el color de la barrera que sale al lado del mensaje
        .addFields(
            {
                name: "Borrar: ",
                value: "borrar númeroDeMensajes: elimina el número de mensajes con edad menor de 14 días.",
                inline: true
            },
            {
                name: "BotServerInfo: ",
                value: "botServerInfo: es un comando de consola para el desarrollador y ya",
                inline: true
            },
            {
                name: "Help: ",
                value: "help: muestra una pequeña ayuda de todos los comandos.",
                inline: true
            },
            {
                name: "SetStatus: ",
                value: "setStatus status: comando que sirve para que el propietario del bot ponga un estado al bot.",
                inline: true
            },
            {
                name: "Ban: ",
                value: "ban @user razón de expulsión: banea a un usuario del servidor dando una razón y además le manda un mensaje privado " +
                    "con una foto cómica.",
                inline: true
            },
            {
                name: "Kick: ",
                value: "kick @user razón de expulsión: expulsa a un usuario del servidor dando una razón y además le manda un mensaje privado.",
                inline: true
            },
            {
                name: "dm: ",
                value: "dm @user texto: manda un mensaje privado usando la cuenta del bot.",
                inline: true
            },

        );
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("BAN_MEMBERS")) {
        message.author.send(embedMessage);
    } else {//!Manda ambos mensajes para que los mods no tengan que leer juntos los disntintos poderes que tienen, pendiente de mejora tal vez mediante web
        message.author.send(embedMessage);
        message.author.send(modEmbed);
    }

}