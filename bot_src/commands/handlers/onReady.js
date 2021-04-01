const Discord = require('discord.js');

const {
    serverID,
    prefix,
    twitchLink
} = require('../commandConfig.json');

/**
 * Controla todos los eventos relacionados con el lanzamiento del bot
 * @param {*} bot 
 */
exports.run = function (bot) {
    console.log("I am ready!");// console.log manda a la terminal el mensaje pasado como parámetro
    /**
     * Pone un estado al bot y le permite al usuario acceder al link de twitch especificado
     */
    bot.user.setActivity("Type " + prefix + "help", {
        type: "STREAMING",
        url: twitchLink
    });
}



