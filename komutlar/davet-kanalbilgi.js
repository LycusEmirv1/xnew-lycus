const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);

  let kanal = await db.fetch(`davetkanal_${message.guild.id}`);
  const embed = new Discord.RichEmbed()
    .setColor("GOLD")
    .setDescription(`Davet kanalı: <#${kanal}> `);
  message.channel.send(embed);
};

module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
};

module.exports.help = {
  name: "davet-kanal-bilgi",
  description: "davet-kanal-bilgi",
  usage: "+davet-kanal-bilgi"
};
