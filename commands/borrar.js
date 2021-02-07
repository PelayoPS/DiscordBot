const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const limit = args[0] + 1;
    await message.delete();
    message.channel.bulkDelete(limit);//elimina el mensaje que mandaste 
}