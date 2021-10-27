const cpuStat = require('cpu-stat') // npm i cpu-stat

client.on('ready', () => {
        cpuStat.usagePercent(function(error, percent) {
            if(error) return message.reply(error)
            const CPU = percent.toFixed(2) // CPU Usage
    
            setInterval(() => {
                const guild = client.guilds.cache.get("436048224617365524");
                const m = guild.channels.cache.get("902893674629828678");
                m.setName(`📈 CPU ${CPU}%`)
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
                const memoryusage = formatBytes(process.memoryUsage().heapUsed) // Memory Usage
       
                setTimeout(() => { 
                const guild2 = client.guilds.cache.get("436048224617365524");
                const m2 = guild2.channels.cache.get("902893699812446238");
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
