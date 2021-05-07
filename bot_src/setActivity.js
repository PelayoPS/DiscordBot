const Discord = require('discord.js');
require("dotenv").config();
const { prefix, twitchLink } = process.env;
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