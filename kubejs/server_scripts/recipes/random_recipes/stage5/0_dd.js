let ddFlag = false
ItemEvents.rightClicked('deeperdarker:heart_of_the_deep', event => {
    /**
    * @type {Internal.ServerPlayer}
    */
    const player = event.player
    if ((ddFlag && player.isShiftKeyDown() && player.offHandItem.getItem().getId() == 'deeperdarker:reinforced_echo_shard') ||
        (player.offHandItem.getItem().getId() == 'kubejs:epsilon_framework')
    ) {
        event.server.runCommandSilent(`execute in deeperdarker:otherside run tp ${player.name.getString()} ${player.getX()} 60 ${player.getZ()}`)
        player.tell(Text.literal('§kNow You See Me.'))
        event.player.addItemCooldown(event.item, 1200)
        event.player.addItemCooldown('deeperdarker:reinforced_echo_shard', 1200)

    }

})

/**
 * @param {Internal.RecipesEventJS} event
 */
function s5DD(event) {
    ddFlag = true

    event.shaped('deeperdarker:reinforced_echo_shard', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'minecraft:echo_shard',
            B: 'kubejs:collapse_prediction',
            C: 'deeperdarker:heart_of_the_deep'
        }).id('kubejs:reinforced_echo_shard_s5')

}