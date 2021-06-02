const Discord = require('discord.js');

/**
 * inicia la reproducción de un vídeo de yt
 * @param {*} client 
 * @param {*} message 
 * @param {*} args 
 */
exports.run = async (client, message, args) => {
    var queue = [];

    if(!args[0]) {
        message.channel.send("No has puesto ningún link ")
        return;
    }
    if(!message.member.voice.channel) {
        message.channel.send("Tienes que estar en un canal de voz para poder usar el comando play");
        return;
    }
    if(!message.guild.voiceConnection) {
        message.member.voice.channel.join().then(function call(connection) {
            function play(conenction, message){}
        });
    }
}