const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")){
        return message.channel.send("No tienes los permisos necesarios");
    }
    if (isNaN(args[0])){
        return message.channel.send("No has introducido un número válido"); 
    }
    const limit = args[0] + 1;
    await message.delete();
    message.channel.bulkDelete(limit);//elimina el mensaje que mandaste 
}