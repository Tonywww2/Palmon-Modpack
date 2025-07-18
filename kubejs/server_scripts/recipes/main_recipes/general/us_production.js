ServerEvents.recipes(event => {
    const usProduction = (area_blocks, block_count, ticks, results, id) => {
        event.custom({
            "type": "palmon:production",
            "category": "misc",
            "focus_stat": "SPECIAL_ATTACK",
            "min_level": 80,
            "required_type": "dragon",
            "base_hp": 0,
            "base_atk": 0,
            "base_def": 0,
            "base_spa": 80,
            "base_spd": 80,
            "base_spe": 80,
            "area_blocks": area_blocks,
            "block_count": block_count,
            "tick": ticks,
            "result_items": results,
            "result_power": 0,
            "result_fluid": null
        }).id(id)
    }

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('minecraft:redstone_block').toJson(),
        Item.of('botania:mana_fluxfield').toJson(),
        Item.of('supplementaries:cog_block').toJson()
    ], 2, 1600, [
        Item.of('minecraft:deepslate_redstone_ore', 4).toJson()
    ], "kubejs:usp_redstone")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('minecraft:glowstone').toJson(),
        Item.of('minecraft:sea_lantern').toJson(),
        Item.of('minecraft:prismarine_bricks').toJson()
    ], 2, 1600, [
        Item.of('minecraft:glowstone', 2).toJson()
    ], "kubejs:usp_glowstone")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('#forge:storage_blocks/uranium').toJson(),
        Item.of('nuclearcraft:plutonium_rtg').toJson(),
        Item.of('mekanismgenerators:fission_reactor_casing').toJson()
    ], 2, 2200, [
        Item.of('immersiveengineering:deepslate_ore_uranium', 2).toJson()
    ], "kubejs:usp_uranium")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('minecraft:netherite_block').toJson(),
        Item.of('mythicbotany:alfsteel_block').toJson()
    ], 4, 3200, [
        Item.of('minecraft:ancient_debris', 2).toJson()
    ], "kubejs:usp_ancient_debris")

})

