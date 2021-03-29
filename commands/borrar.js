const Discord = require('discord.js');
/**
 * Este comando borrar un número de mensajes con formato borrar nº
 * @param {*} client no se usa para nada en este comando
 * @param {*} message sirve para sacar el miembro y sus permisos al mismo tiempo que el propio canal
 * @param {*} args se usa para sacar el número de mensajes a eliminar
 */
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("No tienes los permisos necesarios");//revisa que la persona pueda eliminar mensajes
    }
    if(args[0] < 1) {
        return message.channel.send("Hecho, no había nada que borrar");
    }
    if (isNaN(args[0])) {
        return message.channel.send("No has introducido un número válido");//si no es un número válido avisa
    }
    const limit = args[0] + 1;
    await message.delete()
    await message.channel.bulkDelete(args[0])//manda la promesa y en caso de salir bien la recibe, confirma el borrado o avisa de que no se pudo
        .then(messages => message.channel.send(`${messages.size}/${args[0]} mensajes borrados.`)).then(d => d.delete({ timeout: 10000 }))
        .catch(() => message.channel.send("Algo pasó y no los pude borrar"))
}