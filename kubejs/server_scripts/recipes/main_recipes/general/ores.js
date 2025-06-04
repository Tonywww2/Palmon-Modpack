ServerEvents.recipes(event => {
    oreProduction("copper", "native_copper")
    oreProduction("gold", "native_gold")
    oreProduction("iron", "hematite")
    oreProduction("silver", "native_silver")
    oreProduction("tin", "cassiterite")
    oreProduction("bismuth", "bismuthinite")
    oreProduction("nickel", "garnierite")
    oreProduction("zinc", "sphalerite")

    event.recipes.occultism.miner(
        Item.of('malum:deepslate_soulstone_ore').withChance(250),
        '#occultism:miners/deeps'
    )

    function oreProduction(ore, ore_item) {
        event.custom({
            "type": "palmon:production",
            "category": "misc",
            "focus_stat": "ATTACK",
            "min_level": 20,
            "required_type": "ground",
            "base_hp": 0,
            "base_atk": 30,
            "base_def": 0,
            "base_spa": 0,
            "base_spd": 0,
            "base_spe": 0,
            "area_blocks": [
                {
                    "tag": "forge:ores/" + ore
                }
            ],
            "block_count": 12,
            "tick": 1000,
            "result_items": [
                {
                    "item": "tfc:ore/poor_" + ore_item,
                    "count": 1
                }
            ],
            "result_power": 0,
            "result_fluid": null
        }
        ).id('kubejs:' + ore + '_1')

        event.custom({
            "type": "palmon:production",
            "category": "misc",
            "focus_stat": "ATTACK",
            "min_level": 30,
            "required_type": "rock",
            "base_hp": 0,
            "base_atk": 60,
            "base_def": 0,
            "base_spa": 0,
            "base_spd": 0,
            "base_spe": 0,
            "area_blocks": [
                {
                    "tag": "forge:ores/" + ore
                }
            ],
            "block_count": 16,
            "tick": 1200,
            "result_items": [
                {
                    "item": "tfc:ore/normal_" + ore_item,
                    "count": 1
                }
            ],
            "result_power": 0,
            "result_fluid": null
        }
        ).id('kubejs:' + ore + '_2')

        event.custom({
            "type": "palmon:production",
            "category": "misc",
            "focus_stat": "ATTACK",
            "min_level": 40,
            "required_type": "steel",
            "base_hp": 0,
            "base_atk": 90,
            "base_def": 0,
            "base_spa": 0,
            "base_spd": 0,
            "base_spe": 0,
            "area_blocks": [
                {
                    "tag": "forge:ores/" + ore
                }
            ],
            "block_count": 20,
            "tick": 1300,
            "result_items": [
                {
                    "item": "tfc:ore/rich_" + ore_item,
                    "count": 1
                }
            ],
            "result_power": 0,
            "result_fluid": null
        }
        ).id('kubejs:' + ore + '_3')
    }

})

