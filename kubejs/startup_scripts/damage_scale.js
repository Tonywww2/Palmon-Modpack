ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", event => {
    global.hurtEvent(event)

})

const arsSummoned = new Set([
    "entity.ars_elemental.summon_camel",
    "entity.ars_elemental.summon_direwolf",
    "entity.ars_elemental.summon_dolphin",
    "entity.ars_elemental.summon_skelehorse",
    "entity.ars_elemental.summon_strider",
    "entity.ars_elemental.summon_vhex",
    "entity.ars_elemental.summon_wskeleton",

    "entity.ars_nouveau.summon_horse",
    "entity.ars_nouveau.summon_skeleton",
    "entity.ars_nouveau.summon_wolf",
    "entity.ars_nouveau.ally_vex"
])
/**
 * @param {Internal.LivingHurtEvent} event 
 */
global.hurtEvent = function (event) {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity

    if (entity.player) {
        let damage = event.getAmount()
        if (damage <= 0) return
        // entity.tell("damagesource: " + event.source.getType())
        if (event.source.player) {
            // entity.tell("Source Player Damage: " + damage)
            damage /= (0.75 * Math.log(1 + damage)) + 1
            // entity.tell("After Damage: " + damage)

        } else {
            let dim = entity.level.dimension.location().toString()
            // entity.tell("Damage: " + damage)
            if (!global.dimAdder[dim]) {
                dim = 'kubejs:earth'
            }

            let scale = global.dimMuti[dim][2]
            damage *= scale
            // entity.tell("After Damage: " + damage)
            if (event.source.getType() == "oxygen") {
                damage += entity.getMaxHealth() * 0.2
            }
            if (event.source.getType() == "freeze") {
                damage += entity.getMaxHealth() * 0.05
            }
        }
        event.setAmount(damage)

    } else {
        if (arsSummoned.has(String(entity.type.toString()))) {
            if (entity.getHealth() <= 10) {
                event.setAmount(event.getAmount() + 10)
                return
            }
            const targetHealth = entity.getHealth() - (entity.getMaxHealth() * 0.15)
            entity.setHealth(Math.max(5, targetHealth))

        }
    }

}

// let $ALCombatRules = Java.loadClass("dev.shadowsoffire.attributeslib.api.ALCombatRules")
