const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    message.id = args[0];
    const reactions = message.reactions.cache;
    message.channel.send(reactions.get(808360887772905516) + "A favor");
    message.channel.send(reactions.get(808360887772905516) + "En contra");
}