const Discord = require('discord.js');
const { ownerID } = require('./commandConfig.json');
/**
 * esta función sólo actúa en consola y permite ver la información relativa a los servers donde está el bot
 * @param {*} client se usa para buscar los distintos servers en los que se encuentra el bot
 * @param {*} message se usa para sacar el autor
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    /**
     * Muestra en consola toda la información relativa a los servidores en los que se encuentra el bot
     * !Sólo el dev desde consola lo puede ver!
     */
    if (message.author.id === ownerID) {
        client.guilds.cache.forEach((guild) => { console.log(guild) });
    }
}