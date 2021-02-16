const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    var date = new Date();//Fecha con todos los datos día mes año...
    var hour = date.getHours();//devuelve las horas
    const author = `<@!${message.author.id}>`;
    /**
     * Si recibe cualquiera de estos tres comandos responde de forma educada(tienes que mirar que lo mande según la hora local)
     */
    if (inRange(6, 12)) {// entre seis de la mañana y doce del mediodía
        message.channel.send(author + ' Buenos días');
    }
    if (inRange(12, 20)) {// entre doce del mediodía y ocho de la tarde
        message.channel.send(author + ' Buenas tardes');
    }
    if (inRange(20, 24)) {// entre ocho de la tarde y dos de la mañana
        message.channel.send(author + ' Buenas noches');
    }
    if (inRange(0, 2)) {// entre ocho de la tarde y dos de la mañana
        message.channel.send(author + ' Buenas noches');
    }
    if (inRange(2, 6)) {// entre dos de la mañana y seis de la mañana
        message.channel.send(author + ' ¿Por qué no estás durmiendo?');
    }

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
    }

    /**
     * Devuelve si un número está dentro de un intervalo
     * @param {*} min 
     * @param {*} max 
     */
    function inRange(min, max) {
        return (hour >= min && hour <= max);
    }
}
