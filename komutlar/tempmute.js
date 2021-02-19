const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply(`Bu komutu kullanabilmek için "\`Rolleri Yönet\`" yetkisine sahip olmalısın.`);
    if (args[0] == "yardım") {
        message.reply("Kullanım: +tempmute <kişi> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Kişiyi belirle ");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu kişiyi susturamazsın!");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Sebebini yazmalısın Kullanım: +tempmute <kişi> <1s/m/h/d> ");

    let muterole = message.guild.roles.find(`name`, "muted");
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
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
    if (!mutetime) return message.reply("Lütfen zaman belirtin");


    try {
        await tomute.send(`'${mutetime} Boyunca susturuldun' (M:Dakika,S:Saniye,H:Saat,D:Gün)`)
    } catch (e) {
        message.channel.send(` ${mutetime}`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(` ${message.author} Tarafından mutelendi`)
        .setColor("RANDOM")
        .addField("Mutelenen Kişi :", tomute)
        .addField("Mutelendiği kanal", message.channel)
        .addField("Mute Süresi", mutetime)
        .addField("Sebebi", reason);

    let incidentschannel = message.guild.channels.find(`name`, "logs");
    if (!incidentschannel) return message.reply("Logs kanalını bulamıyorum! Lütfen `logs` adlı bir metin kanalı oluşturun");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> ${bot.emojis.get("731902694230327418")} Susturuldu ${mutetime} (M:Dakika,S:Saniye,H:Saat,D:Gün) `);
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> Susturulması bitti`);
    }, ms(mutetime));
    
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tempmute',
  description: 'Belirlenen Kişiyi susturur.',
  usage: '+tempmute (Kişi) (süre,örnek 5m,5h vs) (sebep)'
};
