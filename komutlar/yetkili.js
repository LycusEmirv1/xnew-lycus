const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor("#52f0a8")
 .addField(` ${emoji}  Yetkili Komutları  ${emoji}   `, "**+ban** \n `Belirlediğiniz Kişiyi Sunucudan Banlar.` \n**+kick**  \n `Belirlediğiniz Kişiyi Sunucudan Atar.` \n**+unban** \n `Belirlediğiniz Kişinin Yasağını Açar.`\n**+emojiyazı** \n ` Yazdığınız mesajı emoji haline getirir.`\n**+temizle** \n`Belirtilen sayı kadar mesaj siler.`\n**+kilit** \n` Kanalı belirlediğiniz süre kadar kilitler.`\n**+tempmute** \n `Seçilen kişiyi belirlediğiniz süre kadar susturur.`\n**+unmute** \n `Seçilen kişinin susturulmasını kaldırır.` \n**+çekiliş** \n` Bu komut sayesinde süreli çekiliş yapabilirsiniz.`\n**+oylama** \n `Bu komut sayesinde oylama yapabilirsiniz.`")
  .setThumbnail(client.user.AvatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: ':+yetkili'
};