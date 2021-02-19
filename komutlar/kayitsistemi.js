const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('**Çalışması için hepsini uygulayınız! (Alınacak Rol Olmasa da Olur)**')
  .setColor(2067276)
.addField(`${emoji}  Kayıt Sistemi  ${emoji} `, "**+kayıt-kanal-ayarla** \n `Üyelerin kayıt olacağı kanal.`\n**+kayıt-log** \n `Üyeler kayıt olunca bildirim gönderilen kanal.`\n**+isim-sistemi** \n `Kayıt olanların isimlerinin nasıl yazılacağını ayarlarsınız. \n(+isim-sistemi yazıp bilgi alabilirsiniz.)` \n**+kayıt-rol-ayarla** \n `Kayıt olan kullanıcıya otomatik verilecek rol.` \n**+kayıt-alınacak-rol** \n `Kayıt olan kullanıcılardan otomatik olarak alınacak (silinecek) rol.` \n\n**ÜYE KAYIT OLMA** \n\n +kayıtol isim yaş (Eğer yaş ayarlanmadıysa yaş yazması gerekmez) \n\n **KAPATMA VE TEKRARDAN AÇMA** \n\n **+kayıtsistemi-kapat** \n `Kayıt sistemini kapatırsınız.` \n **+kayıtsistemi-aç ** \n `Kayıt sistemini tekrardan açarsınız.` ")
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
  name: 'kayıtsistemi',
  description: 'Kayıt sistemi komutlarını gösterir.',
  usage: ''
};