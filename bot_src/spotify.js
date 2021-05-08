const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    const activity = user.presence.activities.find(activity => activity.type === 'LISTENING') || null;
    console.log(user.presence.activities)
    if(activity !== null &&
        activity.name === 'Spotify' &&
        activity.assets !== null) {

        let trackImage = `https://i.scdn.co/image/${activity.assets.largeImage.slice(8)}`;
        let trackUrl = `https://open.spotify.com/track/${activity.syncID}`;

        let trackName = activity.details;
        let trackAuthor = activity.state;
        let trackAlbum = activity.assets.largeText;


        const embed = new Discord.MessageEmbed()
        .setAuthor('Información de la canción de spotify')
        .setColor('RANDOM')
        .setThumbnail(trackImage)
        .addField('Nombre de la canción',trackName,true)
        .addField('Album',trackAlbum,true)
        .addField('Autor',trackAuthor,false)
        .addField('Link a la canción',trackUrl,false);
        message.channel.send(embed);

    } else {
        message.channel.send("El usuario que buscas no está escuchando spotify :(")
    }


}