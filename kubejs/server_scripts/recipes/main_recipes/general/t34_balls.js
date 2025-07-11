ServerEvents.recipes(event => {
    ballTier3('cobblemon:ultra_ball', [
        { "item": 'cobblemon:yellow_apricorn', "count": 2 },
        { "item": 'cobblemon:black_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 }
    ])

    ballTier3('cobblemon:repeat_ball', [
        { "item": 'cobblemon:red_apricorn', "count": 2 },
        { "item": 'cobblemon:yellow_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 }
    ])

    ballTier3('cobblemon:luxury_ball', [
        { "item": 'cobblemon:black_apricorn', "count": 1 },
        { "item": 'cobblemon:yellow_apricorn', "count": 1 },
        { "item": 'cobblemon:red_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 }
    ])

    ballTier3('cobblemon:love_ball', [
        { "item": 'cobblemon:pink_apricorn', "count": 2 },
        { "item": 'cobblemon:white_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:polymer_plate', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 },
        { "item": 'minecraft:honeycomb', "count": 1 },
    ])

    ballTier3('cobblemon:timer_ball', [
        { "item": 'cobblemon:red_apricorn', "count": 1 },
        { "item": 'cobblemon:white_apricorn', "count": 1 },
        { "item": 'cobblemon:black_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 },
        { "item": 'minecraft:clock', "count": 1 },
    ])
    
    ballTier3('cobblemon:dusk_ball', [
        { "item": 'cobblemon:black_apricorn', "count": 2 },
        { "item": 'cobblemon:green_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:polymer_plate', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 },
        { "tag": 'forge:blackstone', "count": 1 },
    ])

    ballTier3('cobblemon:quick_ball', [
        { "item": 'cobblemon:blue_apricorn', "count": 2 },
        { "item": 'cobblemon:yellow_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:polymer_plate', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 },
        { "item": 'minecraft:repeater', "count": 1 },
    ])
    
    ballTier3('cobblemon:dream_ball', [
        { "item": 'cobblemon:yellow_apricorn', "count": 2 },
        { "item": 'cobblemon:blue_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:polymer_plate', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 },
        { "tag": 'minecraft:wool', "count": 1 },
    ])

    ballTier3('cobblemon:beast_ball', [
        { "item": 'cobblemon:yellow_apricorn', "count": 2 },
        { "item": 'cobblemon:blue_apricorn', "count": 1 },
        { "tag": 'kubejs:tier_1_materials', "count": 2 },
        { "item": 'palmon:refined_m_steel_ingot', "count": 1 },
        { "item": 'palmon:polymer_plate', "count": 1 },
        { "item": 'palmon:m_crystal', "count": 8 },
        { "item": 'minecraft:phantom_membrane', "count": 1 },
    ])

    // tier 3 balls
    function ballTier3(output, inputs) {
        event.custom({
            "type": "palmon:processing",
            "category": "misc",
            "focus_stat": "ATTACK",
            "min_level": 80,
            "required_type": null,
            "base_hp": 60,
            "base_atk": 90,
            "base_def": 60,
            "base_spa": 60,
            "base_spd": 60,
            "base_spe": 60,
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
                    "item": "cobblemon:pc"
                },
                {
                    "item": "minecraft:enchanting_table"
                }
            ],
            "block_count": 4,
            "input_items": inputs,
            "input_power": 0,
            "input_fluid": null,
            "tick": 3600,
            "result_items": [
                {
                    "item": output,
                    "count": 16
                }
            ]
        }).id('kubejs:' + output.split(':')[1])
    }
})