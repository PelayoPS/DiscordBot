const Discord = require('discord.js');
const { prefix, twitchLink } = require('./commandConfig.json');
/**
 * pone una actividad al bot
 * @param {*} client no se usa para nada
 * @param {*} message no se usa para nada
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    client.user.setActivity("Type " + prefix + "help", {
        type: "STREAMING",
        url: "twitchLink"
    });
}