const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setColor(2067276)
  .addField(`${emoji} Ekonomi  ${emoji} `, "** +profil <@kişi> \n `Kendi profiline veya başkalarının profiline bakarsınız.` \n +market ** \n `Eşyaların fiyatlarına buradan bakabilirsiniz`  \n ** +satınal ** \n `Marketten satın alım yaparsınız.`  \n ** +sat ** \n `Sahip olduğunuz ürünleri satarsınız.` \n ** +ürünbilgi <ürünismi> ** \n `Markette olan ürünlerin bilgilerine bakabilirisniz.` \n ** +balıklarım ** \n `Ne kadar balığınız olduğuna bakarsınız.` \n ** +parayolla <@kişi> ** \n `Seçtiğiniz kişiye belirlediğiniz miktarda para yollarsınız.` \n ** +meslekler ** \n `Buradan alabileceğiniz mesleklere bakabilirsiniz.` \n ** +meslekal <meslek> ** \n `Meslek sahibi olabilirsiniz.` \n ** +öv <@kişi> ** \n `Birine övgü puanı verebilirsiniz.`\n ** +lider ** \n `Para ve övgü liderlerine bakabilirsiniz.` \n ** +üzümtopla ** \n`Üzüm toplarsınız.` \n ** +işle üzüm ** \n`Üzümleri işleyerek şarap elde edersiniz.`\n ** +envanter ** \n `Üzüm ve şarap miktarınıza bakabilirsiniz.` \n ** +rozet** \n `Rozetler hakkında bilgi alırsınız.` ")

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
  name: 'ekonomi',
  description: '',
  usage: '+ekonomi'
};
