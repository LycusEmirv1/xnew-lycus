const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


 
 
  message.reply(`Bu özellik **başarıyla tekrardan açıldı.**  ${client.emojis.get("731902694230327418")} \n Ayarları yapıp kayıt sistemini kullanabilirsiniz`)

 
  db.set(`kayitAR_${message.guild.id}`)  
  db.set(`kayitVR_${message.guild.id}`) 
  db.set(`kayitLog_${message.guild.id}`)  
  db.set(`kayitKanal_${message.guild.id}`)  
  db.set(`isimsistemi_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıtsistemi-aç',
  description: '', 
  usage: ''
};