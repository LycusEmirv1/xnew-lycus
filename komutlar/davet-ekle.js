const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "+";
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);

  

  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("Lütfen davet eklenecek kişiyi etiketleyiniz!")
        .setColor("GOLD")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.RichEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("Lütfen eklenecek davet sayısını giriniz.")
        .setColor("GOLD")
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("GOLD")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`${u} Adlı şahsa; ${m} davet eklendi!`);
  message.channel.send(embed);

  db.add(`davet_${message.author.id}_${message.guild.id}`, +m);
};

module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
};

module.exports.help = {
  name: "davet-ekle",
  description: "davet-ekle",
  usage: "davet-ekle"
};
