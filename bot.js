const Discord = require("discord.js");// Se usa para conseguir la api de discord
const bot = new Discord.Client({ intents: new Discord.Intents(Discord.Intents.ALL) } );// Sirve para acceder al bot de discord
require('dotenv').config();

const {
    token
} = process.env;



/**
 * Avisa de cuando está encendido el bot a través de consola
 */
bot.on("ready", async () => {
    handler("onReady").run(bot);
});


/**
 * Sirve para avisar cuando se una un miembro nuevo
 */
bot.on("guildMemberAdd", member => {
    handler("onMemberAdd").run(bot, member);
});

/**
 * Ejecuta lo que tenga dentro cada vez que se lanza un mensaje
 */
bot.on("message", message => {
    handler("onMessage").run(bot, message);
});

function handler(handlerName) {
    let handler = require(`./bot_src/handlers/${handlerName}.js`);
    return handler;
}

bot.login(token);