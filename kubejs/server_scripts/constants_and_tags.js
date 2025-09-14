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

    event.add('forge:ingots/black_steel',
        'cataclysm:black_steel_ingot'
    )
    event.add('forge:ingots/neutronium',
        '#forge:ingot/neutronium'
    )

    event.add('sbtwinattack:twin_attack_blacklist',
        'tinkers_advanced:electron_tuner'
    )

    event.add('kubejs:delivery_coordinates',
        'kubejs:delivery_coordinate_gamma',
        'kubejs:delivery_coordinate_epsilon',
        'kubejs:delivery_coordinate_ultimate'
    )

    event.add('kubejs:delivery_coordinate_blacklist',
        '@sophisticatedstorage',
        '@sophisticatedbackpacks',
        '@ae2',
        '@ae2things',
        '@create',
        '#minecraft:shulker_boxes',
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

    event.add("forge:sandstone/venus_sandstone",
        'ad_astra:venus_sandstone'
    )

    event.add("kubejs:t6_anvils",
        'tfc:metal/anvil/blue_steel',
        'tfc:metal/anvil/red_steel'
    )

    event.add("kubejs:t5_anvils",
        'tfc:metal/anvil/black_steel',
        '#kubejs:t6_anvils'
    )

    event.add("kubejs:t4_anvils",
        'tfc:metal/anvil/steel',
        '#kubejs:t5_anvils'
    )

    event.add("kubejs:t3_anvils",
        'tfc:metal/anvil/wrought_iron',
        '#kubejs:t4_anvils'
    )

    event.add("kubejs:t2_anvils",
        '#tfc:bronze_anvils',
        '#kubejs:t3_anvils'
    )

    event.add("kubejs:t1_anvils",
        'tfc:metal/anvil/copper',
        '#kubejs:t2_anvils'
    )

    event.add('tfc:foods/usable_in_soup',
        '#forge:cheese'
    )

    event.add('tfc:firepit_fuel',
        '#forge:coal'
    )

})

ServerEvents.tags('block', event => {

    event.add('ae2:growth_acceleratable',
        '#cobblemon:berries'
    )

    event.add("forge:sandstone/venus_sandstone",
        'ad_astra:venus_sandstone'
    )


})

ServerEvents.tags('fluid', event => {

    event.add('tfc:usable_in_barrel',
        'ad_astra:fuel'
    )

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

    event.add('forge:molten_bismuth',
        'tfc:metal/bismuth'
    )

    event.remove('minecraft:water',
        'cobgyms:safe_lava'
    )

})
