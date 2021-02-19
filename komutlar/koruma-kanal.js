const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "+";
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("Kanal Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: +kanal-koruma aç ya da kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let kanal = await db.fetch(`kanalk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("GOLD")
        .setTitle("Kanal Koruma Sistemi")
        .setDescription("** Kanal koruma sistemi __zaten__ aktif**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`kanalk_${message.guild.id}`, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("GOLD")
        .setTitle("Kanal Koruma Sistemi!")
        .setDescription("** Kanal Koruma Sistemi Aktif . Silinen kanalları tekrar oluşturacağım ve Sunucu Sahibine bildiriceğim**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`kanalk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Kanal Koruma sistemi!")
      .setDescription("** Kanal Koruma Sistemi Kapatıldı**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "kanal-koruma",
  description: "Kanal koruma",
  usage: "+kanal-koruma"
}; 