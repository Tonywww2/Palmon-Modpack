/**
 * @param {Internal.RecipesEventJS} event
 */
function s4TR(event) {

    event.shaped(Item.of('kubejs:basic_machine_frame', 1 + global.frameworkAddition), [
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