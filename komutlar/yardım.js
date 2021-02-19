const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
const emoji = (client.emojis.find("name", "rainbowpartyx").toString())




  const yardım = new Discord.RichEmbed()
  .setColor("#52f0a8")
      .setAuthor(`Lycus Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
  .addField(` Örnek Kullanım `, ` \` +moderasyon \` `)
.addField(`  Komutlar;`, `\ ${emoji} | **+yetkili**  \n ${emoji}   | **+ekonomibilgi**  \n ${emoji}   | **+sunucukoruma**  \n ${emoji}  | **+moderasyon**  \n ${emoji}  | **+moderasyon2**   \n ${emoji}    |  **+anakomutlar** \n ${emoji}   | **+kayıtsistemi**  \n ${emoji}   | **+davetsistemi**  \n ${emoji}  | **+sayaçbilgi**  \n ${emoji}   | **+reklamengelbilgi**           \n ${emoji} | **+kullanıcı** \n ${emoji}   | **+avatarefekt**    `)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };