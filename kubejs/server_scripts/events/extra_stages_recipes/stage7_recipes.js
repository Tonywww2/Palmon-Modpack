// priority: 90

const stage7 = function (event) {

    event.shapeless('mekanism:creative_fluid_tank', ['mekanism:creative_fluid_tank']).id('kubejs:creative_fluid_tank_empty_s7')

    event.shaped('mekanism:mekasuit_helmet', [
        'PCP',
        'BDB',
        'AEA'
    ], {
        D: Item.of('tconstruct:helmet_plating', '{Material:"tinkers_advanced:protocite"}').weakNBT(),
        A: 'avaritia:neutron_gear',
        C: '#forge:circuits/infinite',
        E: 'draconicevolution:energy_core',
        P: 'mekanism:sps_casing',
        B: 'kubejs:superconducting_coil_type_2'
    }).id('kubejs:mekasuit_helmet_s7')

    event.shaped('mekanism:mekasuit_bodyarmor', [
        'PCP',
        'BDB',
        'AEA'
    ], {
        D: Item.of('tconstruct:chestplate_plating', '{Material:"tinkers_advanced:protocite"}').weakNBT(),
        A: 'avaritia:neutron_gear',
        C: '#forge:circuits/infinite',
        E: 'draconicevolution:energy_core',
        P: 'mekanism:sps_casing',
        B: 'kubejs:superconducting_coil_type_2'
    }).id('kubejs:mekasuit_bodyarmor_s7')

    event.shaped('mekanism:mekasuit_pants', [
        'PCP',
        'BDB',
        'AEA'
    ], {
        D: Item.of('tconstruct:leggings_plating', '{Material:"tinkers_advanced:protocite"}').weakNBT(),
        A: 'avaritia:neutron_gear',
        C: '#forge:circuits/infinite',
        E: 'draconicevolution:energy_core',
        P: 'mekanism:sps_casing',
        B: 'kubejs:superconducting_coil_type_2'
    }).id('kubejs:mekasuit_pants_s7')

    event.shaped('mekanism:mekasuit_boots', [
        'PCP',
        'BDB',
        'AEA'
    ], {
        D: Item.of('tconstruct:boots_plating', '{Material:"tinkers_advanced:protocite"}').weakNBT(),
        A: 'avaritia:neutron_gear',
        C: '#forge:circuits/infinite',
        E: 'draconicevolution:energy_core',
        P: 'mekanism:sps_casing',
        B: 'kubejs:superconducting_coil_type_2'
    }).id('kubejs:mekasuit_boots_s7')

    event.shaped('avaritia:sculk_crafting_table', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'minecraft:echo_shard',
        B: 'minecraft:sculk_shrieker',
        C: '#forge:circuits/ultimate',
        D: 'avaritia:double_compressed_crafting_table',
        E: 'kubejs:cognitio'
    }).id('kubejs:sculk_crafting_table_s7')

    event.recipes.avaritia.shaped_table(
        1,
        'techreborn:iridium_neutron_reflector',
        [
            'BAC',
            'ADA',
            'CAB'
        ],
        {
            A: 'techreborn:thick_neutron_reflector',
            B: '#forge:ingots/iridium',
            C: '#forge:alloys/ultimate',
            D: 'draconicevolution:wyvern_core'
        }).id('kubejs:iridium_neutron_reflector_s7')

    event.recipes.avaritia.shaped_table(
        1,
        'techreborn:fusion_coil',
        [
            'CSC',
            'NAN',
            'CRC'
        ],
        {
            A: "techreborn:advanced_machine_casing",
            R: "techreborn:iridium_neutron_reflector",
            C: "techreborn:energy_flow_chip",
            S: "techreborn:superconductor",
            N: "techreborn:nichrome_heating_coil"
        }).id('kubejs:fusion_coil_s7')

    event.recipes.avaritia.shaped_table(
        2,
        'techreborn:fusion_control_computer',
        [
            'ABCBA',
            'DEFED',
            'GHIHG',
            'DJKLD',
            'AMCMA'
        ],
        {
            A: "mekanism:sps_casing",
            B: "nuclearcraft:heavy",
            C: "kubejs:industrial_machine_frame",
            D: "techreborn:fusion_coil",
            E: "draconicevolution:reactor_prt_stab_frame",
            F: "techreborn:computer_cube",
            G: "techreborn:lapotron_crystal",
            H: "mekanism:ultimate_control_circuit",
            I: "nuclearcraft:fusion_core",
            J: "mekanism:isotopic_centrifuge",
            K: "draconicevolution:item_draconic_energy_link",
            L: "mekanism:chemical_infuser",
            M: "techreborn:matter_fabricator"
        }).id('kubejs:fusion_control_computer_s7')

    event.recipes.avaritia.shaped_table(
        3,
        '2x packagedauto:package_component',
        [
            ' ABBBA ',
            'ADEFEHA',
            'BEEJEEB',
            'BFJLJFB',
            'BEEJEEB',
            'AOEFEQA',
            ' ABBBA '
        ],
        {
            A: "avaritia:blaze_cube",
            B: "avaritia:crystal_matrix_ingot",
            E: "kubejs:end_steel",
            F: "mekanism_extras:supreme_control_circuit",
            J: "kubejs:epsilon_framework",
            L: "avaritia:neutron_nugget",
            H: "cataclysm:flame_eye",
            D: "cataclysm:mech_eye",
            O: "cataclysm:void_eye",
            Q: "cataclysm:monstrous_eye"
        }
    ).id('kubejs:package_component_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'avaritia:neutron_collector',
        [
            'IIIIIIIII',
            'I QAAAQ I',
            'I HRRRH I',
            'CGRRDRRGC',
            'IGRFCFRGI',
            'CGRRERRGC',
            'I HRRRH I',
            'I  GGG  I',
            'IIICICIII'
        ],
        {
            C: "avaritia:crystal_matrix_ingot",
            I: 'dustandash:fission_reactor_casing',
            Q: 'mekanismgenerators:fission_reactor_casing',
            R: "minecraft:redstone_block",
            D: 'packagedauto:me_package_component',
            E: '#nuclearcraft:isotopes/californium/250',
            F: '#forge:dusts/promethium_147',
            G: '#mekanism_extras:alloys/thermonuclear',
            H: '#forge:plates/iridium_alloy',
            A: 'minecraft:anvil'
        }
    ).id('kubejs:neutron_collector_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'avaritia:neutron_compressor',
        [
            'IIIHHHIII',
            'CBNAAANBC',
            'IBN   NBI',
            'CAN   NAC',
            'RNN O NNR',
            'CAN   NAC',
            'IBN   NBI',
            'CBNAAANBC',
            'IIICICIII'
        ],
        {
            C: "avaritia:crystal_matrix_ingot",
            H: "minecraft:hopper",
            I: 'avaritia:blaze_cube_block',
            N: "avaritia:neutron_ingot",
            O: 'avaritia:dense_neutron_collector',
            R: "minecraft:redstone_block",
            A: 'avaritia:blaze_cube_block',
            B: 'sophisticatedbackpacks:stack_upgrade_tier_1'
        }
    ).id('kubejs:neutron_compressor_s7')

    event.recipes.avaritia.shaped_table(
        4,
        Item.of('bfr:fusion_reactor_frame', 4 + global.frameworkAddition),
        [
            'AAABBBAAA',
            'ACCDEDCCA',
            'AC DED CA',
            'BDDDJDDDB',
            'BEEILIEEB',
            'BDDDMDDDB',
            'AC DED CA',
            'ACCDEDCCA',
            'AAABBBAAA'
        ],
        {
            A: "mekanismgenerators:fission_reactor_casing",
            B: '#mekanism_extras:alloys/thermonuclear',
            C: Item.of("tconstruct:large_plate", '{Material:"tinkers_advanced:osgloglas"}').weakNBT(),
            D: "techreborn:iridium_reinforced_stone_storage_block",
            E: "nuclearcraft:heavy",
            I: "forestry:royal_jelly",
            J: 'mekanism_extras:supreme_induction_cell',
            L: "mekanism:sps_casing",
            M: Item.of("tinkers_advanced:flux_core", '{Material:"tinkers_advanced:densium"}').weakNBT()
        }
    ).id('kubejs:fusion_reactor_frame_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'mekanism_extras:naquadah_reactor_controller',
        [
            'AAAA AAAA',
            'ABBBCBBBA',
            'ABDBBBDBA',
            'ABBBBBBBA',
            ' EBFBFBE ',
            'AGBBBBBGA',
            'AGBBHBBGA',
            'AIGBBBGIA',
            'AAAA AAAA'
        ],
        {
            A: "mekanism_extras:naquadah_reactor_casing",
            B: '#forge:ingots/neutronium',
            C: "packagedavaritia:extreme_crafter",
            D: '#forge:circuits/cosmic',
            E: "avaritia:crystal_matrix",
            F: "kubejs:superconducting_coil_type_3",
            G: "draconicevolution:draconic_energy_core",
            H: "mekanism_extras:absolute_chemical_tank",
            I: "mekanism_extras:upgrade_ionic_membrane"
        }
    ).id('kubejs:naquadah_reactor_controller_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'nuclearcraft:chamber_terminal',
        [
            'AABBBBBAA',
            'ACEAAAECA',
            'BEGHHHGEB',
            'BAHGIGHAB',
            'BAHIJIHAB',
            'BAHGIGHAB',
            'BEGHHHGEB',
            'ACEAAAECA',
            'AABBBBBAA'
        ],
        {
            A: "nuclearcraft:neutronium_frame",
            B: "nuclearcraft:plate_extreme",
            C: "nuclearcraft:basic_electric_circuit",
            E: '#forge:circuits/infinite',
            G: '#mekanism_extras:alloys/spectrum',
            H: "avaritia:crystal_matrix",
            I: 'kubejs:beryllium_bronze_alloy',
            J: "mekanism_extras:upgrade_ionic_membrane"
        }
    ).id('kubejs:chamber_terminal_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'draconicevolution:creative_capacitor',
        [
            'AAAACAAAA',
            'AEEBCBEEA',
            'AEBFCFBEA',
            'ABFFGFFBA',
            'CCCIDJCCC',
            'ABFFHFFBA',
            'AEBFCFBEA',
            'AEEBCBEEA',
            'AAAACAAAA'
        ],
        {
            A: 'avaritia:infinity_ingot',
            B: 'draconicevolution:chaotic_crafting_injector',
            C: 'draconicevolution:reactor_stabilizer',
            D: 'draconicevolution:reactor_core',
            E: 'draconicevolution:chaotic_core',
            F: 'draconicevolution:chaotic_capacitor',
            G: 'ae2:creative_energy_cell',
            H: 'avaritia:infinity_chest',
            I: 'mekanism_extras:absolute_induction_cell',
            J: 'mekanism_extras:absolute_induction_provider'
        }
    ).id('kubejs:creative_capacitor_de_s7')

    event.recipes.avaritia.shaped_table(
        4,
        '3x thermal:machine_efficiency_creative_augment',
        [
            'GGGHHHGGG',
            'GAABBBAAG',
            'GABBCBBAG',
            'HBBDEDBBH',
            'HBCEFECBH',
            'HBBDEDBBH',
            'GABBCBBAG',
            'GAABBBAAG',
            'GGGHHHGGG'
        ],
        {
            A: 'kubejs:basepoint_alloy',
            B: '#forge:ingots/neutronium',
            C: 'thermal_extra:dragonsteel_machine_efficiency_augment',
            D: 'thermal_extra:dragonsteel_machine_speed_augment',
            E: 'thermal_extra:dragonsteel_rf_coil_xfer_augment',
            F: 'avaritia:enhancement_core',
            G: '#forge:storage_blocks/dragonsteel',
            H: '#forge:ingots/dragonsteel'
        }
    ).id('kubejs:thermal_upgrade_creative_s7')

    event.recipes.avaritia.shaped_table(
        4,
        '2x mekanism_extras:upgrade_creative',
        [
            'GGGHHHGGG',
            'GAABBBAAG',
            'GABBCBBAG',
            'HBBDEDBBH',
            'HBCEFECBH',
            'HBBDEDBBH',
            'GABBCBBAG',
            'GAABBBAAG',
            'GGGHHHGGG'
        ],
        {
            A: 'mekanism_extras:infinite_energy_cube',
            B: '#forge:ingots/neutronium',
            C: 'mekanism:upgrade_energy',
            D: 'mekanism:upgrade_speed',
            E: Item.of('tconstruct:large_plate', '{Material:"tinkers_advanced:osgloglas"}').weakNBT(),
            F: 'avaritia:enhancement_core',
            G: '#forge:storage_blocks/dragonsteel',
            H: 'mekanism_extras:infinite_tier_installer'
        }
    ).id('kubejs:mek_upgrade_creative_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'draconicevolution:creative_op_capacitor',
        [
            'BHCJCJCHB',
            'HFGKKKGFH',
            'CGAAIAAGC',
            'JKACECAKJ',
            'CKIEDEIKC',
            'JKACECAKJ',
            'CGAAIAAGC',
            'HFGKKKGFH',
            'BHCJCJCHB'
        ],
        {
            A: 'avaritia:infinity_ingot',
            B: 'mekanism_extras:cosmic_induction_cell',
            C: 'draconicevolution:reactor_stabilizer',
            D: 'draconicevolution:reactor_core',
            E: 'draconicevolution:creative_capacitor',
            F: 'mekanism_extras:cosmic_induction_provider',
            G: 'mekanism_extras:supreme_induction_provider',
            H: 'mekanism_extras:supreme_induction_cell',
            I: 'mekanism_extras:reinforced_induction_port',
            J: 'mekanism_extras:infinite_induction_provider',
            K: 'mekanism_extras:infinite_induction_cell'
        }
    ).id('kubejs:creative_op_capacitor_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'botania:creative_pool',
        [
            'BBBDYDBBB',
            'BXCLYLCXB',
            'BCLEAELCB',
            'DLEHAIELD',
            'YYAAFAAYY',
            'DLEJAKELD',
            'BCLEAELCB',
            'BXCLYLCXB',
            'BBBDYDBBB'
        ],
        {
            C: 'botania:mana_pool',
            E: 'botania:dragonstone_block',
            F: 'avaritia:endless_cake',
            X: 'avaritia:infinity_catalyst',
            Y: 'botania:fabulous_pool',
            A: 'appbot:portable_mana_storage_cell_256k',
            B: 'avaritia:neutron',
            D: 'mythicbotany:alfsteel_block',
            H: 'mythicbotany:andwari_ring',
            I: 'mythicbotany:kvasir_mead',
            J: 'mythicbotany:alfsteel_pick',
            K: 'botania:pinkinator',
            L: 'avaritia:infinity_ingot'
        }
    ).id('kubejs:creative_pool_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'mekanism:creative_fluid_tank',
        [
            'MIIIIIIIM',
            'ISAAAAASI',
            'IABBZBBAI',
            'IABNCNBAI',
            'IOZCKCZOI',
            'IABNCNBAI',
            'IABBZBBAI',
            'ISAAAAASI',
            'MIIIIIIIM'
        ],
        {
            A: 'mekanism_extras:infinite_fluid_tank',
            B: 'mekanism:dynamic_tank',
            C: 'mekanism:structural_glass',
            I: 'avaritia:infinity_ingot',
            S: 'avaritia:infinity_catalyst',
            K: 'avaritia:endless_cake',
            N: 'tinkers_advanced:molten_neutronite_bucket',
            M: 'avaritia:neutron',
            Z: 'nuclearcraft:californium_250_za_bucket',
            O: 'nuclearcraft:californium_250_ni_bucket'
        }
    ).id('kubejs:creative_fluid_tank_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'avaritia:infinity_helmet',
        [
            '  NNNNN  ',
            ' NIITIIN ',
            ' N XIX N ',
            ' NIIIIIN ',
            ' NIIIIIN ',
            ' NI I IN ',
            '         ',
            '         ',
            '         '
        ],
        {
            I: 'avaritia:infinity_ingot',
            N: 'avaritia:neutron_ingot',
            X: 'avaritia:infinity_catalyst',
            T: 'avaritia:infinity_totem'
        }
    ).id('kubejs:infinity_helmet_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'avaritia:infinity_chestplate',
        [
            ' NN   NN ',
            'NNN   NNN',
            'NNN   NNN',
            ' NIIIIIN ',
            ' NIIXIIN ',
            ' NIIIIIN ',
            ' NIITIIN ',
            ' NIIIIIN ',
            '  NNNNN  '
        ],
        {
            I: 'avaritia:infinity_ingot',
            N: 'avaritia:neutron_ingot',
            X: 'avaritia:crystal_matrix',
            T: 'avaritia:infinity_totem'
        }
    ).id('kubejs:infinity_chestplate_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'avaritia:infinity_pants',
        [
            'NNNNNNNNN',
            'NIIIXIIIN',
            'NINNXNNIN',
            'NIN   NIN',
            'NCN   NCN',
            'NIN T NIN',
            'NIN   NIN',
            'NIN   NIN',
            'NNN   NNN'
        ],
        {
            C: 'avaritia:crystal_matrix_ingot',
            I: 'avaritia:infinity_ingot',
            N: 'avaritia:neutron_ingot',
            X: 'avaritia:infinity_catalyst',
            T: 'avaritia:infinity_totem'
        }
    ).id('kubejs:infinity_pants_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'avaritia:infinity_boots',
        [
            ' NNN NNN ',
            ' NIN NIN ',
            ' NIN NIN ',
            'NNIN NINN',
            'NIIN NIIN',
            'NNNN NNNN',
            '    T    '
        ],
        {
            I: 'avaritia:infinity_ingot',
            N: 'avaritia:neutron_ingot',
            T: 'avaritia:infinity_totem'
        }
    ).id('kubejs:infinity_boots_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'embers:creative_ember_source',
        [
            '  ABCBA  ',
            ' AABBBAA ',
            ' ADDBDDA ',
            ' ADEFEDA ',
            ' ADFGFDA ',
            ' ADEFEDA ',
            ' ADDBDDA ',
            ' AABBBAA ',
            '  ABCBA  '
        ],
        {
            A: 'avaritia:infinity_nugget',
            B: 'avaritia:crystal_matrix',
            C: 'aetherworks:aether_prism_controller_matrix',
            D: 'avaritia:blaze_cube_block',
            E: Item.of('avaritia:singularity', '{Id:"avaritia:dawnstone"}').weakNBT(),
            F: 'aetherworks:aether_amalgam',
            G: 'avaritia:infinity_catalyst'
        }
    ).id('kubejs:creative_ember_source_s7')

    event.recipes.avaritia.shaped_table(
        4,
        'create:creative_motor',
        [
            'AAABBBAAA',
            'CDGHIHGDC',
            'CDGHJHGDC',
            'CDGHKHGDC',
            'CDGHLHGDC',
            'CDGGMGGDC',
            'CDEEFEEDC',
            'CDDDNDDDC',
            'CCCCCCCCC',
        ],
        {
            A: 'create:adjustable_chain_gearshift',
            B: 'avaritia:infinity_ingot',
            C: 'create:encased_chain_drive',
            D: Item.of('avaritia:singularity', '{Id:"avaritia:andesite_alloy"}').weakNBT(),
            E: 'minecraft:end_portal_frame',
            F: 'create:rotation_speed_controller',
            G: 'mekanism_extras:infinite_fluid_tank',
            H: 'create:mechanical_pump',
            I: Item.of('tconstruct:large_plate', '{Material:"tconstruct:unify_essence"}').weakNBT(),
            J: 'legendary_monsters:entity_warper',
            K: 'cookingforblockheads:sink',
            L: 'create:rotation_speed_controller',
            M: 'avaritia:infinity_catalyst',
            N: 'avaritia:endless_cake'
        }
    ).id('kubejs:creative_motor_s7')

    event.recipes.avaritia.shapeless_table(
        4,
        '3x kubejs:ultimate_berry',
        [
            'cobblemon:oran_berry', 'cobblemon:cheri_berry', 'cobblemon:chesto_berry', 'cobblemon:pecha_berry', 'cobblemon:rawst_berry', 'cobblemon:aspear_berry', 'cobblemon:persim_berry', 'cobblemon:razz_berry', 'cobblemon:bluk_berry', 'cobblemon:nanab_berry', 'cobblemon:wepear_berry', 'cobblemon:pinap_berry', 'cobblemon:occa_berry', 'cobblemon:passho_berry', 'cobblemon:wacan_berry', 'cobblemon:rindo_berry', 'cobblemon:yache_berry', 'cobblemon:chople_berry', 'cobblemon:kebia_berry', 'cobblemon:shuca_berry', 'cobblemon:coba_berry', 'cobblemon:payapa_berry', 'cobblemon:tanga_berry', 'cobblemon:charti_berry'
        ]
    ).id('kubejs:ultimate_berry_s7')

    event.recipes.avaritia
        .compressor("kubejs:ultimate_berry", Item.of("avaritia:singularity", '{Id:"avaritia:ultimate_berry"}'))
        .timeCost(600)
        .inputCount(16)
        .id('kubejs:ultimate_berry_s7_compressor')

    event.custom({
        "type": "nuclearcraft:kugelblitz_chamber",
        "input": [
            Item.of('#minecraft:music_discs').toJson()
        ],
        "output": [
            Item.of('avaritia:record_fragment').toJson()
        ],
        "powerModifier": 1.0,
        "radiation": 1.0,
        "timeModifier": 1.0
    }).id('kubejs:record_fragment_s7')


    event.custom({
        "type": "palmon:production",
        "category": "misc",
        "focus_stat": "SPECIAL_ATTACK",
        "min_level": 100,
        "required_type": "dragon",
        "base_hp": 120,
        "base_atk": 80,
        "base_def": 80,
        "base_spa": 120,
        "base_spd": 80,
        "base_spe": 120,
        "area_blocks": [
            Item.of('draconicevolution:reactor_core').toJson(),
            Item.of('draconicevolution:chaotic_crafting_injector').toJson(),

        ],
        "block_count": 1,
        "tick": 9600,
        "result_items": [
            Item.of('draconicevolution:large_chaos_frag').toJson()
        ],
        "result_power": 800000,
        "result_fluid": null
    }).id('kubejs:large_chaos_frag_s7')

    event.custom({
        "type": "dustandash:milling",
        "step1": false,
        "pattern": [
            "#AUA#",
            "#BCB#",
            "#DED#",
            "#BCB#",
            "#APA#"
        ],
        "key": {
            "catalyst":
            {
                "item": 'kubejs:superconducting_coil_type_3'
            },
            "#":
            {
                "item": "dustandash:titanium_plate_scrap"
            },
            "A":
            {
                "item": 'malum:eldritch_spirited_glass'
            },
            "B":
            {
                "tag": 'mekanism_extras:alloys/spectrum'
            },
            "C":
            {
                "item": 'mekanism:upgrade_filter'
            },
            "D":
            {
                "item": 'mekanism_extras:cosmic_control_circuit'
            },
            "E":
            {
                "item": 'bfr:fusion_reactor_frame'
            },
            "U":
            {
                "tag": 'forge:storage_blocks/hepatizon'
            },
            "P":
            {
                "item": 'nuclearcraft:turbine_beryllium_coil'
            }
        },
        "output": {
            "item": 'mekanism_extras:upgrade_ionic_membrane',
            "count": 2
        }

    }).id('kubejs:upgrade_ionic_membrane_s7')

    event.custom({
        "type": "techreborn:fusion_reactor",
        "power": -409600,
        "time": 800,
        "start-power": 4000000,
        "min-size": 10,
        "ingredients": [
            Ingredient.of('kubejs:scranton_reality_anchor').toJson(),
            Item.of('mekanism_extras:upgrade_ionic_membrane').toJson()
        ],
        "results": [
            Item.of('3x kubejs:beryllium_bronze_alloy').toJson()
        ]
    }).id('kubejs:beryllium_bronze_alloy_s7')

    event.custom({
        "type": "techreborn:fusion_reactor",
        "power": -8192,
        "time": 400,
        "start-power": 400000,
        "min-size": 10,
        "ingredients": [
            Ingredient.of('#expatternprovider:oversize_interface').toJson(),
            Item.of('packagedauto:package_component').toJson()
        ],
        "results": [
            Item.of('packagedauto:me_package_component').toJson()
        ]
    }).id('kubejs:me_package_component_s7')

    event.custom({
        "type": "techreborn:fusion_reactor",
        "power": -8192,
        "time": 400,
        "start-power": 400000,
        "min-size": 10,
        "ingredients": [
            Item.of('4x kubejs:gamma_framework').toJson(),
            Item.of('mekanism:basic_induction_cell').toJson()
        ],
        "results": [
            Item.of('4x kubejs:gamma_dust').toJson()
        ]
    }).id('kubejs:gamma_dust_s7')

    event.custom({
        "type": "techreborn:fusion_reactor",
        "power": -10240,
        "time": 800,
        "start-power": 400000,
        "min-size": 10,
        "ingredients": [
            Item.of('32x ae2:singularity').toJson(),
            Item.of('kubejs:basepoint_alloy').toJson()
        ],
        "results": [
            Item.of('4x avaritia:neutron_pile').toJson()
        ]
    }).id('kubejs:neutron_pile_s7')

    event.custom({
        "type": "dustandash:ionizer",
        "ingredients": [
            Item.of('mekanism_extras:dust_radiance').toJson(),
            Item.of('mekanism_extras:dust_radiance').toJson(),
            Item.of('mekanism_extras:dust_radiance').toJson(),

            Item.of('kubejs:gamma_dust').toJson(),
            Item.of('thermal:florb', '{Fluid:{Amount:1000,FluidName:"mekanism:uranium_oxide"}}').weakNBT().toJson()
        ],
        "inputBlock": "jaopca:storage_blocks.pyrolitic_carbon",
        "outputs": [
            Item.of('mekanism_extras:enriched_radiance').toJson(),
            Item.of('mekanism_extras:enriched_radiance').toJson(),
            Item.of('mekanism_extras:enriched_radiance').toJson(),
            Item.of('minecraft:redstone').toJson()
        ],
        "cost": 4,
        "tick": 200,
        "costElectrodes": true,
        "outputBlock": "jaopca:storage_blocks.ash"
    }).id('kubejs:enriched_radiance_s7')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "HP",
        "min_level": 100,
        "required_type": "psychic",
        "base_hp": 100,
        "base_atk": 100,
        "base_def": 100,
        "base_spa": 100,
        "base_spd": 100,
        "base_spe": 100,
        "area_blocks": [
            {
                "item": 'avaritia:diamond_lattice_block'
            },
            {
                "item": 'avaritia:double_compressed_crafting_table'
            },
            {
                "item": 'avaritia:crystal_matrix'
            }
        ],
        "block_count": 4,
        "input_items": [
            Item.of('6x mekanism_extras:enriched_shining').toJson(),
            Item.of('mekanism:pellet_antimatter', 1).toJson(),
            Item.of('palmon:polymer_plate', 1).toJson(),
            {
                "type": "forge:partial_nbt",
                "item": "avaritia:singularity",
                "nbt": "{Id:\"avaritia:ultimate_berry\"}",
                "count": 1
            }
        ],
        "input_power": 4096000,
        "input_fluid": null,
        "tick": 600,
        "result_items": [
            Item.of('6x mekanism_extras:enriched_spectrum').toJson()
        ]
    }).id('kubejs:enriched_spectrum_s7')

    event.recipes.avaritia.shapeless_table(
        4,
        "avaritia:ultimate_stew", [
        "minecraft:golden_apple",
        "minecraft:bread",
        "minecraft:cake",
        "minecraft:glistering_melon_slice",
        "minecraft:carrot",
        "minecraft:poisonous_potato",
        "minecraft:chorus_fruit",
        "minecraft:beetroot",
        "minecraft:mushroom_stew",
        "minecraft:honey_bottle",
        "minecraft:sweet_berries",
        'sakura:soup_red_bean',
        'sakura:soup_miso',
        'sakura:osuimono',
        'cobblemon:leek_and_potato_stew',
        'aquaculture:turtle_soup',
        'farmersdelight:bone_broth',
        'farmersdelight:chicken_soup',
        'farmersdelight:vegetable_soup',
        'farmersdelight:pumpkin_soup',
        'farmersdelight:noodle_soup',
        'tfc:food/dairy_soup',
        'farmersdelight:cooked_rice',
        'farmersdelight:bone_broth',
        'farmersdelight:beef_stew',
        'farmersdelight:chicken_soup',
        'farmersdelight:vegetable_soup',
        'farmersdelight:fish_stew',
        'farmersdelight:fried_rice',
        'farmersdelight:pumpkin_soup',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:noodle_soup',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:mushroom_rice',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:ratatouille',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:grilled_salmon',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:shepherds_pie',
        'farmersdelight:rice_roll_medley_block',
        'farmersdelight:cake_slice',
        'farmersdelight:apple_pie_slice',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:chocolate_pie_slice',
        'farmersdelight:sweet_berry_cookie',
        'farmersdelight:honey_cookie',
        'farmersdelight:melon_popsicle',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:fruit_salad',
        'farmersdelight:mixed_salad',
        'farmersdelight:nether_salad',
        'farmersdelight:egg_sandwich',
        'farmersdelight:chicken_sandwich',
        'farmersdelight:hamburger',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:mutton_wrap',
        'farmersdelight:dumplings',
        'farmersdelight:stuffed_potato',
        'farmersdelight:cabbage_rolls',
        'farmersdelight:salmon_roll',
        'farmersdelight:cod_roll',
        'farmersdelight:kelp_roll',
        'farmersdelight:kelp_roll_slice',
        'farmersdelight:hot_cocoa',
        'farmersdelight:apple_cider',
        'farmersdelight:melon_juice',
        'create:chocolate_glazed_berries',
        'create:honeyed_apple',
        'create:builders_tea',
        "avaritia:neutron_nugget"
    ]).id("kubejs:ultimate_stew_s7")

    event.recipes.avaritia.shapeless_table(
        4,
        "avaritia:cosmic_meatballs", [
        'minecraft:porkchop',
        'minecraft:beef',
        'minecraft:mutton',
        'minecraft:cod',
        'minecraft:salmon',
        'minecraft:tropical_fish',
        'minecraft:pufferfish',
        'minecraft:rabbit',
        'minecraft:chicken',
        'minecraft:rotten_flesh',
        'minecraft:spider_eye',
        '#forge:eggs',
        'thermal_extra:beef_jerky',
        'thermal_extra:chicken_jerky',
        'thermal_extra:mutton_jerky',
        'thermal_extra:rabbit_jerky',
        'sakura:beef_stick',
        'sakura:chicken_stick',
        'sakura:pork_stick',
        'rats:rat_burger',
        'tfc:food/protein_soup',
        'tfc:food/protein_salad',
        'thermal:stuffed_pepper',
        'farmersdelight:beef_patty',
        'farmersdelight:cooked_chicken_cuts',
        'casualness_delight:donkey_burger',
        'casualness_delight:chicken_bobo_chicken',
        'biomemakeover:crab_chowder',
        'malum:living_flesh',
        'avaritia:neutron_nugget'
    ]).id("kubejs:cosmic_meatballs_s7")

    event.recipes.avaritia.infinity_catalyst(
        "default",
        [
            "minecraft:emerald_block",
            "avaritia:crystal_matrix_ingot",
            "avaritia:neutron_ingot",
            "avaritia:cosmic_meatballs",
            "avaritia:ultimate_stew",
            "avaritia:endest_pearl",
            "avaritia:record_fragment",
            'kubejs:alpha_framework',
            'kubejs:beta_framework',
            'kubejs:gamma_framework',
            'kubejs:delta_framework',
            'kubejs:epsilon_framework',
            'kubejs:beryllium_bronze_alloy',
            'kubejs:cognitio',
            'kubejs:reinforced_sheet',
            'kubejs:virtual_gold_ingot',
            'kubejs:ancient_netherite',
            'kubejs:present_alloy',
            'kubejs:stable_desh_ingot',
            'kubejs:hallowed_soul_steel_ingot',
            'kubejs:intelligent_draconium_ingot',
            'kubejs:end_steel',
            'kubejs:basepoint_alloy',
            'kubejs:yin_yang_steel',
            'ae2:cell_component_256k',
            'appflux:core_256k',
            'forestry:ambrosia',
            'forestry:ambrosia',
            'avaritia:star_fuel'
        ]).id('avaritia:infinity_catalyst')

    deFusionCrafting(event, [
        Item.of('kubejs:superconducting_coil_type_2').toJson(),
        Item.of('kubejs:superconducting_coil_type_2').toJson(),
        Ingredient.of('#forge:circuits/infinite').toJson(),
        Item.of('draconicevolution:awakened_core').toJson()
    ],
        Item.of('techreborn:fusion_coil').toJson(),
        Item.of('kubejs:superconducting_coil_type_3').toJson(),
        "DRACONIC",
        400000000,
        'kubejs:superconducting_coil_type_3_s7'
    )

}