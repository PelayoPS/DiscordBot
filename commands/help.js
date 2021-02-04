const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    /**
     * Hace un embed message que luego comenta para lo cual utiliza una promesa, con mensaje normal no dejaba porque reaccionaba al mío
     * se pueden poner imágenes y personalizar mucho más, pero eso lo tengo que mirar para el comando de youtube y el resto de redes
     */
    let descrption = "!avatar @user: muestra la foto de perfil de un usuario.\n" +
                     "!borrar númeroDeMensajes: se utiliza para eliminar mensajes.\n" +
                     "!botServersInfo: imprime en consola la información relativa a los servidores donde esté el bot.\n" +
                     "!buenos días/noches/tardes/'': hace un saludo cordial al usuario por hora del día.\n" +
                     "!decir idCanal mensaje: repite el mensaje en el canal especificado.\n" +
                     "!help: da información relevante de todos los comandos.\n" +
                     "!poll pregunta: hace una encuesta de sí o no para responder.\n" +
                     "!social red: muestra mi id en cada red social o el link a la cuenta.";
    let embedMessage = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setTitle("Comandos disponibles:")//Asigna un título
        .setDescription(descrption)//muestra los comandos disponibles
        .setColor('RANDOM');//Cambia el color de la barrera que sale al lado del mensaje
    message.channel.send(embedMessage);
}