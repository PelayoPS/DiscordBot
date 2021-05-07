const Discord = require('discord.js');
require("dotenv").config();
const { inviteLink } = process.env;
/**
 * Manda la invitación del discord
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    message.channel.send("Si quieres que venga más gente a jugar usa este link:");
    message.channel.send(inviteLink);
}