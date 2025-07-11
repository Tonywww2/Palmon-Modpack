/**
 * hp, armor, attack
 */
// TODO 二测修改维度
// v2
// global.dimAdder = {
//     'kubejs:tfc_planet': [10, 0, 6],

//     'minecraft:the_nether': [20, 14, 15],

//     'minecraft:overworld': [40, 20, 24],
//     'dimdungeons:dungeon_dimension': [60, 35, 36],
//     'ad_astra:moon': [50, 30, 28],
//     'oceanworld:deepsea': [50, 30, 28],

//     'ad_astra:mars': [80, 60, 36],
//     'ad_astra:venus': [100, 80, 42],
//     'ad_astra:mercury': [110, 90, 44],

//     'minecraft:the_end': [140, 100, 52],
//     'deeperdarker:otherside': [180, 120, 64],

//     'rats:ratlantis': [240, 150, 72]
// }
global.dimAdder = {
    'kubejs:tfc_planet': [10, 0, 4],

    'minecraft:the_nether': [20, 14, 11],

    'minecraft:overworld': [40, 20, 16],
    'compactmachines:compact_world': [40, 20, 16],
    'dimdungeons:dungeon_dimension': [60, 35, 24],
    'ad_astra:moon': [50, 30, 18],
    'oceanworld:deepsea': [50, 30, 18],

    'ad_astra:mars': [80, 60, 36],
    'ad_astra:venus': [100, 80, 42],
    'ad_astra:mercury': [110, 90, 44],

    'minecraft:the_end': [130, 100, 48],
    'deeperdarker:otherside': [160, 120, 52],

    'rats:ratlantis': [240, 150, 64]
}
global.dimMuti = {
    'kubejs:tfc_planet': [1, 0.5, 0.8],

    'minecraft:the_nether': [3.0, 0.7, 1.2],

    'minecraft:overworld': [10, 1, 1.4],
    'compactmachines:compact_world': [10, 1, 1.4],
    'dimdungeons:dungeon_dimension': [13, 1.4, 2.00],
    'ad_astra:moon': [16, 1.35, 1.75],
    'oceanworld:deepsea': [16, 1.35, 1.75],

    'ad_astra:mars': [26, 1.6, 2.65],
    'ad_astra:venus': [28, 2, 2.75],
    'ad_astra:mercury': [31, 2.1, 3.0],

    'minecraft:the_end': [42, 2.5, 3.5],
    'deeperdarker:otherside': [48, 3, 4.0],

    'rats:ratlantis': [96, 6.0, 4.5]
}

global.diffMultiplier = [
    [1, 0.75, 0.5],
    [1, 1, 1],
    [1.5, 1, 1.2],
    [2.0, 1.2, 1.5],
    [3.0, 1.4, 2.0]
]
global.mutiPlayerMultiplierScaler = [
    0,
    0.1,
    0.25,
    0.45,
    0.75
]

const health = "minecraft:generic.max_health"
const attack = "minecraft:generic.attack_damage"
const armor = "minecraft:generic.armor"

global.entityBlackList = new Set(["entity.cobblemon.pokemon", "entity.dummmmmmy.target_dummy", "entity.powerful_dummy.test_dummy", "entity.aqua_creepers.aqua_creeper", "entity.touhou_little_maid.maid", "entity.distantfriends.friend"])

EntityEvents.spawned(event => {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity

    if (!entity || !entity.isLiving()) return
    let name = String(entity.type.toString())

    if (entity.isPlayer()) return
    if (global.entityBlackList.has(name)) return
    if (!entity.forgePersistentData) return
    if (entity.forgePersistentData.contains('ova_difficulty')) return

    let dim = event.level.dimension.location().toString()
    let player = entity.getLevel().getNearestPlayer(entity, 240)
    let diffNum = 1

    if (player) {
        player.stages.getAll().forEach(element => {
            if (element.startsWith(global.diffLevelStage)) {
                diffNum = Math.max(diffNum, parseInt(element.split('_')[2]))
            }
        })

    }

    entity.persistentData.putString('ova_difficulty', dim)

    if (!global.dimAdder[dim]) {
        dim = 'kubejs:tfc_planet'
    }

    let playerCount = entity.getLevel().getNearbyPlayers(
        $TargetingConditions.DEFAULT,
        entity,
        AABB.ofSize(entity.position(), 64, 64, 64)
    ).size() - 1
    if (playerCount < 0) playerCount = 0

    // console.log(playerCount)

    if (entity.attributes.hasAttribute(health)) {
        let hpVal = entity.getAttribute(health).getBaseValue() + global.dimAdder[dim][0]
        // hpVal *= global.dimMuti[dim][0] * global.diffMultiplier[diffNum][0]
        hpVal *= global.dimMuti[dim][0] * global.diffMultiplier[diffNum][0] * (1 + (global.mutiPlayerMultiplierScaler[diffNum] * playerCount))

        entity.setAttributeBaseValue(health, hpVal)
        entity.setHealth(entity.getMaxHealth())
    }

    if (entity.attributes.hasAttribute(armor)) {
        let armVal = entity.getAttribute(armor).getBaseValue() + global.dimAdder[dim][1]
        armVal *= global.dimMuti[dim][1] * global.diffMultiplier[diffNum][1]

        entity.setAttributeBaseValue(armor, armVal)

    }

    if (entity.attributes.hasAttribute(attack)) {
        let atkVal = entity.getAttribute(attack).getBaseValue() + global.dimAdder[dim][2]
        atkVal *= global.diffMultiplier[diffNum][2]

        entity.setAttributeBaseValue(attack, atkVal)

    }

})

