const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`${client.emojis.get("731902694230327418")} Selam Kayıt Tamamlandığı Zaman Alınacak Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: \`+kayıt-alınacak-rol @kayıtsızüye\``)
 
  message.channel.send(`${client.emojis.get("731902694230327418")} Kayıt Olan Kullanıcılardan Alınacak Otomatik Rol **${rol}** Şeklinde Ayarlandı.`)

 
  db.set(`kayitAR_${message.guild.id}`, rol.id)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-alınacak-rol',
  description: '', 
  usage: '+kayıt-alınacak-rol'
};
