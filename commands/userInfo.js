const Discord = require('discord.js');
const serverID = require('./commandConfig.json')
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;//Busca si una persona fue mencionada, en caso contrario usa el autor del mensaje
    const member = client.users.cache.get(user.id);//Obtiene el miembro por la id
    const channel = message.channel;
    const embed = new Discord.MessageEmbed()
    .setAuthor(`User info for ${user.username}`, user.avatarURL())
    .addFields(
        {
            name:'User tag',
            value: user.tag
        },
        {
            name:'Is bot',
            value: user.bot
        },
        {
            name:'Nickname',
            value: user.nickname || "None"
        },
        {
            name:'Joined discord',
            value: new Date(user.createdTimestamp).toLocaleDateString()
        },
        {
            name:'Role count',
            value: member.roles.cache.size//!da undefined
        },
    )

    channel.send(embed);
}
