const x = 0
const y = 72
const z = -1000
const spawnPoint = new BlockPos(x, y, z)

PlayerEvents.advancement('dustandash:entry', event => {
    // TODO 二测修改维度
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    let dim = player.server.getLevel('kubejs:tfc_planet')

    player.teleportTo(dim.dimension, x, y, z, 0, 0)
    player.setRespawnPosition(dim.dimension, spawnPoint, 0, true, false)

    for (let dx = 2; dx >= -2; dx--) {
        for (let dy = -12; dy <= -1; dy++) {
            for (let dz = -2; dz <= 2; dz++) {
                dim.setBlock(new BlockPos(x + dx, y + dy, z + dz),
                    Block.getBlock('tfc:rock/raw/granite').defaultBlockState(),
                    3, 256)
            }
        }
    }

    for (let dx = 2; dx >= -2; dx--) {
        for (let dy = 0; dy <= 8; dy++) {
            for (let dz = -2; dz <= 2; dz++) {
                dim.setBlock(new BlockPos(x + dx, y + dy, z + dz),
                    Blocks.AIR.defaultBlockState(),
                    3, 256)
            }
        }
    }

    player.server.runCommandSilent(`execute in kubejs:tfc_planet run setworldspawn ${x} ${y} ${z}`)

})