ItemEvents.rightClicked('thermal:lumium_coin', event => {
    let slots = global.maxOtherworldRelics
    if(hasCurios(event.player, "kubejs:phosphophyllite")) {
        slots += 2
    }
    event.server.runCommandSilent(`/curios set otherworld_relics ${event.player.name.string} ${new $Double(slots).intValue()}`)
    event.player.getCooldowns().addCooldown('thermal:lumium_coin', 400)
    event.item.shrink(1)
    event.player.tell("Success! ")
    
})

ItemEvents.rightClicked('confluence:demon_heart', event => {
    if(hasCurios(event.player, "kubejs:phosphophyllite")) {
        event.player.tell(Text.translatable("ui.kubejs.banned").aqua())
        event.player.getCooldowns().addCooldown('confluence:demon_heart', 200)
        event.cancel()
    }
})