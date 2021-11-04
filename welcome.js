client.on('guildMemberAdd', member => {
  if(member.guild.id != '길드ID') return;
  let ok = client.emojis.cache.get('이모티콘ID')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${ok} ${member.user.username} 님께서 서버에 접속하셨습니다.`)
  .setColor("#00ff23")
  client.channels.cache.get("입장 메세지를 전송할 채널ID").send(embed)
})

//서버에 들어온 유저의 MD으로 환영 메세지를 보냅니다
client.on('guildMemberAdd', member => {
  if(member.guild.id != '길드ID') return;
  let ok = client.emojis.cache.get('이모티콘ID')
  let embed2 = new Discord.MessageEmbed()
  .setAuthor(`서버에 오신것을 환영합니다!`)
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`${ok} ${member.user.username}님 서버에 오신걸 환영합니다!`)
  .setColor("#c994ff")
  .setFooter('서버 접속 시간', client.user.displayAvatarURL())
  .setTimestamp();
  member.send(embed2)
})


client.on('guildMemberRemove', member => {
  if(member.guild.id != '길드ID') return;
  let no = client.emojis.cache.get('이모티콘ID')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${no} ${member.user.username} 님께서 서버에서 나가셨습니다.`)
  .setColor("#ff0606")
  client.channels.cache.get("퇴장 메세지를 전송할 채널ID").send(embed)
})
