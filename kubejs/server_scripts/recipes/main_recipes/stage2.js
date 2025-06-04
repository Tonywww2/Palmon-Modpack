ServerEvents.recipes(event => {

    event.shapeless('4x kubejs:ancient_netherite', ['2x tinkers_advanced:blaze_netherite', 'cataclysm:monstrous_horn']).id('kubejs:ancient_netherite_1_s2')
    event.shapeless('9x kubejs:ancient_netherite', ['2x tinkers_advanced:blaze_netherite', 'cataclysm:infernal_forge']).id('kubejs:ancient_netherite_2_s2')

    event.stonecutting('botania:apothecary_default', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_1_s2')
    event.stonecutting('botania:apothecary_forest', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_2_s2')
    event.stonecutting('botania:apothecary_plains', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_3_s2')
    event.stonecutting('botania:apothecary_mountain', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_4_s2')
    event.stonecutting('botania:apothecary_fungal', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_5_s2')
    event.stonecutting('botania:apothecary_swamp', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_6_s2')
    event.stonecutting('botania:apothecary_desert', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_7_s2')
    event.stonecutting('botania:apothecary_taiga', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_8_s2')
    event.stonecutting('botania:apothecary_mesa', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_9_s2')
    event.stonecutting('botania:apothecary_mossy', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_10_s2')
    event.stonecutting('botania:apothecary_livingrock', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_11_s2')
    event.stonecutting('botania:apothecary_deepslate', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_12_s2')

    event.shaped('palmon:boost_frame_5', [
        'ABA',
        'ACA',
        'ADA'
    ],
        {
            A: 'palmon:refined_m_steel_ingot',
            B: 'botania:gaia_ingot',
            C: 'palmon:boost_frame_4',
            D: 'industrialforegoing:machine_frame_supreme'
        }).id('kubejs:boost_frame_5_s2')

    event.shaped('minecraft:netherite_upgrade_smithing_template', [
        'ABA',
        'ACA',
        'AAA'
    ],
        {
            A: '#forge:gems/diamond',
            B: '#forge:ingots/netherite_scrap',
            C: '#forge:netherrack'
        }).id('kubejs:netherite_upgrade_smithing_template_s2')

    event.shaped('cobblefordays:tier_3', [
        'AAA',
        'BDC',
        'AAA'
    ],
        {
            A: 'embers:dawnstone_aspectus',
            B: 'minecraft:water_bucket',
            C: 'minecraft:lava_bucket',
            D: 'cobblefordays:tier_2'
        }).id('kubejs:cobble_t3_s2')

    event.shaped('cobblefordays:tier_2', [
        'AAA',
        'BDC',
        'AAA'
    ],
        {
            A: 'embers:dawnstone_plate',
            B: 'minecraft:water_bucket',
            C: 'minecraft:lava_bucket',
            D: 'cobblefordays:tier_1'
        }).id('kubejs:cobble_t2_s2')

    event.shaped('cobblefordays:tier_1', [
        'AAA',
        'BDC',
        'AAA'
    ],
        {
            A: 'embers:dawnstone_ingot',
            B: 'minecraft:water_bucket',
            C: 'minecraft:lava_bucket',
            D: 'kubejs:alpha_framework'
        }).id('kubejs:cobble_t1_s2')

    event.shaped('embers:mechanical_core', [
        'ACA',
        ' B ',
        'ADA'
    ],
        {
            A: '#forge:ingots/cast_iron',
            B: 'kubejs:alpha_framework',
            C: 'embers:caminite_bricks',
            D: 'malum:block_of_blazing_quartz'
        }).id('kubejs:mechanical_core_s2')

    event.shaped('embers:ember_activator', [
        'AAA',
        'ACA',
        'BDB'
    ],
        {
            A: '#forge:plates/copper',
            B: '#forge:plates/iron',
            C: 'embers:ember_crystal',
            D: 'embers:mechanical_core'
        }).id('kubejs:ember_activator_s2')

    event.shaped('embers:melter', [
        'ACA',
        'ADA',
        'BEB'
    ],
        {
            A: 'embers:caminite_bricks',
            B: '#forge:plates/iron',
            C: 'embers:caminite_plate',
            D: 'embers:mechanical_core',
            E: 'malum:block_of_blazing_quartz'
        }).id('kubejs:melter_s2')

    event.shaped('embers:stamper', [
        'ABA',
        'ACA',
        'A A'
    ],
        {
            A: 'embers:caminite_brick',
            B: 'embers:mechanical_core',
            C: '#forge:storage_blocks/iron'
        }).id('kubejs:stamper_s2')


    event.shaped('ad_astra:nasa_workbench', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:plates/steel',
            B: 'kubejs:beta_framework',
            C: 'palmon:m_crystal',
            D: 'tfc:brass_mechanisms',
            E: '#forge:plates/dawnstone'
        }).id('kubejs:nasa_workbench_s2')

    event.shaped('ad_astra:steel_engine', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:plates/steel',
            B: '#forge:rods/steel',
            C: 'kubejs:beta_framework',
            D: 'ad_astra:engine_frame',
            E: 'ad_astra:fan'
        }).id('kubejs:steel_engine_s2')

    event.custom({
        "type": "embers:boring",
        "dimensions": [
            "kubejs:tfc_planet"
        ],
        "max_height": -57,
        "output": {
            "item": "embers:ember_crystal"
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 20
    }).id("kubejs:ember_crystal_1_s2")

    event.custom({
        "type": "embers:boring",
        "dimensions": [
            "kubejs:tfc_planet"
        ],
        "max_height": -57,
        "output": {
            "item": "embers:ember_grit"
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 20
    }).id("kubejs:ember_grit_1_s2")

    event.custom({
        "type": "embers:boring",
        "dimensions": [
            "kubejs:tfc_planet"
        ],
        "max_height": -57,
        "output": {
            "item": "embers:ember_shard"
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 60
    }).id("kubejs:ember_shard_1_s2")

})