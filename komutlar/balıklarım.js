const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('+'))return;  

      let user = message.mentions.users.first() || message.author;

        let userinfo = {};
        
      userinfo.avatar = user.displayAvatarURL;
       
      userinfo.id = user.id;
  


  

  
    let hamsi = await db.fetch(`Hamsi_${message.guild.id}_${user.id}`);

  if (hamsi === null) hamsi = "󠂪󠂪0";  
  
  
    let kalkan = await db.fetch(`Kalkan_${message.guild.id}_${user.id}`);

  if (kalkan === null) kalkan = "󠂪󠂪0";  

  if (kalkan === 1) kalkan = " :blowfish: ";
  
      let kefal = await db.fetch(`Kefal_${message.guild.id}_${user.id}`);

  if (kefal === null) kefal = "0"  
  
  
    if(user.bot) return message.reply(' ** Bu komut botlar üzerinde geçerli değildir **')

  
  message.channel.send(`${user.tag} ' Balıkları \n  :fish: ${hamsi}  :tropical_fish:  ${kefal}  :blowfish:  ${kalkan} `)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'balıklarım',
  description: '.',
  usage: ''
};
