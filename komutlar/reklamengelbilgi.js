const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor(2067276)
 .addField(`${emoji}  Reklam Engel Komutları  ${emoji} `, "**+linkengel-aç** \n `Bot gönderilen linkleri yazdığınız kanalda engeller.`\n**+linkengel-kapat** \n `Bot link engelleme sistemini yazdığınız kanalda kapatır.`\n**+dcreklamı-engel-aç** \n `Bot yazdığınız kanalda atılan discord reklamlarını engeller. \n (Ban atmaya izini olan kişileri etkilemez)`\n**+dcreklamı-engel-kapat** \n `Bot yazdığınız kanalda discord reklam engelini kapatır.`\n**+reklamkick aç** \n `Reklam kick sistemini aktif eder. Sunucuda reklam yapanları 3 uyarıdan sonra sunucudan atar. `\n**+reklamkick kapat** \n`Reklam kick sistemini kapatır.`")
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
  name: 'reklamengelbilgi',
  description: 'Reklam engel bilgi komutlarını gösterir.',
  usage: ''
};