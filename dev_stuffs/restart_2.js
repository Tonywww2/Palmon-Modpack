const secs = 20
const mins = secs * 60
const hour = mins * 60
const time = hour * 6.5

const notifications = [
    { message: `60分钟[${hour}ticks]后重启服务器`, delay: time - hour },
    { message: `30分钟[${mins * 30}ticks]后重启服务器`, delay: time - (mins * 30) },
    { message: `15分钟[${mins * 15}ticks]后重启服务器`, delay: time - (mins * 15) },
    { message: `10分钟[${mins * 10}ticks]后重启服务器`, delay: time - (mins * 10) },
    { message: `5分钟[${mins * 5}ticks]后重启服务器`, delay: time - (mins * 5) },
    { message: `1分钟[${mins}ticks]后重启服务器`, delay: time - mins }
]

const restartTasks = (server) => {
    notifications.forEach(notification => {
        server.scheduleInTicks(notification.delay, () => {
            server.tell(notification.message)
        })
    })

    server.scheduleInTicks(time, () => {
        server.close()
    })

}

ServerEvents.loaded(event => {
    event.server.scheduleInTicks(20, () => {
        restartTasks(event.server)
        server.tell(`重启任务安排成功: ${time}ticks`)
    })

})

