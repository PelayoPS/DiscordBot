const Discord = require('discord.js');
/**
 * Muestra ayuda de cada comando
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {

    let descrption = "";

    let title = "";
    let embedMessage = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setTitle(title)//Asigna un título
        .setDescription(descrption)//muestra los comandos disponibles
        .setColor('RANDOM')//Cambia el color de la barrera que sale al lado del mensaje
        .addFields(
                {
                    name: "Avatar: ",
                    value: "avatar {@user}: muestra la foto de perfil de un usuario. " +
                        "En caso de no tener argumento usa el del autor del mensaje y acepta ids y @usuario.",
                },
                {
                    name: "Ban and kick: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "Borrar: ",
                    value: "!borrar númeroDeMensajes: elimina el número de mensajes con edad menor de 14 días",
                },
                {
                    name: "BotServerInfo: ",
                    value: "!botServerInfo: es un comando de consola para el desarrollador y ya",
                },
                {
                    name: "Buenos: ",
                    value: "!buenos días/tardes/noches/empty: saluda educadamente al usuario según la hora del día.",
                },
                {
                    name: "Decir: ",
                    value: "!decir channelID Texto a decir: manda el texto al canal especificado.",
                },
                {
                    name: "Github: ",
                    value: "Muestra el link del git hub donde se desarolla el bot.",
                },
                {
                    name: "Help: ",
                    value: "Mustra una pequeña ayuda de todos los comandos",
                },
                {
                    name: "Invitar: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },                
                {
                    name: "Ping: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "Poll: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                
                {
                    name: "RoleMembers: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "SetStatus: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                
                {
                    name: "Social: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                
                {
                    name: "UserInfo: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                }
            );
    message.channel.send(embedMessage);

}