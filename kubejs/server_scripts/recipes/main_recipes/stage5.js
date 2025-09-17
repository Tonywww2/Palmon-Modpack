ServerEvents.recipes(event => {
    event.shapeless('2x hostilenetworks:prediction_matrix', ['kubejs:collapse_prediction']).id('kubejs:prediction_matrix_rec_s5')
    event.shapeless('dustandash:redstone_vacuum_tube', ['immersiveengineering:electron_tube']).id('kubejs:redstone_vacuum_tube_s5')
    event.shapeless('immersiveengineering:electron_tube', ['dustandash:redstone_vacuum_tube']).id('kubejs:electron_tube_s5')
    event.shapeless('dustandash:ash_steel_cylinder', ['ad_astra:steel_tank']).id('kubejs:ash_steel_cylinder_s5')
    event.shapeless('ad_astra:steel_tank', ['dustandash:ash_steel_cylinder']).id('kubejs:steel_tank_s5')
    event.shapeless('9x aetherworks:aether_shard', [Item.of('tconstruct:copper_can', '{fluid:"aetherworks:aether_gas_impure"}').weakNBT()]).id('kubejs:aether_shard_9_s5')

    event.shapeless('kubejs:alfheim_iridescent',
        ['3x mythicbotany:raw_elementium', '4x kubejs:iridescent', 'botania:bifrost_perm', Item.of('tconstruct:tool_binding', '{Material:"tconstruct:alfsteel"}').weakNBT()])
        .id('kubejs:alfheim_iridescent_s5')

    event.smithing('dustandash:centrifuge', 'dustandash:iron_structural_components', 'nuclearcraft:centrifuge', 'dustandash:ash_steel_ingot').id('kubejs:centrifuge_s5')

    event.shaped(
        'appbot:mana_cell_housing',
        [
            'QSQ',
            'C C',
            'III'
        ],
        {
            I: 'botania:manasteel_ingot',
            Q: 'ae2:quartz_glass',
            S: 'botania:gaia_ingot',
            C: 'cataclysm:ignitium_ingot'
        }
    ).id('kubejs:mana_cell_housing_s5')

    event.shaped('nuclearcraft:plate_basic', [
        'BA',
        'AB'
    ],
        {
            A: 'kubejs:end_steel',
            B: '#forge:dusts/graphite'
        }).id('kubejs:nc_plate_basic_s5')

    event.shaped('rats:chunky_cheese_token', [
        'ABA',
        'B B',
        'ABA'
    ],
        {
            A: 'rats:token_piece',
            B: 'kubejs:reinforced_sheet'
        }).id('kubejs:chunky_cheese_token_s5')

    event.shaped('nuclearcraft:alloy_smelter', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:ingots/lead',
            B: 'kubejs:end_steel',
            C: '#forge:dusts/redstone',
            D: 'minecraft:blast_furnace',
            E: 'nuclearcraft:coil_copper'
        }).id('kubejs:nc_alloy_smelter_s5')

    event.shaped('nuclearcraft:manufactory', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:ingots/lead',
            B: 'kubejs:end_steel',
            C: '#forge:dusts/redstone',
            D: 'minecraft:piston',
            E: 'nuclearcraft:coil_copper'
        }).id('kubejs:nc_manufactory_s5')

    event.shaped('forestry:sturdy_machine', [
        'ABA',
        'A A',
        'ABA'
    ],
        {
            A: '#forge:ingots/bronze',
            B: 'kubejs:end_steel'
        }).id('kubejs:sturdy_machine_s5')

    event.shaped('forestry:carpenter', [
        'ABA',
        'ACA',
        'ABA'
    ],
        {
            A: 'kubejs:end_steel',
            B: 'forestry:electron_tube_emerald',
            C: 'forestry:sturdy_machine'
        }).id('kubejs:carpenter_s5')

    event.shaped('forestry:squeezer', [
        'ABA',
        'DCD',
        'ABA'
    ],
        {
            A: '#forge:ingots/tin',
            B: 'forestry:electron_tube_emerald',
            C: 'forestry:sturdy_machine',
            D: 'kubejs:end_steel'
        }).id('kubejs:squeezer_s5')

    event.custom({
        "type": "forestry:carpenter",
        "box": {
            "item": 'forestry:impregnated_casing'
        },
        "liquid": {
            "Amount": 5000,
            "FluidName": "minecraft:water"
        },
        "recipe": {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "X": {
                    "tag": "forge:gems/diamond"
                },
                "Y": {
                    "item": "forestry:sturdy_machine"
                },
                "Z": {
                    "item": 'kubejs:end_steel'
                }
            },
            "pattern": [
                "XZX",
                " Y ",
                "XZX"
            ],
            "result": {
                "item": "forestry:hardened_machine"
            },
            "show_notification": true
        },
        "time": 150
    }).id('kubejs:hardened_machine_s5')

    event.custom({
        "type": "forestry:fabricator",
        "molten": {
            "Amount": 500,
            "FluidName": "forestry:glass"
        },
        "plan": [],
        "recipe": {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": 'kubejs:end_steel'
                },
                "B": {
                    "item": 'forestry:circuit_board_intricate'
                },
                "E": {
                    "item": 'forestry:electron_tube_emerald'
                },
                "A": {
                    "item": 'forestry:hardened_machine'
                }
            },
            "pattern": [
                "#E#",
                "BAB",
                "#E#"
            ],
            "result": {
                "item": "forestry:flexible_casing"
            },
            "show_notification": true
        }
    }).id('kubejs:flexible_casing_s5')

    event.shaped('malum:spirit_altar', [
        'DAD',
        'BCB',
        'CCC'
    ],
        {
            A: 'malum:processed_soulstone',
            B: 'kubejs:stable_desh_ingot',
            C: '#malum:runewood_planks',
            D: 'kubejs:end_steel'
        }).id('kubejs:spirit_altar_s5')


    event.shaped('embers:alchemy_tablet', [
        'AAA',
        'BCB',
        'BDB'
    ],
        {
            A: '#forge:plates/dawnstone',
            B: 'kubejs:end_steel',
            C: 'embers:ember_crystal',
            D: 'embers:mechanical_core'
        }).id('kubejs:alchemy_tablet_s5')


    event.shaped('modularrouters:modular_router', [
        'CAC',
        'ABA',
        'CAC'
    ],
        {
            A: 'kubejs:end_steel',
            B: 'kubejs:delta_framework',
            C: '#forge:plates/dawnstone'
        }).id('kubejs:modular_router_s5')

    event.shaped('2x sfm:cable', [
        'DAC',
        'ABA',
        'CAD'
    ],
        {
            A: 'integrateddynamics:cable',
            B: 'integratedterminals:menril_glass',
            C: 'kubejs:end_steel',
            D: '#forge:plates/steel'
        }).id('kubejs:sfm_cable_s5')

    event.shaped('sfm:manager', [
        'CAC',
        'ABA',
        'DAE'
    ],
        {
            A: 'sfm:cable',
            B: 'kubejs:delta_framework',
            C: '#forge:chests',
            D: 'integrateddynamics:variablestore',
            E: 'integrateddynamics:logic_programmer'
        }).id('kubejs:sfm_manager_s5')

    event.shaped(Item.of('rftoolsbase:machine_frame', 1 + global.frameworkAddition), [
        'ACA',
        'BDB',
        'ACA'
    ],
        {
            A: 'kubejs:end_steel',
            B: '#forge:plates/dawnstone',
            C: '#forge:dyes/blue',
            D: 'kubejs:delta_framework'
        }).id('kubejs:rft_machine_frame_s5')

    event.shaped(Item.of('minecraft:wandering_trader_spawn_egg'), [
        ' A ',
        'BCD',
        ' E '
    ],
        {
            A: 'functionalstorage:netherite_upgrade',
            B: 'mythicbotany:alfsteel_block',
            C: '#forge:eggs',
            D: '#forge:storage_blocks/terrasteel',
            E: Item.of('mekanism:basic_fluid_tank', '{mekData:{FluidTanks:[{stored:{Amount:32000,FluidName:"tconstruct:liquid_soul"}}]}}').weakNBT()
        }).id('kubejs:wandering_trader_spawn_egg_s5')

    event.recipes.create.item_application('create:brass_casing',
        ['create:andesite_casing', 'kubejs:end_steel']
    ).id('kubejs:cr_brass_casing_s5')

    event.recipes.thermal.smelter('2x kubejs:hallowed_soul_steel_ingot',
        ['2x kubejs:end_steel', '#forge:ingots/soul_stained_steel', 'malum:hallowed_gold_ingot']
    ).energy(204800)
        .id('kubejs:hallowed_soul_steel_ingot_s5')

    event.recipes.thermal.smelter('2x kubejs:end_steel',
        ['3x techreborn:sodalite_dust', '5x #forge:ingots/draconium', '2x integrateddynamics:crystalized_chorus_block']
    ).energy(204800)
        .id('kubejs:end_steel_s5')

    event.recipes.thermal.press('2x dustandash:glass_container',
        ['#forge:glass', 'thermal:press_unpacking_die']
    ).energy(10240)
        .id('kubejs:glass_container_press_s5')

    event.recipes.create.mixing('12x fluxnetworks:flux_core', [
        '16x fluxnetworks:flux_dust',
        '8x #forge:obsidian',
        '4x minecraft:ender_eye',
        '4x kubejs:end_steel',
        'kubejs:gamma_framework'
    ]).superheated().id('kubejs:flux_core_s5')

    event.recipes.create.compacting([Item.of('3x tinkers_advanced:activated_chromatic_steel'), Item.of('cataclysm:void_core')],
        [
            Item.of('9x tinkers_advanced:basalz_signalum'),
            Item.of('9x tinkers_advanced:blitz_lumium'),
            Item.of('9x tinkers_advanced:blizz_enderium'),
            Item.of('5x tinkers_advanced:blaze_netherite'),
            Item.of('cataclysm:void_core')
        ]).superheated()
        .processingTime(400)
        .id('kubejs:activated_chromatic_steel_sp_s5')

    event.recipes.create.pressing

    event.custom({
        "type": "dustandash:integrate",
        "level": 2,
        "ingredients": [
            {
                "item": 'dustandash:titanium_aluminum_alloy'
            },
            {
                "item": 'dustandash:titanium_tungsten_alloy'
            },
            {
                "item": 'kubejs:collapse_prediction'
            },
            {
                "item": 'kubejs:collapse_prediction'
            },
            {
                "item": 'kubejs:collapse_prediction'
            },
            {
                "item": 'kubejs:collapse_prediction'
            },
            {
                "item": 'kubejs:collapse_prediction'
            },
            {
                "item": 'kubejs:collapse_prediction'
            }
        ],
        "output": {
            "item": "kubejs:basepoint_alloy",
            "count": 1
        }

    }).id('kubejs:basepoint_alloy_s5')

    event.custom({
        "type": "thermal:bottler",
        "energy": 10240,
        "ingredients": [
            {
                "item": 'dustandash:glass_container'
            },
            {
                "fluid_tag": "forge:hydrogen",
                "amount": 800
            }
        ],
        "result": [
            {
                "item": 'dustandash:hydrogen'
            }
        ]
    }).id('kubejs:hydrogen_bottler_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "HP",
        "min_level": 60,
        "required_type": "poison",
        "base_hp": 90,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'aetherworks:aether_forge'
            },
            {
                "item": 'aetherworks:forge_metal_former'
            },
            {
                "item": 'aetherworks:forge_vent'
            }
        ],
        "block_count": 1,
        "input_items": [
            Item.of('2x #forge:ingots/dawnstone').toJson()
        ],
        "input_power": 0,
        "input_fluid": {
            "fluid": "aetherworks:aether_gas",
            "amount": 160
        },
        "tick": 600,
        "result_items": [
            Item.of('aetherworks:ingot_aether').toJson()
        ]
    }).id('kubejs:ingot_aether_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "HP",
        "min_level": 60,
        "required_type": "poison",
        "base_hp": 90,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'aetherworks:aether_forge'
            },
            {
                "item": 'aetherworks:forge_metal_former'
            },
            {
                "item": 'aetherworks:forge_vent'
            }
        ],
        "block_count": 1,
        "input_items": [
            Item.of('#forge:gems/diamond').toJson()
        ],
        "input_power": 0,
        "input_fluid": {
            "fluid": "aetherworks:aether_gas",
            "amount": 320
        },
        "tick": 800,
        "result_items": [
            Item.of('aetherworks:gem_aether').toJson()
        ]
    }).id('kubejs:gem_aether_1_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "HP",
        "min_level": 60,
        "required_type": "poison",
        "base_hp": 90,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'aetherworks:aether_forge'
            },
            {
                "item": 'aetherworks:forge_metal_former'
            },
            {
                "item": 'aetherworks:forge_vent'
            }
        ],
        "block_count": 1,
        "input_items": [
            Item.of('minecraft:emerald').toJson()
        ],
        "input_power": 0,
        "input_fluid": {
            "fluid": "aetherworks:aether_gas",
            "amount": 320
        },
        "tick": 800,
        "result_items": [
            Item.of('aetherworks:gem_aether').toJson()
        ]
    }).id('kubejs:gem_aether_2_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "HP",
        "min_level": 60,
        "required_type": "poison",
        "base_hp": 90,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'aetherworks:aether_forge'
            },
            {
                "item": 'aetherworks:forge_metal_former'
            },
            {
                "item": 'aetherworks:forge_vent'
            }
        ],
        "block_count": 1,
        "input_items": [
            Item.of('aetherworks:aether_shard', 13).toJson(),
            Item.of('tconstruct:copper_can', 1).toJson()
        ],
        "input_power": 40000,
        "input_fluid": {
            "fluid": "aetherworks:alchemic_precursor",
            "amount": 90
        },
        "tick": 600,
        "result_items": [
            Item.of('tconstruct:copper_can', '{fluid:"aetherworks:aether_gas"}').toJson()
        ]
    }).id('kubejs:aether_gas_acc_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "ATTACK",
        "min_level": 60,
        "required_type": null,
        "base_hp": 20,
        "base_atk": 90,
        "base_def": 0,
        "base_spa": 40,
        "base_spd": 10,
        "base_spe": 20,
        "area_blocks": [
            {
                "item": 'integrateddynamics:crystalized_chorus_block'
            },
            {
                "item": 'integratedterminals:menril_glass'
            },
        ],
        "block_count": 12,
        "input_items": [
            {
                "item": 'minecraft:clay_ball',
                "count": 16
            },
            {
                "tag": "forge:glass",
                "count": 8
            },
            {
                "item": 'palmon:stone',
                "count": 8
            },
            {
                "tag": 'forge:ingots/bronze',
                "count": 8
            },
            {
                "tag": 'forge:ingots/constantan',
                "count": 4
            },
            {
                "tag": 'forge:ingots/rose_gold',
                "count": 2
            },
            {
                "tag": 'forge:ingots/soul_infused',
                "count": 1
            },
            {
                "item": 'palmon:m_crystal',
                "count": 1
            }
        ],
        "input_power": 409600,
        "input_fluid": {
            "fluid": "thermal:refined_fuel",
            "amount": 500
        },
        "tick": 1000,
        "result_items": [
            {
                "item": 'hostilenetworks:prediction_matrix',
                "count": 32
            },
            {
                "item": 'minecraft:sand',
                "count": 4
            }
        ]
    }).id('kubejs:prediction_matrix_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "HP",
        "min_level": 90,
        "required_type": null,
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'supplementaries:sugar_cube'
            },
            {
                "item": 'cobblemon:healing_machine'
            },
            {
                "item": 'cobblemon:monitor'
            }
        ],
        "block_count": 4,
        "input_items": [
            Item.of('minecraft:sugar', 48).toJson(),
            Item.of('minecraft:honey_bottle', 32).toJson(),
            Item.of('minecraft:paper', 32).toJson(),
            Item.of('supplementaries:sugar_cube', 8).toJson(),
            Item.of('nuclearcraft:unsweetened_chocolate', 8).toJson(),
            Item.of('forestry:ambrosia', 2).toJson(),
            Item.of('kubejs:collapse_prediction', 2).toJson(),
            Item.of('palmon:m_crystal', 2).toJson()
        ],
        "input_power": 204800,
        "input_fluid": {
            "fluid": "minecraft:water",
            "amount": 8000
        },
        "tick": 1600,
        "result_items": [
            {
                "item": 'cobblemon:rare_candy',
                "count": 1
            }
        ]
    }).id('kubejs:rare_candy_s5')

    event.recipes.create.compacting(['2x kubejs:collapse_prediction'],
        [
            '4x createaddition:biomass_pellet',
            '3x hostilenetworks:overworld_prediction',
            '2x hostilenetworks:nether_prediction',
            'hostilenetworks:end_prediction',
            Fluid.of('tinkers_advanced:molten_activated_chromatic_steel', 15),
        ]
    ).superheated()
        .id('kubejs:collapse_prediction_s5')


    var t = '#forge:processors/villiaumite'
    event.recipes.createSequencedAssembly([
        'kubejs:helium_3_crystal_infinity',
    ], t, [
        event.recipes.createFilling(t, [t, Fluid.of('kubejs:hybrid_fuel', 50)]),
        event.recipes.createDeploying(t, [t, 'kubejs:helium_3_crystal']),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(t)
        .loops(10)
        .id('kubejs:helium_3_crystal_infinity_s5')


    event.custom({
        "type": "embers:boring",
        "dimensions": [
            "mythicbotany:alfheim"
        ],
        "max_height": -57,
        "output": {
            "item": "kubejs:iridescent"
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 20
    }).id("kubejs:iridescent_s5")

    event.custom({
        "type": "embers:boring",
        "dimensions": [
            "mythicbotany:alfheim"
        ],
        "max_height": -57,
        "output": {
            "item": "embers:ember_grit"
        },
        "required_block": {
            "amount": 3,
            "block_tag": "embers:world_bottom"
        },
        "weight": 160
    }).id("kubejs:ember_grit_s5")

    event.custom({
        "type": "palmon:production",
        "category": "misc",
        "focus_stat": "SPECIAL_ATTACK",
        "min_level": 60,
        "required_type": null,
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 120,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'deeperdarker:crystallized_amber'
            }
        ],
        "block_count": 12,
        "tick": 1600,
        "result_items": [
            {
                "item": 'deeperdarker:crystallized_amber',
                "count": 2
            }
        ],
        "result_power": 0,
        "result_fluid": null
    }
    ).id('kubejs:crystallized_amber_s5')

    event.custom({
        "type": "techreborn:fusion_reactor",
        "power": 65534,
        "time": 8192,
        "start-power": 400000,
        "min-size": 24,
        "ingredients": [
            Item.of('kubejs:helium_3_crystal_infinity').toJson(),
            {
                "fluid": "techreborn:deuterium",
                "holder": "techreborn:cell"
            }
        ],
        "results": [
            {
                "item": "techreborn:cell",
                "nbt": {
                    "fluid": "techreborn:heliumplasma"
                }
            }
        ]
    }).id('kubejs:helium_3_crystal_infinity_fusion_reactor_s5')

    event.custom({
        "type": "nuclearcraft:crystallizer",
        "inputFluids": [
            {
                "amount": 4000,
                "tag": 'forge:helium_3'
            }
        ],
        "output": [
            {
                "item": "kubejs:helium_3_crystal"
            }
        ],
        "powerModifier": 1.0,
        "radiation": 1.0,
        "timeModifier": 1.5
    }).id('kubejs:helium_3_crystal_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "DEFENCE",
        "min_level": 70,
        "required_type": null,
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'deeperdarker:gloomy_geyser'
            }
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'deeperdarker:sculk_tendrils',
                "count": 4
            },
            {
                "item": 'deeperdarker:bloom_berries',
                "count": 4
            },
            {
                "item": 'deeperdarker:gloomslate',
                "count": 2
            },
            {
                "item": 'deeperdarker:heart_of_the_deep',
                "count": 1
            }
        ],
        "input_power": 0,
        "input_fluid": null,
        "tick": 2400,
        "result_items": [
            {
                "item": 'kubejs:otherside_mixture',
                "count": 2
            }
        ]
    }).id('kubejs:otherside_mixture_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "SPECIAL_DEFENCE",
        "min_level": 80,
        "required_type": null,
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'deeperdarker:gloomy_geyser'
            }
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'deeperdarker:glowing_roots',
                "count": 8
            },
            {
                "item": 'deeperdarker:crystallized_amber',
                "count": 4
            },
            {
                "item": 'deeperdarker:soundproof_glass',
                "count": 2
            },
            {
                "item": 'kubejs:otherside_mixture',
                "count": 2
            },
            {
                "item": 'deeperdarker:resonarium_plate',
                "count": 1
            }
        ],
        "input_power": 0,
        "input_fluid": null,
        "tick": 3600,
        "result_items": [
            {
                "item": 'kubejs:light_of_inlixaland',
                "count": 1
            }
        ]
    }).id('kubejs:light_of_inlixaland_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "SPECIAL_DEFENCE",
        "min_level": 80,
        "required_type": "fairy",
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 78,
        "base_spd": 78,
        "base_spe": 38,
        "area_blocks": [
            {
                "item": 'botania:glimmering_dreamwood'
            },
            {
                "item": 'botania:elementium_block'
            }
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'mythicbotany:kvasir_blood',
                "count": 1
            },
            {
                "item": 'mythicbotany:asgard_rune',
                "count": 2
            },
            {
                "item": 'mythicbotany:vanaheim_rune',
                "count": 2
            },
            {
                "item": 'mythicbotany:midgard_rune',
                "count": 2
            },
            {
                "item": 'mythicbotany:joetunheim_rune',
                "count": 2
            },
            {
                "item": 'mythicbotany:muspelheim_rune',
                "count": 1
            },
            {
                "item": 'mythicbotany:niflheim_rune',
                "count": 1
            },
            {
                "item": 'mythicbotany:nidavellir_rune',
                "count": 1
            }
        ],
        "input_power": 40800000,
        "input_fluid": {
            "fluid": "forestry:honey",
            "amount": 8000
        },
        "tick": 9600,
        "result_items": [
            {
                "item": 'mythicbotany:kvasir_mead',
                "count": 1
            },
            {
                "item": 'mythicbotany:kvasir_blood',
                "count": 1
            },
        ]
    }).id('kubejs:kvasir_mead_s5')

    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "sjap_adder:kamuyex_fire",
        "category": "equipment",
        "key": {
            "A": {
                "item": "slashblade:proudsoul_sphere"
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "slashblade_addon:kamuy_fire",
                    "proud_soul": 3000,
                    "refine": 10
                }
            },
            "C": {
                "item": "minecraft:nether_star"
            },
            "D": {
                "item": 'kubejs:end_steel'
            },
            "E": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "slashblade_addon:laemmle",
                    "proud_soul": 3000,
                    "refine": 10
                }
            }
        },
        "pattern": [
            "ABA",
            "CDC",
            "AEA"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    }).id('kubejs:kamuyex_fire_s5')

    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "sjap_adder:kamuyex_life",
        "category": "equipment",
        "key": {
            "A": {
                "item": "slashblade:proudsoul_sphere"
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "sjap_adder:kamuy_life",
                    "proud_soul": 3000,
                    "refine": 10
                }
            },
            "C": {
                "item": "minecraft:nether_star"
            },
            "D": {
                "item": 'kubejs:end_steel'
            },
            "E": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "slashblade_addon:snow_crow",
                    "proud_soul": 3000,
                    "refine": 10
                }
            }
        },
        "pattern": [
            "ABA",
            "CDC",
            "AEA"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    }).id('kubejs:kamuyex_life_s5')

    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "sjap_adder:kamuyex_ligghtning",
        "category": "equipment",
        "key": {
            "A": {
                "item": "slashblade:proudsoul_sphere"
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "slashblade_addon:kamuy_lightning",
                    "proud_soul": 3000,
                    "refine": 10
                }
            },
            "C": {
                "item": "minecraft:nether_star"
            },
            "D": {
                "item": 'kubejs:end_steel'
            },
            "E": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "slashblade_addon:green_mist",
                    "proud_soul": 3000,
                    "refine": 10
                }
            }
        },
        "pattern": [
            "ABA",
            "CDC",
            "AEA"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    }).id('kubejs:kamuyex_lightning_s5')

    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "sjap_adder:kamuyex_water",
        "category": "equipment",
        "key": {
            "A": {
                "item": "slashblade:proudsoul_sphere"
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "slashblade_addon:kamuy_water",
                    "proud_soul": 3000,
                    "refine": 10
                }
            },
            "C": {
                "item": "minecraft:nether_star"
            },
            "D": {
                "item": 'kubejs:end_steel'
            },
            "E": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "slashblade_addon:kirisaya",
                    "proud_soul": 3000,
                    "refine": 10
                }
            }
        },
        "pattern": [
            "ABA",
            "CDC",
            "AEA"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    }).id('kubejs:kamuyex_water_s5')

    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "sjap_adder:nihilbxex",
        "category": "equipment",
        "key": {
            "A": {
                "item": "minecraft:diamond_block"
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "name": "sjap_adder:nihilulex"
                }
            },
            "C": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "name": "slashblade_addon:nihilbx"
                }
            },
            "D": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "name": "sjap_adder:crimsoncherryex"
                }
            }
        },
        "pattern": [
            "ABA",
            "ACA",
            "ADA"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    }).id('kubejs:nihilbxex_s5')

    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "sjap_adder:nihilulex",
        "category": "equipment",
        "key": {
            "A": {
                "item": 'kubejs:end_steel'
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 3000,
                    "name": "slashblade_addon:nihilul",
                    "proud_soul": 30000,
                    "refine": 20
                }
            },
            "C": {
                "item": "slashblade:proudsoul_trapezohedron"
            },
            "D": {
                "item": "minecraft:netherite_ingot"
            },
            "E": {
                "item": "minecraft:totem_of_undying"
            },
            "F": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 3000,
                    "name": "slashblade_addon:dark_raven",
                    "proud_soul": 30000,
                    "refine": 20
                }
            }
        },
        "pattern": [
            "ABA",
            "CDE",
            "AFA"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    }).id('kubejs:nihilulex_s5')

    event.custom({
        "type": "slashblade:slashblade_smithing",
        "addition": {
            "item": 'draconicevolution:dragon_heart'
        },
        "base": {
            "type": "slashblade:blade",
            "item": "slashblade:slashblade",
            "request": {
                "enchantments": [
                    {
                        "id": "minecraft:smite"
                    }
                ],
                "name": "last_smith:nagasada",
                "refine": 10
            }
        },
        "blade": "last_smith:hakurouken",
        "template": {
            "item": "last_smith:scroll_exorcism"
        }
    }).id('kubejs:hakurouken_s5')

    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "last_smith:oboro_muramasa",
        "category": "equipment",
        "key": {
            "C": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1500,
                    "name": "last_smith:muramasa_kagura",
                    "proud_soul": 5000,
                    "refine": 20
                }
            },
            "D": {
                "item": "slashblade:proudsoul_sphere"
            },
            "F": {
                "item": "last_smith:sakura_full"
            },
            "S": {
                "item": "last_smith:scroll_muramasa"
            },
            "U": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1500,
                    "name": "slashblade:muramasa",
                    "proud_soul": 5000,
                    "refine": 20
                }
            },
            "L": {
                "item": 'tconstruct:dragon_scale'
            }
        },
        "pattern": [
            "LFL",
            "CSU",
            "DFD"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    }).id("kubejs:oboro_muramasa_s5")

    tcAlloy([{ "amount": 1000, "tag": 'forge:deuterium' }, { "amount": 1000, "tag": 'forge:tritium' }, { "amount": 720, "tag": 'forge:helium' }, { "amount": 720, "tag": 'forge:lithium/7_za' }],
        { "amount": 100, "tag": "kubejs:hybrid_fuel" }, 100, 'kubejs:hybrid_fuel')

    function tcAlloy(inputs, result, temp, id) {
        event.custom({
            "type": "tconstruct:alloy",
            "inputs": inputs,
            "result": result,
            "temperature": temp
        }).id(id)
    }

})