/**
 * @param {Internal.RecipesEventJS} event
 */
function s3SP(event) {
    event.shaped('kubejs:spirit_coil', [
        'ABA',
        'CDC',
        'AEA'
    ],
        {
            A: '#forge:plates/electrum',
            B: 'thermal:rf_coil',
            C: '#forge:gears/desh',
            D: '#forge:gears/iesnium',
            E: 'thermal:redstone_servo'
        }).id('kubejs:sp_spirit_coil_s3')

    event.recipes.thermal.smelter(Item.of('kubejs:beta_framework', 2 + global.frameworkAddition),
        ['kubejs:spirit_coil', 'kubejs:alpha_framework']
    ).energy(12800)
        .id('kubejs:sp_beta_framework_s3')

    event.recipes.thermal.smelter('jaopca:processors.iesnium',
        ['jaopca:circuits.iesnium', '2x create:steam_engine', 'kubejs:spirit_coil']
    ).energy(25600)
        .id('kubejs:sp_processors_iesnium_s3')

    event.recipes.thermal.pulverizer('kubejs:beta_dust', ['kubejs:beta_framework']).energy(12800).id('kubejs:sp_beta_dust_s3')
    
    let t = 'kubejs:beta_dust'
    event.recipes.createSequencedAssembly([
        'jaopca:circuits.iesnium',
    ], t, [
        event.recipes.createFilling(t, [t, Fluid.of('tconstruct:earth_slime', 50)]),
        event.recipes.createFilling(t, [t, Fluid.of('nuclearcraft:aluminum', 36)]),
        event.recipes.createFilling(t, [t, Fluid.of('thermal:syrup', 50)]),
        event.recipes.createFilling(t, [t, Fluid.of('thermal:tree_oil', 50)]),
        event.recipes.createPressing(t, t)
    ]).id('kubejs:sp_circuits_iesnium_s3_1')
        .transitionalItem(t)
        .loops(5)

    event.recipes.createSequencedAssembly([
        'jaopca:circuits.iesnium',
    ], t, [
        event.recipes.createFilling(t, [t, Fluid.of('tconstruct:earth_slime', 50)]),
        event.recipes.createFilling(t, [t, Fluid.of('tconstruct:molten_aluminum', 20)]),
        event.recipes.createFilling(t, [t, Fluid.of('thermal:syrup', 50)]),
        event.recipes.createFilling(t, [t, Fluid.of('thermal:tree_oil', 50)]),
        event.recipes.createPressing(t, t)
    ]).id('kubejs:sp_circuits_iesnium_s3_2')
        .transitionalItem(t)
        .loops(5)

    event.recipes.createSequencedAssembly([
        'jaopca:circuits.iesnium',
    ], t, [
        event.recipes.createFilling(t, [t, Fluid.of('tconstruct:earth_slime', 50)]),
        event.recipes.createFilling(t, [t, Fluid.of('embers:molten_aluminum', 20)]),
        event.recipes.createFilling(t, [t, Fluid.of('thermal:syrup', 50)]),
        event.recipes.createFilling(t, [t, Fluid.of('thermal:tree_oil', 50)]),
        event.recipes.createPressing(t, t)
    ]).id('kubejs:sp_circuits_iesnium_s3_3')
        .transitionalItem(t)
        .loops(5)
}