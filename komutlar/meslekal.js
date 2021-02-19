const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('+'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)
    const guildMember = message.member;
    var boş = args.join(' ');
  
      let timeout = 10000;
  let marketbekleme =  db.fetch(`marketbekleme_${message.guild.id}_${user.id}`);

  if (marketbekleme !== null && timeout - (Date.now() - marketbekleme) > 0) {
    let time = ms(timeout - (Date.now() - marketbekleme));
    

    let timeEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n**:hourglass: Lütfen biraz yavaşla! **\n\nBeklemen Gereken Süre:  **${time.seconds}** __saniye__ `);
    message.channel.send(timeEmbed)
  } else {
  
  
      if(!boş) return message.reply('Lütfen satın alacağınız ürünü yazın \n Örnek: +meslekal tamirci \n Meslekler hakkında bilgi +meslekler')

  
  



          if(args[0].toLowerCase() == "tamirci") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Tamirci\` mesleğini alabilmek için \`750\` paraya ihtiyacın var.**`);
            
      if (db.has(`tamirci_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Tamirci` mesleğini almışsın.**')


        if (author < 750) return message.channel.send(Embed2)
       
        db.fetch(`tamirci_${message.guild.id}_${user.id}`)
        db.add(`tamirci_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Tamirci\` adlı mesleği \`750\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 750)
        message.channel.send(Embed3)
                      

    


    }
  }
  
  
          if(args[0].toLowerCase() == "demirci") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Demirci\` mesleğini alabilmek için \`1250\` paraya ihtiyacın var.**`);
            
      if (db.has(`demirci_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Demirci` mesleğini almışsın.**')


        if (author < 1250) return message.channel.send(Embed2)
       
        db.fetch(`demirci_${message.guild.id}_${user.id}`)
        db.add(`demirci_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Demirci\` adlı mesleği \`1250\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1250)
        message.channel.send(Embed3)
                      

    


    }
  
  
            if(args[0].toLowerCase() == "bankacı") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Bankacı\` mesleğini alabilmek için \`1800\` paraya ihtiyacın var.**`);
            
      if (db.has(`bankacı_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Bankacı` mesleğini almışsın.**')


        if (author < 1800) return message.channel.send(Embed2)
       
        db.fetch(`bankacı_${message.guild.id}_${user.id}`)
        db.add(`bankacı_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Bankacı\` adlı mesleği \`1800\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1800)
        message.channel.send(Embed3)
                      

    


    }
  
  
              if(args[0].toLowerCase() == "kuyumcu") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Kuyumcu\` mesleğini alabilmek için \`2500\` paraya ihtiyacın var.**`);
            
      if (db.has(`kuyumcu_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Kuyumcu` mesleğini almışsın.**')


        if (author < 2500) return message.channel.send(Embed2)
       
        db.fetch(`kuyumcu_${message.guild.id}_${user.id}`)
        db.add(`kuyumcu_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Kuyumcu\` adlı mesleği \`2500\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 2500)
        message.channel.send(Embed3)
                      

    


    }
  
                if(args[0].toLowerCase() == "polis") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Polis\` mesleğini alabilmek için \`3500\` paraya ihtiyacın var.**`);
            
      if (db.has(`polis_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Polis` mesleğini almışsın.**')


        if (author < 3500) return message.channel.send(Embed2)
       
        db.fetch(`polis_${message.guild.id}_${user.id}`)
        db.add(`polis_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Polis\` adlı mesleği \`3500\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed3)
                      

    


    }

  
  
                  if(args[0].toLowerCase() == "öğretmen") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Öğretmen\` mesleğini alabilmek için \`5000\` paraya ihtiyacın var.**`);
            
      if (db.has(`öğretmen_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Öğretmen` mesleğini almışsın.**')


        if (author < 5000) return message.channel.send(Embed2)
       
        db.fetch(`öğretmen_${message.guild.id}_${user.id}`)
        db.add(`öğretmen_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Öğretmen\` adlı mesleği \`5000\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed3)
                      

    


    }
  
                    if(args[0].toLowerCase() == "doktor") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Doktor\` mesleğini alabilmek için \`7000\` paraya ihtiyacın var.**`);
            
      if (db.has(`doktor_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Doktor` mesleğini almışsın.**')


        if (author < 7000) return message.channel.send(Embed2)
       
        db.fetch(`doktor_${message.guild.id}_${user.id}`)
        db.add(`doktor_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Doktor\` adlı mesleği \`7000\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 7000)
        message.channel.send(Embed3)
                      

    

    }

                      if(args[0].toLowerCase() == "avukat") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Avukat\` mesleğini alabilmek için \`9000\` paraya ihtiyacın var.**`);
            
      if (db.has(`avukat_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Avukat` mesleğini almışsın.**')


        if (author < 9000) return message.channel.send(Embed2)
       
        db.fetch(`avukat_${message.guild.id}_${user.id}`)
        db.add(`avukat_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Avukat\` adlı mesleği \`9000\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 9000)
        message.channel.send(Embed3)
                      
      
    
}
  
  
                        if(args[0].toLowerCase() == "hakim") {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n ** \`Hakim\` mesleğini alabilmek için \`12500\` paraya ihtiyacın var.**`);
            
      if (db.has(`hakim_${message.guild.id}_${user.id}`)) return message.reply ('**Zaten daha önce `Hakim` mesleğini almışsın.**')


        if (author < 12500) return message.channel.send(Embed2)
       
        db.fetch(`hakim_${message.guild.id}_${user.id}`)
        db.add(`hakim_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(` **${user}, Kullanıcısı İçin;**  \n\n**Tebrikler \`Hakim\` adlı mesleği \`12500\` paraya aldın.**`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 12500)
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
  name: 'meslekal',
  description: 'Meslek alımı yaparsınız',
  usage: '+meslekal <meslekismi>'
};
 
