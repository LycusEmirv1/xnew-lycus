const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor(2067276)
       .addField(`${emoji}  Moderasyon Komutları  ${emoji} `, "**+giriş-ayarla** \n` Sunucuya gelen ve ayrılan kişilerin hangi kanalda gözükeceğini ayarlarsınız `\n**+giriş-sıfırla** \n` Sunucuya gelen ve ayrılan kişiler artık bu kanalda gözükmez`\n**+log-ayarla** \n `Logların hangi kanalda tutulacağını ayarlarsınız `\n**+log-ayarla sıfırla** \n `Loglar artık ayarladığınız kanalda tutulmaz `\n**+kanalengel** \n `Belirlediğiniz kanalda botun komutlarını **Yönetici** yetkisine sahip olmayan kimse kullanamaz` \n**+otorol kanal-ayarla** \n `Yeni gelen kişilere rolün verildğini yazan kanal olarak ayarlanır`\n**+otorol kanal-sıfırla** \n `Yeni gelen kişilere rölün verildiğini artık o kanalda yazmaz` \n**+otorol rol-ayarla** \n `Sunucuya katılan kişilere verilecek olan rolü ayarlar `\n**+otorol rol-sıfırla** \n `Sunucuya katılan kişilere verilecek olan rolü iptal eder `\n**+sa-as aç** \n `Selamun Aleyküm diyince Aleyküm selam yazmasını açar` \n**+sa-as kapat**  \n `Selamun Aleyküm diyince botun Aleyküm selam  yazmasını kapatır ` ")
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
  name: 'moderasyon',
  description: 'Moderasyon komutlarını gösterir.',
  usage: ''
};