const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  
  
 
      var boş = args.join(' ');
        if(!boş) return message.reply('**Lütfen işleyeceğiniz ürünü  yazınız.** \n\n \`Örnek:\` +işle üzüm')
  
  
      let user = message.author;
    let üzümkontrol = db.fetch(`üzüm_${message.guild.id}_${user.id}`)

  
  
  
  
  
  
           if(args[0].toLowerCase() == "üzüm") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Üzüm** işleyebilmek için en az **10 Üzüm'e** ihtiyacın var.`);
            


        if (üzümkontrol < 10) return message.channel.send(Embed2)
       
        db.fetch(`üzüm_${message.guild.id}_${user.id}`)
        db.add(`şarap_${message.guild.id}_${user.id}`, 1)
        db.subtract(`kilo_${message.guild.id}_${user.id}`, 2)
        db.add(`kilo_${message.guild.id}_${user.id}`, 1)
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**10** adet \`🍇 Üzümü\` işleyerek 1 adet \`🍷 Şarap\`  aldın.`);

        db.subtract(`üzüm_${message.guild.id}_${user.id}`, 10)
        message.channel.send(Embed3)
                      

    }
  

  
    
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "işle"
}