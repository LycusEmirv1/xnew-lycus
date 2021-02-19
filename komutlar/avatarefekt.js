const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor(2067276)
  .addField(`${emoji}  Avatar Efekt Komutları  ${emoji} `, "**+büyüyap** \n `Seçilen kişinin avatarına 'büyü' efekti uygular.`\n**+missonpassed** \n `Seçilen kişinin avatarına 'mission passed' efekti uygular. `\n**+pixel** \n `Seçilen kişinin avatarına 'pixel' efekti uygular. ` \n**+tbc** \n `Seçilen kişinin avatarına 'to be continued' efekti uygular. ` \n**+tersrenk** \n ` Seçilen kişinin avatarına 'tersrenk' efekti uygular.` \n**+trigger** \n `Seçilen kişinin avatarına 'triggered' efekti uygular.` \n**+wasted** \n `Seçilen kişinin avatarına 'wasted' efekti uygular. `\n**+partnerefekt** \n` Seçilen kişinin avatarına 'partner' efekti uygular. `\n**+wanted** \n `Seçilen kişinin avatarına 'wanted' efekti uygular.` \n**+tr** \n` Seçilen kişinin avatarına 'TR' efekti uygular. `")
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
  name: 'avatarefekt',
  description: 'Ana komutları gösterir.',
  usage: ''
};