/**
 * @param {Internal.RecipesEventJS} event
 */
function e2CM(event) {
    event.shapeless('kubejs:voucher_2_0', ['cobblemon:relic_coin', 'kubejs:alpha_framework'])
        .id('kubejs:voucher_2_0')

    event.shaped('32x compactmachines:wall', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#forge:plates/iron',
            B: '#forge:obsidian',
            C: 'kubejs:alpha_framework'
        }).id('kubejs:cm_wall_s2')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e2ER(event) {
    event.shapeless('kubejs:voucher_2_1', ['cobblemon:relic_coin', 'kubejs:alpha_framework'])
        .id('kubejs:voucher_2_1')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e2ID(event) {
    event.shapeless('kubejs:voucher_2_2', ['cobblemon:relic_coin', 'kubejs:alpha_framework'])
        .id('kubejs:voucher_2_2')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e2RFT(event) {
    event.shapeless('kubejs:voucher_2_3', ['cobblemon:relic_coin', 'kubejs:alpha_framework'])
        .id('kubejs:voucher_2_3')
}