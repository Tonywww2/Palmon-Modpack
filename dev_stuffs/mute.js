// CLIENT ONLY
let mutedPlayers = new Set([
    "testplayer"
])

ForgeEvents.onEvent("net.minecraftforge.client.event.ClientChatReceivedEvent", event => {
    global.muteEvent(event)

})

global.muteEvent = function (event) {
    let senderID = event.getSender()
    if (!senderID) return

    mutedPlayers.forEach(id => {
        if (event.getMessage().getString().toLocaleLowerCase().includes(id.toLocaleLowerCase())) {
            event.setCanceled(true)
            return
        }
    })
    
    let sender = Utils.server.getPlayerList().getPlayer(senderID)
    if (!sender) return

    if (mutedPlayers.has(String(sender.getDisplayName()))) {
        event.setCanceled(true)
        return
    }


}
