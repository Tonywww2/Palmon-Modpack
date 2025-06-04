ServerEvents.recipes(event => {
    ballTier1("cobblemon:poke_ball", [
        { "item": "cobblemon:red_apricorn", "count": 3 },
        { "item": "palmon:refined_copper_ingot", "count": 2 },
        { "item": "palmon:wood", "count": 4 },
        { "item": "palmon:stone", "count": 4 }
    ])
    ballTier1('cobblemon:citrine_ball', [
        { "item": 'cobblemon:yellow_apricorn', "count": 3 },
        { "item": "palmon:refined_copper_ingot", "count": 2 },
        { "item": "palmon:wood", "count": 4 },
        { "item": "palmon:stone", "count": 4 }
    ])
    ballTier1('cobblemon:verdant_ball', [
        { "item": 'cobblemon:green_apricorn', "count": 3 },
        { "item": "palmon:refined_copper_ingot", "count": 2 },
        { "item": "palmon:wood", "count": 4 },
        { "item": "palmon:stone", "count": 4 }
    ])
    ballTier1('cobblemon:azure_ball', [
        { "item": 'cobblemon:blue_apricorn', "count": 3 },
        { "item": "palmon:refined_copper_ingot", "count": 2 },
        { "item": "palmon:wood", "count": 4 },
        { "item": "palmon:stone", "count": 4 }
    ])
    ballTier1('cobblemon:roseate_ball', [
        { "item": 'cobblemon:pink_apricorn', "count": 3 },
        { "item": "palmon:refined_copper_ingot", "count": 2 },
        { "item": "palmon:wood", "count": 4 },
        { "item": "palmon:stone", "count": 4 }
    ])
    ballTier1('cobblemon:slate_ball', [
        { "item": 'cobblemon:black_apricorn', "count": 3 },
        { "item": "palmon:refined_copper_ingot", "count": 2 },
        { "item": "palmon:wood", "count": 4 },
        { "item": "palmon:stone", "count": 4 }
    ])
    ballTier1('cobblemon:premier_ball', [
        { "item": 'cobblemon:white_apricorn', "count": 3 },
        { "item": "palmon:refined_copper_ingot", "count": 2 },
        { "item": "palmon:wood", "count": 4 },
        { "item": "palmon:stone", "count": 4 }
    ])

    ballTier1('cobblemon:heal_ball', [
        { "item": 'cobblemon:white_apricorn', "count": 1 },
        { "item": 'cobblemon:pink_apricorn', "count": 2 },
        { "item": "palmon:refined_copper_ingot", "count": 3 },
        { "item": 'cobblemon:medicinal_leek', "count": 2 },
        { "item": "palmon:wood", "count": 3 },
        { "item": "palmon:stone", "count": 3 }
    ])
    ballTier1('cobblemon:cherish_ball', [
        { "item": 'cobblemon:white_apricorn', "count": 1 },
        { "item": 'cobblemon:red_apricorn', "count": 2 },
        { "item": "palmon:refined_copper_ingot", "count": 3 },
        { "tag": 'forge:ingots/gold', "count": 2 },
        { "item": "palmon:wood", "count": 3 },
        { "item": "palmon:stone", "count": 3 }
    ])
    ballTier1('cobblemon:safari_ball', [
        { "item": 'cobblemon:green_apricorn', "count": 1 },
        { "item": 'cobblemon:yellow_apricorn', "count": 2 },
        { "item": "palmon:refined_copper_ingot", "count": 3 },
        { "tag": 'minecraft:arrows', "count": 2 },
        { "item": "palmon:wood", "count": 3 },
        { "item": "palmon:stone", "count": 3 }
    ])

    event.shapeless('cobblemon:ancient_feather_ball', ['#forge:feathers', 'cobblemon:ancient_azure_ball']).id('kubejs:ancient_feather_ball_s1')
    event.shapeless('cobblemon:ancient_wing_ball', ['#forge:feathers', 'cobblemon:ancient_great_ball']).id('kubejs:ancient_wing_ball_s1')
    event.shapeless('cobblemon:ancient_jet_ball', ['#forge:feathers', 'cobblemon:ancient_ultra_ball']).id('kubejs:ancient_jet_ball_s1')

    event.shapeless('cobblemon:ancient_heavy_ball', ['palmon:stone', 'cobblemon:ancient_slate_ball']).id('kubejs:ancient_heavy_ball_s1')
    event.shapeless('cobblemon:ancient_leaden_ball', ['palmon:stone', 'cobblemon:ancient_great_ball']).id('kubejs:ancient_leaden_ball_s1')
    event.shapeless('cobblemon:ancient_gigaton_ball', ['palmon:stone', 'cobblemon:ancient_ultra_ball']).id('kubejs:ancient_gigaton_ball_s1')

    // tier 1 balls
    function ballTier1(output, inputs) {
        event.custom({
            "type": "palmon:processing",
            "category": "misc",
            "focus_stat": "SPECIAL_ATTACK",
            "min_level": 20,
            "required_type": null,
            "base_hp": 20,
            "base_atk": 20,
            "base_def": 20,
            "base_spa": 20,
            "base_spd": 20,
            "base_spe": 20,
            "area_blocks": [
                {
                    "tag": "tfc:anvils"
                },
                {
                    "item": "minecraft:smithing_table"
                },
                {
                    "tag": "forge:workbenches"
                },
                {
                    "item": "minecraft:blast_furnace"
                }
            ],
            "block_count": 1,
            "input_items": inputs,
            "input_power": 0,
            "input_fluid": null,
            "tick": 1600,
            "result_items": [
                {
                    "item": output,
                    "count": 6
                }
            ]
        }).id('kubejs:' + output.split(':')[1])
    }


})