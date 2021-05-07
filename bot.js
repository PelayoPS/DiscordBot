const Discord = require("discord.js");// Se usa para conseguir la api de discord
const bot = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });// Sirve para acceder al bote de discord
require('dotenv').config();
/**
 * Llama a las constantes que están dentro del json
 */
const {
    token,
    serverID
} = process.env;

/**
 * Avisa de cuando está encendido el bot a través de consola
 */

bot.on("ready", async () => {
    handler("onReady").run(bot);
    //const commmands = await bot.api.aplications(bot.user.id).guilds(serverID).commands.get();
    console.log(commmands);
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