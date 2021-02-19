const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor(2067276)
  .addField(`${emoji}  Sayaç Sistemi Komutları  ${emoji} `, "**+sayaç-ayarla** \n `Sayaç kanalını ayarlarsınız,bot o kanala mesajı gönderir.`\n**+sayaç-sıfırla** \n `Yapmış olduğunuz sayaç sistemini sıfırlarsınız. `")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sayaçbilgi',
  description: 'Sayaç sistemi komutlarını gösterir.',
  usage: ''
};