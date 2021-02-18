const Discord = require('discord.js');
/**
 * Da el número de usuarios de un rol
 * @param {*} client no se usa para nada
 * @param {*} message sirve para sacar el canal y el rol
 * @param {*} args sirve para buscar el rol por nombre
 */
exports.run = async (client, message, args) => {
    let role = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;//Busca si una persona fue mencionada, en caso contrario usa el autor del mensaje
    let membersWithRole = role.members.size;//!da undefined
    const channel = message.channel;
    const embed = new Discord.MessageEmbed()
    .setTitle("Number of members of the role " + `<@!${role.id}>`)
    .setDescription(membersWithRole);

    channel.send(embed);
}