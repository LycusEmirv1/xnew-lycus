
const Discord = require("discord.js");
const client = new Discord.Client();

const ayarlar = require('./ayarlar.json')
const prefix = ayarlar.prefix;

const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
const Jimp = require('jimp');
const chalk = require('chalk');
require('./util/eventLoader')(client);


 const express = require ('express')
const app = express();
const port = 3000
app.get('/',(req, res) => res.send( 'Bot Aktif.'))
 
app.listen(port,() =>
console.log('your App Is Listening At https://localhost:${port}')
); 

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});




client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', async message => {
    if (message.content === '+yardım') {
        try {
 message.react(client.emojis.get("731902694230327418"));
        } catch (error) {
            console.error('Emojiyi verirken hata oluştu.');
          console.log(client.emojis.get()) 
        }
      
    }
});





//////////guvenlik


client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`));
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment(kurulus).format("dddd");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/597433546868654106/627425996454232064/gvnlk-arka.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  if (!kanal) return;
   const embed = new Discord.RichEmbed()
    .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
  const attachment = new Discord.Attachment(canvas.toBuffer(), "güvenlik.png");
  
  kanal.send(embed)
  kanal.send(attachment);
});


//kanalkoruma
client.on("channelDelete", async (channel, member, guild) => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (kanal == "acik") {
    
         let açıklama = channel.topic;
    let kategoriID = channel.parentID;
    let isim = channel.name;
    let sıra = channel.position;
    let nsfw = channel.nsfw;
        channel.guild.createChannel(channel.name, channel.type === "text" ? "text" : "voice" ).then(kanal => {
          
      let z = kanal.guild.channels.get(kanal.id)
      
      z.setParent(z.guild.channels.find(channel => channel.id === kategoriID))
      z.edit({position:sıra,topic:açıklama,nsfw:nsfw})
     })
    
        channel.guild.owner.send(` **__Kanal Koruma Sistemi__** \n **${channel.name}** Adlı Kanal Silindi ve Ben Kanalı Tekrar Oluşturdum  ${client.emojis.get("731902694230327418")}`)

    return;
  } else {
    return;
  }
});
////////////////////////reklamkick

client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam - Kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> Reklam-kick sistemine yakalandın! Reklam yapmaya devam edersen sunucudan atılacaksın (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam - Kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> Reklam-kick sistemine yakalandın! Reklam yapmaya devam edersen sunucudan atılacaksın (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam - Kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için sunucudan atıldı. Bir kez daha yaparsa banlanacaktır.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Lycus BOT | Reklam Ban Sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> sunucudan atıldıktan  sonra reklam yapmaya tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
});

client.on('guildCreate', async (guild) => {
        const guildw = client.guilds.get('767047625333276703');
        const rol = guildw.roles.find(a => a.name =='💜 Destekçi');
        const destekci = guild.owner.id;
        var destekci2= guildw.members.find(kw => kw.id == `${destekci}`);
        if(!destekci2) {
        client.channels.get('767068482336456784').send(`**${guild.name}** Sunucusuna katıldım.\nSunucu sahibi destek sunucusunda olmadığı için bir şey yapmadım.`);
        return;
        }else{
        client.channels.get('767068482336456784').send(`**${guild.name}** Sunucusuna katıldım.\nSunucu sahibi olan <@${destekci}> kişisine ${rol} rolünü verdim.`);
        guildw.members.find(kw => kw.id == `${destekci}`).addRole(rol);
        };
});
client.on('guildDelete', async (guild) => {
        const guildw = client.guilds.get('767047625333276703');;
        const rol = guildw.roles.find(a => a.name == '💜 Destekçi');
        const destekci = guild.owner.id;
        var destekci2= guildw.members.find(kw => kw.id == `${destekci}`);
        if(!destekci2) {
        client.channels.get('767068482336456784').send(`**${guild.name}** Sunucusundan ayrıldım.\nSunucu sahibi destek sunucusunda olmadığı için bir şey yapmadım.`);
        return;
        }else {
        client.channels.get('767068482336456784').send(`**${guild.name}** Sunucusundan ayrıldım.\nSunucu sahibi olan <@${destekci}> kişisinden ${rol} rolünü aldım.`);
        destekci2.removeRole(rol);
   };
 });

////// rol koruma 
client.on("roleDelete", async(role , channel , message , guild) => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
    if (rolkoruma == "acik") {
  role.guild.createRole({name: role.name, color: role.color,  permissions: role.permissions}) 
        role.guild.owner.send(` **__Rol Koruma Sistemi__** \n **${role.name}** Adlı Rol Silindi ve Ben Rolü Tekrar Oluşturdum  ${client.emojis.get("731902694230327418")}`)

  
}
})  

client.on("message", async msg => {
  let capsengel = await db.fetch(`capsengel_${msg.guild.id}`);
  if (capsengel == "acik") {
    if (msg.author.bot) return;
    var x = " ";
    const caps = new Array(
      "A"||"A"||"A", 
      "B"||"B"||"B",
      "C"||"C"||"C",
      "Ç"||"Ç"||"Ç",
      "D"||"D"||"D",
      "E"||"E"||"E",
      "F"||"F"||"F",
      "G"||"G"||"G",
      "Ğ"||"Ğ"||"Ğ",
      "H"||"H"||"H",
      "I"||"I"||"I",
      "İ"||"İ"||"İ",
      "J"||"J"||"J",
      "K"||"K"||"K",
      "L"||"L"||"L",
      "M"||"M"||"M",
      "N"||"N"||"N",
      "O"||"O"||"O",
      "Ö"||"Ö"||"Ö",
      "P"||"P"||"P",
      "R"||"R"||"R",
      "S"||"S"||"S",
      "Ş"||"Ş"||"Ş",
      "T"||"T"||"T",
      "U"||"U"||"U",
      "Ü"||"Ü"||"Ü",
      "V"||"V"||"V",
      "Y"||"Y"||"Y",
      "Z"||"Z"||"Z",
      "W"||"W"||"W",
      "X"||"X"||"X"
    );
    caps.forEach(a => {
      if (msg.content.includes(a)) x += a;
      
    });
    if (x.length >= 4) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
                var e = new Discord.RichEmbed()
          .setColor("GOLD")
          .setAuthor("Büyük Harfle Yazma Engeli Açık!")
          .setDescription(`Bu sunucuda büyük harfle yazmak yasak!.`);
        msg.reply(e);
      }
    }
  
    
  } else if (capsengel == "kapali") {
  }
}); 

const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    client.channels.get(kanal).send(`${client.emojis.get("733467085090324575")} <@${member.user.id}> Sunucudan  **Ayrıldı**. Davet Eden Kişi: [ **BULUNAMADI**]`);
    return;
  } else {
    client.channels.get(kanal).send(`${client.emojis.get("733467085090324575")} <@${member.user.id}> Sunucudan **Ayrıldı**. Davet Eden Kişi: [ <@${sa.id}> ]`);

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.removeRole(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.removeRole(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }
    
    client.channels.get(kanal).send(` ${client.emojis.get("733467085090324575")} <@${member.user.id}> Sunucuya **Katıldı**. Davet Eden Kişi: <@${davetçi.id}> . Toplam davet ettiği kişi sayısı: [**${sayı2}**]`);
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.addRole(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.addRole(veri2);
        return;
      }
    }
  });
});

client.on("guildMemberRemove", async member => {
  //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
  //const canvaskanal = member.guild.channels.get(resimkanal[member.guild.id].resim);
  
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.get(db.fetch(`gçkanal_${member.guild.id}`));
  if (!canvaskanal) return;

  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucudan Ayrıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://i.hizliresim.com/Wrn1XW.jpg"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "ro-BOT-güle-güle.png"
  );

    canvaskanal.send(attachment);
    canvaskanal.send(
      msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
    );
    if (member.user.bot)
      return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
  
});

client.on("guildMemberAdd", async member => {
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.get(db.fetch(`gçkanal_${member.guild.id}`));

  if (!canvaskanal || canvaskanal ===  undefined) return;
  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucuya Katıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let paket = await db.fetch(`pakets_${member.id}`);
  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://i.hizliresim.com/UyVZ4f.jpg"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "ro-BOT-hosgeldin.png"
  );

  canvaskanal.send(attachment);
  canvaskanal.send(
    msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
  );
  if (member.user.bot)
    return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
});


client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`kayitKanal_${member.guild.id}`);
    let mesaj = db.fetch(`kayitGM_${member.guild.id}`);
  if (!kanal) return;

  if (!mesaj) {
    client.channels.get(kanal).send(":loudspeaker: :inbox_tray: Selam! `" + member.user.username +    "`+kayıtol yazarak kayıt olabilirsin!");
    
  }

  if (mesaj) {
    var mesajs = mesaj.replace("-uye-", `{member.user.username}`).replace("-uyetag-", `${member.user.tag}`);
    return client.channels.get(kanal).send(mesajs);
     }
});



client.on("message", msg => {
  const reklama = db.fetch(`linkK_${msg.channel.id}`)
  if (!reklama) return
  var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if (regex.test(msg.content) == true) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      return;
    }
    
   msg.delete()
    const Embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor("Lycus BOT", client.user.avatarURL)
    .setDescription(`${msg.author} Reklam Yasak Bunu Bilmiyor musun! ${client.emojis.get("732280546813804664")}`)
    msg.channel.send(Embed).then(sil => sil.delete(3000))
  }
})

client.on("message", msg => {
  const reklama = db.fetch(`reklamK_${msg.channel.id}`)
  if (!reklama) return
    const kelime = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
  if (kelime.some(reklam => msg.content.includes(reklam))) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      return;
    }
    
   msg.delete()
    const Embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor("Lycus BOT", client.user.avatarURL)
    .setDescription(`${msg.author} Reklam Yasak Bunu Bilmiyor musun! ${client.emojis.get("732280546813804664")}`)
    msg.channel.send(Embed).then(sil => sil.delete(3000))
  }
})



client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: ${member.user.tag}, aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});

client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: ${member.user.tag}, aramıza katıldı **${sayac[member.guild.id].sayi}** kişi olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** kişi kaldı!` );
  } catch (e) { // 
    return console.log(e)
  }
 
});


