/**
 * @param {Internal.RecipesEventJS} event
 */
function s2Sp(event) {
    event.shaped('2x jaopca:rods.unknown', [
        ' CA',
        'BDB',
        'AC '
    ],
        {
            A: '#forge:plates/dawnstone',
            B: 'embers:caminite_blend',
            C: 'embers:ember_grit',
            D: 'kubejs:alpha_dust'
        }).id('kubejs:sp_unknown_rods_s2')

    event.shaped(Item.of('kubejs:alpha_framework', 3 + global.frameworkAddition), [
        ' A ',
        'BDB',
        ' C '
    ],
        {
            A: '#forge:plates/blue_steel',
            B: '#forge:plates/steel',
            C: '#forge:plates/red_steel',
            D: '#forge:gears/dawnstone'
        }).id('kubejs:sp_alpha_s2')

    event.custom({
        "type": "embers:stamping",
        "fluid": {
            "amount": 180,
            "tag": "forge:molten_dawnstone"
        },
        "input": {
            "item": 'kubejs:alpha_framework'
        },
        "output": {
            "item": 'kubejs:alpha_dust'
        },
        "stamp": {
            "item": 'embers:flat_stamp'
        }
    }).id('kubejs:sp_alpha_dust_s2')

    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": 'jaopca:rods.unknown'
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
            "amount": 300,
            "tag": 'tfc:black_steel'
        },
        "result": 'jaopca:plates.unknown'
    }).id('kubejs:sp_unknown_plates_s2')

    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 100,
        "experience": 1.0,
        "ingredients": [
          {
            "item": 'minecraft:blaze_powder'
          },
          {
            "item": 'minecraft:blaze_powder'
          },
          {
            "tag": 'forge:plates/unknown'
          }
        ],
        "container": {
            "item": 'jaopca:gears.dawnstone'
          },
        "recipe_book_tab": "misc",
        "result": {
          "item": 'jaopca:gears.unknown'
        }
      }).id('kubejs:sp_unknown_gears_s2')
}