const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('+'))return;  
 let owners = ["417248759961878538"];
 if(!owners.includes(message.author.id)) return;
  
  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n**${args[1]}** lira eklendi. \n\Yeni Parası: **${money}**`);
    message.channel.send(moneyEmbed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'paraekle',
  description: '.',
  usage: '+'
};
