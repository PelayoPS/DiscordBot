const Discord = require('discord.js');
exports.run = async (client, message, args) => {

    let descrption = "";
    switch (args[0]) {
        case "avatar":
            descrption = "avatar {@user}: muestra la foto de perfil de un usuario. " +
                "En caso de no tener argumento usa el del autor del mensaje y acepta ids y @usuario.";
            break;
        case "botServerInfo":
            descrption = "comando privado para el desarrollador del bot que sólo hace cosas en consola así que si lo usas no verás el resultado. ";
            break;
        case "buenos":
            descrption = "saluda educadamente al usuario según la hora del día y si se pasan parámetros como días/noches/tardes/ responde con lo correspondiente.";
            break;
        case "decir":
            descrption = "decir {idCanal}: manda un mensaje  al canal que se le mande.";
            break;
        case "help":
            descrption = "proporciona ayuda general del los distintos comandos. ";
            break;
        case "poll":
            descrption = "Saluda educadamente al usuario según la hora del día y si se pasan parámetros como días/noches/tardes/ responde con lo correspondiente.";
            break;
        case "social":
            descrption = "se pueden pasar como parámetros las siguientes redes para conseguir el link de cada una de ellas: \n"+
            "*instagram* \n"+
            "*youtube* \n"+
            "*twitch* \n"+
            "*battlenet* \n"+
            "*epic* \n"+
            "*steam* \n"+
            "*uplay* \n"+
            "*spotify* \n"+
            "*riot*";
            break;
        default:
            descrption = "**!avatar @user**: muestra la foto de perfil de un usuario.\n" +
                "**!botServersInfo**: imprime en consola la información relativa a los servidores donde esté el bot.\n" +
                "**!buenos días/noches/tardes/**: hace un saludo cordial al usuario por hora del día.\n" +
                "**!decir idCanal mensaje**: repite el mensaje en el canal especificado.\n" +
                "**!help**: da información relevante de todos los comandos.\n" +
                "**!poll pregunta**: hace una encuesta de sí o no para responder.\n" +
                "**!social red**: muestra mi id en cada red social o el link a la cuenta.";
    }


    let title = "";
    if (args[0] === undefined) {
        title = "Comandos disponibles:";
    } else {
        title = "Comando " + args[0] + ":";
    }

    let embedMessage = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setTitle(title)//Asigna un título
        .setDescription(descrption)//muestra los comandos disponibles
        .setColor('RANDOM');//Cambia el color de la barrera que sale al lado del mensaje
    message.channel.send(embedMessage);
}