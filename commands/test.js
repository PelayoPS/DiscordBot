const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    console.log(client.guilds.cache.get("779805177984712716").channels.cache.get(message.channel.id).send("lol"));
    client.guilds.cache.get("779805177984712716").channels.cache.get(message.channel.id).send("lol")
}