/**
 * @param {Internal.RecipesEventJS} event
 */
function s5EAW(event) {
    event.shaped('aetherworks:forge_metal_former', [
        'ACA',
        'BBB'
    ],
        {
            A: 'kubejs:end_steel',
            B: 'embers:caminite_plate',
            C: 'kubejs:collapse_prediction'
        }).id('kubejs:forge_metal_former_s5')

    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/copper"
            },
            {
                "tag": "embers:aspectus/silver"
            }
        ],
        "inputs": [
            {
                "item": 'kubejs:collapse_prediction'
            },
            {
                "item": "aetherworks:aether_shard"
            },
            {
                "item": "aetherworks:aether_shard"
            },
            {
                "item": "aetherworks:aether_shard"
            },
            {
                "item": "aetherworks:aether_shard"
            }
        ],
        "output": {
            "item": "aetherworks:aether_amalgam"
        },
        "tablet": {
            "item": "embers:ember_crystal_cluster"
        }
    }).id('kubejs:aether_amalgam_s5')
}