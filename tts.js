const { getAudioUrl } = require('google-tts-api');

module.exports = {
    name: 'tts',
    aliases: ['t'],
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('메세지를 적어주세요!');
        const string = args.join(' ');
        if(string.length > 200) return message.channel.send('메세지가 너무 많습니다!');
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.reply('당신은 음설 채널에 접속하지 않으셨습니다!');
        const audioURL = await getAudioUrl(string, {
            lang: 'ko',
            slow: false,
            host: 'https://translate.google.com',
            timeout: 10000,
        });
        try { 
            voiceChannel.join().then(connection => { 
                const dispatcher = connection.play(audioURL);
                dispatcher.on('finish', () => {
                    voiceChannel.leave();
                });
            });
        }
        catch(e) {
            message.channel.send('TTS');
            console.error(e);
        };
    },
}
