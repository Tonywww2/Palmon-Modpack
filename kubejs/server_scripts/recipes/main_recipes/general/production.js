ServerEvents.recipes(event => {
    event.custom({
        "type": "palmon:production",
        "category": "misc",
        "focus_stat": "SPECIAL_ATTACK",
        "min_level": 20,
        "required_type": "grass",
        "base_hp": 20,
        "base_atk": 20,
        "base_def": 0,
        "base_spa": 20,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": "cobblemon:medicinal_leek"
            }
        ],
        "block_count": 8,
        "tick": 3500,
        "result_items": [
            {
                "item": "cobblemon:medicinal_leek",
                "count": 1
            }
        ],
        "result_power": 0,
        "result_fluid": null
    })

    event.custom({
        "type": "palmon:production",
        "category": "misc",
        "focus_stat": "HP",
        "min_level": 15,
        "required_type": "grass",
        "base_hp": 20,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "tag": "tfc:seeds"
            }
        ],
        "block_count": 16,
        "tick": 400,
        "result_items": [
            {
                "item": "palmon:poke_food",
                "count": 1
            }
        ],
        "result_power": 0,
        "result_fluid": null
    })

    event.custom({
        "type": "palmon:production",
        "category": "misc",
        "focus_stat": "ATTACK",
        "min_level": 20,
        "required_type": "electric",
        "base_hp": 0,
        "base_atk": 30,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
          {
            "item": "tfc:metal/block/copper"
          },
          {
            "tag": "forge:storage_blocks/redstone"
          }
        ],
        "block_count": 2,
        "tick": 500,
        "result_items": [],
        "result_power": 1000,
        "result_fluid": null
      })

})

