/**
 * @param {Internal.RecipesEventJS} event
 */
function e4IFS(event) {
    event.shapeless('kubejs:voucher_4_0', ['cobblemon:relic_coin', 'kubejs:essence_computation_frame'])
        .id('kubejs:voucher_4_0')

    event.shaped('industrialforegoingsouls:soul_laser_base', [
        'ADA',
        'BEB',
        'CFC'
    ],
        {
            A: 'industrialforegoing:plastic',
            B: 'minecraft:iron_bars',
            C: '#forge:gears/diamond',
            D: 'minecraft:sculk_shrieker',
            E: '#industrialforegoing:machine_frame/simple',
            F: 'kubejs:essence_computation_frame'
        }).id('kubejs:soul_laser_base_s4')

}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4IFU(event) {
    event.shapeless('kubejs:voucher_4_1', ['cobblemon:relic_coin', 'kubejs:essence_computation_frame'])
        .id('kubejs:voucher_4_1')

    event.shaped('industrialforegoing:enchantment_factory', [
        'PBP',
        'DMD',
        'OFO'
    ], {
        P: '#forge:plastic',
        B: 'minecraft:book',
        D: 'minecraft:diamond',
        M: '#industrialforegoing:machine_frame/simple',
        O: 'minecraft:obsidian',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_factory_s4')

    event.shaped('industrialforegoing:enchantment_extractor', [
        'PSP',
        'BMB',
        'DGD'
    ], {
        P: '#forge:plastic',
        S: 'minecraft:nether_bricks',
        B: 'minecraft:book',
        M: '#industrialforegoing:machine_frame/simple',
        D: 'minecraft:diamond',
        G: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_extractor_s4')

    event.shaped('industrialforegoing:enchantment_applicator', [
        'PFP',
        'BMB',
        'GBG'
    ], {
        P: '#forge:plastic',
        B: 'minecraft:anvil',
        M: '#industrialforegoing:machine_frame/simple',
        G: '#forge:gears/gold',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_applicator_s4')

    event.shaped('industrialforegoing:ore_laser_base', [
        'pfp',
        'bmb',
        'grg'
    ], {
        p: '#forge:plastic',
        f: 'minecraft:diamond_pickaxe',
        b: '#forge:ores/iron',
        m: '#industrialforegoing:machine_frame/simple',
        g: '#forge:gears/diamond',
        r: 'kubejs:essence_computation_frame'
    }).id('kubejs:ore_laser_base_s4')

    event.shaped('industrialforegoing:potion_brewer', [
        'PSP',
        'BMB',
        'GFG'
    ], {
        P: '#forge:plastic',
        S: 'minecraft:brewing_stand',
        B: '#forge:gears/gold',
        F: 'kubejs:essence_computation_frame',
        M: '#industrialforegoing:machine_frame/simple',
        G: 'minecraft:repeater'
    }).id('kubejs:potion_brewer_s4')

    event.shaped('industrialforegoing:marine_fisher', [
        'pfp',
        'bmb',
        'grg'
    ], {
        p: '#forge:plastic',
        f: 'minecraft:fishing_rod',
        b: 'minecraft:bucket',
        m: '#industrialforegoing:machine_frame/simple',
        g: '#forge:gears/iron',
        r: 'kubejs:essence_computation_frame'
    }).id('kubejs:marine_fisher_s4')

    event.shaped('industrialforegoing:material_stonework_factory', [
        'pcp',
        'gmf',
        'aba'
    ], {
        p: '#forge:plastic',
        c: 'kubejs:essence_computation_frame',
        g: 'minecraft:diamond_pickaxe',
        m: '#industrialforegoing:machine_frame/simple',
        f: 'minecraft:furnace',
        a: '#forge:gears/gold',
        b: '#forge:slimeballs'
    }).id('kubejs:material_stonework_factory_s4')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4TIB(event) {
    event.shapeless('kubejs:voucher_4_2', ['cobblemon:relic_coin', 'kubejs:essence_computation_frame'])
        .id('kubejs:voucher_4_2')

    event.shaped('tiab:time_in_a_bottle', [
        'GFG',
        'DCD',
        'LBL'
    ], {
        G: '#forge:ingots/gold',
        D: '#forge:gems/diamond',
        L: '#forge:gems/lapis',
        C: 'minecraft:clock',
        B: 'minecraft:glass_bottle',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:time_in_a_bottle_s4')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4EFF(event) {
    event.shapeless('kubejs:voucher_4_3', ['cobblemon:relic_coin', 'kubejs:essence_computation_frame'])
        .id('kubejs:voucher_4_3')

    event.recipes.thermal.smelter(['2x kubejs:alpha_framework', 'kubejs:essence_computation_frame'],
        ['kubejs:essence_computation_frame', '2x #forge:gears/dawnstone', '#forge:gears/steel']
    ).energy(12800)
        .id('kubejs:eff_alpha_framework_s4')

    event.recipes.thermal.smelter(['kubejs:beta_framework', 'kubejs:essence_computation_frame'],
        ['kubejs:essence_computation_frame', 'kubejs:alpha_framework', '#kubejs:stage2_convergence']
    ).energy(25600)
        .id('kubejs:eff_beta_framework_s4')

    event.recipes.thermal.smelter(['kubejs:gamma_framework', 'kubejs:essence_computation_frame'],
        ['kubejs:essence_computation_frame', 'kubejs:beta_framework', '8x kubejs:stable_desh_ingot']
    ).energy(51200)
        .id('kubejs:eff_gamma_framework_s4')

    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/red"
            },
            {
                "tag": "botania:petals/gray"
            },
            {
                "tag": "botania:petals/gray"
            },
            {
                "tag": "botania:petals/white"
            },
            {
                "tag": "botania:petals/white"
            },
            {
                "item": "botania:rune_wrath"
            },
            {
                "item": "botania:rune_fire"
            }
        ],
        "output": {
            "item": "botania:entropinnyum"
        },
        "reagent": {
            "item": 'kubejs:essence_computation_frame'
        }
    }).id('kubejs:entropinnyum_s4')
}


/**
 * @param {Internal.RecipesEventJS} event
 */
function e4PLM(event) {
    event.shapeless('kubejs:voucher_4_4', ['cobblemon:relic_coin', 'kubejs:essence_computation_frame'])
        .id('kubejs:voucher_4_4')

    s4PLMRec([{ "tag": 'forge:ingots/lumium', "count": 1 }, { "tag": 'forge:ingots/signalum', "count": 1 }, { "tag": 'forge:ingots/enderium', "count": 1 }], 'kubejs:present_alloy', 2, 600, 'ATTACK', 40, 40)
    s4PLMRec([{ "item": 'kubejs:present_alloy', "count": 1 }, { "item": 'ad_astra:desh_ingot', "count": 1 }], 'kubejs:stable_desh_ingot', 2, 600, 'DEFENCE', 45, 50)
    s4PLMRec([{ "item": 'ae2:cell_component_1k', "count": 2 }, { "item": 'jaopca:processors.elementium', "count": 1 }, { "item": 'kubejs:gamma_framework', "count": 1 }], 'kubejs:essence_computation_frame', 3, 600, 'SPECIAL_ATTACK', 35, 25)
    s4PLMRec([{ "tag": 'cobblemon:tier_4_poke_balls', "count": 16 }, { "item": 'ae2:cell_component_64k', "count": 1 }, { "item": 'kubejs:present_alloy', "count": 8 }, { "item": 'palmon:refined_m_steel_ingot', "count": 2 }], 'cobblemon:master_ball', 1, 2400, 'SPECIAL_DEFENCE', 75, 75)
    s4PLMRec([{ "item": 'kubejs:present_alloy', "count": 16 }, { "item": 'palmon:refined_m_steel_ingot', "count": 12 }, { "item": 'botania:flask', "count": 4 }], 'unimplemented_items:bottle_cap', 1, 1600, 'SPEED', 55, 60)

    function s4PLMRec(inputs, output, count, tick, stat, stats, level) {
        inputs.push({ "item": 'kubejs:essence_computation_frame', "count": 1 })
        event.custom({
            "type": "palmon:processing",
            "category": "misc",
            "focus_stat": stat,
            "min_level": level,
            "required_type": null,
            "base_hp": stats,
            "base_atk": stats,
            "base_def": stats,
            "base_spa": stats,
            "base_spd": stats,
            "base_spe": stats,
            "area_blocks": [
                {
                    "item": 'ae2:controller'
                },
                {
                    "item": "botania:glimmering_stripped_dreamwood"
                }
            ],
            "block_count": 4,
            "input_items": inputs,
            "input_power": 40960,
            "input_fluid": {
                "fluid": "minecraft:water",
                "amount": 2000
            },
            "tick": tick,
            "result_items": [
                {
                    "item": output,
                    "count": count
                },
                {
                    "item": 'kubejs:essence_computation_frame',
                    "count": 1
                }
            ]
        }).id('kubejs:s4_plm_' + output.split(':')[1])
    }
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4AE(event) {
    event.shapeless('kubejs:voucher_4_5', ['cobblemon:relic_coin', 'kubejs:essence_computation_frame'])
        .id('kubejs:voucher_4_5')

}


