
const Discord = require('discord.js');
/**
 * Función creada con la finalidad de castigar a usuarios que rompan repetidamente las normas.
 * formato ban @user
 * @param {*} client no se usa para nada en este comando
 * @param {*} message sirve para sacar el usuario, canal y autor del mensaje
 * @param {*} args sirve para sacar la razón del baneo 
 */
exports.run = async (client, message, args) => {
    message.channel.send("Has sido baneado", {files: ["./fotos/ban.jpeg"]});
}