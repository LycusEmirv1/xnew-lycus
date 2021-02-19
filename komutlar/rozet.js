const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "rozet").toString())
    const ovgux = (client.emojis.find("name", "10ovgu").toString())
  const ovguelli = (client.emojis.find("name", "50ovgu").toString())
  const ovguyüz = (client.emojis.find("name", "100ovgu").toString())


  const embedyardim = new Discord.RichEmbed()
  .setColor(2067276)
  .addField(`\n ${emoji} Rozet Bilgi ${emoji}`,`󠂪󠂪\n ${ovgux} ** Sevilen ** \n 10 Övgü'ye sahip olduğunuz zaman kazanırsınız. 󠂪󠂪\n ${ovguelli} ** Tanınmış ** \n 50 Övgü'ye sahip olduğunuz zaman kazanırsınız. 󠂪󠂪\n ${ovguyüz} ** Popüler ** \n 100 Övgü'ye sahip olduğunuz zaman kazanırsınız.`)
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
  name: 'rozet',
  description: '',
  usage: '+rozet'
};