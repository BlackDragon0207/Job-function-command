//음성 채널로 만드시는걸 추천드립니다.
//채팅 채널로 생성 할 시 스탯 표시가 이상하게 될 수 있으니 가급적으로는 음성 채널로 만들어주세요!

client.on('ready', () => {

setInterval(() => {
    const guild = client.guilds.cache.get("길드ID");
    const boost = guild.channels.cache.get("채널ID");
    boost.setName(`${guild.premiumSubscriptionCount || '0'}부스트 - ${guild.premiumTier ? `${guild.premiumTier}` : 'None'}레벨`)
    },5000)
});

client.on('ready', () => {

setInterval(() => {
    const guild = client.guilds.cache.get("길드ID");
    const member = guild.channels.cache.get("채널ID");
    member.setName(`${guild.memberCount}명`)
    },5000)
});
