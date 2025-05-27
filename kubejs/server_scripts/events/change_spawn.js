const spawnPoint = new BlockPos(0, 72, -1000)

PlayerEvents.advancement('dustandash:entry', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    let dim = player.server.getLevel('kubejs:tfc_planet')

    for (let x = 2; x >= -2; x--) {
        for (let y = 60; y <= 71; y++) {
            for (let z = -1002; z <= -998; z++) {
                dim.setBlock(new BlockPos(x, y, z),
                    Block.getBlock('tfc:rock/raw/granite').defaultBlockState(),
                    3, 256)
            }
        }
    }

    for (let x = 2; x >= -2; x--) {
        for (let y = 72; y <= 80; y++) {
            for (let z = -1002; z <= -998; z++) {
                dim.setBlock(new BlockPos(x, y, z),
                    Blocks.AIR.defaultBlockState(),
                    3, 256)
            }
        }
    }

    player.setRespawnPosition(dim.dimension, spawnPoint, 0, false, false)
    player.teleportTo(dim.dimension, 0, 72, -1000, 0, 0)

})