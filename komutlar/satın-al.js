const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('+'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)
    const guildMember = message.member;
    var boş = args.join(' ');
  
      let timeout = 5000;
  let marketbekleme =  db.fetch(`marketbekleme_${message.guild.id}_${user.id}`);

  if (marketbekleme !== null && timeout - (Date.now() - marketbekleme) > 0) {
    let time = ms(timeout - (Date.now() - marketbekleme));
    

    let timeEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n**:hourglass: Lütfen biraz yavaşla! **\n\nBeklemen Gereken Süre:  **${time.seconds}** __saniye__ `);
    message.channel.send(timeEmbed)
  } else {
  
  
      if(!boş) return message.reply('Lütfen satın alacağınız ürünü yazın \n Örnek: +satınal kazma')

  
            let ağırlık12 =  db.fetch(`ağırlık_${message.guild.id}_${user.id}`);
  
  
  if(ağırlık12) {  
    var ağırlık = ağırlık12
  } else {
 db.set(`ağırlık_${message.guild.id}_${user.id}`, 10)
    var ağırlık = db.fetch(`ağırlık_${message.guild.id}_${user.id}`)
  }
    
        let kilo =  db.fetch(`kilo_${message.guild.id}_${user.id}`);

           
  
  if(args[0].toLowerCase() == "çanta") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Çanta** alabilmek için **500** paraya ihtiyacın var.`);
            
            if (db.has(`çanta_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten bir 👜 Çanta\'ya sahipsin.**')



        if (author < 500) return message.channel.send(Embed2)
    
        db.add(`ağırlık_${message.guild.id}_${user.id}`, 20)
        db.add(`çanta_${message.guild.id}_${user.id}`, 1)
      db.add(`kilo_${message.guild.id}_${user.id}`, 1)


        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**500** paraya ** 👜 Çanta ** aldın.`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 500)
        message.channel.send(Embed3)
}



          if(args[0].toLowerCase() == "kazma") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Kazma** alabilmek için **200** paraya ihtiyacın var.`);
            
      if (db.has(`kazma_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten bir :pick: Kazma\'ya sahipsin.**')


        if (author < 200) return message.channel.send(Embed2)
       
        db.fetch(`kazma_${message.guild.id}_${user.id}`)
        db.add(`kazma_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**200** liraya ** :pick: Kazma ** aldın.`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 200)
        message.channel.send(Embed3)
                      

    }
  
            if(args[0].toLowerCase() == "olta") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**🎣 Olta** alabilmek için **250** paraya ihtiyacın var.`);
              
          if (db.has(`olta_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten bir :fishing_pole_and_fish: Olta\'ya sahipsin.**')

        if (author < 250) return message.channel.send(Embed2)
       
        db.fetch(`olta_${message.guild.id}_${user.id}`)
        db.add(`olta_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**250** liraya ** 🎣 Olta ** aldın.`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 250)
        message.channel.send(Embed3)
                      

    }
  

              if(args[0].toLowerCase() == "yem") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Yem** alabilmek için **25** paraya ihtiyacın var.`);

        if (author < 25) return message.channel.send(Embed2)
       
        db.fetch(`yem_${message.guild.id}_${user.id}`)
        db.add(`yem_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**25** liraya ** Yem 🍞** aldın.`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 25)
        message.channel.send(Embed3)
        db.set(`marketbekleme_${message.guild.id}_${user.id}`, Date.now());
                
                
                }

                          if(args[0].toLowerCase() == "kefal") {
                            message.reply("**Bu ürün satın alınamaz**")


    }
                              if(args[0].toLowerCase() == "kalkan") {
                            message.reply("**Bu ürün satın alınamaz**")
                                
                                
                                }
    
                if(args[0].toLowerCase() == "hamsi") {
                            message.reply("**Bu ürün satın alınamaz**")
    
  }
  
  }
      
    

}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'satınal',
  description: 'Marketten satın alım yapar.',
  usage: '+satınal <eşya>'
};
 