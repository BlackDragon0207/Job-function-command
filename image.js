const Discord = require('discord.js');
const { realpathSync } = require('fs');
const img = require('images-scraper')

const google = new img({
    puppeteer : {
        headless : true,
    }
})

module.exports = {
    name: 'image',
    aliases: ['이미지'],
    run: async (client, message, args) => {
        const query = args.join(" ")
        if(!query) return 
        let wait = await message.channel.send(`${client.emojis.cache.get('이모티콘 ID')} 이미지 검색중..`)
    
        const results = await google.scrape(query, 1)
        const embed = new Discord.MessageEmbed()
        .setTitle("검색 결과 입니다")
        .setColor("GREEN")
        .setImage(results[0].url)
        await wait.edit('',embed)
    }
}
