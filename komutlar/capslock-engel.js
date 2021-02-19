const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  
  if (!args[0]){
    message.channel.send(new Discord.RichEmbed().setColor('GOLD').setTitle('Uyarı :x:').setDescription('Büyük Harf Engel için Doğru Kullanım; \n +büyükharf-engel aç / +büyükharf-engel kapat').setFooter('Lycus BOT ©  ', client.user.avatarURL).setTimestamp())
  

  }
  if (args[0] === 'aç'){
   
    message.channel.send(new Discord.RichEmbed().setColor('GOLD').setTitle('Başarılı :white_check_mark:').setDescription('**Büyük Harf Engeli Başarıyla Açıldı!** \n Artık büyük harfle yazan üyelerin mesajları silinecek.').setFooter('Lycus-BOT © ', client.user.avatarURL).setTimestamp())
 
    db.set(`capsengel_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send(new Discord.RichEmbed().setColor('GOLD').setTitle('Başarılı :white_check_mark:').setDescription('Büyük Harf engeli kapatıldı! Bundan sonra üyeler büyük harfle yazabilecektir.').setFooter('Lycus-BOT ©  ', client.user.avatarURL).setTimestamp())
    db.set(`capsengel_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'büyükharf-engel',
  description: '',
  usage: '+büyükharf-engel aç ya da kapat'
};