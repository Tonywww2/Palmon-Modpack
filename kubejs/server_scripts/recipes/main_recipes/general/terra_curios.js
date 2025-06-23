ServerEvents.recipes(event => {

    confluence(Item.of('confluence:shot_put').toJson(),
        [Item.of('8x minecraft:chain').toJson(), Item.of('mekanism_extras:expand_radioactive_waste_barrel').toJson()],
        "kubejs:shot_put")

    confluence(Item.of('confluence:flashlight').toJson(),
        [Item.of('minecraft:sea_lantern').toJson(), Item.of('embers:archaic_light').toJson(), Item.of('minecraft:spyglass').toJson()],
        "kubejs:flashlight")


    function confluence(result, ingredients, id) {
        event.custom({
            "type": "confluence:workshop",
            "ingredients": ingredients,
            "result": result
        }).id(id)
    }

})