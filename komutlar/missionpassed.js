var Jimp = require('jimp');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
      message.channel.send(`:timer: | Fotoğraf hazırlanıyor, lütfen bekleyin.`).then(m => m.delete(1000));


        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.gaussian(3)
            Jimp.read("https://cdn.discordapp.com/attachments/448115127951294466/508244450141667329/missnpasted.png", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 4, 0).write(`./img/wasted/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/wasted/${bot.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'missionpassed',
  description: 'Profil fotoğrafına mission passed efekti ekler.',
  usage: 'Missionpassed'
}; 