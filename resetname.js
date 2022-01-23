const Discord = require('discord.js');

module.exports = {
    name: "resetname",
    aliases: ['닉네임초기화'],
    description: "resetname",

    async run (client, message, args){
        const member = message.mentions.members.first();

        if(!member) return message.reply("Please specify a member!");

        try { 
            member.setNickname(null);
        } catch (err) {
            console.log(err);
            message.reply(
                "I do not have permission to reset" + member.toString() + " nickname!"
            );
        }
    },
};
