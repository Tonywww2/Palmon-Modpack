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