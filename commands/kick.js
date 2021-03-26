const Discord = require('discord.js');
/**
 * Función creada con la finalidad de castigar a usuarios que rompan repetidamente las normas.
 * formato ban @user
 * @param {*} client no se usa para nada en este comando
 * @param {*} message sirve para sacar el usuario, canal y autor del mensaje
 * @param {*} args sirve para sacar la razón del baneo 
 */
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("No tienes los permisos necesarios");
    }
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);// guarda el usuario mencionado

    let member = message.guild.member(user); // guarda el miembro con todos sus parámetros rellenados
    let reason = args.slice(1).join(" ");//guarda la razón de expulsión

    if (!user) return message.channel.send("No has mencionado a nadie");
    if (user.id === message.author.id) {
        return message.channel.send("No te puedes banear a tí mismo camarada");
    }
    if (user.id === client.user.id) return message.channel.send("No me puedes banear jajajaaj");

    if (!reason) reason = "No hay razón de espulsión";

    member.send("Algo has liado, piensa en lo que has hecho y nos volvemos a ver");//sends a good meme to the ban person

    member.kick().then((member) => {
        message.channel.send(member.displayName + " ha sido expulsado por " +  '<@'+message.author.id+'>');
    })

}