const deliveryCoordinateItemBlacklist = Ingredient.of('#kubejs:delivery_coordinate_blacklist')

ItemEvents.rightClicked('kubejs:delivery_coordinate_gamma', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    player.cooldowns.addCooldown('kubejs:delivery_coordinate_gamma', 1200)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_gamma' && player.offHandItem &&
        !deliveryCoordinateItemBlacklist.test(player.offHandItem.getItem())) {

        global.jsonData.add("delivery_coordinate_gamma", player.offHandItem.toJson())

        savePackData(global.jsonData)

    } else {
        player.tell(Text.translatable('kubejs.eot.special_2_not_allow').red())

    }

})

ItemEvents.rightClicked('kubejs:delivery_coordinate_epsilon', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    player.cooldowns.addCooldown('kubejs:delivery_coordinate_epsilon', 1200)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_epsilon' && player.offHandItem &&
        !deliveryCoordinateItemBlacklist.test(player.offHandItem.getItem())) {

        global.jsonData.add("delivery_coordinate_epsilon", player.offHandItem.toJson())

        savePackData(global.jsonData)

    } else {
        player.tell(Text.translatable('kubejs.eot.special_2_not_allow').red())

    }

})

ItemEvents.rightClicked('kubejs:delivery_coordinate_ultimate', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    player.cooldowns.addCooldown('kubejs:delivery_coordinate_ultimate', 1200)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_ultimate' && player.offHandItem &&
        !deliveryCoordinateItemBlacklist.test(player.offHandItem.getItem())) {

        global.jsonData.add("delivery_coordinate_ultimate", player.offHandItem.toJson())

        savePackData(global.jsonData)

    } else {
        player.tell(Text.translatable('kubejs.eot.special_2_not_allow').red())

    }

})