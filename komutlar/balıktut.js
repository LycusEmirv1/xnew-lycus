const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')
const ms = require("parse-ms");
const talkedRecently = new Set();


exports.run = (client, message, args) => {
  let user = message.author
    if(!message.content.startsWith('+'))return;  
  
  if (!db.has(`olta_${message.guild.id}_${user.id}`)) return message.reply('Balık tutabilmek  için ** :fishing_pole_and_fish: Olta** satın alman gerek.')
  
  if (!db.has(`yem_${message.guild.id}_${user.id}`)) return message.reply('Balık tutabilmek  için ** 🍞 Yem ** satın alman gerek.')
   
  
  let balık = db.fetch(`yem_${message.guild.id}_${message.author.id}`)
    if(balık < 1)  return message.reply('Balık tutabilmek  için ** 🍞 Yem ** satın alman gerek.')

  let timeout = 600000;
let amount = 1;
  let balıktutma =  db.fetch(`balıktutma_${message.guild.id}_${user.id}`);

  if (balıktutma !== null && timeout - (Date.now() - balıktutma) > 0) {
    let time = ms(timeout - (Date.now() - balıktutma));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n**Balığın gelmesini beklerken çok yoruldun, lütfen biraz bekle. **\n\nBeklemen Gereken Süre:  **${time.minutes}** __dakika__ **${time.seconds}** __saniye__ `);
    message.channel.send(timeEmbed)
  } else {




message.channel.send("`Olta ve yemlerin hazır`").then( msg => {

   var balıklar = ["Çöp","Çöp","Poşet","Hamsi","Kefal","Hamsi","Kalkan","Çöp","Hamsi","Poşet"];
      var balık = balıklar[Math.floor(Math.random() * balıklar.length)];
  db.add(`yem_${message.guild.id}_${user.id}`, -1);
  db.add(`${balık}_${message.guild.id}_${user.id}`, 1);
  db.set(`balıktutma_${message.guild.id}_${user.id}`, Date.now());

            msg.channel.send(` ${user} Denizden **  ${balık} ** çıktı `);
 
  
  
  
      var randommesaj = [
        "1",
        "2",
         "3",
         "4",
          "5",
          "6", 
           "7",
           "8",
          "9",
        "10",
        "11",          
        "12",
        "13",
        "14"
      ]  
      

    var random12 = randommesaj[Math.floor(Math.random() * randommesaj.length)]; 
    
    var vericik1213 = db.fetch(`olta_${message.guild.id}_${user.id}`)

if (random12 == "2") {
db.delete(`olta_${message.guild.id}_${user.id}`)
  //console.log("Veri Silindi")
   message.reply("** Tühh Oltan Hasar Görmüş. Tekrar balık tutabilmek için   `🎣 Olta` satın alabilirsin**") 

 //db.subtract(`yem_${message.guild.id}_${user.id}`, -1);
  

   }   })

 }
};

  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};