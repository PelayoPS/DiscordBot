/**
 * Llama a las constantes que están dentro del json
 */
const {
    instagramUser,
    youtubeLink,
    twitchLink,
    battlenetUser,
    epicUser,
    steamLink,
    uplayUser,
    spotifyLink,
    riotUser
} = require('./commandConfig.json');
const Discord = require('discord.js');
/**
 * Muestra las distintas redes sociales
 * @param {*} client no se usa para nada
 * @param {*} message se usa para sacar el canal
 * @param {*} args se usa para saber la red social
 */
exports.run = async (client, message, args) => {
    /**
     * Responde con el nombre de mis redes sociales según el que le pidas como comando
     */
    if (args[0] === undefined) {
        message.channel.send("No has puesto nada, por favor vuelve a intentarlo");
        message.channel.send("Redes disponibles: instagram,youtube,twitch,battlenet,epic,steam,uplay,spotify,riot");
        return;
    } else {
    switch (args[0]) {
        case "instagram":
            message.channel.send(instagramUser);
            break;
        case "youtube":
            message.channel.send(youtubeLink);
            break;
        case "twitch":
            message.channel.send(twitchLink);
            break;
        case "battlenet":
            message.channel.send(battlenetUser);
            break;
        case "epic":
            message.channel.send(epicUser);
            break;
        case "steam":
            message.channel.send(steamLink);
            break;
        case "uplay":
            message.channel.send(uplayUser);
            break;
        case "spotify":
            message.channel.send(spotifyLink);
            break;    
        case "riot":
            message.channel.send(riotUser);
            break;        
        default:
            message.channel.send("Has puesto una red social incorrecta " + args[0] );
            message.channel.send("Redes disponibles: instagram,youtube,twitch,battlenet,epic,steam,uplay,spotify,riot");
    }}
}