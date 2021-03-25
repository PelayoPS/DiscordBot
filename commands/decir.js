const Discord = require('discord.js');
/**
 * Dice una información con el formato decir channelId texto
 * @param {*} client no se usa para nada
 * @param {*} message se usa para saber el canal
 * @param {*} args se usa para saber el texto y el channel id
 */
exports.run = async (client, message, args) => {
    /**
     * Comando decir que sirve para enviar un mensaje a un canal específico
     */
    
    let channelId = args[0];
   
    if(message.guild.channels.cache.get(channelId) === undefined){
        return message.channel.send("El canal al que intentas mandar algo no existe.");
        console.log(message.author + " ha intententado mandar un mensaje a un canal que no existe")
    }
    message.channel.id = channelId;
    let text = args.slice(1).join(" ");
    message.channel.send(text);

}