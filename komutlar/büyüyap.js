const { get } = require("node-superfetch");
const Discord = require('discord.js')
const DBL = require('dblapi.js')

exports.run = async (client, message, args, color, prefix) => {
  let user = message.mentions.users.first() || message.author;  
  
  
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzNTQ2NTc1MTYzNzc4NjYyNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAzNTgwNDgxfQ.bVrMbvccAIv5v5khxRwfsD0k9sCycl8pzOP7YVBIOF8', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {

  
    message.channel.send(`:timer: | Fotoğraf hazırlanıyor, lütfen bekleyin.`).then(m => m.delete(2000));

  let random = Math.floor(Math.random() * 6);
  const { body } =  get(`https://nekobot.xyz/api/imagegen?type=magik&image=${user.displayAvatarURL}&intensity=${random}`); 
  message.channel.send({file:body.message});

     } else {
        message.channel.send("Bu komutu kullanabilmek için  https://discordbots.org/bot/535465751637786624/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyiniz.")
      }
  }) }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'büyüyap',
  description: 'Avatarınızı abuk subuk bir hale getirir.',
  usage: '+büyü <@kişi>'
};
