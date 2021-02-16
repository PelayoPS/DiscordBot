const Discord = require('discord.js');
const { ownerID } = require('./commandConfig.json');
exports.run = async (client, message, args) => {
    /**
     * Muestra en consola toda la información relativa a los servidores en los que se encuentra el bot
     * !Sólo yo desde consola lo puedo ver!
     */
    if (message.author.id === ownerID) {
        client.guilds.cache.forEach((guild) => { console.log(guild) });
    }
}