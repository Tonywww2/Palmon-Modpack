/**
 * hp, armor, attack
 */
// v1
// global.dimAdder = {
//     'minecraft:overworld': [10, 2, 0],

//     'minecraft:the_nether': [20, 14, 0],

//     'kubejs:overworld': [40, 20, 0],
//     'dimdungeons:dungeon_dimension': [60, 35, 0],
//     'ad_astra:moon': [50, 30, 0],

//     'ad_astra:mars': [80, 60, 0],
//     'ad_astra:venus': [100, 80, 0],
//     'ad_astra:mercury': [110, 90, 0],

//     'minecraft:the_end': [140, 100, 10],
//     'deeperdarker:otherside': [180, 120, 10],

//     'rats:ratlantis': [240, 150, 10]
// }

// global.dimMuti = {
//     'minecraft:overworld': [1, 0.5, 1],

//     'minecraft:the_nether': [2.5, 0.7, 1],

//     'kubejs:overworld': [6, 1, 1],
//     'dimdungeons:dungeon_dimension': [8, 1.4, 1],
//     'ad_astra:moon': [7, 1.35, 1],
//     'oceanworld:deepsea': [7, 1.35, 1],

//     'ad_astra:mars': [9, 1.6, 1],
//     'ad_astra:venus': [11, 2, 1],
//     'ad_astra:mercury': [12, 2.1, 1],

//     'minecraft:the_end': [14, 2.5, 1],
//     'deeperdarker:otherside': [17, 3, 1],

//     'rats:ratlantis': [21, 3.5, 1]
// }
// v2
global.dimAdder = {
    'minecraft:overworld': [10, 2, 0],

    'minecraft:the_nether': [20, 14, 0],

    'kubejs:overworld': [40, 20, 0],
    'dimdungeons:dungeon_dimension': [60, 35, 0],
    'ad_astra:moon': [50, 30, 0],

    'ad_astra:mars': [80, 60, 0],
    'ad_astra:venus': [100, 80, 0],
    'ad_astra:mercury': [110, 90, 0],

    'minecraft:the_end': [140, 100, 10],
    'deeperdarker:otherside': [180, 120, 10],

    'rats:ratlantis': [240, 150, 10]
}

global.dimMuti = {
    'minecraft:overworld': [1, 0.5, 1],

    'minecraft:the_nether': [2.5, 0.7, 1],

    'kubejs:overworld': [7, 1, 1],
    'dimdungeons:dungeon_dimension': [10, 1.4, 1],
    'ad_astra:moon': [9, 1.35, 1],
    'oceanworld:deepsea': [9, 1.35, 1],

    'ad_astra:mars': [13, 1.6, 1],
    'ad_astra:venus': [15, 2, 1],
    'ad_astra:mercury': [18, 2.1, 1],

    'minecraft:the_end': [21, 2.5, 1],
    'deeperdarker:otherside': [26, 3, 1],

    'rats:ratlantis': [32, 3.5, 1]
}

global.diffMuti = [
    [1, 0.5, 0.5],
    [1, 1, 1],
    [1.5, 1, 1.2],
    [1.8, 1.3, 1.4],
    [2.6, 1.6, 1.8]
]

const health = "minecraft:generic.max_health"
const attack = "minecraft:generic.attack_damage"
const armor = "minecraft:generic.armor"

global.entityBlackList = new Set(["cobblemon:pokemon", "dummmmmmy:target_dummy", "aqua_creepers:aqua_creeper"])

EntityEvents.spawned(event => {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity

    if (entity && entity.isLiving()) {
        let name = entity.type
        if (entity.isMonster() && !global.entityBlackList.has(name) && entity.persistentData && !entity.persistentData.contains('ova_difficulty')) {
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
                dim = 'kubejs:overworld'
            }


            if (entity.attributes.hasAttribute(health)) {
                let hpVal = entity.getAttribute(health).getBaseValue() + global.dimAdder[dim][0]
                hpVal *= global.dimMuti[dim][0] * global.diffMuti[diffNum][0]

                entity.setAttributeBaseValue(health, hpVal)
                entity.setHealth(entity.getMaxHealth())

            }

            if (entity.attributes.hasAttribute(armor)) {
                let armVal = entity.getAttribute(armor).getBaseValue() + global.dimAdder[dim][1]
                armVal *= global.dimMuti[dim][1] * global.diffMuti[diffNum][1]

                entity.setAttributeBaseValue(armor, armVal)

            }

            if (entity.attributes.hasAttribute(attack)) {
                let atkVal = entity.getAttribute(attack).getBaseValue() + global.dimAdder[dim][2]
                atkVal *= global.dimMuti[dim][2] * global.diffMuti[diffNum][2]

                entity.setAttributeBaseValue(attack, atkVal)

            }

        }

    }

})