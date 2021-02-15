const Discord = require('discord.js');
exports.run = async (client, message, args) => {

    let descrption = "";

    let title = "";
    let embedMessage = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setTitle(title)//Asigna un título
        .setDescription(descrption)//muestra los comandos disponibles
        .setColor('RANDOM')//Cambia el color de la barrera que sale al lado del mensaje
        .addFields(
                {
                    name: "Avatar: ",
                    value: "avatar {@user}: muestra la foto de perfil de un usuario. " +
                        "En caso de no tener argumento usa el del autor del mensaje y acepta ids y @usuario.",
                },
                {
                    name: "Ban: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "Borrar: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "BotServerInfo: ",
                    value: "avatar {@user}: muestra la foto de perfil de un usuario. " +
                        "En caso de no tener argumento usa el del autor del mensaje y acepta ids y @usuario.",
                },
                {
                    name: "Buenos: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "Decir: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "EndPoll: ",
                    value: "!endPoll pollID: hace un recuento de",
                },
                {
                    name: "Github: ",
                    value: "Muestra el link del git hub donde se desarolla el bot.",
                },
                {
                    name: "Help: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                
                {
                    name: "Invitar: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "Kick: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                
                {
                    name: "Ping: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "Poll: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                
                {
                    name: "RoleMembers: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                {
                    name: "SetStatus: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                
                {
                    name: "Social: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                },
                
                {
                    name: "UserInfo: ",
                    value: "Kick y ban hacen lo que dice su nombre con el formato kick/ban @usuario Texto que corresponde a la razón de expulsión",
                }

            );
    message.channel.send(embedMessage);

    client.on('messageReactionAdd', (reaction, user) => {
        if(message.id === reaction.message.id){
            message.channel.send("funciona");
        } else {
            message.channel.send("no funciona");
            message.channel.send(message.id);
            message.channel.send(reaction.message.id);
        }
    });
}