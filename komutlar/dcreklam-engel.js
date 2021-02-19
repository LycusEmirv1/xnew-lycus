const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`reklamK_${message.channel.id}`)) {
  return message.reply(`**Bu özellik zaten açık **`)
}
  db.set(`reklamK_${message.channel.id}`, message.channel.id)
  message.reply(`Bu özellik sadece bu kanalda **başarıyla açıldı.** ${client.emojis.get("731902694230327418")}`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'dcreklamı-engel-aç',
  description: '', 
  usage: '+dcreklamı-engel'
};
