const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    /**
     * Comando decir que sirve para enviar un mensaje a un canal específico
     */
    let channelId = args[0];
    message.channel.id = channelId;//!hacer que el comando decir no haga crash si el formato es incorrecto
    let text = args.slice(1).join(" ");
    message.channel.send(text);

}