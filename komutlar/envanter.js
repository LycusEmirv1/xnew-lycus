const Discord = require('discord.js');
const db = require ('quick.db');

exports.run = (client, message) => {
        let user =  message.mentions.members.first() || message.author

  
           let kilo =  db.fetch(`kilo_${message.guild.id}_${user.id}`) ? db.fetch(`kilo_${message.guild.id}_${user.id}`) : "0";
  
         let ağırlık =  db.fetch(`ağırlık_${message.guild.id}_${user.id}`) ? db.fetch(`ağırlık_${message.guild.id}_${user.id}`) : "10";

  let üzüm = db.fetch(`üzüm_${message.guild.id}_${user.id}`)
  
    if(üzüm === null) üzüm = '0'

    let şarap = db.fetch(`şarap_${message.guild.id}_${user.id}`)
  
    if(şarap === null) şarap = '0'

    let moneyEmbed = new Discord.RichEmbed()
  .setColor("#52f0a8")
  .setDescription(`**${user}' Profili **\n\n ** Ağırlık : ${kilo}/${ağırlık} \n \n 🍇 : ${üzüm} \n 🍷 : ${şarap}  ** ` )  
  .setThumbnail(user.avatarURL)

  message.channel.send(moneyEmbed)
  
  
  }
exports.conf = {
  
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "envanter"
}