const $EntityTravelToDimensionEvent = Java.loadClass("net.minecraftforge.event.entity.EntityTravelToDimensionEvent")

const hasCurios = (player, id) => {
    let curiosAll = $CuriosHelper.getEquippedCurios(player).resolve().get()
    // player.tell(curiosAll)
    for (let i = 0; i < curiosAll.getSlots(); i++) {
        let curiosItem = curiosAll.getStackInSlot(i);
        if (!curiosItem.isEmpty()) {
            if (curiosItem.getItem().id === id) {
                return true
            }
        }
    }
    return false
}

const ratlantis = (event) => {
    if (!event.player.stages.has(global.ratlantis)) {
        event.player.tell(Text.translatable('ui.kubejs.banned').gold())
        event.player.tell(Text.translatable('ui.kubejs.banned_dim_rat').gold())
        event.player.addItemCooldown(event.player.mainHandItem, 200)
        event.cancel()

    }
}

NativeEvents.onEvent($EntityTravelToDimensionEvent, /** @param {Internal.EntityTravelToDimensionEvent} event  */ event => {
    /**
    * @type {Internal.ServerPlayer}
    */
    let player = event.entity
    let key = event.dimension.location().toString()

    if (player.player) {
        switch (key) {
            case 'minecraft:the_end':
                // if (!player.stages.has(global.endStage)) {
                if (!hasCurios(player, "kubejs:scranton_reality_anchor")) {
                    event.setCanceled(true)
                    player.tell(Text.translatable('ui.kubejs.banned').darkPurple())
                    player.tell(Text.translatable('ui.kubejs.banned_dim_end').lightPurple())
                    player.teleportTo(player.getX(), 320, player.getZ())
                }
                break
            case 'rats:ratlantis':
                if (!player.stages.has(global.ratlantis)) {
                    event.setCanceled(true)
                    player.tell(Text.translatable('ui.kubejs.banned').gold())
                    event.player.tell(Text.translatable('ui.kubejs.banned_dim_rat').gold())
                    player.teleportTo(player.getX(), 320, player.getZ())
                }
                break

        }

    }

})


ItemEvents.rightClicked('rats:chunky_cheese_token', event => {
    ratlantis(event)
})

BlockEvents.placed('rats:chunky_cheese_token', event => {
    ratlantis(event)
})

