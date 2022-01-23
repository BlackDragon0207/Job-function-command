const Discord = require('discord.js');

module.exports = {
    name: "rename",
    aliases: ['리네임'],
    description: "rename",

    async run (client, message, args){
        const member = message.mentions.members.first();

        if(!member) return message.reply("닉네임을 변경 할 유저를 정해주세요!");

        const arguments = args.slice(1).join(" ");

        if(!arguments) return message.reply("변경 할 닉네임을 정해주세요!");
        
        try { 
            member.setNickname(arguments);
        } catch (err) {
            console.log(err);
            message.reply(
                "권한이 없습니다" + member.toString() + " nickname!"
            );
        }
    },
};
