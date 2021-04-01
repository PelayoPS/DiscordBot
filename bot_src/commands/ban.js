const Discord = require('discord.js');
/**
 * Función creada con la finalidad de castigar a usuarios que rompan repetidamente las normas.
 * formato ban @user
 * @param {*} client no se usa para nada en este comando
 * @param {*} message sirve para sacar el usuario, canal y autor del mensaje
 * @param {*} args sirve para sacar la razón del baneo 
 */
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send("No tienes los permisos necesarios");
    }
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);// guarda el usuario mencionado

    let member = message.guild.member(user); // guarda el miembro con todos sus parámetros rellenados
    let reason = args.slice(1).join(" ");//guarda la razón de expulsión

    if (!user) return message.channel.send("No has mencionado a nadie");//Avisa si no encuetra al usuario
    if (user.id === message.author.id) {
        return message.channel.send("No te puedes banear a tí mismo camarada");//Avisa por si algún gracioso lo intenta
    }
    if (user.id === client.user.id) return message.channel.send("No me puedes banear jajajaaj");//Avisa por si algún gracioso lo intenta

    if (!reason) reason = "No hay razón de espulsión";//no se puede banear sin razón

    member.send("Has sido baneado", { files: ["./fotos/ban.jpeg"] });//sends a good meme to the ban person

    member.ban().then((member) => {//una vez completada la expulsión informa de quién lo hizo y a quien
        message.channel.send(member.displayName + " has left the server")
        message.channel.send(member.displayName + " has been successfully banned by " + '<@' + message.author.id + '>');
    })

}