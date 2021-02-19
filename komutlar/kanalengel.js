const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!') 
    let kanal = message.mentions.channels.first()
    if (!kanal) return message.channel.send("***Komut kullanımını kapatacağınız kanalı etiketleyiniz.***")
  
  if (db.has(`kanal.engel.${kanal.id}`)) {
    await db.delete(`kanal.engel.${kanal.id}`)
    return message.channel.send(` Başarıyla, ${kanal} adlı kanalda komut kullanımı aktif edildi.`)
  } else {
    await db.set(`kanal.engel.${kanal.id}`, kanal.id)
    return message.channel.send(` Başarıyla, ${kanal} adlı kanalda komut kullanımı engellendi. Tekrar aktif etmek için \`+kanalengel #${kanal.name}\``)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'kanalengel',
  description: 'Seçtiğiniz kanalda komut kullanımını engeller',
  usage: 'kanalengel'
};