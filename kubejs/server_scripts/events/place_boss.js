ItemEvents.rightClicked('cataclysm:abyss_eye', event => {
    if (event.level.dimension == 'oceanworld:deepsea') {
        event.server.runCommandSilent(`effect give ${event.player.name.getString()} minecraft:nausea 5`)
        event.server.runCommandSilent(`execute at ${event.player.name.getString()} run place structure cataclysm:sunken_city`)
        event.server.runCommandSilent(`advancement grant ${event.player.name.getString()} only cataclysm:find_sunken_city`)
        event.player.addItemCooldown(event.item, 600)
        event.player.tell(Text.translatable("ui.kubejs.sunken_city").darkPurple())
        event.item.shrink(1)

    } else {
        event.player.tell(Text.translate("ui.kubejs.banned").red())
        event.player.addItemCooldown(event.item, 200)
        event.cancel()

    }


})