/**
 * @param {Internal.RecipesEventJS} event
 */
function s4TR(event) {

    event.shaped('kubejs:basic_machine_frame', [
        'ACA',
        'ADA',
        'ACA'
    ],
        {
            A: 'techreborn:insulated_copper_cable',
            C: 'techreborn:basic_machine_frame',
            D: 'industrialforegoing:machine_frame_simple'
        }).id('kubejs:basic_machine_frame_s4')
}