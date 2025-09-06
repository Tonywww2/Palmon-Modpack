ServerEvents.recipes(event => {
    // t1
    alloy([
        Item.of('#forge:ingots/copper', 2).toJson(),
        Item.of('#forge:ingots/gold', 1).toJson(),
        Item.of('#forge:ingots/bismuth', 1).toJson()],
        Ingredient.of('#kubejs:t1_anvils').toJson(),
        'tfc:metal/ingot/bismuth_bronze',
        3,
        300,
        'kubejs:production_alloy_bismuth_bronze'
    )

    alloy([
        Item.of('#forge:ingots/copper', 1).toJson(),
        Item.of('#forge:ingots/electrum', 1).toJson()],
        Ingredient.of('#kubejs:t1_anvils').toJson(),
        'tfc:metal/ingot/black_bronze',
        2,
        200,
        'kubejs:production_alloy_black_bronze'
    )

    alloy([
        Item.of('#forge:ingots/tin', 1).toJson(),
        Item.of('#forge:ingots/copper', 9).toJson()],
        Ingredient.of('#kubejs:t1_anvils').toJson(),
        'tfc:metal/ingot/bronze',
        10,
        1000,
        'kubejs:production_alloy_bronze'
    )
    // t2
    alloy([
        Item.of('#forge:ingots/zinc', 1).toJson(),
        Item.of('#forge:ingots/copper', 9).toJson()],
        Ingredient.of('#kubejs:t2_anvils').toJson(),
        'tfc:metal/ingot/brass',
        10,
        1200,
        'kubejs:production_alloy_brass'
    )

    alloy([
        Item.of('#forge:ingots/silver', 3).toJson(),
        Item.of('#forge:ingots/copper', 2).toJson()],
        Ingredient.of('#kubejs:t2_anvils').toJson(),
        'tfc:metal/ingot/sterling_silver',
        5,
        700,
        'kubejs:production_alloy_sterling_silver'
    )

    alloy([
        Item.of('#forge:ingots/gold', 3).toJson(),
        Item.of('#forge:ingots/copper', 1).toJson()],
        Ingredient.of('#kubejs:t2_anvils').toJson(),
        'tfc:metal/ingot/rose_gold',
        4,
        600,
        'kubejs:production_alloy_rose_gold'
    )

    alloy([
        Item.of('#forge:ingots/nickel', 1).toJson(),
        Item.of('#forge:ingots/copper', 1).toJson()],
        Ingredient.of('#kubejs:t2_anvils').toJson(),
        'thermal:constantan_ingot',
        2,
        400,
        'kubejs:production_alloy_constantan'
    )

    alloy([
        Item.of('#forge:ingots/gold', 1).toJson(),
        Item.of('#forge:ingots/silver', 1).toJson()],
        Ingredient.of('#kubejs:t2_anvils').toJson(),
        'thermal:electrum_ingot',
        2,
        400,
        'kubejs:production_alloy_electrum'
    )

    // t4
    alloy([
        Item.of('#forge:ingots/steel', 2).toJson(),
        Item.of('#forge:ingots/black_bronze', 1).toJson(),
        Item.of('#forge:ingots/nickel', 1).toJson()],
        Ingredient.of('#kubejs:t4_anvils').toJson(),
        'tfc:metal/ingot/weak_steel',
        4,
        800,
        'kubejs:production_alloy_weak_steel'
    )

    alloy([
        Item.of('#forge:ingots/steel', 1).toJson(),
        Item.of('#forge:ingots/weak_steel', 1).toJson()],
        Ingredient.of('#kubejs:t4_anvils').toJson(),
        'tfc:metal/ingot/black_steel',
        2,
        600,
        'kubejs:production_alloy_black_steel'
    )

    // t5
    alloy([
        Item.of('#forge:ingots/black_steel', 5).toJson(),
        Item.of('#forge:ingots/steel', 2).toJson(),
        Item.of('#forge:ingots/brass', 1).toJson(),
        Item.of('#forge:ingots/rose_gold', 1).toJson()],
        Ingredient.of('#kubejs:t5_anvils').toJson(),
        'tfc:metal/ingot/weak_red_steel',
        9,
        1600,
        'kubejs:production_alloy_weak_red_steel'
    )
    
    alloy([
        Item.of('#forge:ingots/black_steel', 5).toJson(),
        Item.of('#forge:ingots/steel', 2).toJson(),
        Item.of('#forge:ingots/bismuth_bronze', 1).toJson(),
        Item.of('#forge:ingots/sterling_silver', 1).toJson()],
        Ingredient.of('#kubejs:t5_anvils').toJson(),
        'tfc:metal/ingot/weak_blue_steel',
        9,
        1600,
        'kubejs:production_alloy_weak_blue_steel'
    )
    
    // t6
    alloy([
        Item.of('#forge:ingots/black_steel', 1).toJson(),
        Item.of('#forge:ingots/weak_blue_steel', 1).toJson()],
        Ingredient.of('#kubejs:t6_anvils').toJson(),
        'tfc:metal/ingot/blue_steel',
        1,
        1600,
        'kubejs:production_alloy_blue_steel'
    )

    alloy([
        Item.of('#forge:ingots/black_steel', 1).toJson(),
        Item.of('#forge:ingots/weak_red_steel', 1).toJson()],
        Ingredient.of('#kubejs:t6_anvils').toJson(),
        'tfc:metal/ingot/red_steel',
        1,
        1600,
        'kubejs:production_alloy_red_steel'
    )

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "SPECIAL_ATTACK",
        "min_level": 30,
        "required_type": "rock",
        "base_hp": 20,
        "base_atk": 20,
        "base_def": 20,
        "base_spa": 20,
        "base_spd": 20,
        "base_spe": 20,
        "area_blocks": [
            {
                "tag": "kubejs:t3_anvils"
            },
            {
                "tag": "forge:magma_block"
            }
        ],
        "block_count": 1,
        "input_items": [
            {
                "tag": "forge:ingots/cast_iron",
                "count": 1
            },
            {
                "tag": "tfc:flux",
                "count": 1
            },
            {
                "tag": "minecraft:coals",
                "count": 2
            }
        ],
        "input_power": 0,
        "input_fluid": {
            "fluid": "minecraft:water",
            "amount": 1000
        },
        "tick": 1000,
        "result_items": [
            {
                "item": "tfc:metal/ingot/steel",
                "count": 1
            }
        ]
    }).id('kubejs:production_alloy_steel')

    function alloy(inputs, anvil, output, count, tick, id) {
        event.custom({
            "type": "palmon:processing",
            "category": "misc",
            "focus_stat": "DEFENCE",
            "min_level": 30,
            "required_type": "steel",
            "base_hp": 0,
            "base_atk": 0,
            "base_def": 40,
            "base_spa": 0,
            "base_spd": 0,
            "base_spe": 0,
            "area_blocks": [
                anvil,
                {
                    "tag": "forge:magma_block"
                }
            ],
            "block_count": 1,
            "input_items": inputs,
            "input_power": 0,
            "input_fluid": {
                "fluid": "minecraft:water",
                "amount": 500
            },
            "tick": tick,
            "result_items": [
                {
                    "item": output,
                    "count": count
                }
            ]
        }).id(id)

        event.custom({
            "type": "palmon:processing",
            "category": "misc",
            "focus_stat": "DEFENCE",
            "min_level": 25,
            "required_type": "steel",
            "base_hp": 0,
            "base_atk": 0,
            "base_def": 40,
            "base_spa": 0,
            "base_spd": 0,
            "base_spe": 0,
            "area_blocks": [
                {
                    "item": 'cataclysm:mechanical_fusion_anvil'
                },
                {
                    "tag": "forge:magma_block"
                },
                {
                    "item": 'embers:dawnstone_anvil'
                }
            ],
            "block_count": 1,
            "input_items": inputs,
            "input_power": 0,
            "input_fluid": {
                "fluid": "minecraft:water",
                "amount": 250
            },
            "tick": tick - 150,
            "result_items": [
                {
                    "item": output,
                    "count": count + 1
                }
            ]
        }).id(id + '_sp')
    }
})