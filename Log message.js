const snipe = new Discord.Collection()

client.on('messageUpdate', async(oldmessage, newMessage) => {    
    
    const guild = client.guilds.cache.get("길드ID"); 
    const LogChannel = guild.channels.cache.get('채널ID')
    if(oldmessage.author.bot) return;
    
    const EditLog = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(`메세지 수정 로그 [ Message Update Log ]`, oldmessage.author.displayAvatarURL())
    .setDescription(`**유저 [ User ]**:${oldmessage.author}\n**아이디 [ ID ]**:${oldmessage.author.id}`)
    .addField("채널 [ Channel ]", `${oldmessage.channel}`)
    .addField("수정 전 [ Update Previous ]", `\`\`\`${oldmessage.content}\`\`\``)
    .addField("수정 후 [ Update After this ]", `\`\`\`${newMessage.content}\`\`\``)
    .setFooter('기록 날짜 [ Date ]', client.user.displayAvatarURL())
    .setTimestamp();
    LogChannel.send(EditLog)
})

client.on('messageDelete', message => {
    snipe.set(message.channel.id, message)
    
    const guild = client.guilds.cache.get("길드ID"); 
    const LogChannel = guild.channels.cache.get('채널ID')
    if(message.author.bot) return;
    
    const DeletedLog = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(`메세지 삭제 로그 [ Message Delete Log ]`, message.author.displayAvatarURL())
    .setDescription(`**유저 [ User ]**:${message.author}\n**아이디 [ ID ]**:${message.author.id}`)
    .addField("채널 [ Channel ]", `${message.channel}`)
    .addField("내용 [ Delete ]", `\`\`\`${message.content}\`\`\``)
    .setFooter('기록 날짜 [ Date ]', client.user.displayAvatarURL())
    .setTimestamp();
    LogChannel.send(DeletedLog)
})
