const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor(2067276)
 .addField(`${emoji}  Kullanıcı Komutları  ${emoji} `, "**+avatar** \n` Belirtilen kişinin avatarına bakarsınız.`\n**+slots** \n` Slots oyununu oynarsınız.` \n**+kullanıcıbilgi** \n` Belirtilen kişinin kullanıcı bilgilerine bakarsınız.` \n**+servericon** \n `Bulunduğunuz sunucunun iconuna bakarsınız.` \n**+hesapla** \n `Yazdığınız matematik işlemeni bot hesaplar.` \n**+havadurumu** \n `Belirttiğiniz şehrin hava durumuna bakarsınız. `\n**+spotify** \n` Etiketlediğiniz kişinin Spotify'da dinlediği şarkı hakkında bilgi verir.` \n**+lolbilgi** \n `Lol hesabınızın istatistiklerinizi görebilirsiniz.` \n**+korona** \n `Korona vaka sayısı hakkında bilgi alırsınız.`")
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
  name: 'kullanıcı',
  description: 'Ana komutları gösterir.',
  usage: ''
};