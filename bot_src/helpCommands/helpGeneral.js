const Discord = require('discord.js');
exports.run = async (message) => {
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
            {
                name: "Spotify: ",
                value: "spotify @user: muestra la información relativa al usuario mencionado.",
                inline: true
            }
        );
    message.author.send(embedMessage);
}
