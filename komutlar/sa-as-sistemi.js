const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
 
var p = ayarlar.prefix;
 
exports.run = async (bot, message, args) => {
 
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
    if (!args[0]) return message.reply(`Kullanmak İçin : ${p}sa-as aç/kapat`);
 
    if (args[0] == 'aç') {
        var durum = await db.fetch(`saas_${message.guild.id}`)            
        if (durum == "acik") return message.channel.send("**SA-AS** Sistemi zaten aktif");
        db.set(`saas_${message.guild.id}`, 'acik')
        message.channel.send(` ${bot.emojis.get("731902694230327418")} **Artık birisi Selamun Aleyküm yazınca bot cevap verecek**`)
    }
 
    if (args[0] == 'kapat') {
        var durum = await db.fetch(`saas_${message.guild.id}`)            
        if (durum == "kapali") return message.channel.send("**SA-AS** Sistemi zaten kapalı" );
        db.set(`saas_${message.guild.id}`, 'kapali')
        message.channel.send(`**Artık birisi Selamun Aleyküm yazınca bot cevap vermeyecek**`)
    }
 
}
 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
 
exports.help = {
    name: 'sa-as',
    description: '',
    usage: '+sa-as aç/kapat'
}