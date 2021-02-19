const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
 
exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

        if(!args[0]) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Lütfen geçerli bir sayı belirtiniz! \n Örnek Kullanım +sayaç-ayarla sayı #kanal`)
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
  }
 
        let profil = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  const s1 = new Discord.RichEmbed()
  .setDescription('Sayaç kanalı belirtmelisiniz!')
  .setColor("RANDOM")


 
        if(isNaN(args[0])) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Lütfen, geçerli bir sayı belirtiniz! \n Örnek Kullanım +sayaç-ayarla sayı #kanal `)
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
        }
 
        if(args[0] <= message.guild.memberCount) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Lütfen sunucuzda olan kişi  sayıdan daha yüksek bir değer belirtiniz! \n Örnek Kullanım +sayaç-ayarla sayı #kanal`)
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
        }
 
        if(!profil[message.guild.id]){
                profil[message.guild.id] = {
                        sayi: args[0],
      kanal: mentionedChannel.id
                };
        }
       
        profil[message.guild.id].sayi = args[0]
  profil[message.guild.id].kanal = mentionedChannel.id
       
        fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
                console.log(err)
        })
 
        const embed = new Discord.RichEmbed()
                .setDescription(` ${client.emojis.get("731902694230327418")} Sayaç, başarılı bir şekilde \`${args[0]}\` olarak ayarlandı, sayaç kanalı ise ${mentionedChannel} olarak ayarlandı!`)
                .setFooter('Lycus BOT, iyi eğlenceler diler!', client.user.avatarURL)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 0
}
 
exports.help = {
        name: 'sayaç-ayarla',
        description: 'Sayaç ayarlar',
        usage: '+sayaç-ayarla sayı #kanal '
}
   
