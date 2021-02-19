const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = (client, message, params) => {
  
  let user = message.mentions.users.first() || message.author
  
    message.channel.send(`:timer: | Fotoğraf hazırlanıyor, lütfen bekleyin.`).then(m => m.delete(1000));

      Jimp.read(user.avatarURL, function (err, image){
          image.resize(295, 295)
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildiriniz.');
          image.pixelate(10, 10, 10).write('./x-pixel/pixel.png');
          setTimeout(() => {
            message.channel.send({file: './x-pixel/pixel.png'});
          }, 500);
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pixel',
  description: 'Avatarınızı pixelleştirir.',
  usage: ' +pixel <@kullanıcı>'
};