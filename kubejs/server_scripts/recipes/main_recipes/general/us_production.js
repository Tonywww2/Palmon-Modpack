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
    ], 2, 6400, [
        Item.of('minecraft:deepslate_redstone_ore', 1).toJson()
    ], "kubejs:usp_redstone")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('minecraft:glowstone').toJson(),
        Item.of('minecraft:sea_lantern').toJson(),
        Item.of('minecraft:prismarine_bricks').toJson()
    ], 2, 6400, [
        Item.of('minecraft:glowstone', 1).toJson()
    ], "kubejs:usp_glowstone")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('#forge:storage_blocks/uranium').toJson(),
        Item.of('nuclearcraft:plutonium_rtg').toJson(),
        Item.of('mekanismgenerators:fission_reactor_casing').toJson()
    ], 2, 12000, [
        Item.of('immersiveengineering:deepslate_ore_uranium', 1).toJson()
    ], "kubejs:usp_uranium")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('minecraft:netherite_block').toJson(),
        Item.of('mythicbotany:alfsteel_block').toJson()
    ], 4, 24000, [
        Item.of('minecraft:netherite_scrap', 1).toJson()
    ], "kubejs:usp_ancient_debris")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('dustandash:block_of_ash_steel').toJson(),
        Item.of('minecraft:beacon').toJson(),
        Item.of('tconstruct:earth_slime_crystal_block').toJson()
    ], 3, 18000, [
        Item.of('dustandash:earth_dust', 2).toJson(),
        Item.of('dustandash:metal_dust', 1).toJson(),
    ], "kubejs:usp_dustandash_1")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('dustandash:block_of_ash_steel').toJson(),
        Item.of('minecraft:beacon').toJson(),
        Item.of('tconstruct:ender_slime_crystal_block').toJson()
    ], 4, 24000, [
        Item.of('dustandash:order_dust', 1).toJson(),
        Item.of('dustandash:life_dust', 1).toJson(),
    ], "kubejs:usp_dustandash_2")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('dustandash:block_of_ash_steel').toJson(),
        Item.of('minecraft:beacon').toJson(),
        Item.of('minecraft:magma_block').toJson()
    ], 2, 12000, [
        Item.of('dustandash:fire_dust', 1).toJson()
    ], "kubejs:usp_dustandash_3")

    usProduction([
        Item.of('kubejs:ultra_space_resourse_point').toJson(),
        Item.of('botania:blaze_block').toJson(),
        Item.of('minecraft:beacon').toJson(),
        Item.of('tconstruct:blaze_head').toJson()
    ], 5, 36000, [
        Item.of('tconstruct:blaze_head', 1).toJson()
    ], "kubejs:usp_blaze_head")

})

