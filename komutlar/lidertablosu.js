const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('+'))return;  

    const embed = new Discord.RichEmbed()
    .setDescription(`__**Liderlere Bakmak İçin;**__\n\n**Para Liderleri:** +lider para \n **En Çok Övülenler** +lider övgü`)
    .setColor("#52f0a8")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'para') {
    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'}).splice(0, 10);
    
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2])

      

        content += `__${i+1}__. ${user}  - **${money[i].data}\n**`
    
      }
      

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name} \n\n Para Liderleri;**\n\n${content}`)
    .setColor("#52f0a8")

    message.channel.send(embed)
      
      
   
   } 
  
  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'övgü') {
    let övgü = db.startsWith(`övgü_${message.guild.id}`, { sort: '.data'}).splice(0, 10);
    
    let content = "";

    for (let i = 0; i < övgü.length; i++) {
        let user = bot.users.get(övgü[i].ID.split('_')[2])

      

        content += `__${i+1}__. ${user}  - **${övgü[i].data}\n**`
    
      }
      

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}** \n\n👍 \`En Çok Övülen Kişiler;\`\n\n${content}`)
    .setColor("#52f0a8")

    message.channel.send(embed)

      
    }  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'lider',
  description: '',
  usage: ''
};
