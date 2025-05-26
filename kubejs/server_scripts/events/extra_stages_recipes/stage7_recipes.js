// priority: 70

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
}