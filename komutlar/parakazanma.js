const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setColor(2067276)
  .addField(`${emoji} Ekonomi  ${emoji} `, "** +günlükpara \n `Günlük para ödülünüzü alırsınız` \n +haftalıkpara ** \n `Haftalık para ödülünüzü alırsınız`  \n ** +çalış ** \n `Eğer mesleğiniz varsa çalışarak para kazanırsınız.`  \n ** +dilen ** \n `Dilenerek para kazanırsınız.` \n ** +balıktut ** \n `Balık tutarak para kazanırsınız.` \n ** +kazıyap ** \n `Kazı yaparak para kazanırsınız` ")

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + + + `${command.help.usage}`);
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
  name: 'parakazanma',
  description: '',
  usage: '+parakazanma'
};
