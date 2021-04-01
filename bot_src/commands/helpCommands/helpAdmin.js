const Discord = require('discord.js');
exports.run = async (message) => {

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
    message.author.send(modEmbed);
}