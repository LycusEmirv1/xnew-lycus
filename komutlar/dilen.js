const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('+'))return;  

  let user = message.author;

  let timeout = 600000; 
  let amount = Math.floor(Math.random()*10+10);

  let dilen = await db.fetch(`dilen_${message.guild.id}_${user.id}`);

  if (dilen !== null && timeout - (Date.now() - dilen) > 0) {
    let time = ms(timeout - (Date.now() - dilen));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n**${time.minutes}** __dakika__ **${time.seconds}** __saniye__ sonra tekrar dilenebilirsin. `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
  .setColor("#52f0a8")
  .setDescription(` **${user},** Dilenerek **${amount} para** kazandın.`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`dilen_${message.guild.id}_${user.id}`, Date.now())


  }
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'dilen',
    description: '',
    usage: ''
  };
