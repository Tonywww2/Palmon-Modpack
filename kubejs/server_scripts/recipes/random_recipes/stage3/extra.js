/**
 * @param {Internal.RecipesEventJS} event
 */
function e3MR(event) {
    event.shapeless('kubejs:voucher_3_0', ['cobblemon:relic_coin', 'kubejs:beta_framework'])
        .id('kubejs:voucher_3_0')

    event.shaped('2x modularrouters:modular_router', [
        'CAC',
        'ABA',
        'CAC'
    ],
        {
            A: '#forge:plates/steel',
            B: 'kubejs:beta_framework',
            C: '#forge:plates/dawnstone'
        }).id('kubejs:modular_router_s3')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e3SFM(event) {
    event.shapeless('kubejs:voucher_3_1', ['cobblemon:relic_coin', 'kubejs:beta_framework'])
        .id('kubejs:voucher_3_1')

    event.shaped('4x sfm:cable', [
        'DAC',
        'ABA',
        'CAD'
    ],
        {
            A: 'integrateddynamics:cable',
            B: 'integratedterminals:menril_glass',
            C: '#forge:plates/gold',
            D: '#forge:plates/steel'
        }).id('kubejs:sfm_cable_s3')

    event.shaped('2x sfm:manager', [
        'CAC',
        'ABA',
        'DAE'
    ],
        {
            A: 'sfm:cable',
            B: 'kubejs:beta_framework',
            C: '#forge:chests',
            D: 'integrateddynamics:variablestore',
            E: 'integrateddynamics:logic_programmer'
        }).id('kubejs:sfm_manager_s3')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e3XN(event) {
    event.shapeless('kubejs:voucher_3_2', ['cobblemon:relic_coin', 'kubejs:beta_framework'])
        .id('kubejs:voucher_3_2')

    event.recipes.create.mixing('12x fluxnetworks:flux_core', [
        '16x fluxnetworks:flux_dust',
        '8x #forge:obsidian',
        '4x minecraft:ender_eye',
        'kubejs:beta_framework'
    ]).heated().id('kubejs:flux_core_s3')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e3RFT(event) {
    event.shapeless('kubejs:voucher_3_3', ['cobblemon:relic_coin', 'kubejs:beta_framework'])
        .id('kubejs:voucher_3_3')

    event.shaped('2x rftoolsbase:machine_frame', [
        'ACA',
        'BDB',
        'ACA'
    ],
        {
            A: '#forge:plates/iron',
            B: '#forge:plates/dawnstone',
            C: '#forge:dyes/blue',
            D: 'kubejs:beta_framework'
        }).id('kubejs:rft_machine_frame_s3')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e3CR(event) {
    event.shapeless('kubejs:voucher_3_4', ['cobblemon:relic_coin', 'kubejs:beta_framework'])
        .id('kubejs:voucher_3_4')
}