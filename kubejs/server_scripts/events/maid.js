const maidHash = new $JavaString("maid").hashCode()
const maidUUID = new $UUID(maidHash, maidHash)
EntityEvents.spawned('touhou_little_maid:maid', event => {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity
    // if (entity.persistentData && !entity.persistentData.contains('maid_dix')) {
    //     entity.persistentData.putBoolean('maid_dix', true)
    if (entity.attributes.hasAttribute(health)) {
        entity.getAttribute(health)
            .addPermanentModifier(new $AttributeModifier(
                maidUUID,
                "main_max_ealth",
                20.0,
                "multiply_total"
            ))
    }
    // }

})