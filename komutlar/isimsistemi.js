const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let mesaj = args.slice(0).join(' ');
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (mesaj.length <= 3) {
return message.channel.send(client.emojis.get("731902694230327418") + ` İsim Sistemi İçin , Örnek: \`+isim-sistemi -uye- \` ya da \`+isim-sistemi   -uye- | -yas- \``) 
}

db.set(`isimsistemi_${message.guild.id}`, mesaj)
  message.channel.send(`${client.emojis.get("731902694230327418")} Kayıt Olan Kullanıcıların İsimlerini \`${mesaj}\` Bu Şekle Göre Düzenleyeceğim.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'isim-sistemi',
  description: '', 
  usage: ''
};
