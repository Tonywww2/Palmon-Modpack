const deliveryCoordinateItemBlacklist = Ingredient.of('#kubejs:delivery_coordinate_blacklist')

ItemEvents.rightClicked('kubejs:delivery_coordinate_gamma', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    player.cooldowns.addCooldown('kubejs:delivery_coordinate_gamma', 1200)
    let stack = player.offHandItem.copy()
    stack.setCount(1)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_gamma' && stack &&
        !deliveryCoordinateItemBlacklist.test(stack.getItem())) {

        global.jsonData.add("delivery_coordinate_gamma", stack.toJson())

        savePackData(global.jsonData)
        player.tell(Text.translatable("kubejs.eot.success").aqua())

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
    let stack = player.offHandItem.copy()
    stack.setCount(1)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_epsilon' && stack &&
        !deliveryCoordinateItemBlacklist.test(stack.getItem())) {

        global.jsonData.add("delivery_coordinate_epsilon", stack.toJson())

        savePackData(global.jsonData)
        player.tell(Text.translatable("kubejs.eot.success").aqua())

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
    let stack = player.offHandItem.copy()
    stack.setCount(1)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_ultimate' && stack &&
        !deliveryCoordinateItemBlacklist.test(stack.getItem())) {

        global.jsonData.add("delivery_coordinate_ultimate", stack.toJson())

        savePackData(global.jsonData)
        player.tell(Text.translatable("kubejs.eot.success").aqua())

    } else {
        player.tell(Text.translatable('kubejs.eot.special_2_not_allow').red())

    }

})