const cpuStat = require('cpu-stat') // npm i cpu-stat

client.on('ready', () => {
        cpuStat.usagePercent(function(error, percent) {
            if(error) return message.reply(error)
            const CPU = percent.toFixed(2) // CPU Usage
    
            setInterval(() => {
                const guild = client.guilds.cache.get("길드ID");
                const m = guild.channels.cache.get("채널ID");
                m.setName(`📈 CPU ${CPU}%`)
            }, 5000)
        })
    })
    
        client.on('ready', () => {
            cpuStat.usagePercent(function(error, percent) {
                if(error) return message.reply(error)
                const memoryusage = formatBytes(process.memoryUsage().heapUsed) // Memory Usage
       
                setTimeout(() => { 
                const guild2 = client.guilds.cache.get("길드ID");
                const m2 = guild2.channels.cache.get("채널ID");
                m2.setName(`💾 메모리 ${memoryusage}`)
            }, 5000)
        })
        function formatBytes(a, b) {
            let c = 1024 // 1 GB = 1024 MB
            d = b || 2
            e = ['B', 'KB', 'MB', 'GB', 'TB']
            f = Math.floor(Math.log(a) / Math.log(c))
    
            return parseFloat((a / Math.pow(c, f)).toFixed(d)) + '' + e[f]
        }
    })

    client.on('ready', () => {
        cpuStat.usagePercent(function(error, percent) {
            if(error) return message.reply(error)
            const node = process.version // NodeJS Version
   
            setTimeout(() => { 
            const guild3 = client.guilds.cache.get("길드ID");
            const m3 = guild3.channels.cache.get("채널ID");
            m3.setName(`💻 버전 ${node}`)
        }, 5000)
    })
})
