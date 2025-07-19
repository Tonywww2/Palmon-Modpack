/**
 * @param {Internal.RecipesEventJS} event
 */
function s4DE(event) {

    event.recipes.thermal.smelter('40x kubejs:intelligent_draconium_ingot',
        ['industrialforegoing:machine_frame_simple', '56x jaopca:processors.draconium']
    ).energy(76800)
        .id('kubejs:intelligent_draconium_ingot_s4')

}