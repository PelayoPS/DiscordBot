const Discord = require('discord.js');

const {
    serverID,
    bienvenidasID,
    botRole,
    generalRole
} = require('../commandConfig.json');

/**
 * Controla todos los eventos relacionados con la entrada de una persona al servidor
 * @param {*} member 
 * @param {*} bot 
 */
exports.run = function onMemberAdd(member, bot) {
    if (member.guild.id === serverID) {
        let embed = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
            .setTitle("Bienvenido:")//Asigna un título
            .setDescription("Encantado de tenerte por este server " + `<@!${member.id}>` + " 💕💕")//`<@!${message.author.id}>` sirve para hacer un @ a la persona que pone el mensaje
            .setThumbnail()
            .setColor('RANDOM'); //Cambia el color de la barrera que sale al lado del mensaje
        const server = bot.guilds.cache.get(serverID);
        const channel = server.channels.cache.get(bienvenidasID);
        channel.send(embed);
        console.log(embed);
        if(member.bot){
            bot.users.cache.get(member.id).roles.add(botRole);
        } else {
            bot.users.cache.get(member.id).roles.add(generalRole);
        }
    }
}