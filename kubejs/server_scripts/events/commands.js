// priority: 20

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('reset_difficulty')
        .requires(s => s.hasPermission(2))
        .executes(c => {
            let toRemove = []
            c.source.player.stages.getAll().forEach(element => {
                if (element.startsWith('diff_level_')) {
                    c.source.player.stages.remove(element);
                }
            })
            toRemove.forEach(element => {
                c.source.player.stages.remove(element);
            })

            return 1
        })
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
            .executes(c => {
                /**
                 * @type {Internal.ServerPlayer}
                 */
                let player = Arguments.PLAYER.getResult(c, 'target')
                let toRemove = []
                player.stages.getAll().forEach(element => {
                    if (element.startsWith('diff_level_')) {
                        toRemove.push(element);
                    }
                })
                toRemove.forEach(element => {
                    player.stages.remove(element);
                })
                return 1
            })
        )
    )

})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments, CommandSourceStack } = event

    event.register(
        Commands.literal('eot_give_anchor_shard')
            .then(
                Commands.argument('target', Arguments.PLAYER.create(event))
                    .then(
                        Commands.argument('num', Arguments.INTEGER.create(event))
                            .executes(ctx => {
                                let player = Arguments.PLAYER.getResult(ctx, 'target')
                                let num = Arguments.INTEGER.getResult(ctx, 'num')


                                return giveAnchorShard(player, num)
                            })
                    )
            )
    )
})

let giveAnchorShard = function (player, num) {
    if (num < 1 | num > 64) {
        player.tell('num must be in range [1, 64]')
        return 0
    }

    player.give(Item.of('kubejs:anchor_shard', `{owner:"${player.uuid}"}`).withCount(num))
    player.tell(`Given ${player.name.string} anchor_shard * ${num}`)

    return 1
}

