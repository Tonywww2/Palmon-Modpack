// priority: 200

global.modBlackList = new Set(['minecraft', 'tconstruct', 'cataclysm', 'tconstruct', 'malum', 'rats'])

global.ratlantis = "ratlantis"
global.endStage = "the_end"

global.overworldItemStage = "overworld_item"
global.slashbladeStage = "slashblade"

global.diffLevelStage = "diff_level_"

ServerEvents.tags('item', event => {
    event.add('kubejs:tier_1_materials',
        'thermal:enderium_ingot',
        'nuclearcraft:hard_carbon_ingot',
        'ad_astra:desh_ingot',
        'tconstruct:manyullyn_ingot',
        'malum:soul_stained_steel_ingot',
        'botania:terrasteel_nugget',
        'embers:dawnstone_ingot',
        'occultism:spirit_attuned_gem'
    )

    event.add('forge:vegetables',
        '#cobblemon:plants'
    )

    event.add('forge:crops',
        '#cobblemon:plants'
    )

    event.add('kubejs:apothecary',
        'botania:apothecary_default',
        'botania:apothecary_forest',
        'botania:apothecary_plains',
        'botania:apothecary_mountain',
        'botania:apothecary_fungal',
        'botania:apothecary_swamp',
        'botania:apothecary_desert',
        'botania:apothecary_taiga',
        'botania:apothecary_mesa',
        'botania:apothecary_mossy',
        'botania:apothecary_livingrock',
        'botania:apothecary_deepslate'
    )

    event.add('kubejs:stage2_convergence',
        'jaopca:processors.fluix',
        'botania:terrasteel_ingot',
        'jaopca:gears.unknown'
    )

    event.add('dustandash:centrifuge_catalyst',
        'techreborn:cell'
    )

    event.add('kubejs:delivery_coordinate_blacklist',
        '@sophisticatedstorage',
        '@sophisticatedbackpacks',
        '@ae2',
        '@ae2things',
        '@create',
        'kubejs:delivery_coordinate_gamma',
        'kubejs:delivery_coordinate_epsilon',
        'kubejs:delivery_coordinate_ultimate',
        'forestry:miner_bag',
        'forestry:digger_bag',
        'forestry:forester_bag',
        'forestry:hunter_bag',
        'forestry:adventurer_bag',
        'forestry:builder_bag',
        'forestry:miner_bag_woven',
        'forestry:digger_bag_woven',
        'forestry:forester_bag_woven',
        'forestry:hunter_bag_woven',
        'forestry:adventurer_bag_woven',
        'forestry:builder_bag_woven',
        'industrialforegoing:infinity_backpack',
        'forestry:apiarist_bag',
        'forestry:arborist_bag',
        'forestry:lepidopterist_bag',
        'tinkers_things:sack',
        'mekanism:cardboard_box',
        'immersiveengineering:crate',
        'immersiveengineering:reinforced_crate',
        'immersiveengineering:minecart_woodencrate',
        'immersiveengineering:minecart_reinforcedcrate',
        'mekanism:basic_bin',
        'mekanism:advanced_bin',
        'mekanism:elite_bin',
        'mekanism:ultimate_bin',
        'mekanism_extras:absolute_bin',
        'mekanism_extras:supreme_bin',
        'mekanism_extras:cosmic_bin',
        'mekanism_extras:infinite_bin',
        'mekanism:personal_chest',
        'supplementaries:safe',
        'immersiveengineering:toolbox'
    )

})

ServerEvents.tags('fluid', event => {
    event.add('kubejs:hybrid_fuel',
        'kubejs:hybrid_fuel'
    )

    event.add('forge:deuterium',
        'techreborn:deuterium'
    )

    event.add('forge:tritium',
        'techreborn:tritium'
    )

    event.add('forge:helium',
        'techreborn:helium'
    )

    event.remove('minecraft:water',
        'cobgyms:safe_lava'
    )

})
