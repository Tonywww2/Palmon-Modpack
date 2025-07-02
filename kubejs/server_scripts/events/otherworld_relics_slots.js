ItemEvents.rightClicked('thermal:lumium_coin', event => {
    event.server.runCommandSilent(`/curios set otherworld_relics ${event.player.name.string} 2`)
    event.player.getCooldowns().addCooldown('thermal:lumium_coin', 400)
    event.player.tell("Success! ")
    
})