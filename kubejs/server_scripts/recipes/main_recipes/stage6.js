ServerEvents.recipes(event => {
    event.recipes.create.crushing([
        Item.of('kubejs:epsilon_dust'),
        Item.of('kubejs:epsilon_dust').withChance(0.75),
        Item.of('kubejs:epsilon_dust').withChance(0.5),
        Item.of('kubejs:epsilon_dust').withChance(0.4),
        Item.of('kubejs:epsilon_dust').withChance(0.3),
        Item.of('kubejs:epsilon_dust').withChance(0.2),
        Item.of('kubejs:epsilon_dust').withChance(0.1)
    ], 'kubejs:epsilon_framework')
        .id('kubejs:epsilon_dust_s6')

    event.shapeless('occultism:chalk_red_impure', ['occultism:chalk_white_impure', 'occultism:afrit_essence', '#forge:dusts/blaze', 'kubejs:epsilon_dust']).id('kubejs:chalk_red_impure_s6')

    event.shaped('4x mekanism:thermal_evaporation_block', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:present_alloy',
        B: '#forge:plates/advanced_alloy',
        C: 'mekanism:steel_casing'
    }).id('kubejs:thermal_evaporation_block_s6')

    event.shaped('mekanism:electrolytic_separator', [
        'IHI',
        'ARA',
        'ISI'
    ], {
        I: '#forge:ingots/iron',
        R: '#forge:dusts/redstone',
        A: '#mekanism:alloys/infused',
        H: 'mekanism:electrolytic_core',
        S: 'mekanism:steel_casing'
    }).id('kubejs:electrolytic_separator_s6')

    event.shaped('mekanism:isotopic_centrifuge', [
        'III',
        'CTC',
        'III'
    ], {
        I: '#forge:ingots/lead',
        C: '#forge:circuits/ultimate',
        T: 'nuclearcraft:americium_rtg'
    }).id('kubejs:isotopic_centrifuge_s6')

    event.shaped('mekanism:chemical_infuser', [
        'ACA',
        'TXT',
        'ACA'
    ], {
        A: '#mekanism:alloys/infused',
        C: '#forge:circuits/basic',
        T: 'draconicevolution:draconic_energy_core',
        X: 'mekanism:steel_casing'
    }).id('kubejs:chemical_infuser_s6')

    event.shaped('mekanism:chemical_oxidizer', [
        'ACA',
        'PHT',
        'ACA'
    ], {
        A: '#mekanism:alloys/infused',
        C: '#forge:circuits/basic',
        P: '#mekanism:personal_storage',
        H: 'mekanism:dynamic_tank',
        T: 'draconicevolution:draconic_energy_core'
    }).id('kubejs:chemical_oxidizer_s6')

    event.shaped('2x mekanismgenerators:fission_reactor_casing', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: 'nuclearcraft:plate_du',
            B: 'dustandash:fission_reactor_casing',
            C: 'draconicevolution:draconium_core',
            D: 'mekanism:steel_casing',
            E: Item.of('tconstruct:large_plate', '{Material:"tconstruct:lead"}').weakNBT()
        }).id('kubejs:fission_reactor_casing_s6')

    event.shaped('kubejs:advanced_machine_frame', [
        'ADA',
        'BCB',
        'BAB'
    ],
        {
            A: '#forge:plates/advanced_alloy',
            B: '#forge:plates/carbon',
            C: 'techreborn:advanced_machine_frame',
            D: 'kubejs:epsilon_dust'
        }).id('kubejs:advanced_machine_frame_s6')

    event.shaped('kubejs:basic_machine_frame', [
        'ABA',
        'ACA',
        'ADA'
    ],
        {
            A: 'techreborn:insulated_copper_cable',
            B: 'kubejs:essence_computation_frame',
            C: 'techreborn:basic_machine_frame',
            D: 'kubejs:epsilon_dust'
        }).id('kubejs:basic_machine_frame_s6')

    event.shaped('ars_nouveau:imbuement_chamber', [
        'ACA',
        'BDB',
        'BEB'
    ],
        {
            A: '#forge:ingots/manasteel',
            B: 'ars_nouveau:archwood_planks',
            C: 'ae2:logic_processor',
            D: 'kubejs:essence_computation_frame',
            E: 'kubejs:epsilon_dust',
        }).id('kubejs:imbuement_chamber_s6')

    event.recipes.ars_nouveau.enchanting_apparatus([
        'mekanism:pellet_antimatter',
        'ars_nouveau:starbuncle_charm',
        'ars_nouveau:whirlisprig_charm',
        'ars_nouveau:drygmy_charm',
        'ars_nouveau:wixie_charm',
        'ars_nouveau:amethyst_golem_charm',
        'ars_elemental:siren_charm',
        'ars_elemental:firenando_charm'
    ], 'draconicevolution:awakened_core', 'kubejs:cognitio', 40000).id('kubejs:cognitio_s6')

    event.recipes.thermal.smelter('16x kubejs:intelligent_draconium_ingot',
        ['kubejs:epsilon_dust', '16x jaopca:processors.draconium']
    ).energy(102400)
        .id('kubejs:intelligent_draconium_ingot_s6')

    event.shaped('industrialforegoing:mob_slaughter_factory', [
        'ADA',
        'BEB',
        'CFC'
    ],
        {
            A: 'industrialforegoing:plastic',
            B: 'minecraft:netherite_sword',
            C: 'minecraft:netherite_axe',
            D: 'kubejs:epsilon_dust',
            E: '#industrialforegoing:machine_frame/simple',
            F: '#forge:dusts/redstone'
        }).id('kubejs:mob_slaughter_factory_s6')

    event.shaped('ad_astra:cryo_freezer', [
        'ADA',
        'BCB',
        'ADA'
    ],
        {
            A: '#forge:plates/ostrum',
            B: 'minecraft:blue_ice',
            C: 'kubejs:epsilon_dust',
            D: 'kubejs:reinforced_sheet'
        }).id('kubejs:cryo_freezer_s5')

    event.shaped('industrialforegoingsouls:soul_laser_base', [
        'ADA',
        'BEB',
        'CFC'
    ],
        {
            A: 'industrialforegoing:plastic',
            B: 'kubejs:epsilon_dust',
            C: '#forge:gears/diamond',
            D: 'minecraft:sculk_shrieker',
            E: '#industrialforegoing:machine_frame/simple',
            F: 'kubejs:essence_computation_frame'
        }).id('kubejs:soul_laser_base_s6')

    event.shaped('industrialforegoing:enchantment_factory', [
        'PBP',
        'DMD',
        'OFO'
    ], {
        P: '#forge:plastic',
        B: 'kubejs:epsilon_dust',
        D: 'minecraft:diamond',
        M: '#industrialforegoing:machine_frame/simple',
        O: 'minecraft:obsidian',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_factory_s6')

    event.shaped('industrialforegoing:enchantment_extractor', [
        'PSP',
        'BMB',
        'DGD'
    ], {
        P: '#forge:plastic',
        S: 'kubejs:epsilon_dust',
        B: 'minecraft:book',
        M: '#industrialforegoing:machine_frame/simple',
        D: 'minecraft:diamond',
        G: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_extractor_s6')

    event.shaped('industrialforegoing:enchantment_applicator', [
        'PFP',
        'BMB',
        'GBG'
    ], {
        P: '#forge:plastic',
        B: 'minecraft:anvil',
        M: '#industrialforegoing:machine_frame/simple',
        G: 'kubejs:epsilon_dust',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_applicator_s6')

    event.shaped('industrialforegoing:ore_laser_base', [
        'pfp',
        'bmb',
        'grg'
    ], {
        p: '#forge:plastic',
        f: 'minecraft:diamond_pickaxe',
        b: '#forge:ores/iron',
        m: '#industrialforegoing:machine_frame/simple',
        g: 'kubejs:epsilon_dust',
        r: 'kubejs:essence_computation_frame'
    }).id('kubejs:ore_laser_base_s6')

    event.shaped('industrialforegoing:potion_brewer', [
        'PSP',
        'BMB',
        'GFG'
    ], {
        P: '#forge:plastic',
        S: 'minecraft:brewing_stand',
        B: 'kubejs:epsilon_dust',
        F: 'kubejs:essence_computation_frame',
        M: '#industrialforegoing:machine_frame/simple',
        G: 'minecraft:repeater'
    }).id('kubejs:potion_brewer_s6')

    event.shaped('industrialforegoing:marine_fisher', [
        'pfp',
        'bmb',
        'grg'
    ], {
        p: '#forge:plastic',
        f: 'minecraft:fishing_rod',
        b: 'minecraft:bucket',
        m: '#industrialforegoing:machine_frame/simple',
        g: 'kubejs:epsilon_dust',
        r: 'kubejs:essence_computation_frame'
    }).id('kubejs:marine_fisher_s6')

    event.shaped('industrialforegoing:material_stonework_factory', [
        'pcp',
        'gmf',
        'aba'
    ], {
        p: '#forge:plastic',
        c: 'kubejs:essence_computation_frame',
        g: 'minecraft:diamond_pickaxe',
        m: '#industrialforegoing:machine_frame/simple',
        f: 'kubejs:epsilon_dust',
        a: '#forge:gears/gold',
        b: 'industrialforegoing:pink_slime'
    }).id('kubejs:material_stonework_factory_s6')

    event.shaped('tiab:time_in_a_bottle', [
        'GFG',
        'DCD',
        'LBL'
    ], {
        G: 'kubejs:epsilon_dust',
        D: '#forge:gems/diamond',
        L: '#forge:gems/lapis',
        C: 'minecraft:clock',
        B: 'minecraft:glass_bottle',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:time_in_a_bottle_s6')

    // s8替换为奇点合金
    event.recipes.createCompacting('3x techreborn:mixed_metal_ingot', [
        '16x #forge:ingots/invar',
        '16x #forge:ingots/brass',
        '12x #forge:ingots/refined_iron',
        '12x #forge:ingots/zinc',
        '8x #forge:ingots/tin',
        '4x #forge:ingots/aluminum',
        '3x #forge:ingots/draconium',
        '3x dustandash:ash_steel_ingot',
        Fluid.of('tinkers_advanced:molten_activated_chromatic_steel', 180)
    ]).superheated().id('kubejs:mixed_metal_ingot_s6')

    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused',
        'kubejs:yin_yang_steel', '20x mekanism:redstone').id('kubejs:alloy_infused_s6')

    event.recipes.mekanism.metallurgic_infusing('mekanism:basic_control_circuit',
        '#forge:gears/osmium', '40x mekanism:redstone').id('kubejs:basic_control_circuit_s6')

    event.recipes.thermal.smelter('2x kubejs:superconducting_coil_type_2',
        ['3x kubejs:superconducting_coil_type_1', '2x #forge:ingots/hot_tungstensteel', '4x #forge:gems/boron_nitride']
    ).energy(409600)
        .id('kubejs:superconducting_coil_type_2_s6')

    event.recipes.thermal.smelter('techreborn:silicon_plate',
        ['4x ae2:printed_silicon', '#forge:dusts/quartz']
    ).energy(51200)
        .id('kubejs:silicon_plate_s6')

    event.recipes.thermal.smelter('2x kubejs:yin_yang_steel',
        ['create:shadow_steel', 'create:refined_radiance', 'techreborn:advanced_alloy_plate']
    ).energy(102400)
        .id('kubejs:yin_yang_steel_s6')

    event.recipes.thermal.smelter('2x dustandash:ash_steel_ingot',
        ['2x #forge:ingots/iron', '#forge:ingots/steel', '#forge:ash']
    ).energy(51200)
        .id('kubejs:ash_steel_ingot_s6')

    event.recipes.thermal.smelter('kubejs:reinforced_sheet',
        ['kubejs:epsilon_dust', '#forge:plates/terrasteel', '#forge:plates/elementium']
    ).energy(204800)
        .id('kubejs:reinforced_sheet_s6')

    event.recipes.create.filling(Item.of('techreborn:cell', '{fluid:"techreborn:oil"}'), [
        Fluid.of('ad_astra:oil', 1000),
        'techreborn:cell'
    ]).id('kubejs:oil_cell_1')

    event.recipes.create.filling(Item.of('techreborn:cell', '{fluid:"techreborn:oil"}'), [
        Fluid.of('thermal:crude_oil', 1000),
        'techreborn:cell'
    ]).id('kubejs:oil_cell_2')

    event.recipes.create.filling(Item.of('techreborn:cell', '{fluid:"techreborn:oil"}'), [
        Fluid.of('techreborn:oil', 1000),
        'techreborn:cell'
    ]).id('kubejs:oil_cell_3')

    event.recipes.create.mixing(Fluid.of('kubejs:methane_helium_3_fuel', 750), [
        Fluid.of('techreborn:methane', 500),
        Fluid.of('tinkers_advanced:pyrotheum', 500),
        Fluid.of('techreborn:helium3', 250),
        Fluid.of('tinkers_advanced:plasmatic_lava', 250)
    ]).superheated().processingTime(800).id('kubejs:methane_helium_3_fuel_s6')

    event.recipes.create.mechanical_crafting('2x kubejs:industrial_machine_frame', [
        ' AA AA ',
        'ACGBGEA',
        'AGDHFGA',
        ' IH HI ',
        'AGFHDGA',
        'AEGBGCA',
        ' AA AA '
    ], {
        A: 'nuclearcraft:plate_extreme',
        B: '#forge:plates/iridium_alloy',
        C: 'kubejs:superconducting_coil_type_2',
        D: 'techreborn:data_storage_chip',
        E: 'techreborn:industrial_machine_frame',
        F: 'techreborn:energy_flow_chip',
        G: Item.of('techreborn:cell', '{fluid:"techreborn:mercury"}').weakNBT(),
        H: '#forge:plates/silicon',
        I: Item.of('techreborn:cell', '{fluid:"techreborn:chlorite"}').weakNBT()
    }).id('kubejs:industrial_machine_frame_s6')

    var t = 'kubejs:industrial_machine_frame'
    event.recipes.createSequencedAssembly([
        'mekanism:steel_casing',
    ], t, [
        event.recipes.createDeploying(t, [t, '#forge:ingots/osmium']),
        event.recipes.createDeploying(t, [t, '#forge:ingots/stainless_steel']),
        event.recipes.createFilling(t, [t, Fluid.of('techreborn:glyceryl', 250)]),
        event.recipes.createPressing(t, t),
        event.recipes.createDeploying(t, [t, 'techreborn:uu_matter']),
        event.recipes.createDeploying(t, [t, 'thermal_extra:dragonsteel_glass'])
    ]).transitionalItem(t)
        .loops(4)
        .id('kubejs:steel_casing_s6')

    event.custom({
        "type": "techreborn:alloy_smelter",
        "ingredients": [
            {
                "count": 5,
                "item": 'techreborn:mixed_metal_ingot'
            },
            {
                "count": 1,
                "item": 'ars_elemental:lesser_fire_focus'
            }
        ],
        "power": 180,
        "results": [
            {
                "count": 3,
                "item": 'techreborn:advanced_alloy_ingot'
            }
        ],
        "time": 600
    }).id('kubejs:advanced_alloy_ingot_s6')

    event.custom({
        "type": "dustandash:centrifuge",
        "tick": 400,
        "ingredients": [
            Item.of('techreborn:cell', '{fluid:"aetherworks:aether_gas_painful"}').weakNBT().toJson(),
            Item.of('techreborn:cell', '{fluid:"kubejs:methane_helium_3_fuel"}').weakNBT().toJson()
        ],
        "outputs": [
            Item.of('draconicevolution:awakened_draconium_dust').toJson(),
            Item.of('dustandash:empty').toJson(),
            Item.of('draconicevolution:awakened_draconium_dust').toJson(),
            Item.of('dustandash:empty').toJson(),

            Item.of('dustandash:empty').toJson(),
            Item.of('dustandash:empty').toJson(),
            Item.of('dustandash:empty').toJson(),
            Item.of('draconicevolution:awakened_draconium_dust').toJson()
        ]
    }).id('kubejs:awakened_draconium_dust_s6')


    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "ATTACK",
        "min_level": 80,
        "required_type": 'steel',
        "base_hp": 70,
        "base_atk": 70,
        "base_def": 50,
        "base_spa": 50,
        "base_spd": 50,
        "base_spe": 50,
        "area_blocks": [
            {
                "item": 'draconicevolution:draconium_block'
            }
        ],
        "block_count": 48,
        "input_items": [
            Item.of('16x kubejs:intelligent_draconium_ingot').toJson(),
            Item.of('8x draconicevolution:awakened_draconium_dust').toJson(),
            Item.of('4x kubejs:collapse_prediction').toJson(),
            Item.of('draconicevolution:dragon_heart').toJson()
        ],
        "input_power": 4096000,
        "input_fluid": {
            "fluid": "aetherworks:aether_gas_painful",
            "amount": 250
        },
        "tick": 1200,
        "result_items": [
            Item.of('16x draconicevolution:awakened_draconium_ingot').toJson()
        ]
    }).id('kubejs:awakened_draconium_ingot_s6')

    event.recipes.occultism.ritual(
        'mekanismgenerators:fission_fuel_assembly',
        [
            'draconicevolution:awakened_draconium_ingot',
            'nuclearcraft:plate_du',
            'draconicevolution:awakened_draconium_ingot',
            'nuclearcraft:plate_du',

            '#forge:alloys/ultimate',
            'kubejs:reinforced_sheet',
            '#forge:alloys/ultimate',
            'kubejs:reinforced_sheet',

            'mekanismgenerators:fission_reactor_casing',
            Item.of('tconstruct:large_plate', '{Material:"tconstruct:lead"}').weakNBT(),
            'mekanismgenerators:fission_reactor_casing',
            Item.of('tconstruct:large_plate', '{Material:"tconstruct:lead"}').weakNBT()
        ],
        'occultism:book_of_binding_bound_marid',
        'occultism:craft_marid',
        200
    ).id("kubejs:fission_fuel_assembly_s6")

    event.shaped('nuclearcraft:fusion_reactor_casing', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'nuclearcraft:plate_advanced',
            B: 'jaopca:plates.manyullyn',
            C: 'kubejs:epsilon_dust'
        }).id('kubejs:fusion_reactor_casing_s6')

    event.shaped('mythicbotany:central_rune_holder', [
        'ABA',
        'BCB'
    ],
        {
            A: 'kubejs:collapse_prediction',
            B: 'kubejs:epsilon_dust',
            C: 'mythicbotany:rune_holder'
        }).id('kubejs:central_rune_holder_s6')

    event.shaped('mythicbotany:rune_holder', [
        'ABA',
        'BCB'
    ],
        {
            A: 'kubejs:collapse_prediction',
            B: 'kubejs:epsilon_dust',
            C: 'jaopca:storage_blocks.mana'
        }).id('kubejs:rune_holder_s6')

    event.shaped('aetherworks:forge_metal_former', [
        'ACA',
        'BBB'
    ],
        {
            A: 'kubejs:end_steel',
            B: 'embers:caminite_plate',
            C: 'kubejs:epsilon_dust'
        }).id('kubejs:forge_metal_former_s6')

    event.shaped('dustandash:ionizer', [
        'FBA',
        'ACA',
        'EDE'
    ],
        {
            A: 'dustandash:ash_steel_cylinder',
            B: 'dustandash:redstone_vacuum_tube',
            C: 'nuclearcraft:electrolyzer',
            D: 'kubejs:collapse_prediction',
            E: 'kubejs:end_steel',
            F: 'kubejs:epsilon_dust'
        }).id('kubejs:ionizer_s6')


    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/copper"
            },
            {
                "tag": "embers:aspectus/silver"
            }
        ],
        "inputs": [
            {
                "item": 'kubejs:collapse_prediction'
            },
            {
                "item": 'kubejs:epsilon_dust'
            },
            {
                "item": "aetherworks:aether_shard"
            },
            {
                "item": "aetherworks:aether_shard"
            },
            {
                "item": "aetherworks:aether_shard"
            }
        ],
        "output": {
            "item": "aetherworks:aether_amalgam"
        },
        "tablet": {
            "item": "embers:ember_crystal_cluster"
        }
    }).id('kubejs:aether_amalgam_s6')

    deFusionCrafting(event, [
        Item.of('tconstruct:ender_slime_ball').toJson(),
        Item.of('tconstruct:ender_slime_ball').toJson(),
        Item.of('tconstruct:ender_slime_crystal').toJson(),
        Item.of('tconstruct:ender_slime_crystal').toJson(),
        Item.of('tinkers_advanced:disintegrate_crystal').toJson(),
        Item.of('tinkers_advanced:disintegrate_crystal').toJson(),
        Item.of('tinkers_advanced:disintegrate_crystal').toJson(),
        Item.of('tinkers_advanced:disintegrate_crystal').toJson(),
        Item.of('#mekanism:alloys/atomic').toJson(),
        Item.of('#mekanism:alloys/atomic').toJson(),
        Item.of('#mekanism:alloys/atomic').toJson(),
        Item.of('#mekanism:alloys/atomic').toJson()
    ],
        Item.of('draconicevolution:awakened_core').toJson(),
        Item.of('tinkers_advanced:voltaic_crystal').toJson(),
        "DRACONIC",
        10000000,
        'kubejs:voltaic_crystal_s6'
    )

})