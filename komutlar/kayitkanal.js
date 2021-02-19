const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
 if(!kanal) return message.channel.send(`
${client.emojis.get("731902694230327418")} Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: +kayıt-kanal-ayarla \`#kayıtkanal\``)
 
  message.channel.send(`${client.emojis.get("731902694230327418")} Kayıt Kanalını **${kanal}** Olarak Ayarladım! `)
  db.set(`kayitKanal_${message.guild.id}`, kanal.id) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kanal-ayarla',
  description: 'taslak', 
  usage: '+kayıt-kanal-ayarla'
};
