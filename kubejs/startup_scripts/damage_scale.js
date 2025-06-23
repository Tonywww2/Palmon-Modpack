ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", event => {
    global.hurtEvent(event)

})
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
        if (event.source.player) {
            // entity.tell("Source Player Damage: " + damage)
            damage *= 0.3
            // entity.tell("After Damage: " + damage)

        } else {
            let dim = entity.level.dimension.location().toString()
            // entity.tell("Damage: " + damage)
            damage *= global.dimMuti[dim][2]
            // entity.tell("After Damage: " + damage)
        }
        event.setAmount(damage)

    }

}

// let $ALCombatRules = Java.loadClass("dev.shadowsoffire.attributeslib.api.ALCombatRules")
