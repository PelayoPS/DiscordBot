
const Discord = require('discord.js');
/**
 * Mira la latencia al bot del propio bot y de la api
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    try {
        const m = await message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...)
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM") // Tired of choosing the embed colors? Just type "RANDOM" on it!
            .addField("⌛ Latencia", `**${m.createdTimestamp - message.createdTimestamp}ms**`)
            .addField("😎 API", `**${Math.floor(client.ws.ping)}ms**`)
        return m.edit(`🏓 Pong!`, embed);
    } catch (error) {
        return message.channel.send(`Algo pasó sry: ${error.message}`);
        // Restart the bot as usual.
    }
}