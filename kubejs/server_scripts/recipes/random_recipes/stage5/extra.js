/**
 * @param {Internal.RecipesEventJS} event
 */
function e5IDW(event) {
    event.shapeless('kubejs:voucher_5_0', ['cobblemon:relic_coin', 'kubejs:end_steel'])
        .id('kubejs:voucher_5_0')

    event.shaped('integrateddynamics:logic_director', [
        'ACA',
        'BDB',
        'ACA'
    ],
        {
            A: 'integrateddynamics:crystalized_chorus_chunk',
            B: 'kubejs:end_steel',
            C: '#forge:gears/diamond',
            D: 'integrateddynamics:crystalized_menril_block'
        }).id('kubejs:logic_director_s5')


}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e5FL(event) {
    event.shapeless('kubejs:voucher_5_1', ['cobblemon:relic_coin', 'kubejs:end_steel'])
        .id('kubejs:voucher_5_1')

    event.shaped('rftoolsutility:flight_module', [
        'ABA',
        'ACA',
        'ADA'
    ],
        {
            A: 'minecraft:ghast_tear',
            B: 'kubejs:end_steel',
            C: 'rftoolsutility:moduleplus_template',
            D: 'rftoolsbase:infused_enderpearl'
        }).id('kubejs:flight_module_s5')

    event.shaped('botania:flight_tiara', [
        ' A ',
        'BCB',
        'DED'
    ],
        {
            A: 'kubejs:delta_framework',
            B: 'botania:ender_air_bottle',
            C: 'kubejs:end_steel',
            D: 'minecraft:feather',
            E: 'botania:terrasteel_ingot'
        }).id('kubejs:flight_tiara_s5')

    event.shapeless('ars_nouveau:ritual_flight', ['#forge:logs/archwood', 'kubejs:end_steel', 'ars_nouveau:source_gem_block', 'minecraft:feather']).id('kubejs:ritual_flight_s5')

}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e5BM(event) { 
    event.shapeless('kubejs:voucher_5_2', ['cobblemon:relic_coin', 'kubejs:end_steel'])
    .id('kubejs:voucher_5_2')

    event.recipes.botania.elven_trade('botanicalmachinery:mana_emerald',
        ['kubejs:end_steel', '#forge:gems/emerald'])
        .id('kubejs:mana_emerald_s5')
        
}

