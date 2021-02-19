const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('MANAGE_ROLES')) return message.channel.send("Birinini susturabilmek için **Rolleri Yönet** yetkisine sahip olmalısın.")
    const modlog = message.guild.channels.find(channel => channel.name === 'logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Kişiyi bulamadım.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "muted")) return message.channel.send('Belirlediğiniz kişi muteli değil')
    let muterole = message.guild.roles.find(`name`, "muted");
    if(args[0] == "yardım"){
      message.reply("Doğru Kullanım: +unmute <kişi> <sebebi>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "logs");
  if (!muteChannel) return message.channel.send('`logs` kanalını bulamıyorum, Lütfen `logs` adlı bir kanal oluşturun');

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' UnMute', ``)
            .addField('Kişi', `<@${user.id}>`)
            .addField('Sebebi', `${reason}`)
            .addField('Mod', `${mod}`)
            .setColor('#00FF80')
        modlog.send(muteembed)
  
  
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["susturkaldır"],
  permLevel: 0
};

exports.help = {
  name: 'unmute',
  description: 'İstediğiniz kişinin susturmasını kaldırır',
  usage: 'unmute [kullanıcı]'
};
