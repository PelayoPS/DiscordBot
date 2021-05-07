const Discord = require('discord.js');
require("dotenv").config();
const { ownerID } = process.env;
/**
 * Le pone un status al bot
 * @param {*} client se usa para poner el estado
 * @param {*} message se usa para sacar el autor
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    if (message.author.id === ownerID) {//aquí deberás poner la id del rol que tenga los permisos para usar el comando
        client.user.setStatus(args[0]);
    } else {
        return message.channel.send("Lo siento pero no dispones de los poderes para hacer esto");
    }
}