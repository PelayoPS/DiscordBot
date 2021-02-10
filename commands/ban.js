const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("No tienes los permisos necesarios");
    }
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);// guarda el usuario mencionado

    let member = message.guild.member(user); // guarda el miembro con todos sus parámetros rellenados
    let reason = args.slice(1).join(" ");//guarda la razón de expulsión

    if (!user) return message.channel.send("No has mencionado a nadie");
    if (user.id === message.author.id){
         return message.channel.send("No te puedes banear a tí mismo camarada");
    }
    if (user.id === client.user.id) return message.channel.send("No me puedes banear jajajaaj");

    if (!reason) reason = "No hay razón de espulsión";

    member.ban(reason).then(() => {
        message.channel.send(`Has conseguido banear a **${user.tag}**`);
    }).catch(err => {
        message.reply(`No he podido baneat a **${user.tag}**`);
    })
}