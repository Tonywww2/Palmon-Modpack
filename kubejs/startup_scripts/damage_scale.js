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
        if (damage <= 0) return
        // entity.tell("damagesource: " + event.source.getType())
        if (event.source.player) {
            // entity.tell("Source Player Damage: " + damage)
            damage /= (0.75 * Math.log(1 + damage)) + 1
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
