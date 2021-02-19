const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('+'))return;  

  let user = message.author;
  

  let timeout = 600000 ;
  let amount = Math.floor(Math.random()*15+25);
  let kazı = await db.fetch(`kazı_${message.guild.id}_${user.id}`);
  


  if (!db.has(`kazma_${message.guild.id}_${user.id}`)) return message.reply('Kazı yapabilmek için ** :pick: Kazma** satın alman gerek.')

  if (kazı !== null && timeout - (Date.now() - kazı) > 0) {
    let time = ms(timeout - (Date.now() - kazı));
    
 
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n**Yavaşla,yorgunsun**\n\nTekrar kazı yapabilmen için : **${time.minutes}** __dakika__ **${time.seconds}** __saniye__ `);
    message.channel.send(timeEmbed)
  } else {


    let moneyEmbed = new Discord.RichEmbed()
  .setColor("#52f0a8")
  .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n ** Tebrikler , kazı yaparak ${amount} para kazandın.**`);
 await message.channel.send(moneyEmbed)
      db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`kazı_${message.guild.id}_${user.id}`, Date.now())
    
    var randommesaj = [
        "1",
        "2",
         "3",
         "4",
          "5",
          "6", 
           "7"
          
    ]                          

    var random12 = randommesaj[Math.floor(Math.random() * randommesaj.length)]; 
    
    var vericik1213 = db.fetch(`kazma_${message.guild.id}_${user.id}`)

  
if (random12 == "2") {
db.delete(`kazma_${message.guild.id}_${user.id}`)
  //console.log("Veri Silindi")
   message.reply("** Maalesef çok hızlı vurduğun için :pick:  Kazman kırıldı. Tekrar kazı yapabilmek için satın alabilirsin**") 

    
 
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
  name: 'kazıyap',
  description: 'Kazı yaparsın',
  usage: '+kazıyap'
};
