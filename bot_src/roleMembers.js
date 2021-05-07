const Discord = require('discord.js');

/**
 * Da el número de usuarios de un rol
 * @param {*} client no se usa para nada
 * @param {*} message sirve para sacar el canal y el rol
 * @param {*} args sirve para buscar el rol por nombre
 */
exports.run = async (client, message, args) => {
    arg = message.guild.roles.cache.get(message.content.slice(1).trim().split(/ +/g)[1]);
    let role = getIdFromMention(args) || arg;//Busca si una persona fue mencionada, en caso contrario usa el autor del mensaje 
    const myRole = message.guild.roles.cache.get(role);//saca el rol a partir de la id
    const membersWithRole = Array.from(message.guild.roles.cache.get(role).members.values());//saca los nombres de los usuarios por ser una estructura del tipo map(object,object)
    const embed = new Discord.MessageEmbed()
    .setTitle("Number of members of the role " + `${myRole.name}`)
    .setDescription(membersWithRole);

    message.channel.send(embed);
    

    /**
     * Saca la id de una mención porque me resulta más cómodo tratar todo con ids
     * @param {*} mention 
     * @returns 
     */
    function getIdFromMention(mention) {
        mention = mention.toString();
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(3, -1);
    
            return mention;
        }
    }
    

    
}