const Discord = require('discord.js');
/**
 * Muestra ayuda de cada comando
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args no se usa para nada
 */
exports.run = async (client, message, args) => {
    message.react('✅');
    message.channel.send("Mira el chat privado");
    try {
        let admin = require(`./helpCommands/helpAdmin.js`);//llama al archivo que envía el help para mods
        let general = require(`./helpCommands/helpGeneral.js`);//llama al archivo que envía el help general
        if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("BAN_MEMBERS")) {//revisa los permisos necesario, el admin no se mira porque incluye estos dos
            general.run(message);
        } else {//Manda ambos mensajes para que los mods no tengan que leer juntos los disntintos poderes que tienen
            general.run(message);
            admin.run(message);
        }
        return;
    } catch (e) {
        message.channel.send(e.toString());
    }
}