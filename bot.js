const Discord = require("discord.js");// Se usa para conseguir la api de discord
const bot = new Discord.Client();// Sirve para acceder al bote de discord


/**
 * Llama a las constantes que están dentro del json
 */
const {
  prefix,
  token,
  ownerID
} = require('./config.json')

/**
 * Avisa de cuando está encendido el bot a través de consola
 */
bot.on("ready", () => {
  console.log("I am ready!");// console.log manda a la terminal el mensaje pasado como parámetro

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
  const embed = new Discord.MessageEmbed(); //Mensaje personalizable
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


  /**
   * Comando borrar que sirve para elminar una cantidad de mensajes
   */
  if (command === "borrar") {
    
  }
});


bot.login(token);