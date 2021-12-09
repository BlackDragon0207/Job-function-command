client.on("message", async (message, guild) => {
    if(message.author.Client) return;
    if(message.channel.type === "dm") {

        const dmEmbed = new Discord.MessageEmbed()
        .setTitle('DM LOG')
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`**User:** ${message.author.tag}\n**User ID:** ${message.author.id}\n**At:** ${new Date()}\n\n**content:** \`\`\`${message.content}\`\`\``)
        
        const DMC = client.channels.cache.get('872798553049792522')
        DMC.send(dmEmbed)

    }
})
