const Discord = require('discord.js');

/**
 * sale del canal de voz
 * @param {*} client 
 * @param {*} message 
 * @param {*} args 
 */
exports.run = async (client, message, args) => {
    try {
        message.member.voice.channel.leave();
        message.react("😪");
    } catch(e){
        message.channel.send("Ha ocurrido un error al intentar salir del canal de voz")
    }
}