var Jimp = require('jimp');

let using = false;

exports.run  = (client, message, params) => {
if(using) return message.channel.send('Bu komudu şu an başkası kullanıyor. Lütfen biraz bekleyin.');
  if(params[0]) if(params[0] === 'sunucu-resmi'){

    if(!message.guild) return message.channel.send('Bu sadece sunucularda kullanılabilir.');
    if(!message.guild.iconURL) return message.channel.send('Bu sunucunun ikonu yok.');
    using = true;
    Jimp.read(message.guild.iconURL, function (err, image){
        if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
        image.invert().write('image.png');
        setTimeout(() => {
          message.channel.sendFile('image.png');
          using = false;
        }, 500);
    });
    return;
  }
  if(message.mentions.users.first()) {
      using = true;
      Jimp.read(message.mentions.users.first().avatarURL, function (err, image){
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
          image.invert().write('image.png');
          setTimeout(() => {
            message.channel.sendFile('image.png');
            using = false;
          }, 500);
      });
  } else{
    using = true;
    Jimp.read(message.author.avatarURL, function (err, image){
        if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
        image.invert().write('image.png');
        message.channel.sendFile('image.png');
        using = false;
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tersrenk',
  description: 'Avatarın renklerini ters çevirir.',
  usage: '+tersrenk [@<kişi>]'
};