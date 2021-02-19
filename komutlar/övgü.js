const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const fs = require("fs");

let rep = require("../src/database/rep.json");

exports.run = async(bot, message, args, color) => {
  if(!message.content.startsWith('+'))return;  
  
  
  let userf = message.author 



      let cooldown = 14400000,
    amount = 1 


      let user = message.mentions.users.first() || bot.users.get(args[0]);

        if(!user) return message.reply('**Birisine övgü puanı vermek için etiketlemelisin!**')

  if(user.bot) return message.reply('**Bot\'a övgü puanı veremezsin!**')
  
  if(user.id === message.author.id) return message.reply('**Kendine övgü puanı veremezsin!**') 
  
  
  let lastrep = await db.fetch(`lastRep_${message.author.id}`)
  if (lastrep !== null && cooldown - (Date.now() - lastrep) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastrep))
        let eh = require('../src/handle/cooldownAns.json');

    
      const embed = new Discord.RichEmbed()
  .setColor("#52f0a8")
  .setTimestamp()
  .setDescription(` __**${userf},Kullanıcısı İçin;**__  \n\n**Başka Birini Tekrar Övebilmek İçin Kalan Süre:** **${timeObj.hours}** __saat__, **${timeObj.minutes}** __dakika__ **${timeObj.seconds}** __saniye__`)
  message.channel.send(embed)
  } else {
    
      let user = message.mentions.users.first() || bot.users.get(args[0]);

  let övgü = await db.fetch(`övgü_${message.guild.id}_${user.id}`)

  
  
  let kappa = message.mentions.users.first()
  


  let embed5 = new Discord.RichEmbed()
  .setColor("#52f0a8")
  .setDescription(`${bot.emojis.get("731902694230327418")} Başarıyla  ${kappa}  adlı kişiye övgü puanı verdin. `);
  

  message.channel.send(embed5)
    
    

  db.add(`övgü_${message.guild.id}_${kappa.id}`, amount)

  if(!rep[user.id]){
    rep[user.id] = {
      rep: 0 
    };
  }
  
  let curRep = rep[user.id].rep;
      
      db.set(`lastRep_${message.author.id}`, Date.now());        
      rep[user.id].rep = curRep + amount;
      fs.writeFile("./src/database/rep.json", JSON.stringify(rep, null, 2), (err) => {
 })


  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öv',
  description: '.',
  usage: ''
};
