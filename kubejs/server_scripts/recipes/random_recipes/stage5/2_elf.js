/**
 * @param {Internal.RecipesEventJS} event
 */
function s5ELF(event) {

    event.shaped('mythicbotany:central_rune_holder', [
        'ABA',
        'BCB'
    ],
        {
            A: 'kubejs:collapse_prediction',
            B: 'kubejs:end_steel',
            C: 'mythicbotany:rune_holder'
        }).id('kubejs:central_rune_holder_s5')

    event.shaped('mythicbotany:rune_holder', [
        'ABA',
        'BCB'
    ],
        {
            A: 'kubejs:collapse_prediction',
            B: 'kubejs:end_steel',
            C: 'jaopca:storage_blocks.mana'
        }).id('kubejs:rune_holder_s5')

}