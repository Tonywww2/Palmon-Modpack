ServerEvents.recipes(event => {
    event.custom({
        "type": "embers:boring",
        "dimensions": [
          "kubejs:tfc_planet"
        ],
        "max_height": -57,
        "output": {
          "item": "embers:ember_crystal"
        },
        "required_block": {
          "amount": 3,
          "block_tag": "embers:world_bottom"
        },
        "weight": 20
      }).id("kubejs:ember_1")

      event.custom({
        "type": "embers:boring",
        "dimensions": [
          "kubejs:tfc_planet"
        ],
        "max_height": -57,
        "output": {
          "item": "embers:ember_grit"
        },
        "required_block": {
          "amount": 3,
          "block_tag": "embers:world_bottom"
        },
        "weight": 20
      }).id("kubejs:ember_2")

      event.custom({
        "type": "embers:boring",
        "dimensions": [
          "kubejs:tfc_planet"
        ],
        "max_height": -57,
        "output": {
          "item": "embers:ember_shard"
        },
        "required_block": {
          "amount": 3,
          "block_tag": "embers:world_bottom"
        },
        "weight": 60
      }).id("kubejs:ember_3")

})