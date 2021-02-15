exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("No tienes los permisos necesarios");
    }
    if (isNaN(args[0])) {
        return message.channel.send("No has introducido un número válido");
    }
    const limit = args[0] + 1;
    await message.delete()
    await message.channel.bulkDelete(args[0])//manda la promesa y en caso de salir bien la recibe, confirma el borrado o avisa de que no se pudo
        .then(messages => message.channel.send(`${messages.size}/${args[0]} mensajes borrados.`)).then(d => d.delete({ timeout: 10000 }))
        .catch(() => message.channel.send("Algo pasó y no los pude borrar"))
}