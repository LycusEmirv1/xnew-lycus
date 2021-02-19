const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor(2067276)
  .addField(`${emoji}  Ana Komutlar  ${emoji} `, "**+yardım** \n `Bot Komutlarınının kısayolunu gösterir.`\n**+ping** \n `Bot gecikme süresini yazar.`\n**+say** \n `Ses kanallarında kaç kişi olduğunu yazar.`\n**+emojibilgi** \n `İsmini yazdığınız emoji hakkında bilgi edinirsiniz.` \n**+yapımcım** \n `Bu komut sayesinde yapımcıma ulaşabilirsiniz.` \n**+botdavet** \n `Bu komut ile davet linkime ulaşabilirsiniz.` ")
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
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Ana komutları gösterir.',
  usage: ''
};