const Discord = require('discord.js');
/**
 * Muestra la foto de perfil de un usuario
 * @param {*} client no se usa para nada en este comando
 * @param {*} message sirver para sacar el usuario y el canal
 * @param {*} args tampoco se usa para nada
 */
exports.run = async (client, message, args) => {
    /**
     * Comando avatar que sirve para ver la foto de perfil de un usuario
     */
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;//Busca si una persona fue mencionada, en caso contrario usa el autor del mensaje
    let embed = new Discord.MessageEmbed();//Constructor para el mensaje con formato
    embed.setColor("RANDOM")//Hace que la barra de color cambie cada vez que se pone
        .setDescription("Avatar del usuario: " + `<@!${user.id}>`)//Menciona al usuario del que se muestra el avatar
        .setImage(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }));//asigna un formato a la foto de perfil
    message.channel.send(embed);//Envía el mensaje    
}