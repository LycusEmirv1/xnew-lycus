const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
      let user = message.author;

  let isim31 = await db.fetch(`isimsistemi_${message.guild.id}`);
  let ch = await db.fetch(`kayitKanal_${message.guild.id}`);
  let vr = await db.fetch(`kayitVR_${message.guild.id}`);

  let lh = await db.fetch(`kayitLog_${message.guild.id}`);
  let ar = await db.fetch(`kayitAR_${message.guild.id}`);

  if (!isim31) return 
  if (!ch) return 
  
  if (!vr) return 

  if (!lh) return
  if (!isim31.includes(`-yas-`)) {
  let isim = args[0]
  let yas = args[1];
  if (!isim) return message.channel.send(`Seni Kayıt Etmem İçin Bir İsim Girmelisin : \`+kayıtol  Emir\``)


 
  message.reply(` ${client.emojis.get("731902694230327418")}  Kaydınız Oluşturuldu.`)
  message.member.setNickname(isim31.replace("-uye-", `${isim}`))
      message.member.removeRole(message.guild.roles.get(ar));
  message.member.addRole(message.guild.roles.get(vr));
      
  return client.channels.get(lh).send(`:scroll: <@${message.author.id}> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:`)
  }
  let isim = args[0]
  let yas = args[1];
  if (!isim) return message.channel.send(`Seni Kayıt Etmem İçin Bir İsim Girmelisin : \`+kayıtol Emir 18\``)
  if (!yas) return message.channel.send(`Seni Kayıt Etmem İçin Bir Yaş Girmelisin : \`+kayıtol Emir 18\``)

  
    message.reply(`Kaydınız Oluşturuldu.`)
  message.member.setNickname(isim31.replace("-uye-", `${isim}`).replace("-yas-", `${yas}`))
      message.member.removeRole(message.guild.roles.get(ar));
  message.member.addRole(message.guild.roles.get(vr));

        
  client.channels.get(lh).send(`:scroll: <@${message.author.id}> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:`)
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "kayıtol",
  description: "Kayıt olmanızı sağlar.",
  usage: "+kayıtol"
}
