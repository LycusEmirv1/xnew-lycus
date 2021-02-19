const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
        if(!sayac[message.guild.id]) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Sayaç, ayarlanmadığından dolayı sıfırlanamaz!`)
        .setFooter('Lycus BOT', client.user.avatarURL)
                .setColor("GOLD")
            message.channel.send({embed})
            return
        }
        delete sayac[message.guild.id]
        fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
            console.log(err)
        })
        const embed = new Discord.RichEmbed()
            .setDescription(` ${client.emojis.get("731902694230327418")} Sayaç, başarılı bir şekilde sıfırlandı!`)
      .setFooter('Lycus BOT', client.user.avatarURL)
            .setColor("GOLD")
        message.channel.send({embed})
        return
    }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sayaç-sıfırla', 
  description: 'Sayaçı, sıfırlar!',
  usage: 'sayaç-sıfırla'
};
   
