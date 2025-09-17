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

  event.recipes.immersiveengineering.blueprint(Item.of('kubejs:alpha_framework', 6 + global.frameworkAddition),
    [
      '3x kubejs:virtual_gold_ingot',
      'immersiveengineering:graphite_electrode',
      '2x #forge:rods/steel',
      '3x firmalife:metal/sheet/stainless_steel'
    ], 'components').id('kubejs:ie_alpha_framework_1')

}