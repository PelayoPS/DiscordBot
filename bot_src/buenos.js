const Discord = require('discord.js');
/**
 * Función que saluda educadamente al usuario según la hora del día
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal y el autor
 * @param {*} args son los argumentos del comando
 */
exports.run = async (client, message, args) => {
    const author = `<@!${message.author.id}>`;
    /**
     * Responde con un mensaje según lo que le hayas dicho, implementación mejorada para que vaya con hora evitando confusiones.
     */
    switch (args[0]) {
        case "días":
            message.channel.send(author + ' Buenos días');
            break;
        case "tardes":
            message.channel.send(author + ' Buenas tardes');
            break;
        case "noches":
            message.channel.send(author + ' Buenas noches');
            break;
        default:
            message.channel.send(author + ' Buenas');
    }
}
