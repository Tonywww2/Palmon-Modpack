BlockEvents.rightClicked(event => {
    if (event.item == 'occultism:datura_seeds') {
        if (event.player.level.dimension.location().toString() == 'minecraft:overworld' && !global.occ_trigger) {
            event.player.tell(Text.translatable("ui.kubejs.banned").red())
            event.cancel()

        }
    }

})