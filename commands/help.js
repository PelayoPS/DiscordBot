const Discord = require('discord.js');
/**
 * Muestra ayuda de cada comando
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    try {
        let admin = require(`./helpCommands/helpAdmin.js`);
        let general = require(`./helpCommands/helpGeneral.js`);
        if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("BAN_MEMBERS")) {
            general.run(message);
        } else {//!Manda ambos mensajes para que los mods no tengan que leer juntos los disntintos poderes que tienen, pendiente de mejora tal vez mediante web
            general.run(message);
            admin.run(message);
        }
        return;
    } catch (e) {
        message.channel.send(e.toString());
    }


}