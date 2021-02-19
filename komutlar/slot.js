const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = (client, message, args) => {
    var cumleler= [
        '**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🥕 : 🍭\n🍬 : 🍬 : 🍬 **<** \n🍓 : 🍉 : 🍦\n------------------\n| : : : : **Kazandın!** : : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍬 : 🍦 \n🍫 : 🍓 : 🍬 **<** \n🍉 : 🥕 : 🍭\n------------------\n| : : :  **Kaybettin!**  : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🍉 : 🍭\n🍓 : 🍓 : 🍓 **<** \n🍬 : 🥕 : 🍫\n------------------\n| : : : : **Kazandın !** : : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🍓 : 🍬\n🍉 : 🥕 : 🍭 **<**\n🍓 : 🍬 : 🍦\n------------------\n| : : :  **Kaybettin !**  : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🍓 : 🍭\n🍉 : 🍉 : 🍉 **<**\n🥕 : 🍬 : 🍦\n------------------\n| : : : : **Kazandın!** : : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍓 : 🍉\n🍬 : 🍦 : 🍫 **<**\n🍭 : 🍬 : 🥕\n------------------\n| : : :  **Kaybettin!**  : : : |'];
  var cumle = cumleler[Math.floor(Math.random() * cumleler.length)];
  
        if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`1` Dakikada Bir Kullanabilirsin - " + message.author);
    } else {


        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
 
    message.channel.send('**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍬 : 🍦\n🍫 : 🍓 : 🍬 **<**\n🍉 : 🥕 : 🍭\n------------------').then( msg => {
            

 
            setTimeout(() => {
 
                msg.edit('**[  🎰 l SLOTS ]** \n------------------\n🍉 : �� : 🍭\n🍓 : 🍬 : 🍦 **<**\n🍫 : 🍓 : 🍬\n------------------');
 
            }, 1000);
 
            setTimeout(() => {
 
                msg.edit('**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🍓 : 🍬\n🍉 : 🥕 : 🍭 **<**\n🍓 : 🍬 : 🍦\n------------------');
 
            }, 1500);
 
            setTimeout(() => {
 
                msg.edit('**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍓 : 🍉\n🍬 : 🍦 : 🍫 **<**\n🍭 : 🍬 : 🥕\n------------------');
 
            }, 2000);
 
            setTimeout(() => {
 
                msg.edit('**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍬 : 🍉\n🍉 : 🍓 : 🥕 **<**\n🍭 : 🍫 : 🍓\n------------------');
 
            }, 2500);
 
            setTimeout(() => {
 
                msg.edit(cumle);
 
            }, 3000);
      
        
 
 
        });
        

 
    };
   
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'slots',
 description: 'Slot Çevirir',
 usage: '+slots'
};