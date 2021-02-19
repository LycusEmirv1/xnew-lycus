const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setColor(2067276)
  .addField(`${emoji} Meslekler  ${emoji} `, "**\nTamirci (Alma Ücreti : 750)** \n `Olarak çalışıp 30 para kazanabilirsiniz.`\n**Demirci (Alma Üceti : 1250)** \n `Olarak çalışıp 50 para kazanabilirsiniz.`\n**Bankacı (Alma Ücreti : 1800)** \n `Olarak çalışıp 70 para kazanabilirsiniz.`.\n**Kuyumcu (Alma Ücreti : 2500)** \n `Olarak çalışıp 90 para kazanabilirsiniz.` \n**Polis (Alma Ücreti : 3500)** \n `Olarak çalışıp 115 para kazanabilirsiniz.`\n**Öğretmen (Alma Ücreti : 5000)** \n `Olarak çalışıp 130 para kazanabilirsiniz.` \n**Doktor (Alma Ücreti : 7000) ** \n `Olarak çalışıp 150 para kazanabilirsiniz.` \n**Avukat (Alma Ücreti : 9000) ** \n `Olarak çalışıp 180 para kazanabilirsiniz.`\n **Hakim (Alma Ücreti : 12500)**\n `Olarak çalışıp 250 para kazanabilirsiniz.` ")
  .addField(`Satın Almak İçin`, "+meslekal <meslekismi>")

  .addField(`NOT `," Eğer bir kaç mesleğe sahipseniz profilinizde en değerli (parası iyi) olan gözükür") 
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
  name: 'meslekler',
  description: '',
  usage: '+meslekler'
};
