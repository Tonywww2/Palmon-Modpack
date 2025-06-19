/**
 * @param {Internal.RecipesEventJS} event
 */
function s2Bot(event) {
    event.shapeless('botania:fertilizer', ['minecraft:bone_meal', 'embers:dawnstone_nugget', '3x #c:dyes'])
        .id('kubejs:bot_fertilizer_s2')

    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ],
        {
            A: 'embers:caminite_brick',
            B: 'embers:dawnstone_aspectus'
        }).id('kubejs:bot_apothecary_s2')

    event.shaped('botania:terra_plate', [
        'AAA',
        'BCB',
        'BBB'
    ],
        {
            A: '#forge:storage_blocks/lapis',
            B: 'botania:rune_fire',
            C: '#forge:storage_blocks/manasteel'
        }).id('kubejs:terra_plate_s2')

}