const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
const emoji = (client.emojis.find("name", "verified").toString())

  const embedyardim = new Discord.RichEmbed()
  .setTitle("Lycus BOT")
  .setDescription('')
  .setColor(2067276)
.addField(`${emoji}  Davet Sistemi Komutları  ${emoji} `, "**+davet-kanal ** \n `Davetlerin logunu tutacak kanalı ayarlarsınız.` \n**+davet-kanal-bilgi**  \n `Davet kanalının hangi kanal olduğunu gösterir. `\n**+davet-kanal-sıfırla**  \n `Davet log kanalını sıfırlarsınız. `\n**+davet-ekle**  \n `Seçtiğiniz kişiye davet sayısı eklersiniz. `\n**+davet-sil**  \n `Seçtiğiniz kişinin davet sayısını istediğiniz miktarda silersiniz.` \n**+davet-sıfırla**  \n `Seçtiğiniz kişinin davetlerini sıfırlarsınız. `\n**+davetler** \n ` Kaç kişiyi davet ettiğinizi gösterir \n (Eğer birini etiketlerseniz o kişiyi gösterir) ` \n") 
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
  name: 'davetsistemi',
  description: 'Davet sistemi komutlar.',
  usage: '+davetsistemi'
};