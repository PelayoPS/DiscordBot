const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;//Busca si una persona fue mencionada, en caso contrario usa el autor del mensaje
    let status;
    switch (user.user.presence.status) {
        case "online":
            status = "🟢 Online";
            break;
        case "dnd":
            status = "⛔ No molestar";
            break;
        case "idle":
            status = "🌙 Ausente";
            break;
        case "offline":
            status = "⚪ Desconocido";
            break;
    }

    const embed = new Discord.MessageEmbed()
        .setAuthor(
            `Informacion del usuario ${user.user.username}`,
            user.user.avatarURL({ dynamic: true })//Hace que el autor del embed tenga de foto de perfil la del usuario
        )
        .setColor("RANDOM")
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .addFields(
            {
                name: "Apodo: ",
                value: user.nickname ? user.nickname : "No hay apodo disponible",
                inline: true
            },
            {
                name: "ID: ",
                value: user.user.id//muestra la id del usuario
            },
            {
                name: "Nombre: ",
                value: `<@${user.user.id}>`//@ al usuario
            },
            {
                name: "Link del avatar: ",
                value: `[<<Link>>](${user.user.displayAvatarURL()})`
            },
            {
                name: "Status: ",
                value: status
            },
            {
                name: "Creación de cuenta: ",
                value: user.user.createdAt.toDateString(),
            },
            {
                name: "Cuando nos vimos por primera vez por aquí: ",
                value: user.joinedAt.toDateString(),
            }
        );

    await message.channel.send(embed);
};