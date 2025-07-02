const enchantMap = {
    'ad_astra_giselle_addon:space_breathing': 3,
    'ad_astra_giselle_addon:space_fire_proof': 2,
    'ad_astra_giselle_addon:acid_rain_proof': 2,
    'ad_astra_giselle_addon:gravity_normalizing': 0
}

ItemEvents.rightClicked('minecraft:enchanted_book', event => {
    let player = event.player
    let item = event.item

    if (!player) return

    let enchant = null
    let slot = -1
    for (let key in enchantMap) {
        if (item.getEnchantments().containsKey(key)) {
            enchant = key
            slot = enchantMap[key]
            break
        }
    }
    if (!enchant || slot === -1) return
    let armor = player.getArmorSlots()[slot]
    if (!armor) {
        player.tell(Text.translatable("kubejs.enchant.no_armor").red())
        return
    }

    let existingEnchantments = armor.getNbt().get("Enchantments")
    if (!existingEnchantments) {
        armor.getNbt().put("Enchantments", [{ id: enchant, lvl: 1 }])
    } else {
        let enchantmentArray = []
        for (let i = 0; i < existingEnchantments.size(); i++) {
            enchantmentArray.push(existingEnchantments.get(i))
        }
        enchantmentArray.push({ id: enchant, lvl: 1 })
        armor.getNbt().put("Enchantments", enchantmentArray)
    }

    player.tell(Text.translatable("kubejs.enchant.applied").green())
    player.getCooldowns().addCooldown(item, 100)
    item.shrink(1)

})