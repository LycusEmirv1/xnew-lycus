const discord = require ('discord.js')
const db = require ('quick.db')
const ms = require ('parse-ms')
const talkedRecently = new Set();
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {

  let user = message.author;
      let ağırlık = db.fetch(`ağırlık_${message.guild.id}_${user.id}`)
      
          let kilo =  db.fetch(`kilo_${message.guild.id}_${user.id}`)
          
          let üzüm =  db.fetch(`üzüm_${message.guild.id}_${user.id}`)
           
          let ağırlıkmax = 10

        let ağırlıkmax2 = 30 

  
             if (kilo == 32 ) return message.reply("Üzüm toplayabilmek için envanterinde yeteri kadar yer yok.")

             if (kilo == 31 ) return message.reply("Üzüm toplayabilmek için envanterinde yeteri kadar yer yok.")

             if (kilo == 29 ) return message.reply("Üzüm toplayabilmek için envanterinde yeteri kadar yer yok.")

             if (ağırlıkmax == kilo ) return message.reply("Üzüm toplayabilmek için envanterinde yeteri kadar yer yok.")

               if (ağırlıkmax2 == kilo ) return message.reply("Üzüm toplayabilmek için envanterinde yeteri kadar yer yok.")

               if (kilo == 9 ) return message.reply("Üzüm toplayabilmek için envanterinde yeteri kadar yer yok.")

  





if (talkedRecently.has(message.author.id)) {
           return message.reply("Lütfen biraz bekle bu komut sadece 10 dakikada bir kullanılabilir.");
    } else {

       if (!ayarlar.sahip.includes(message.author.id) && message.author.id != "417248759961878538") { talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();

          talkedRecently.delete(message.author.id);
        }, 600000);
}
    }
    message.channel.send(`*Üzüm toplama işlemi başlatılsın mı?* \ \n **Evet veya Hayır yazarak cevap veriniz.**`)

  let uwu = false;
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
    const choice = response.first()
    if (choice == 'Hayır' || choice == 'hayır') return message.reply('**Üzüm Toplama işlemi iptal edildi.**')
    if (choice == 'Evet' && choice !== 'evet') {
    }
    if (choice == 'Evet' || choice == 'evet') uwu = true
  }
  if (uwu) {
    try {
      
  
  
 

      

  message.reply("Üzüm toplamaya başlıyorsunuz!").then(async msg => {


        setTimeout(() => {

      
        msg.edit(` ${user} Üzüm toplanıyor 1/10`)}, 3000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)

              setTimeout(() => {

              
      
        msg.edit(` ${user} Üzüm toplanıyor 2/10`)}, 4000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
    
                  setTimeout(() => {

    
            msg.edit(` ${user} Üzüm toplanıyor 3/10`)}, 5000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
    
    
                      setTimeout(() => {

    
            msg.edit(` ${user} Üzüm toplanıyor 4/10`)}, 6000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
    
    
                          setTimeout(() => {

    
            msg.edit(` ${user} Üzüm toplanıyor 5/10`)}, 7000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
       db.add(`kilo_${message.guild.id}_${user.id}`, 1)

                              setTimeout(() => {

    
            msg.edit(` ${user} Üzüm toplanıyor 6/10`)}, 8000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
    
                              setTimeout(() => {

    
            msg.edit(` ${user} Üzüm toplanıyor 7/10`)}, 9000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
    
                              setTimeout(() => {

    
            msg.edit(` ${user} Üzüm toplanıyor 8/10`)}, 10000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
    
      
                                setTimeout(() => {

          
            msg.edit(` ${user} Üzüm toplanıyor 9/10`)}, 11000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
    
    

      
                                setTimeout(() => {

          
            msg.edit(` ${user} Üzüm toplanıyor 10/10`)}, 12000)
       db.add(`üzüm_${message.guild.id}_${user.id}`, 1)
      db.add(`kilo_${message.guild.id}_${user.id}`, 1)
                                        setTimeout(() => {

     msg.delete()}, 14000)
                                    setTimeout(() => {


     msg.channel.send (`** ${user} \n Başarıyla 10 adet üzüm toplama işlemi gerçekleştirildi.Artık işleyip satış yapabilirsin.**`)}, 13000)
    
                          
                            
      

                              
       }) 
      
      } catch(e) {
        message.channel.send(':warning: Bir hata var!')
      }
  }
}

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'üzümtopla',
  description: 'Marketten satın alım yapar.',
  usage: '+satınal <eşya>'
};
 