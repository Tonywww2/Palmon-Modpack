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
        // entity.tell("damagesource: " + event.source.getType())
        if (event.source.player) {
            // entity.tell("Source Player Damage: " + damage)
            damage *= 0.3
            // entity.tell("After Damage: " + damage)

        } else {
            let dim = entity.level.dimension.location().toString()
            // entity.tell("Damage: " + damage)
            damage *= global.dimMuti[dim][2]
            // entity.tell("After Damage: " + damage)
            if (event.source.getType() == "oxygen") {
                damage += entity.getMaxHealth() * 0.2
            }
            if (event.source.getType() == "freeze") {
                damage += entity.getMaxHealth() * 0.05
            }
        }
        event.setAmount(damage)

    }

}

// let $ALCombatRules = Java.loadClass("dev.shadowsoffire.attributeslib.api.ALCombatRules")
