const ms = require("ms")
const timeSpan = ms("1 hour")

client.on('guildMemberAdd', member => {
    if(member.guild.id === '길드ID') {
        const createdAt = new Date(member.user.createdAt).getTime();
        const difference = Date.now() - createdAt;
        if (difference < timeSpan) {
            member.ban()

            let embed = new discord.MessageEmbed()
            .setTitle(`⛔ 보안 시스템 작동`)
            .setDescription(`**닉네임 [ Name ] : **${member.user.username}\n**유저 [ User ] : **${member.user}\n**아이디 [ ID ] : **${member.user.id}`)
            .addField("사유 [ Reason ]", `\`\`\`토큰 계정으로 의심 되어 밴 처리 되었습니다\`\`\``)
            .setColor("RED")
            client.channels.cache.get("채널ID").send(embed)
            console.log(`${member.user.username}가 토큰 계정으로 의심 되어 킥(추방)이 되었습니다.`)
        }
    }
})
