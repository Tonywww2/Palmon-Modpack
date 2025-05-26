ServerEvents.recipes(event => {
    event.shapeless('2x hostilenetworks:prediction_matrix', ['kubejs:collapse_prediction']).id('kubejs:prediction_matrix_rec_s5')
    event.shapeless('dustandash:redstone_vacuum_tube', ['immersiveengineering:electron_tube']).id('kubejs:redstone_vacuum_tube_s5')
    event.shapeless('immersiveengineering:electron_tube', ['dustandash:redstone_vacuum_tube']).id('kubejs:electron_tube_s5')
    event.shapeless('dustandash:ash_steel_cylinder', ['ad_astra:steel_tank']).id('kubejs:ash_steel_cylinder_s5')
    event.shapeless('ad_astra:steel_tank', ['dustandash:ash_steel_cylinder']).id('kubejs:steel_tank_s5')

    event.shapeless('kubejs:alfheim_iridescent', ['3x mythicbotany:raw_elementium', 'kubejs:iridescent', 'botania:bifrost_perm']).id('kubejs:alfheim_iridescent_s5')

    event.smithing('dustandash:centrifuge', 'dustandash:iron_structural_components', 'nuclearcraft:centrifuge', 'dustandash:ash_steel_ingot').id('kubejs:centrifuge_s5')

    event.shaped('nuclearcraft:plate_basic', [
        'BA',
        'AB'
    ],
        {
            A: 'kubejs:end_steel',
            B: '#forge:dusts/graphite'
        }).id('kubejs:nc_plate_basic_s5')

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

    event.shaped('rftoolsbase:machine_frame', [
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
            },
            {
                "item": 'cobblemon:relic_coin_sack'
            },
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'minecraft:sugar',
                "count": 48
            },
            {
                "item": 'supplementaries:candy',
                "count": 32
            },
            {
                "item": 'forestry:tree_maple_decorative_leaves',
                "count": 16
            },
            {
                "item": 'nuclearcraft:unsweetened_chocolate',
                "count": 8
            },
            {
                "item": 'kubejs:collapse_prediction',
                "count": 2
            },
            {
                "item": 'palmon:m_crystal',
                "count": 2
            }
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
            'hostilenetworks:end_prediction'
        ]
    ).superheated()
        .id('kubejs:collapse_prediction_s5')


    var t = 'kubejs:helium_3_crystal'
    event.recipes.createSequencedAssembly([
        'kubejs:helium_3_crystal_infinity',
    ], t, [
        event.recipes.createFilling(t, [t, Fluid.of('kubejs:hybrid_fuel', 50)]),
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
        "weight": 60
    }).id("kubejs:iridescent_s5")

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
        "power": 32767,
        "time": 32767,
        "start-power": 400000,
        "min-size": 1,
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