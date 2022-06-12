module.exports = {
    app: {
        px: '-',
        token: 'OTAzMTEwOTYxNjY0MjI5Mzc2.GJHC58.FDapvIoiTZzcGcIslauQySMFDACxLBsu30MH0M',
        playing: '❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
