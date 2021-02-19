const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "+";
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("Rol Koruma Sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: +rol-koruma aç ya da kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.RichEmbed()
        .setColor("GOLD")
        .setTitle("Rol Koruma Sistemi")
        .setDescription("** Rol koruma sistemi __zaten__ aktif**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("GOLD")
        .setTitle("Rol Koruma Sistemi!")
        .setDescription("** Rol Koruma Sistemi Aktif . Silinen rolleri tekrar oluşturacağım ve Sunucu Sahibine bildiriceğim**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription("** Rol Koruma Sistemi Kapatıldı**");

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
  name: "rol-koruma",
  description: "Rol koruma",
  usage: "+rol-koruma"
}; 