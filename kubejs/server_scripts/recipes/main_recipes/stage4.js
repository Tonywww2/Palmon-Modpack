ServerEvents.recipes(event => {
    event.shapeless('ars_nouveau:novice_spell_book', ['minecraft:book', 'kubejs:charged_source_gem', 'botania:manastar']).id('kubejs:novice_spell_book_s4')
    event.shapeless('ars_nouveau:apprentice_spell_book', ['ars_nouveau:novice_spell_book', '2x minecraft:diamond', '2x minecraft:blaze_rod', 'kubejs:unify_essence', 'minecraft:crying_obsidian', 'minecraft:quartz_block', 'botania:mana_quartz']).id('kubejs:apprentice_spell_book_s4')
    event.shapeless('ars_nouveau:ritual_brazier', ['ars_nouveau:arcane_pedestal', '4x #forge:ingots/gold', 'kubejs:unify_essence', '#forge:storage_blocks/source_gem']).id('kubejs:ritual_brazier_s4')
    event.shapeless('cataclysm:burning_ashes', ['cataclysm:ignitium_ingot', 'cataclysm:flame_eye', 'ad_astra:calorite_tank', '#forge:ingots/terrasteel']).id('kubejs:burning_ashes_s4')

    event.shapeless('ars_elemental:siren_shards', ['ars_nouveau:ritual_awakening', '2x ars_nouveau:stripped_blue_archwood_wood', '2x ars_nouveau:blue_archwood_sapling', '2x minecraft:sea_pickle']).id('kubejs:siren_shards_s4')
    event.shapeless('ars_nouveau:drygmy_shard', ['ars_nouveau:ritual_awakening', '2x ars_nouveau:stripped_purple_archwood_wood', '2x ars_nouveau:purple_archwood_sapling', '2x minecraft:leather']).id('kubejs:drygmy_shard_s4')
    event.shapeless('ars_nouveau:whirlisprig_shards', ['ars_nouveau:ritual_awakening', '2x ars_nouveau:stripped_green_archwood_wood', '2x ars_nouveau:green_archwood_sapling', '2x thermal:blitz_powder']).id('kubejs:whirlisprig_shards_s4')
    event.shapeless('ars_nouveau:starbuncle_shards', ['ars_nouveau:ritual_awakening', '2x ars_elemental:stripped_yellow_archwood', '2x ars_elemental:yellow_archwood_sapling', '2x immersive_weathering:golden_moss_clump']).id('kubejs:starbuncle_shards_s4')

    event.shaped('cobblefordays:tier_5', [
        'AAA',
        'BDC',
        'AAA'
    ],
        {
            A: '#forge:ingots/ostrum',
            B: 'minecraft:water_bucket',
            C: 'minecraft:lava_bucket',
            D: 'cobblefordays:tier_4'
        }).id('kubejs:cobble_t5_s4')

    event.shaped('kubejs:lance_of_longinus_broken', [
        ' A ',
        ' BC',
        'D  '
    ],
        {
            A: Item.of('tconstruct:small_blade', '{Material:"tconstruct:alfsteel"}').weakNBT(),
            B: Item.of('botania:blood_pendant', '{brewKey:"botania:bloodthirst"}').weakNBT(),
            C: Item.of('tconstruct:small_blade', '{Material:"tconstruct:elementium"}').weakNBT(),
            D: Item.of('tconstruct:tool_handle', '{Material:"tinkers_advanced:resonance_crystal"}').weakNBT()
        }).id('kubejs:lance_of_longinus_broken_s4')

    event.shaped('ae2things:disk_housing', [
        'ADA',
        'BEB',
        'CFC'
    ],
        {
            A: 'ae2:cell_component_4k',
            B: '#forge:ingots/terrasteel',
            C: '#forge:processors/netherite',
            D: 'mythicbotany:alfsteel_ingot',
            E: 'ae2:item_cell_housing',
            F: '#industrialforegoing:machine_frame/simple'
        }).id('kubejs:disk_housing_s4')

    event.shaped(Item.of('industrialforegoing:machine_frame_pity', 3 + global.frameworkAddition), [
        'ACA',
        'BDB',
        'ACA'
    ],
        {
            A: '#forge:gears/dawnstone',
            B: 'kubejs:stable_desh_ingot',
            C: '#forge:gears/steel',
            D: 'kubejs:essence_computation_frame'
        }).id('kubejs:machine_frame_pity_s4')

    event.shaped('ae2:inscriber', [
        'ABA',
        ' CA',
        'ABA'
    ],
        {
            A: '#forge:ingots/ostrum',
            B: 'minecraft:sticky_piston',
            C: 'ad_astra:ostrum_engine'
        }).id('kubejs:ae_inscriber_s4')

    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ],
        {
            A: 'embers:caminite_brick',
            B: 'ad_astra:ostrum_engine'
        }).id('kubejs:bot_apothecary_s4')

    event.shaped('2x compactmachines:wall', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#forge:plates/iron',
            B: '#forge:obsidian',
            C: '#forge:plates/ostrum'
        }).id('kubejs:cm_wall_s4')

    event.shaped('botania:alfheim_portal', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#botania:livingwood_logs',
            B: '#forge:plates/ostrum',
            C: 'ad_astra:ostrum_engine'
        }).id('kubejs:alfheim_portal_s4')

    event.shaped('tinkers_advanced:resonance_crystal', [
        'ADA',
        'BCB',
        'ADA'
    ],
        {
            A: '#forge:slimeballs',
            B: 'minecraft:echo_shard',
            C: 'kubejs:essence_computation_frame',
            D: '#forge:ingots/slimesteel'
        }).id('kubejs:resonance_crystal_s4')

    event.recipes.thermal.smelter(Item.of('kubejs:essence_computation_frame', 2 + global.frameworkAddition),
        ['ae2:cell_component_4k', 'kubejs:gamma_framework', 'jaopca:processors.elementium']
    ).energy(38400)
        .id('kubejs:essence_computation_frame_s4')

    event.recipes.occultism.ritual(
        '2x kubejs:marid_binded_gem',
        [
            'kubejs:essence_computation_frame',
            'kubejs:essence_computation_frame',
            'occultism:spirit_attuned_gem',
            'occultism:spirit_attuned_gem',
            'kubejs:present_alloy',
            'occultism:storage_stabilizer_tier4',
            'jaopca:processors.terrasteel',
            'jaopca:processors.elementium'
        ],
        'occultism:book_of_binding_bound_marid',
        'occultism:craft_marid',
        80
    ).id("kubejs:occ_marid_binded_gem_0")

    event.recipes.thermal.smelter('2x kubejs:superconducting_coil_type_1',
        ['21x techreborn:cupronickel_heating_coil', '15x thermal:rf_coil', '12x techreborn:electronic_circuit']
    ).energy(204800)
        .id('kubejs:superconducting_coil_type_1_s4')

    event.recipes.thermal.smelter('3x tfc:powder/flux',
        ['3x #forge:small_dusts/marble', '#forge:small_dusts/calcite']
    ).energy(76800)
        .id('kubejs:powder_flux_s4')

    event.recipes.ars_nouveau.imbuement(
        '#forge:gems/source_gem',
        'kubejs:charged_source_gem',
        2000,
        []
    ).id('kubejs:charged_source_gem_s4')

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:abjuration_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:air_essence', 'ars_nouveau:earth_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:water_essence', 'botania:pixie_dust'],
        ['kubejs:charged_source_gem'],
        'kubejs:unify_essence',
        8000
    ).id('kubejs:unify_essence_s4')

    event.recipes.botania.elven_trade('botania:elementium_ingot',
        ['#forge:ingots/manasteel', '#forge:ingots/manasteel', '#forge:ingots/ostrum'])
        .id('kubejs:elementium_s4')

    event.recipes.createMechanicalCrafting('kubejs:scranton_reality_anchor', [
        ' AAAAA ',
        'A BCB A',
        'DBCECBD',
        'A BCB A',
        ' AAAAA '
    ], {
        A: Item.of('tconstruct:large_plate', '{Material:"tconstruct:lead"}').weakNBT(),
        B: '#forge:storage_blocks/draconium',
        C: 'kubejs:essence_computation_frame',
        D: 'mythicbotany:alfsteel_ingot',
        E: 'kubejs:delta_framework'
    }).id('kubejs:scranton_reality_anchor_s4')

    event.recipes.createMechanicalCrafting(Item.of('ad_astra_giselle_addon:creative_oxygen_can', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"ad_astra:oxygen"}]}}'), [
        'AABAA',
        'ACDCA',
        'ACECA',
        'ACFCA',
        'AAAAA'
    ], {
        A: Item.of('ad_astra_giselle_addon:netherite_oxygen_can', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"ad_astra:oxygen"}]}}').weakNBT(),
        B: 'kubejs:essence_computation_frame',
        C: 'nuclearcraft:californium_rtg',
        D: 'nuclearcraft:electrolyzer',
        E: 'sfm:water_tank',
        F: 'ad_astra:energizer'
    }).id('kubejs:creative_oxygen_can_s4')

    event.recipes.createCompacting('2x dustandash:netherite_mud', [
        'ad_astra:ostrum_ingot',
        'minecraft:netherite_scrap',
        '2x minecraft:soul_sand',
        'minecraft:mud',
        '2x create:cinder_flour'
    ]).id('kubejs:netherite_mud_s4').superheated()

    event.custom({
        "type": "dustandash:centrifuge",
        "tick": 400,
        "ingredients": [
            {
                "item": "dustandash:netherite_mud"
            },
            {
                "item": "dustandash:water_miscible_solvents"
            }
        ],
        "outputs": [
            {
                "item": "dustandash:empty"
            },
            {
                "item": "dustandash:empty"
            },
            {
                "item": "dustandash:empty"
            },
            {
                "item": "minecraft:ancient_debris"
            },

            {
                "item": "minecraft:bone_meal"
            },
            {
                "item": "dustandash:empty"
            },
            {
                "item": "minecraft:dirt"
            },
            {
                "item": "dustandash:empty"
            }
        ]
    }).id('kubejs:ancient_debris_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            Item.of('occultism:storage_stabilizer_tier3').toJson(),
            Item.of('#forge:storage_blocks/iesnium').toJson(),
            Item.of('occultism:spirit_attuned_crystal').toJson(),
            Item.of('minecraft:end_rod').toJson(),
            Item.of('minecraft:shulker_shell').toJson(),
            Item.of('minecraft:end_crystal').toJson(),
            Item.of('minecraft:dragon_breath').toJson(),
            Item.of('occultism:book_of_binding_bound_marid').toJson(),
        ],
        "inputFluid": "{Amount:8000,FluidName:\"tinkers_advanced:over_heated_lava\"}",
        "output": Item.of('occultism:storage_stabilizer_tier4').toJson(),
        "processingTime": 200
    }).id('kubejs:storage_stabilizer_tier4_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            Item.of('occultism:storage_stabilizer_tier2').toJson(),
            Item.of('#forge:storage_blocks/gold').toJson(),
            Item.of('occultism:spirit_attuned_crystal').toJson(),
            Item.of('occultism:spirit_attuned_crystal').toJson(),
            Item.of('occultism:spirit_attuned_crystal').toJson(),
            Item.of('minecraft:beacon').toJson(),
            Item.of('occultism:book_of_binding_bound_afrit').toJson(),
        ],
        "inputFluid": "{Amount:4000,FluidName:\"tinkers_advanced:over_heated_lava\"}",
        "output": Item.of('occultism:storage_stabilizer_tier3').toJson(),
        "processingTime": 150
    }).id('kubejs:storage_stabilizer_tier3_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            Item.of('occultism:storage_stabilizer_tier1').toJson(),
            Item.of('#forge:storage_blocks/silver').toJson(),
            Item.of('occultism:spirit_attuned_crystal').toJson(),
            Item.of('occultism:spirit_attuned_crystal').toJson(),
            Item.of('cobblemon:reaper_cloth').toJson(),
            Item.of('occultism:book_of_binding_bound_djinni').toJson(),
        ],
        "inputFluid": "{Amount:2000,FluidName:\"tinkers_advanced:over_heated_lava\"}",
        "output": Item.of('occultism:storage_stabilizer_tier2').toJson(),
        "processingTime": 100
    }).id('kubejs:storage_stabilizer_tier2_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            Item.of('occultism:otherstone_pedestal').toJson(),
            Item.of('#forge:storage_blocks/copper').toJson(),
            Item.of('occultism:spirit_attuned_crystal').toJson(),
            Item.of('occultism:spirit_attuned_crystal').toJson(),
            Item.of('#forge:rods/blaze').toJson(),
            Item.of('occultism:book_of_binding_bound_foliot').toJson(),
        ],
        "inputFluid": "{Amount:1000,FluidName:\"tinkers_advanced:over_heated_lava\"}",
        "output": Item.of('occultism:storage_stabilizer_tier1').toJson(),
        "processingTime": 100
    }).id('kubejs:storage_stabilizer_tier1_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "tag": 'industrialforegoing:machine_frame/simple'
            },
            {
                "tag": 'forge:gears/diamond'
            },
            {
                "tag": 'forge:processors/manasteel'
            },
            {
                "tag": 'forge:processors/manasteel'
            }
        ],
        "inputFluid": "{Amount:450,FluidName:\"tconstruct:molten_electrum\"}",
        "output": {
            "count": 1,
            "item": 'draconicevolution:draconium_core'
        },
        "processingTime": 600
    }).id('kubejs:draconium_core_1_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "tag": 'industrialforegoing:machine_frame/simple'
            },
            {
                "tag": 'forge:gears/diamond'
            },
            {
                "tag": 'forge:processors/manasteel'
            },
            {
                "tag": 'forge:processors/manasteel'
            }
        ],
        "inputFluid": "{Amount:450,FluidName:\"embers:molten_electrum\"}",
        "output": {
            "count": 1,
            "item": 'draconicevolution:draconium_core'
        },
        "processingTime": 600
    }).id('kubejs:draconium_core_2_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'botania:mana_fluxfield'
            },
            {
                "item": 'botania:mana_fluxfield'
            },
            {
                "item": 'draconicevolution:draconium_core'
            },
        ],
        "inputFluid": "{Amount:1800,FluidName:\"thermal:redstone\"}",
        "output": {
            "count": 1,
            "item": 'draconicevolution:wyvern_energy_core'
        },
        "processingTime": 1200
    }).id('kubejs:wyvern_energy_core_s4')

    event.recipes.create.mixing([Fluid.of('kubejs:melted_voidarium', 100)],
        [
            Fluid.of('industrialforegoing:fermented_ore_meat', 100, { Tag: 'forge:raw_materials/ostrum' }),
            Fluid.of('industrialforegoing:fermented_ore_meat', 100, { Tag: 'forge:raw_materials/desh' }),
            'industrialforegoing:dryrubber'
        ]
    ).superheated()
        .processingTime(400)
        .id('kubejs:melted_voidarium_s4')

    var t = 'industrialforegoing:machine_frame_advanced'
    event.recipes.createSequencedAssembly([
        'industrialforegoing:machine_frame_supreme',
    ], t, [
        event.recipes.createCutting(t, t),
        event.recipes.createFilling(t, [t, Fluid.of('industrialforegoing:ether_gas', 125)]),
        event.recipes.createDeploying(t, [t, 'kubejs:essence_computation_frame']),
        event.recipes.createDeploying(t, [t, 'industrialforegoing:pink_slime_ingot']),
        event.recipes.createPressing(t, t),
        event.recipes.createFilling(t, [t, Fluid.of('kubejs:melted_voidarium', 100)]),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(t)
        .loops(2)
        .id('kubejs:machine_frame_supreme_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'industrialforegoing:plastic'
            },
            {
                "tag": 'industrialforegoing:machine_frame/advanced'
            },
            {
                "item": 'industrialforegoing:plastic'
            },
            {
                "item": 'kubejs:essence_computation_frame'
            },
            {
                "item": 'kubejs:essence_computation_frame'
            },
            {
                "item": 'minecraft:bucket'
            },
            {
                "item": 'minecraft:netherite_pickaxe'
            },
            {
                "item": 'minecraft:bucket'
            }
        ],
        "inputFluid": "{Amount:1200,FluidName:\"kubejs:melted_voidarium\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:fluid_laser_base'
        },
        "processingTime": 800
    }).id('kubejs:fluid_laser_base_s4')


    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": 'kubejs:reinforced_sheet'
            },
            "middle": {
                "item": 'ae2:cell_component_1k'
            },
            "top": {
                "tag": 'forge:circuits/calorite'
            }
        },
        "mode": "press",
        "result": {
            "item": 'jaopca:processors.calorite'
        }
    }).id('kubejs:processors_calorite_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'ad_astra:calorite_plate'
            },
            {
                "item": 'ad_astra:calorite_plate'
            },
            {
                "item": 'ad_astra:calorite_plate'
            },
            {
                "item": 'kubejs:essence_computation_frame'
            },
            {
                "tag": 'forge:circuits/elementium'
            }
        ],
        "inputFluid": "{Amount:500,FluidName:\"ad_astra:cryo_fuel\"}",
        "output": {
            "count": 3,
            "item": 'jaopca:circuits.calorite'
        },
        "processingTime": 600
    }).id('kubejs:circuits_calorite_s4')

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": 'kubejs:reinforced_sheet'
            },
            {
                "item": 'kubejs:reinforced_sheet'
            },
            {
                "item": 'kubejs:reinforced_sheet'
            },
            {
                "item": 'kubejs:reinforced_sheet'
            },
            {
                "tag": "ad_astra:ostrum_blocks"
            },
            {
                "tag": "ad_astra:ostrum_blocks"
            },
            {
                "item": 'kubejs:reinforced_sheet'
            },
            {
                "item": "ad_astra:ostrum_tank"
            },
            {
                "item": "ad_astra:ostrum_tank"
            },
            {
                "item": 'kubejs:reinforced_sheet'
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:ostrum_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_3_rocket"
        }
    }).id('kubejs:rocket_t3_s4')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "HP",
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
                "item": 'supplementaries:sugar_cube'
            },
            {
                "item": 'cobblemon:healing_machine'
            },
            {
                "item": 'cobblemon:monitor'
            }
        ],
        "block_count": 3,
        "input_items": [
            Item.of('minecraft:sugar', 64).toJson(),
            Item.of('minecraft:honey_bottle', 16).toJson(),
            Item.of('minecraft:paper', 16).toJson(),
            Item.of('supplementaries:sugar_cube', 4).toJson(),
            Item.of('forestry:royal_jelly', 3).toJson(),
            Item.of('palmon:m_crystal', 2).toJson()
        ],
        "input_power": 0,
        "input_fluid": {
            "fluid": "minecraft:water",
            "amount": 6000
        },
        "tick": 1400,
        "result_items": [
            {
                "item": 'cobblemon:exp_candy_l',
                "count": 1
            }
        ]
    }).id('kubejs:exp_candy_l_s4')

    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:kanze_masamune",
        "category": "equipment",
        "key": {
            "B": {
                "type": "item",
                "item": "slashblade:proudsoul_ingot"
            },
            "D": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 7,
                    "proud_soul": 7,
                    "refine": 0
                }
            },
            "E": {
                "type": "item",
                "item": 'cataclysm:meat_shredder'
            },
            "S": {
                "type": "item",
                "item": "minecraft:diamond_sword"
            },
            "A": {
                "type": "item",
                "item": 'kubejs:essence_computation_frame'
            },
            "F": {
                "type": "item",
                "item": 'functionalstorage:diamond_upgrade'
            }
        },
        "pattern": [
            "ABE",
            "BDB",
            "SBF"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    }).id('kubejs:kanze_masamune_s4')
})