EntityEvents.spawned('touhou_little_maid:maid', event => {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity
    if (entity.persistentData && !entity.persistentData.contains('maid_dix')) {
        entity.persistentData.putBoolean('maid_dix', true)

        if (entity.attributes.hasAttribute(health)) {
            let hpVal = entity.getAttribute(health).getBaseValue() * 10
            entity.setAttributeBaseValue(health, hpVal)
            entity.setHealth(entity.getMaxHealth())
        }
    }

})