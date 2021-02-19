module.exports = member => {
  let guild = member.guild;
  member.send('');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
