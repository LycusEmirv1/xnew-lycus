const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      `Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`
    );

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("Bir kanal etiketleyin");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  //var i = db.set(`capsE_${message.guild.id}`, "acik")

  message.channel.send(
    `:white_check_mark: | ** Hoşgeldin - Görüşürüz kanalı ${channel} Olarak Ayarlandı.** `
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "giriş-ayarla",
  description: "Giriş Çıkış Kanalını Ayarlar.",
  usage: "giriş-ayarla <#kanal>"
};