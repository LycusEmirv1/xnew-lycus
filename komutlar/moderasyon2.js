const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor(2067276)
.addField(`${emoji}  Moderasyon Komutları  ${emoji} `, "**+güvenlik ** \n `Güvenlik kanalını ayarlarsınız. \nSunucuya katılan kişileri  'Güvenli' ya da 'Şüpheli' göstererek bilgi verir.` \n**+güvenlik kapat** \n `Güvenlik sistemini kapatırsınız. `\n**+büyükharf-engel aç** \n `Büyük harf ile yazma engelini açarsınız.` \n**+büyükharf-engel kapat** \n` Büyük harf ile yazma engelini kapatırsınız.`  ")
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
  name: 'moderasyon2',
  description: 'Moderasyon komutlarını gösterir.',
  usage: ''
};