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
        .setDescription("Lütfen daveti silinecek kişiyi etiketleyiniz!")
        .setColor("BLACK")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Lütfen silinecek davet sayısını giriniz.")
        .setColor("GOLD")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("GOLD")
    .setDescription(`${u} Adlı kişiden; ${m} davet silindi!`)
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);

  db.add(`davet_${message.author.id}_${message.guild.id}`, -m);
};

module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
};

module.exports.help = {
  name: "davet-sil",
  description: "davet-sil",
  usage: "+davet-sil"
};
