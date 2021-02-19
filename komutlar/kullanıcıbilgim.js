const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");


const prefix = ayarlar.prefix

exports.run = async (bot, msg, args) => {


      let user = msg.mentions.users.first() || msg.author;
          let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    var kontrol;    const gün = moment.duration(kurulus).format("D")   

    if (kurulus < 20) kontrol = 'Güvenilir Değil'
    if (kurulus > 20) kontrol = 'Güvenilir'
  
      let userinfo = {};
        
      userinfo.avatar= user.displayAvatarURL;
       
      userinfo.id = user.id;
        
      userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
       
      userinfo.status = user.presence.status.toString()
        .replace("dnd", ` Rahatsız Etmeyin`)
        .replace("online", ` Çevrimiçi`)
        .replace("idle", ` Boşta`)
        .replace("offline", ` Çevrimdışı`)  
  
        userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('DD/MM/YYYY HH:mm')
  
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('DD/MM/YYYY HH:mm')
  
        const uembed = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .addField(`ID`, userinfo.id, true)
        .addField(`Discord İsmi`,`${user.username}`,true)
        .setColor('RED')
        .addField(`Katılım Tarihi`, userinfo.dctarihkatilma, true)
        .addField(`Hesap Oluşturma Tarihi`, userinfo.dctarih, true)
        .addField(`Durum`, userinfo.status, true)
        .addField(`Güvenirlik`,kontrol  , true)
        .addField(`Roller:`, `${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' , ') || "``Bu kullanıcıda hiçbir rol bulunmuyor.``"}`, false)
        
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcıbilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};