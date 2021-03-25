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
                        "\n En caso de no tener argumento usa el del autor del mensaje y acepta ids y @usuario.",
                    inline:true
                },
                {
                    name: "Ban and kick: ",
                    value: "kick/ban @usuario 'Texto que corresponde a la razón de expulsión' hacen lo que dicen sus nombres.",
                    inline:true
                },
                {
                    name: "Borrar: ",
                    value: "borrar númeroDeMensajes: elimina el número de mensajes con edad menor de 14 días.",
                    inline:true
                },
                {
                    name: "BotServerInfo: ",
                    value: "botServerInfo: es un comando de consola para el desarrollador y ya",
                    inline:true
                },
                {
                    name: "Buenos: ",
                    value: "buenos días/tardes/noches/empty: saluda educadamente al usuario según la hora del día.",
                    inline:true
                },
                {
                    name: "Decir: ",
                    value: "decir channelID Texto a decir: manda el texto al canal especificado.",
                    inline:true
                },
                {
                    name: "Github: ",
                    value: "github: envía el link de git hub donde se desarrolla el bot.",
                    inline:true
                },
                {
                    name: "Help: ",
                    value: "help: muestra una pequeña ayuda de todos los comandos.",
                    inline:true
                },
                {
                    name: "Invitar: ",
                    value: "invitar: envía el link de invitación al servidor.",
                    inline:true
                },                
                {
                    name: "Ping: ",
                    value: "ping: evalua la latencia del servidor y de la api.",
                    inline:true
                },
                {
                    name: "Poll: ",
                    value: "poll emojis | text: crea una encuesta que puede ser cerrada por el creador del bot.",
                    inline:true
                },
                
                {
                    name: "RoleMembers: ",
                    value: "rolemembers @role: muestra el número de usuarios con un rol.",
                    inline:true
                },
                {
                    name: "SetStatus: ",
                    value: "setStatus status: comando que sirve para que el propietario del bot ponga un estado al bot.",
                    inline:true
                },
                
                {
                    name: "Social: ",
                    value: "social redSocial: muestra el usuario o link de la red social especificada.",
                    inline:true
                },
                
                {
                    name: "UserInfo: ",
                    value: "userInfo @user: muestra la información relativa al usuario mencionado.",
                    inline:true
                },

                {
                    name: "Ban: ",
                    value: "ban @user razón de expulsión: expulsa a un usuario del servidor dando una razón y además le manda un mensaje privado "+
                            "con una foto cómica.",
                    inline:true
                },
                
            );
    message.channel.send(embedMessage);

}