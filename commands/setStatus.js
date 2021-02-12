const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if (message.author.id === "575724048097476628") {//aquí deberás poner la id del rol que tenga los permisos para usar el comando
        client.user.setStatus(args[0]);
    } else {
        return message.channel.send("Lo siento pero no dispones de los poderes para hacer esto");
    }
}