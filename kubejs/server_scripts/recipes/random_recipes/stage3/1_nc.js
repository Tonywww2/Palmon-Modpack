/**
 * @param {Internal.RecipesEventJS} event
 */
function s3NC(event) {
    event.shaped('2x nuclearcraft:plate_basic', [
        'BA',
        'CB'
    ],
        {
            A: '#forge:gears/lead',
            B: '#forge:dusts/graphite',
            C: '#forge:plates/desh'
        }).id('kubejs:nc_plate_basic_s3')

    event.shaped('nuclearcraft:manufactory', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:ingots/lead',
            B: 'minecraft:flint',
            C: '#forge:dusts/redstone',
            D: 'minecraft:piston',
            E: 'nuclearcraft:coil_copper'
        }).id('kubejs:nc_manufactory_s3')

    event.shaped('nuclearcraft:alloy_smelter', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:ingots/lead',
            B: '#forge:ingots/brick',
            C: '#forge:dusts/redstone',
            D: 'minecraft:blast_furnace',
            E: 'nuclearcraft:coil_copper'
        }).id('kubejs:nc_alloy_smelter_s3')

}