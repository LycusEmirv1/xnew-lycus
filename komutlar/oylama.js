const Discord = require('discord.js');

 exports.run = (client, message, args) => {
     if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
   
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`).then(m => m.delete(10000));

   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField("Oylama Sistemi", `**Oylama açabilmem için bir yazı yazmalısın** \n Örnek Kullanım +oylama Botumuzu Beğeniyor Musunuz?`)).then(m => m.delete(6000));

     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       
       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {
       
         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: [],
       permLevel: 0

};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: '+oylama <oylamaismi>'
};