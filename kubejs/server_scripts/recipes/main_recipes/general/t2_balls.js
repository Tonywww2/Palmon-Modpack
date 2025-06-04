ServerEvents.recipes(event => {
    ballTier2('cobblemon:great_ball', [
        { "item": 'cobblemon:blue_apricorn', "count": 2 },
        { "item": 'cobblemon:red_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 2 },
        { "item": 'palmon:stone', "count": 8 }
    ])

    ballTier2('cobblemon:lure_ball', [
        { "item": 'cobblemon:green_apricorn', "count": 1 },
        { "item": 'cobblemon:red_apricorn', "count": 1 },
        { "item": 'cobblemon:blue_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 2 },
        { "item": 'palmon:stone', "count": 8 }
    ])

    ballTier2('cobblemon:moon_ball', [
        { "item": 'cobblemon:yellow_apricorn', "count": 1 },
        { "item": 'cobblemon:black_apricorn', "count": 1 },
        { "item": 'cobblemon:blue_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 2 },
        { "item": 'palmon:stone', "count": 8 }
    ])

    ballTier2('cobblemon:friend_ball', [
        { "item": 'cobblemon:green_apricorn', "count": 2 },
        { "item": 'cobblemon:red_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 2 },
        { "item": 'palmon:stone', "count": 8 }
    ])

    ballTier2('cobblemon:park_ball', [
        { "item": 'cobblemon:green_apricorn', "count": 2 },
        { "item": 'cobblemon:blue_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 2 },
        { "item": 'palmon:stone', "count": 8 }
    ])

    ballTier2('cobblemon:sport_ball', [
        { "item": 'cobblemon:red_apricorn', "count": 2 },
        { "item": 'cobblemon:white_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 2 },
        { "item": 'palmon:stone', "count": 8 }
    ])

    ballTier2('cobblemon:net_ball', [
        { "item": 'cobblemon:blue_apricorn', "count": 2 },
        { "item": 'cobblemon:black_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 3 },
        { "item": 'minecraft:cobweb', "count": 2 }
    ])

    ballTier2('cobblemon:fast_ball', [
        { "item": 'cobblemon:red_apricorn', "count": 2 },
        { "item": 'cobblemon:yellow_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 3 },
        { "item": 'minecraft:sugar', "count": 2 }
    ])

    ballTier2('cobblemon:level_ball', [
        { "item": 'cobblemon:red_apricorn', "count": 1 },
        { "item": 'cobblemon:yellow_apricorn', "count": 1 },
        { "item": 'cobblemon:black_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 3 },
        { "item": 'minecraft:book', "count": 1 }
    ])

    ballTier2('cobblemon:heavy_ball', [
        { "item": 'cobblemon:black_apricorn', "count": 2 },
        { "item": 'cobblemon:blue_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 3 },
        { "tag": 'forge:ingots/steel', "count": 1 }
    ])

    ballTier2('cobblemon:nest_ball', [
        { "item": 'cobblemon:green_apricorn', "count": 1 },
        { "item": 'cobblemon:yellow_apricorn', "count": 1 },
        { "item": 'cobblemon:white_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 3 },
        { "tag": 'forge:slimeballs', "count": 1 }
    ])

    ballTier2('cobblemon:dive_ball', [
        { "item": 'cobblemon:blue_apricorn', "count": 2 },
        { "item": 'cobblemon:white_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 1 },
        { "item": 'palmon:refined_steel_ingot', "count": 3 },
        { "item": 'minecraft:dried_kelp_block', "count": 1 }
    ])

    // tier 2 balls
    function ballTier2(output, inputs) {
        event.custom({
            "type": "palmon:processing",
            "category": "misc",
            "focus_stat": "SPECIAL_ATTACK",
            "min_level": 50,
            "required_type": null,
            "base_hp": 40,
            "base_atk": 40,
            "base_def": 40,
            "base_spa": 40,
            "base_spd": 40,
            "base_spe": 40,
            "area_blocks": [
                {
                    "tag": "minecraft:anvil"
                },
                {
                    "item": "minecraft:smithing_table"
                },
                {
                    "tag": "forge:workbenches"
                },
                {
                    "item": "minecraft:blast_furnace"
                },
                {
                    "item": "cobblemon:pc"
                }
            ],
            "block_count": 2,
            "input_items": inputs,
            "input_power": 0,
            "input_fluid": null,
            "tick": 2400,
            "result_items": [
                {
                    "item": output,
                    "count": 6
                }
            ]
        }).id('kubejs:' + output.split(':')[1])
    }


})