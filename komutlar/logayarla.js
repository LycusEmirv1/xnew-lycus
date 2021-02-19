const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let channel = message.mentions.channels.first()
  
  if(args[0] === "sıfırla") {
    if(!args[0]) {
      message.channel.send(`**Ayarlanmamış** , ayarlamadan sıfırlayamazsın.`)
      return
    }
    
    db.delete(`modlogK_${message.guild.id}`)
    message.channel.send(`${client.emojis.get("731902694230327418")} **Log Kanalı Başarıyla Sıfırlandı.**`)
    return
  }
  
    if (!channel) {
        return message.channel.send(`Log kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }
  
    db.set(`modlogK_${message.guild.id}`, channel.name)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`${client.emojis.get("731902694230327418")} **Log kanalı başarıyla ${channel} olarak ayarlandı.**`)
    .setColor("RANDOM")
    message.channel.send(embed)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["logayarla","logkanalayarla","log-kanal","log-kanal-ayarla","logkanal"],
    permLevel: 3
}

exports.help = {
    name: 'log-ayarla',
    description: 'Log kanalını ayarlar',
    usage: 'log-ayarla <#kanal>'
}