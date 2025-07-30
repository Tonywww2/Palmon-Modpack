const secs = 1000
const mins = secs * 60
const hour = mins * 60
const time = hour * 7.5

const executor = Java.loadClass('java.util.concurrent.Executors').newScheduledThreadPool(1)
const TimeUnit = Java.loadClass('java.util.concurrent.TimeUnit')
const FutureTask = Java.loadClass('java.util.concurrent.FutureTask')

// 创建重启任务
const restartTask = new FutureTask(() => {
    Utils.server.runCommand("stop")
    return null
})

// 创建通知任务函数
function createNotificationTask(message) {
    return new FutureTask(() => {
        Utils.server.tell(`say ${message}`)
        return null
    })
}

// 定义通知时间点和消息
const notifications = [
    { message: `60分钟[${hour}ms]后重启服务器`, delay: time - hour },
    { message: `30分钟[${mins * 30}ms]后重启服务器`, delay: time - (mins * 30) },
    { message: `15分钟[${mins * 15}ms]后重启服务器`, delay: time - (mins * 15) },
    { message: `10分钟[${mins * 10}ms]后重启服务器`, delay: time - (mins * 10) },
    { message: `5分钟[${mins * 5}ms]后重启服务器`, delay: time - (mins * 5) },
    { message: `1分钟[${mins}ms]后重启服务器`, delay: time - mins }
]

// 提交通知任务
notifications.forEach(notification => {
    const task = createNotificationTask(notification.message)
    executor["schedule(java.lang.Runnable,long,java.util.concurrent.TimeUnit)"](task, new $Double(notification.delay).longValue(), TimeUnit.MILLISECONDS)
})

// 提交重启任务
executor["schedule(java.lang.Runnable,long,java.util.concurrent.TimeUnit)"](restartTask, new $Double(time).longValue(), TimeUnit.MILLISECONDS)

// 优雅关闭执行器
executor["schedule(java.lang.Runnable,long,java.util.concurrent.TimeUnit)"](() => {
    executor.shutdown()
    return null
}, new $Double(time + 1000).longValue(), TimeUnit.MILLISECONDS)