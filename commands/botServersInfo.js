const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    /**
     * Muestra en consola toda la información relativa a los servidores en los que se encuentra el bot
     */
    bot.guilds.cache.forEach((guild) => {console.log(guild)});
}