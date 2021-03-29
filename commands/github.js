const Discord = require('discord.js');
/**
 * Muestra el github donde está guardado el bot
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    message.channel.send("Todo mi código se va actualizando dentro de este repositorio:")//Asigna un título
    message.channel.send("https://github.com/PelayoPS/DiscordBot");//Este no está dentro
}