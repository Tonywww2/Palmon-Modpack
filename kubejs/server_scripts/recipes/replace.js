ServerEvents.recipes(event => {
    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'draconicevolution:draconium_ingot',
        'kubejs:intelligent_draconium_ingot'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'ars_nouveau:source_gem',
        'kubejs:charged_source_gem'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'techreborn:basic_machine_frame',
        'kubejs:basic_machine_frame'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'techreborn:advanced_machine_frame',
        'kubejs:advanced_machine_frame'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'techreborn:industrial_machine_frame',
        'kubejs:industrial_machine_frame'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'ad_astra:desh_plate',
        'kubejs:stable_desh_ingot'
    )

    event.replaceInput([
        { mod: 'bfr'}
    ],
        '#forge:circuits/ultimate',
        '#forge:circuits/cosmic'
    )

    event.replaceInput([
        { id: 'mekanism:dictionary'}
    ],
        '#forge:circuits/basic',
        'kubejs:stable_desh_ingot'
    )

    event.replaceInput([
        { id: 'mekanism:oredictionificator'}
    ],
        '#forge:circuits/basic',
        'kubejs:stable_desh_ingot'
    )

    event.replaceInput([
        { id: 'mekanism:logistical_sorter'}
    ],
        '#forge:circuits/basic',
        'kubejs:stable_desh_ingot'
    )

    event.replaceInput([
        { id: 'constructionwand:core_destruction'}
    ],
        'minecraft:diamond_pickaxe',
        'kubejs:end_steel'
    )

    event.replaceInput([
        { id: 'packagedavaritia:extreme_crafter_ae'}
    ],
        'minecraft:hopper',
        Item.of('avaritia:singularity', '{Id:"avaritia:steel"}').weakNBT()
    )

    event.replaceInput([
        { id: 'mekanism:metallurgic_infuser'}
    ],
        '#forge:ingots/osmium',
        'mekanism:steel_casing'
    )

    event.replaceInput([
        { id: 'expatternprovider:circuit_cutter'}
    ],
        'ae2:quartz_glass',
        'ae2:inscriber'
    )

    event.replaceInput([
        { id: 'aetherworks:aether_forge_block'}
    ],
        'embers:caminite_bricks',
        'aetherworks:aether_amalgam'
    )

    event.replaceInput([
        { id: 'hostilenetworks:deep_learner'}
    ],
        '#forge:obsidian',
        'kubejs:end_steel'
    )

    event.replaceInput([
        { id: 'hostilenetworks:framework'}
    ],
        'minecraft:clay_ball',
        'kubejs:end_steel'
    )

    event.replaceInput([
        { id: 'draconicevolution:machines/basic_crafting_injector' }
    ],
        'draconicevolution:draconium_core',
        'draconicevolution:wyvern_energy_core'
    )

    event.replaceInput([
        { id: 'occultism:crafting/chalk_purple_impure' }
    ],
        '#forge:dusts/end_stone',
        'kubejs:essence_computation_frame'
    )

    event.replaceInput([
        { id: 'ae2:network/blocks/quantum_ring' }
    ],
        'ae2:engineering_processor',
        'kubejs:essence_computation_frame'
    )

    event.replaceInput([
        { id: 'ae2:network/parts/storage_bus' }
    ],
        'minecraft:piston',
        'kubejs:essence_computation_frame'
    )

    event.replaceInput([
        { id: 'create:crafting/kinetics/deployer' }
    ],
        'create:andesite_casing',
        'create:brass_casing'
    )

    event.replaceInput([
        {}
    ],
        'minecraft:anvil',
        '#minecraft:anvil'
    )

    event.replaceInput([
        {}
    ],
        'nuclearcraft:neutronium_ingot',
        '#forge:ingots/neutronium'
    )

})