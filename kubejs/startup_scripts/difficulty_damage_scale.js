ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", event => {
    global.hurtEvent(event)
})

global.hurtEvent = function(event) {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity

    if (entity.player) {
        let dim = entity.level.dimension.location().toString()
        let damage = event.getAmount()
        entity.tell("Damage: " + damage)
        damage *= global.dimMuti[dim][2]
        event.setAmount(damage)
        entity.tell("After Damage: " + damage)

    }

}


