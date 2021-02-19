const Discord = require('discord.js')

exports.run = (client, message) => {

    const lycus = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle(":bell: Sahibimin Discord Hesabı!")
        .addField(" Discord", `<@417248759961878538> - #1881`)

    message.channel.send(lycus)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "yapımcım"
}