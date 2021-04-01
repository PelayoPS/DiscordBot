const Discord = require("discord.js");// Se usa para conseguir la api de discord
const bot = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });// Sirve para acceder al bote de discord

/**
 * Llama a las constantes que están dentro del json
 */
const {
    token,
} = require('./bot_src/commands/commandConfig.json');

/**
 * Avisa de cuando está encendido el bot a través de consola
 */

bot.on("ready", function () {
    let onReady = require(`./bot_src/commands/handlers/onReady.js`);
    onReady.run(bot);
});

/**
 * Sirve para avisar cuando se una un miembro nuevo
 */
bot.on("guildMemberAdd", member => {
    let onMemberAdd = require(`./bot_src/commands/handlers/onMemberAdd.js`);
    onMemberAdd.run(member, bot);
});

/**
 * Ejecuta lo que tenga dentro cada vez que se lanza un mensaje
 */
bot.on("message", message => {
    let onMessage = require(`./bot_src/commands/handlers/onMessage.js`);
    onMessage.run(bot, message);
});


bot.login(token);