const Discord = require('discord.js');

module.exports = {
    name: "resetname",
    aliases: ['닉네임초기화'],
    description: "resetname",

    async run (client, message, args){
        const member = message.mentions.members.first();

        if(!member) return message.reply("닉네임을 초기화 할 유저를 정해주세요!");

        try { 
            member.setNickname(null);
        } catch (err) {
            console.log(err);
            message.reply(
                "권한이 없습니다" + member.toString() + " nickname!"
            );
        }
    },
};
