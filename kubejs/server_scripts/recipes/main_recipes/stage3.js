ServerEvents.recipes(event => {
  event.replaceInput([
    { id: 'gendustry:genetics_processor' }
  ],
    'minecraft:ender_pearl',
    'forestry:flexible_casing'
  )
  event.replaceInput([
    { id: 'gendustry:industrial_apiary' }
  ],
    'forestry:sturdy_machine',
    'forestry:hardened_machine'
  )
  event.replaceInput([
    { id: 'gendustry:industrial_apiary' }
  ],
    'minecraft:piston',
    'forestry:apiary'
  )

  event.shapeless('nuclearcraft:glowing_mushroom', ['#forge:mushrooms', '#forge:dusts/glowstone', '#forge:dusts/sulfur']).id('kubejs:glowing_mushroom_s3')
  event.shapeless('minecraft:warped_nylium', ['minecraft:warped_fungus', '#forge:netherrack']).id('kubejs:warped_nylium_s3')
  event.shapeless('embers:dawnstone_crystal_seed', ['4x embers:dawnstone_aspectus']).id('kubejs:dawnstone_crystal_seed_s3')

  event.shaped(
    'appflux:redstone_crystal',
    [
      'ACA',
      'BDB',
      'AEA'
    ],
    {
      A: '#forge:dusts/fluix',
      B: 'kubejs:stable_desh_ingot',
      C: 'integrateddynamics:energy_battery',
      D: '#forge:processors/ostrum',
      E: 'ae2:sky_dust'
    }
  ).id('kubejs:redstone_crystal_s3');

  event.shaped(
    'mekanism_extras:expand_radioactive_waste_barrel',
    [
      'SIS',
      'IMI',
      'SIS'
    ],
    {
      I: 'mekanism:radioactive_waste_barrel',
      S: '#forge:storage_blocks/lead',
      M: 'nuclearcraft:decay_hastener'
    }
  ).id('kubejs:expand_radioactive_waste_barrel_s3');

  event.shaped('minecraft:iron_trapdoor', [
    'AA',
    'AA'
  ],
    {
      A: '#forge:ingots/cast_iron'
    }).id('kubejs:iron_trapdoor_s3')

  event.shaped('cobblefordays:tier_4', [
    'AAA',
    'BDC',
    'AAA'
  ],
    {
      A: 'kubejs:stable_desh_ingot',
      B: 'minecraft:water_bucket',
      C: 'minecraft:lava_bucket',
      D: 'cobblefordays:tier_3'
    }).id('kubejs:cobble_t4_s3')

  event.shaped('minecraft:enchanting_table', [
    ' A ',
    'BCB',
    'CCC'
  ],
    {
      A: 'minecraft:book',
      B: 'kubejs:stable_desh_ingot',
      C: '#forge:obsidian'
    }).id('kubejs:enchanting_table_s3')

  event.shaped('immersiveengineering:wirecutter', [
    'C C',
    ' A ',
    'B B'
  ],
    {
      A: 'kubejs:present_alloy',
      B: '#forge:rods',
      C: 'create:andesite_alloy'
    }).id('kubejs:wirecutter_s3')

  event.shaped('immersiveengineering:hammer', [
    ' AC',
    ' BA',
    'B  '
  ],
    {
      A: 'kubejs:present_alloy',
      B: '#forge:rods',
      C: 'create:andesite_alloy'
    }).id('kubejs:hammer_s3')

  event.shaped(Item.of('thermal:machine_frame', 2 + global.frameworkAddition), [
    'ABA',
    'BCB',
    'ABA'
  ],
    {
      A: '#forge:plates/steel',
      B: '#forge:gears/tin',
      C: 'kubejs:beta_framework'
    }).id('kubejs:machine_frame_s3')

  event.custom({
    "type": "thermal_extra:component_assembly",
    "energy": 25000,
    "ingredients": [
      {
        "count": 4,
        "tag": 'forge:tar'
      },
      {
        "count": 1,
        "item": 'minecraft:bucket'
      },
      {
        "amount": 1000,
        "fluid": 'ad_astra:oil'
      }
    ],
    "result": [
      {
        "count": 1,
        "item": 'thermal:crude_oil_bucket'
      }
    ]
  }).id('kubejs:crude_oil_1_s3')

  event.custom({
    "type": "thermal_extra:component_assembly",
    "energy": 25000,
    "ingredients": [
      {
        "count": 4,
        "tag": 'forge:tar'
      },
      {
        "count": 1,
        "item": 'minecraft:bucket'
      },
      {
        "amount": 1000,
        "fluid": 'techreborn:oil'
      }
    ],
    "result": [
      {
        "count": 1,
        "item": 'thermal:crude_oil_bucket'
      }
    ]
  }).id('kubejs:crude_oil_2_s3')

  event.recipes.thermal.pulverizer('2x minecraft:scute',
    ['minecraft:turtle_helmet']
  ).energy(9600)
    .id('kubejs:scute_s3')

  event.recipes.thermal.smelter('2x kubejs:present_alloy',
    ['3x #forge:ingots/signalum', '2x #forge:ingots/lumium', '#forge:ingots/enderium']
  ).energy(9600)
    .id('kubejs:present_alloy_s3')

  event.recipes.thermal.smelter('3x create:andesite_alloy',
    ['2x #forge:plates/zinc', '#forge:plates/steel', '2x occultism:otherstone']
  ).energy(6400)
    .id('kubejs:andesite_alloy_s3')

  event.recipes.thermal.smelter('2x kubejs:stable_desh_ingot',
    ['2x #forge:plates/desh', 'kubejs:present_alloy', '4x #forge:gems/prismarine']
  ).energy(12800)
    .id('kubejs:stable_desh_ingot_1_s3')

  event.recipes.thermal.smelter(['5x kubejs:stable_desh_ingot', 'cataclysm:abyssal_egg'],
    ['3x #forge:plates/desh', 'kubejs:present_alloy', 'cataclysm:abyssal_egg']
  ).energy(9600)
    .id('kubejs:stable_desh_ingot_2_s3')

  event.recipes.thermal.smelter('tfc:ceramic/fire_brick',
    ['12x tfc:kaolin_clay', '4x #forge:dusts/graphite', '#forge:clay']
  ).energy(19200)
    .id('kubejs:fire_brick_s3')

  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 4,
        "item": "malum:null_slate"
      },
      {
        "count": 1,
        "item": 'malum:runewood_tablet'
      },
      {
        "count": 1,
        "item": 'malum:soulwood_tablet'
      }
    ],
    "input": {
      "count": 1,
      "item": "malum:tainted_rock_tablet"
    },
    "output": {
      "item": "malum:void_tablet"
    },
    "spirits": [
      {
        "type": "eldritch",
        "count": 4
      }
    ]
  }).id('kubejs:void_tablet_s3')

  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 4,
        "item": "malum:runewood_planks"
      },
      {
        "count": 4,
        "item": 'kubejs:hallowed_soul_steel_ingot'
      }
    ],
    "input": {
      "count": 1,
      "item": "malum:runewood_item_pedestal"
    },
    "output": {
      "item": "malum:runic_workbench"
    },
    "spirits": [
      {
        "type": "aqueous",
        "count": 16
      },
      {
        "type": "sacred",
        "count": 8
      }
    ]
  }).id('kubejs:runic_workbench_s3')


  event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "item": "ad_astra:rocket_nose_cone"
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'ad_astra:desh_block'
      },
      {
        "item": 'ad_astra:desh_block'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'ad_astra:desh_tank'
      },
      {
        "item": 'ad_astra:desh_tank'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'ad_astra:desh_engine'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'ad_astra:desh_engine'
      }
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_2_rocket"
    }
  }).id('kubejs:tier_2_rocket_s3')

  event.custom({
    "type": "palmon:production",
    "category": "misc",
    "focus_stat": "SPECIAL_DEFENCE",
    "min_level": 60,
    "required_type": "normal",
    "base_hp": 0,
    "base_atk": 0,
    "base_def": 0,
    "base_spa": 0,
    "base_spd": 0,
    "base_spe": 0,
    "area_blocks": [
      {
        "tag": 'forge:storage_blocks/andesite_alloy'
      },
      {
        "tag": 'forge:storage_blocks/zinc'
      },
      {
        "tag": 'forge:storage_blocks/steel'
      },
      Item.of('create:andesite_casing').toJson(),
      Item.of('create:mechanical_press').toJson(),
      Item.of('create:basin').toJson(),
      Item.of('minecraft:blast_furnace').toJson(),

    ],
    "block_count": 2,
    "tick": 3200,
    "result_items": [
      Item.of('create:andesite_alloy').toJson()
    ],
    "result_power": 0,
    "result_fluid": null
  }).id('kubejs:andesite_alloy_palmon_s3')

  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "ATTACK",
    "min_level": 60,
    "required_type": 'dark',
    "base_hp": 30,
    "base_atk": 30,
    "base_def": 30,
    "base_spa": 30,
    "base_spd": 30,
    "base_spe": 30,
    "area_blocks": [
      {
        "item": "embers:mixer_centrifuge"
      },
      {
        "item": "embers:fluid_vessel"
      }
    ],
    "block_count": 4,
    "input_items": [
      Item.of('#forge:storage_blocks/gold').toJson(),
      Item.of('#forge:storage_blocks/copper').toJson(),
      Item.of('embers:ember_crystal').toJson()
    ],
    "input_power": 80000,
    "input_fluid": null,
    "tick": 1200,
    "result_items": [
      Item.of('embers:dawnstone_block', 2).toJson()
    ]
  }
  ).id('kubejs:dawnstone_block_acc_s3')

  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "ATTACK",
    "min_level": 30,
    "required_type": 'grass',
    "base_hp": 30,
    "base_atk": 30,
    "base_def": 30,
    "base_spa": 30,
    "base_spd": 30,
    "base_spe": 30,
    "area_blocks": [],
    "block_count": 0,
    "input_items": [
      {
        "tag": 'forge:vegetables',
        "count": 2
      },
      {
        "tag": 'forge:fruits',
        "count": 2
      },
      {
        "tag": 'forge:salt',
        "count": 1
      },
      {
        "tag": 'forge:sugar',
        "count": 1
      },
      {
        "item": 'minecraft:glass_bottle',
        "count": 1
      }
    ],
    "input_power": 4000,
    "input_fluid": {
      "fluid": "minecraft:water",
      "amount": 1000
    },
    "tick": 1600,
    "result_items": [
      {
        "item": 'kubejs:anchorgleam',
        "count": 2
      }
    ]
  }
  ).id('kubejs:anchorgleam_s3')

  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "HP",
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
        "item": 'supplementaries:sugar_cube'
      },
      {
        "item": 'cobblemon:healing_machine'
      },
      {
        "item": 'cobblemon:monitor'
      },
      {
        "tag": 'forge:storage_blocks/iron'
      }
    ],
    "block_count": 2,
    "input_items": [
      Item.of('minecraft:sugar', 64).toJson(),
      Item.of('minecraft:honey_bottle', 8).toJson(),
      Item.of('minecraft:paper', 8).toJson(),
      Item.of('supplementaries:sugar_cube', 2).toJson(),
      Item.of('palmon:m_crystal', 1).toJson()
    ],
    "input_power": 0,
    "input_fluid": {
      "fluid": "minecraft:water",
      "amount": 4000
    },
    "tick": 1200,
    "result_items": [
      {
        "item": 'cobblemon:exp_candy_s',
        "count": 1
      }
    ]
  }).id('kubejs:exp_candy_s_s3')

  event.custom({
    "type": "slashblade:shaped_blade",
    "blade": "slashblade_addon:dark_raven",
    "category": "equipment",
    "key": {
      "A": {
        "item": 'occultism:magic_lamp_empty'
      },
      "B": {
        "item": "slashblade:slashblade"
      },
      "I": {
        "item": 'kubejs:stable_desh_ingot'
      },
      "C": {
        "tag": 'forge:dyes/black'
      },
      "D": {
        "item": 'slashblade:proudsoul_ingot'
      },
      "E": {
        "item": 'occultism:awakened_feather'
      }
    },
    "pattern": [
      " AI",
      " BC",
      "D E"
    ],
    "result": {
      "item": "slashblade:slashblade"
    },
    "show_notification": true
  }).id('kubejs:dark_raven_s3')

})