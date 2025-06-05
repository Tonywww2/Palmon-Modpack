// priority: 90

const stage7 = function (event) {
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

    event.custom({
        "type": "techreborn:fusion_reactor",
        "power": -8192,
        "time": 400,
        "start-power": 400000,
        "min-size": 28,
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
        "min-size": 28,
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

}