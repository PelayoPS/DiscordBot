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
  if (message.member.hasPermission("ADMINISTRATOR")) {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;//Busca si una persona fue mencionada, en caso contrario usa el autor del mensaje
    let text = args.slice(1).join(" ");
    user.send(text);
  }

}