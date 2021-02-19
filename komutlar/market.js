const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setColor(2067276)
  .addField(` 🛒 Market 🛒 `, "** \n :fishing_pole_and_fish: Olta  **\n Alım Fiyatı : 250 \n Satış Fiyatı : Yok \n\n ** :pick: Kazma ** \n Alım Fiyatı : 200 \n Satış Fiyatı : Yok  \n\n **🐟 Hamsi **\n Alım Fiyatı : Yok \n Satış Fiyatı : 20 \n\n **🐠 Kefal** \n Alım Fiyatı : Yok \n Satış Fiyatı : 35 \n\n **🐡 Kalkan** \n Alım Fiyatı : Yok \n Satış Fiyatı : 50 \n\n **🍷 Şarap ** \n Alım Fiyatı : Yok \n Satış Fiyatı : 15 \n\n **👜 Çanta ** \n Alım Fiyatı : 500 \n Satış Fiyatı : Yok  ")
 .addField(`\nNOT`,"+satınal ürün \n +sat ürün \n +ürünbilgi ürün")
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
  name: 'market',
  description: '',
  usage: '+ekonomi'
};