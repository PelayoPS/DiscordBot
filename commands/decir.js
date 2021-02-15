exports.run = async (client, message, args) => {
    /**
     * Comando decir que sirve para enviar un mensaje a un canal específico
     */
    
    let channelId = args[0];
    if(message.guild.channels.cache.get(channelId) === undefined){
        return message.channel.send("El canal al que intentas mandar algo no existe.");
    }
    message.channel.id = channelId;
    let text = args.slice(1).join(" ");
    message.channel.send(text);

}