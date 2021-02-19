const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const DBL = require('dblapi.js')

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('+'))return;  

  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzNTQ2NTc1MTYzNzc4NjYyNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAzNTgwNDgxfQ.bVrMbvccAIv5v5khxRwfsD0k9sCycl8pzOP7YVBIOF8', bot) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {

  
  let user = message.author;
  let timeout = 604800000;
  let amount = 1150;

  let weekly =  db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n**Zaten Haftalık Para Bonusunu Aldın.**\n\nBonusunu Tekrar Alabilmen İçin Geri Kalan Süre: **${time.days}** __gün__ **${time.hours}** __saat__ **${time.minutes}** __dakika__ **${time.seconds}** __saniye__ `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
  .setColor("#52f0a8")
  .setDescription(` **${user},** **${amount} Lira** haftalık paranı aldın.`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


  }


        
  

     } else {
        message.channel.send("Bu komutu kullanabilmek için  https://discordbots.org/bot/535465751637786624/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyiniz.")
      }
  }) }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'haftalıkpara',
  description: 'haftalık para almanı sağlar.',
  usage: '+haftalıkpara'
};
