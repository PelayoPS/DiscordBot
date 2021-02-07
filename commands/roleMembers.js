
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let role = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;//Busca si una persona fue mencionada, en caso contrario usa el autor del mensaje
    let membersWithRole = role.members;//!da undefined
    const channel = message.channel;
    const embed = new Discord.MessageEmbed()
    .setTitle("Number of members of the role " + `<@!${role.id}>`)
    .setDescription(membersWithRole);

    channel.send(embed);
}