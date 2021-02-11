const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    //!Cambiar formato a !poll options(emojis) | Text
    /**
     * pseudo code:
     * for(iterating over args){
     *  embed.react(arg[i]) until args[i] === |, then args.slice(i) to get the text
     * } 
     */
    /**
     * Hace un embed message que luego comenta para lo cual utiliza una promesa, con mensaje normal no dejaba porque reaccionaba al mío
     * se pueden poner imágenes y personalizar mucho más, pero eso lo tengo que mirar para el comando de youtube y el resto de redes
     */
    let pollChannel = message.channel;//Devuelve el canal en el cual fue enviado el mensaje.
    let pollDescrption = args.join(" ");//El formato es {formato texto sin especificar}

    let embedPoll = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
        .setTitle("Encuesta:")//Asigna un título
        .setDescription(`<@!${message.author.id}>` + " pregunta: \n" + pollDescrption)//`<@!${message.author.id}>` sirve para hacer un @ a la persona que pone el mensaje
        .setColor('BLUE');//Cambia el color de la barrera que sale al lado del mensaje
    pollChannel.send({ embed: embedPoll }).then(embedMessage => {//Promesa que espera a que se mande el mensaje para reaccionar
        /**
         * Reacciona al mensaje con el parámetro como emoji
         * !Recordar que para hacer esto es necesario hacer la promesa o si no reacciona al mensaje anterior
         */
        embedMessage.react('✅');
        embedMessage.react('❌');
    })
}