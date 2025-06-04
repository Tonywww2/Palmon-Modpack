ServerEvents.recipes(event => {
  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "SPECIAL_ATTACK",
    "min_level": 40,
    "required_type": null,
    "base_hp": 30,
    "base_atk": 60,
    "base_def": 0,
    "base_spa": 60,
    "base_spd": 0,
    "base_spe": 0,
    "area_blocks": [
      {
        "item": "tfc:metal/block/red_steel"
      },
      {
        "item": "tfc:metal/block/blue_steel"
      },
      {
        "item": "minecraft:light_blue_stained_glass"
      }
    ],
    "block_count": 4,
    "input_items": [
      {
        "item": "palmon:stone",
        "count": 16
      },
      {
        "tag": "tfc:gem_powders",
        "count": 1
      }
    ],
    "input_power": 0,
    "input_fluid": null,
    "tick": 4000,
    "result_items": [
      {
        "item": "palmon:m_crystal",
        "count": 1
      }
    ]
  })

  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "SPECIAL_ATTACK",
    "min_level": 40,
    "required_type": null,
    "base_hp": 0,
    "base_atk": 0,
    "base_def": 0,
    "base_spa": 60,
    "base_spd": 0,
    "base_spe": 0,
    "area_blocks": [
      {
        "tag": "tfc:anvils"
      },
      {
        "tag": "tfc:workbenches"
      }
    ],
    "block_count": 1,
    "input_items": [
      {
        "item": "cobblemon:ancient_azure_ball",
        "count": 1
      },
      {
        "tag": "forge:dusts/redstone",
        "count": 4
      },
      {
        "item": "palmon:m_crystal",
        "count": 2
      },
      {
        "tag": "forge:sheets/wrought_iron",
        "count": 1
      }
    ],
    "input_power": 0,
    "input_fluid": null,
    "tick": 1600,
    "result_items": [
      {
        "item": "cobblemon:ancient_great_ball",
        "count": 1
      }
    ]
  })

  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "SPECIAL_ATTACK",
    "min_level": 50,
    "required_type": null,
    "base_hp": 0,
    "base_atk": 0,
    "base_def": 0,
    "base_spa": 60,
    "base_spd": 0,
    "base_spe": 0,
    "area_blocks": [
      {
        "tag": "tfc:anvils"
      },
      {
        "tag": "tfc:workbenches"
      }
    ],
    "block_count": 1,
    "input_items": [
      {
        "item": "cobblemon:ancient_slate_ball",
        "count": 1
      },
      {
        "tag": "forge:dusts/redstone",
        "count": 8
      },
      {
        "item": "palmon:m_crystal",
        "count": 3
      },
      {
        "tag": "forge:sheets/black_steel",
        "count": 1
      }
    ],
    "input_power": 0,
    "input_fluid": null,
    "tick": 2400,
    "result_items": [
      {
        "item": "cobblemon:ancient_ultra_ball",
        "count": 1
      }
    ]
  })

  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "SPECIAL_ATTACK",
    "min_level": 30,
    "required_type": "rock",
    "base_hp": 20,
    "base_atk": 20,
    "base_def": 20,
    "base_spa": 20,
    "base_spd": 20,
    "base_spe": 20,
    "area_blocks": [
      {
          "tag": "tfc:anvils"
      },
      {
          "tag": "forge:magma_block"
      }
  ],
    "block_count": 1,
    "input_items": [
      {
        "tag": "forge:ingots/cast_iron",
        "count": 1
      },
      {
        "tag": "tfc:flux",
        "count": 1
      },
      {
        "tag": "minecraft:coals",
        "count": 2
      }
    ],
    "input_power": 0,
    "input_fluid": {
      "fluid": "minecraft:water",
      "amount": 1000
    },
    "tick": 1000,
    "result_items": [
      {
        "item": "tfc:metal/ingot/steel",
        "count": 1
      }
    ]
  })

  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "SPECIAL_ATTACK",
    "min_level": 30,
    "required_type": "fire",
    "base_hp": 40,
    "base_atk": 40,
    "base_def": 40,
    "base_spa": 40,
    "base_spd": 40,
    "base_spe": 40,
    "area_blocks": [
      {
          "tag": "tfc:anvils"
      },
      {
          "tag": "forge:magma_block"
      }
  ],
    "block_count": 1,
    "input_items": [
      {
        "tag": "forge:ingots/cast_iron",
        "count": 1
      },
      {
        "tag": "tfc:flux",
        "count": 1
      },
      {
        "tag": "minecraft:coals",
        "count": 2
      }
    ],
    "input_power": 0,
    "input_fluid": {
      "fluid": "minecraft:water",
      "amount": 500
    },
    "tick": 1200,
    "result_items": [
      {
        "item": "tfc:metal/ingot/steel",
        "count": 1
      }
    ]
  })

  event.custom({
    "type": "palmon:processing",
    "category": "misc",
    "focus_stat": "SPECIAL_ATTACK",
    "min_level": 40,
    "required_type": "steel",
    "base_hp": 50,
    "base_atk": 50,
    "base_def": 50,
    "base_spa": 50,
    "base_spd": 50,
    "base_spe": 50,
    "area_blocks": [
      {
          "tag": "tfc:anvils"
      },
      {
          "tag": "forge:magma_block"
      }
  ],
    "block_count": 1,
    "input_items": [
      {
        "tag": "forge:ingots/cast_iron",
        "count": 1
      },
      {
        "tag": "tfc:flux",
        "count": 1
      },
      {
        "tag": "minecraft:coals",
        "count": 2
      }
    ],
    "input_power": 0,
    "input_fluid": {
      "fluid": "minecraft:water",
      "amount": 250
    },
    "tick": 1400,
    "result_items": [
      {
        "item": "tfc:metal/ingot/steel",
        "count": 1
      }
    ]
  })

})