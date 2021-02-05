const Discord = require("discord.js");// Se usa para conseguir la api de discord
const bot = new Discord.Client();// Sirve para acceder al bote de discord


/**
 * Llama a las constantes que están dentro del json
 */
const {
  prefix,
  token,
  serverID,
  bienvenidasID
} = require('./config.json');

/**
 * Avisa de cuando está encendido el bot a través de consola
 */
bot.on("ready", () => {
  console.log("I am ready!");// console.log manda a la terminal el mensaje pasado como parámetro
  bot.user.setActivity("Twitch", { type: "STREAMING", url: "https://www.twitch.tv/pelayo_p_s" });
  let embed = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
  .setTitle("Bienvenido:")//Asigna un título
  .setDescription("Encantado de tenerte por este server 💕💕")//`<@!${message.author.id}>` sirve para hacer un @ a la persona que pone el mensaje
  .setColor('RANDOM');//Cambia el color de la barrera que sale al lado del mensaje
});

/**
 * Sirve para avisar cuando se una un miembro nuevo
 */
bot.on("guildMemberAdd", member => {
  if (member.guild.id === serverID) {
    let embed = new Discord.MessageEmbed()//Crea un nuevo mensaje mucho más personalizable que los mensajes base
      .setTitle("Bienvenido:")//Asigna un título
      .setDescription("Encantado de tenerte por este server " + `<@!${member.id}>` + " 💕💕")//`<@!${message.author.id}>` sirve para hacer un @ a la persona que pone el mensaje
      //.setImage(member.avatarURL({ format: 'png', dynamic: true, size: 1024 }))//!No sé porque no funciona esto de la imagen pero bueno actualizar es necesario
      .setColor('RANDOM');//Cambia el color de la barrera que sale al lado del mensaje
    bot.guilds.cache.get(serverID).channels.cache.get(bienvenidasID).send(embed);
  }
});

bot.on("message", message => {

  /**
   * Si ningún mensaje empieza con prefijo para de hacer cosas o si es el mensaje de un bot
   */
  if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;


  /**
   * Asegura que el mensaje sea un comando
   */
  if (message.content.indexOf(prefix) !== 0) return;

  /**
   * Slice quita el prefijo(en este caso al menos)
   * Resultado = comando arg1 arg2...
   * Trim retira los espacios al inicio y al final
   * Split elimina los espacios y con el parámetro / + /g elimina también dobles espacios por si se tropieza
   */
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  /**
   * Shift nos devuelve el primer elemento de la array
   */
  const command = args.shift().toLowerCase();

  /**
   * Sirve para llamar a cada comando usando el nombre del archivo y pasando como parámetros los argumentos, el mensaje y el cliente
   */

  try {
    let comandos = require(`./commands/${command}.js`); //Buesca el comando en la carpeta

    comandos.run(bot, message, args); //Ejecuta el comando con los parámetros

    console.log(message.author.tag + " Usó el comando: "
      + message.content, "en: " + message.guild.name //Informa por consola lo que ocurre a modo de log
    );
    return;
  } catch (e) {
    message.channel.send("Pasó algo con el comando, " + `<@!${message.author.id}>` + " se encargará de ver si lo puede arreglar.");
    console.log(e.stack); //Guarda la excepción
  }

});


bot.login(token);