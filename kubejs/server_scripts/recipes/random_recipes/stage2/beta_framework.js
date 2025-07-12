/**
 * @param {Internal.RecipesEventJS} event
 */
function s2Frame1(event) {
    event.shaped('2x kubejs:beta_framework', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:plates/dawnstone',
            B: 'embers:ember_shard',
            C: '#kubejs:stage2_convergence',
            D: 'kubejs:alpha_framework',
            E: 'embers:ember_crystal'
        }).id('kubejs:beta_framework_1_s2')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function s2Frame2(event) {
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 100,
        "experience": 1.0,
        "ingredients": [
          {
            "tag": 'kubejs:stage2_convergence'
          },
          {
            "item": 'embers:dawnstone_aspectus'
          },
          {
            "item": 'embers:copper_aspectus'
          },
          {
            "item": 'embers:silver_aspectus'
          }
        ],
        "container": {
            "item": 'kubejs:alpha_framework'
          },
        "recipe_book_tab": "misc",
        "result": Item.of('kubejs:beta_framework', 2).toJson()
      }).id('kubejs:beta_framework_2_s2')
}