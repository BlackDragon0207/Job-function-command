const { getChannelVideos } = require("yt-channel-info")
const db = require("megadb")
const yt = new db.crearDB("yt")
setInterval(async function() {
    const videos = await getChannelVideos("유뷰트 채널 ID", 0)//https://www.youtube.com/channel/UCm-43e3QtutTBrlD-MuUM1A => UCm-43e3QtutTBrlD-MuUM1A
    const ultimoVideo = videos.items[0]
    const titulo = await yt.obtener("유뷰트 채널 ID")//https://www.youtube.com/channel/UCm-43e3QtutTBrlD-MuUM1A => UCm-43e3QtutTBrlD-MuUM1A
    if(titulo === ultimoVideo.title) return;
    if(titulo !== ultimoVideo.title) {
        yt.establecer("유튜브 채널 ID", ultimoVideo.title)//https://www.youtube.com/channel/UCm-43e3QtutTBrlD-MuUM1A => UCm-43e3QtutTBrlD-MuUM1A
        client.channels.cache.get("메세지를 전송할 채널ID").send(`[ @everyone ]\n**${ultimoVideo.author}**에 새로운 영상이 업로드 되었습니다!\n\n**https://www.youtube.com/watch?v=${ultimoVideo.videoId}**`)
    }
}, 120000)
