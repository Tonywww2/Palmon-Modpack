/**
 * @param {Internal.RecipesEventJS} event
 */
function s1Occ(event) {
    global.occ_trigger = true

    event.shaped('supplementaries:planter', [
        'ABA',
        'ABA',
        'AAA'
    ],
        {
            A: '#forge:ingots/brick',
            B: '#tfc:dirt'
        }).id('kubejs:planter_s1_occ')

    event.recipes.tfc.barrel_sealed(4800)
        .outputItem('occultism:datura_seeds')
        .inputs('#tfc:seeds', TFC.fluidStackIngredient('tfc:limewater', 2000))
        .id('kubejs:datura_seeds_s1_occ')

    event.recipes.occultism.spirit_fire('occultism:otherworld_sapling_natural', ['#minecraft:saplings'])
        .id('kubejs:occ_otherworld_sapling')
    event.recipes.occultism.spirit_fire('occultism:otherstone', ['#forge:blackstone'])
        .id('kubejs:occ_otherstone')

    event.shapeless('occultism:tallow', ['#tfc:foods/meats', 'occultism:butcher_knife'])
        .damageIngredient('occultism:butcher_knife', 1)
        .id('kubejs:occ_tallow')

    event.recipes.occultism.ritual(
        Item.of('kubejs:alpha_framework', 1 + global.frameworkAddition),
        [
            'kubejs:virtual_gold_ingot',
            'occultism:datura',
            'occultism:burnt_otherstone',
            'occultism:otherworld_ashes'
        ],
        'occultism:magic_lamp_empty',
        'occultism:craft_foliot',
        80
    ).id("kubejs:occ_alpha_framework_1")

}