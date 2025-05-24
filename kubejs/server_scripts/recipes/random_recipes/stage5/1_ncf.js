/**
 * @param {Internal.RecipesEventJS} event
 */
function s5NCF(event) {

  event.shaped('nuclearcraft:fusion_reactor_casing', [
    'ABA',
    'BCB',
    'ABA'
  ],
    {
      A: 'nuclearcraft:plate_advanced',
      B: 'jaopca:plates.manyullyn',
      C: 'kubejs:collapse_prediction'
    }).id('kubejs:fusion_reactor_casing_s5')

}    