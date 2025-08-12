ItemEvents.rightClicked('thermal:lumium_coin', event => {
    event.server.runCommandSilent(`/curios set otherworld_relics ${event.player.name.string} ${new $Double(global.maxOtherworldRelics).intValue()}`)
    event.player.getCooldowns().addCooldown('thermal:lumium_coin', 400)
    event.item.shrink(1)
    event.player.tell("Success! ")
    
})