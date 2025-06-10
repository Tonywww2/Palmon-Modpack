BlockEvents.rightClicked(event => {
    if (event.item == 'occultism:datura_seeds') {
        // TODO 二测修改维度
        if (event.player.level.dimension.location().toString() == 'kubejs:tfc_planet' && !global.occ_trigger) {
            event.player.tell(Text.translatable("ui.kubejs.banned").red())
            event.cancel()

        }
    }

})