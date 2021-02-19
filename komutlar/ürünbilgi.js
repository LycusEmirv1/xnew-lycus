const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  
  let user = message.author
  
  
  
    if(args[0].toLowerCase() == "olta") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` \`🎣 Olta\`\n**Balık tutabilmek için bu ürüne sahip olmanız gerekmektedir**`)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

        message.channel.send(Embed2)
  }
  
          if(args[0].toLowerCase() == "yem") {
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` \`🍞 Yem\`\n**Balık tutabilmek için bu ürüne sahip olmanız gerekmektedir**`)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

        message.channel.send(Embed3)
   }
  
            if(args[0].toLowerCase() == "hamsi") {
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` \`🐟 Hamsi\`\n**Balık tutularak elde edilir.**`)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

        message.channel.send(Embed3)
  }
              if(args[0].toLowerCase() == "kefal") {
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` \`🐠 Kefal\`\n**Balık tutularak elde edilir.**`)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

        message.channel.send(Embed3)
 }

                if(args[0].toLowerCase() == "kalkan") {
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` \`🐡 Kalkan\`\n**Balık tutularak elde edilir.**`)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

        message.channel.send(Embed3)
}

                  if(args[0].toLowerCase() == "şarap") {
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` \`🍷 Şarap \`\n**10 adet üzümü işledikten sonra elde edilir.**`)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

        message.channel.send(Embed3)

} 
  
  
                  if(args[0].toLowerCase() == "kazma") {
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` \`⛏️ Kazma \`\n**Kazı yapabilmek bu ürüne sahip olmanız gerekir.**`)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

        message.channel.send(Embed3)

                    
} 
  
                    if(args[0].toLowerCase() == "çanta") {
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` \`👜 Çanta \`\n**Envanterinize +20 kilo kapasite ekler.**`)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

        message.channel.send(Embed3)

} 
 } 
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ürünbilgi',
  description: '',
  usage: '+ürünbilgi ürün'
};