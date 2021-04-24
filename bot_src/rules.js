const Discord = require('discord.js');
const { rulesMSG, rulesChannel } = require('./commandConfig.json');
/**
 * Muestra las normas con un embed bonito para dejarlo claro
 * @param {*} client 
 * @param {*} message 
 * @param {*} args 
 */
exports.run = async (client, message, args) => {
    channel = message.channel
    let embed = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setTitle("Reglas del servidor")//Asigna un título
        .setColor('RANDOM')//Cambia el color de la barrera que sale al lado del mensaje
    message.guild.channels.cache.get(rulesChannel).messages.fetch(rulesMSG)
    .then(message => {
        embed.setDescription(message.content);
        console.log(message.content)
        channel.send(embed);
    }
      )
  .catch(console.error);
}