client.on("guildMemberAdd", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/561837767324336138/567025914861322248/12.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })

client.on("guildMemberRemove", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/561837767324336138/567025915348123648/123.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })




client.on("messageUpdate", async (oldMsg, newMsg) => {
  
  if (oldMsg.author.bot) return;
  
  var user = oldMsg.author;
  
  var kanal = await db.fetch(`modlogK_${oldMsg.guild.id}`)
  if (!kanal) return;
var kanal2 = oldMsg.guild.channels.find('name', kanal) 
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
  .addField("Kullanıcı Tag", oldMsg.author.tag, true)
  .addField("ID", oldMsg.author.id, true)
  .addField("Eski Mesaj", "```" + oldMsg.content + "```")
  .addField("Yeni Mesaj", "```" + newMsg.content + "```")
  .setThumbnail(oldMsg.author.avatarURL)
  kanal2.send(embed);
  
});

client.on("roleCreate", async role => {
  
  var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal)  

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on("roleDelete", async role => {
  
  var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal)    

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on("roleUpdate", async role => {
  
  if (!log[role.guild.id]) return;
  
 var kanal = await db.fetch(`modlogK_${role.guild.id}`)
  if (!kanal) return;
var kanal2 = role.guild.channels.find('name', kanal) 
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal2.send(embed);
  
});

client.on('voiceStateUpdate', async (oldMember, newMember) => {
  
  
  
  var kanal = await db.fetch(`modlogK_${oldMember.guild.id}`)
  if (!kanal) return;
var kanal2 = oldMember.guild.channels.find('name', kanal) 
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`**${newMember.user.tag}** adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal2.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription(`**${newMember.user.tag}** adlı kullanıcı bir sesli kanaldan çıkış yaptı!`)
    kanal2.send(embed);
    
  }
  
  client.on('Create', async (channel,member) => {
    var kanal = await db.fetch(`modlogK_${member.guild.id}`)
    
    const hgK = channel.guild.channels.find('name', kanal) 
    if (!hgK) return;
        if (!channel.guild) return;
            if (channel.type === "text") {
                var embed = new Discord.RichEmbed()
                .setColor(3066993)
                .setAuthor(channel.guild.name, channel.guild.iconURL)
                .setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
                .setFooter(`ID: ${channel.id}`)
    embed.send(embed);
            };
            if (channel.type === "voice") {
                var embed = new Discord.RichEmbed()
                .setColor(3066993)
                .setAuthor(channel.guild.name, channel.guild.iconURL)
                .setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
                .setFooter(`ID: ${channel.id}`)
                hgK.send({embed});
            }

 
        

    });
  
});


client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm') {
  msg.reply('Aleyküm selam , hoş geldin');
          await msg.react('🇦');
    msg.react('🇸');
  }
  }
});

client.on("guildCreate", guild => {
    const eklendim = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle("Lycus Bot'u Sunucuzuna Eklediğiniz İçin Teşekkür Ederim")
        .addField("Ana Bilgilendirme:", `+yardım ile yardım komutlarına ulaşabilir, "+yetkili" ile yetkili komutlarına ulaşabilirsiniz.`)
        .addField("Aynı zamanda başka özelliklerim:", `+moderasyon, +ekonomibilgi +kullanıcı,  +anakomutlar, +avatarefekt, +sunucukoruma ve daha fazlası Lycus Bot'da .`)
        .setFooter(`LycusBOT`)
        .setTimestamp()
    guild.owner.send(eklendim)
    const ekler = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle("Ayrıca Lycus#2036'a ulaşarak  yardım alabilirsin .")
        .addField("Botun kurucusunu öğrenmek için komut:", `  +yapımcım`)
        .addField("Bot destek sunucumuz :", ` https://discord.gg/yjh7kWn`)
        .setTimestamp()
    guild.owner.send(ekler)
});

client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.addRole(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.RichEmbed()
    .setDescription(`Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    kanal.send(embed)
  } else {
    return;
  }
})



client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 5;
  if (message.member.hasPermission("MANAGE_NICKNAMES")) permlvl = 6;
  if (message.member.hasPermission("MANAGE_EMOJIS")) permlvl = 7;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;


client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);
  
