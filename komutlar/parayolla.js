const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('+'))return;  

  let user = message.mentions.users.first() 

  let miktar = args[1]
  
  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)
    if(miktar < 1)  return message.reply('En az `1` **para** gönderebilirsin')

  let embed1 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${message.author} Lütfen para göndereceğiniz kişiyi etiketleyiniz. `);

  

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${message.author} Lütfen göndereceğin miktarı belirt`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
    if(user.id === message.author.id) return message.reply(' Kendine para göndermezsin. ')

  
    if(user.bot) return message.reply(' Bot\'a **para** göndermezsin. ')
 

  
  let embed3 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${message.author} Bunu yapamazsın'`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
    
  }
      if(isNaN(miktar))  return message.reply(' Bu bir sayı değil , lütfen doğru bir miktar yazınız.')

  let embed4 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${message.author} Bu kadar **paran** yok`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }
let kappa = message.mentions.users.first()


  let embed5 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${bot.emojis.get("731902694230327418")} Para Gönderme İşlemi Başarılı \n \n ${kappa}  adlı kişiye \`${args[1]}\` **para** gönderdin.`);
  


  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}

  
  
  
  
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'parayolla',
  description: '', 
  usage: '+parayolla @kişi'
};
