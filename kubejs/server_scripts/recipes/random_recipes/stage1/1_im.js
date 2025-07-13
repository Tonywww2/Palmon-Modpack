/**
 * @param {Internal.RecipesEventJS} event
 */
function s1Im(event) {
  event.custom({
    "type": "tfc:anvil",
    "input": {
      "tag": 'forge:ingots/steel'
    },
    "result": {
      "item": "tfc_ie_addon:tool_head/ie_hammer"
    },
    "tier": 3,
    "rules": [
      "upset_last",
      "draw_second_last",
      "hit_third_last"
    ]
  }).id('kubejs:ie_hammer_s1')

  event.custom({
    "type": "tfc:anvil",
    "input": {
      "item": "tfc:metal/ingot/wrought_iron"
    },
    "result": {
      "item": "tfc_ie_addon:tool_head/wirecutter"
    },
    "tier": 3,
    "rules": [
      "hit_last",
      "shrink_not_last",
      "bend_not_last"
    ]
  }).id('kubejs:ie_wirecutter_s1')

  event.recipes.immersiveengineering.blueprint(Item.of('kubejs:alpha_framework', 2 + global.frameworkAddition),
    [
      'kubejs:virtual_gold_ingot',
      'immersiveengineering:graphite_electrode',
      '#forge:rods/steel',
      '2x firmalife:metal/sheet/stainless_steel'
    ], 'components').id('kubejs:ie_alpha_framework_1')

}