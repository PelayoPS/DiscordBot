const Discord = require('discord.js');
const { inviteLink } = require('./commandConfig.json');
/**
 * Manda la invitación del discord
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    let inviteChannel = message.channel;//Devuelve el canal en el cual fue enviado el mensaje.
    let embed = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setColor('#0099ff')
        .setTitle("Si quieres que venga más gente a jugar usa este link:")//Asigna un título
        .setDescription(inviteLink);

    inviteChannel.send(embed);
}