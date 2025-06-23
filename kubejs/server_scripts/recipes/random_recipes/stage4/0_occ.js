/**
 * @param {Internal.RecipesEventJS} event
 */
function s4Occ(event) {

    event.shapeless('occultism:chalk_red_impure', ['occultism:chalk_white_impure', 'occultism:afrit_essence', '#forge:dusts/blaze', '#industrialforegoing:machine_frame/simple']).id('kubejs:chalk_red_impure_s4')

    event.recipes.occultism.ritual(
        'minecraft:dragon_breath',
        [
            'cobblemon:link_cable',
            'minecraft:end_rod',
            'cobblemon:link_cable',
            'minecraft:end_rod',
            'integrateddynamics:crystalized_chorus_block',
            'minecraft:end_rod',
            'integrateddynamics:crystalized_chorus_block',
            'minecraft:end_rod'
        ],
        'occultism:book_of_binding_bound_marid',
        'occultism:craft_marid',
        200
    ).id("kubejs:occ_dragon_breath")

    event.recipes.occultism.ritual(
        'minecraft:dragon_head',
        [
            'integrateddynamics:crystalized_chorus_block',
            'minecraft:wither_skeleton_skull',
            'integrateddynamics:crystalized_chorus_block',
            'minecraft:dragon_breath'
        ],
        'occultism:book_of_binding_bound_marid',
        'occultism:craft_marid',
        200
    ).id("kubejs:occ_dragon_head")

}