const maidHash = new $JavaString("maid").hashCode()
const maidUUID = new $UUID(maidHash, maidHash)
EntityEvents.spawned('touhou_little_maid:maid', event => {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity
    if (entity.attributes.hasAttribute(health)) {
        const inst = entity.getAttribute(health)
        for (let m of inst.getModifiers()) {
            if (m.getId().equals(maidUUID)) {
                inst.removeModifier(maidUUID)
                break;
            }
        }
        inst.addPermanentModifier(new $AttributeModifier(
            maidUUID,
            "main_max_ealth",
            9.0,
            "multiply_total"
        ))
    }

})