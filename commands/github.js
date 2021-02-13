const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let inviteChannel = message.channel;//Devuelve el canal en el cual fue enviado el mensaje.
    let embed = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setColor('#0099ff')
        .setTitle("Todo mi código se va actualizando dentro de este repositorio:")//Asigna un título
        .setDescription("https://github.com/PelayoPS/DiscordBot");//Este no está dentro

    inviteChannel.send(embed);
}