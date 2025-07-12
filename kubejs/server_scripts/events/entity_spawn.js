global.tfcBanEntityList = new Set(['entity.rats.plague_doctor', 'entity.touhou_little_maid.fairy'])

EntityEvents.spawned((event) => {
    let entity = event.entity
    if (global.tfcBanEntityList.has(String(entity.type)) &&
        event.level.dimension.location().toString() == 'minecraft:overworld') {
        event.cancel()
    }
})