ServerEvents.recipes(event => {
    babyShapeless('2x tfc:kaolin_clay', ['#forge:sand', '#forge:clay'])
    babyShapeless('tfc:powder/kaolinite', ['tfc:kaolin_clay'])

    babyShapeless('32x tfc:wood/support/oak', ['#forge:rods/wooden'])

    babyDoubleItem('tfc:metal/double_ingot/rose_gold', '#forge:ingots/rose_gold')
    babyDoubleItem('tfc:metal/double_ingot/nickel', '#forge:ingots/nickel')
    babyDoubleItem('tfc:metal/double_ingot/gold', '#forge:ingots/gold')
    babyDoubleItem('tfc:metal/double_ingot/copper', '#forge:ingots/copper')
    babyDoubleItem('tfc:metal/double_ingot/bronze', '#forge:ingots/bronze')
    babyDoubleItem('tfc:metal/double_ingot/black_bronze', '#forge:ingots/black_bronze')
    babyDoubleItem('tfc:metal/double_ingot/bismuth_bronze', '#forge:ingots/bismuth_bronze')
    babyDoubleItem('tfc:metal/double_ingot/bismuth', '#forge:ingots/bismuth')
    babyDoubleItem('tfc:metal/double_ingot/black_steel', '#forge:ingots/black_steel')
    babyDoubleItem('tfc:metal/double_ingot/blue_steel', '#forge:ingots/blue_steel')
    babyDoubleItem('tfc:metal/double_ingot/red_steel', '#forge:ingots/red_steel')
    babyDoubleItem('tfc_ie_addon:metal/double_ingot/electrum', '#forge:ingots/electrum')
    babyDoubleItem('tfc_ie_addon:metal/double_ingot/constantan', '#forge:ingots/constantan')
    babyDoubleItem('tfc_ie_addon:metal/double_ingot/aluminum', '#forge:ingots/aluminum')
    babyDoubleItem('tfc_ie_addon:metal/double_ingot/lead', '#forge:ingots/lead')
    babyDoubleItem('tfc_ie_addon:metal/double_ingot/uranium', '#forge:ingots/uranium')
    babyDoubleItem('tfc:metal/double_ingot/steel', '#forge:ingots/steel')
    babyDoubleItem('tfc:metal/double_ingot/cast_iron', '#forge:ingots/cast_iron')
    babyDoubleItem('tfc:metal/double_ingot/wrought_iron', '#forge:ingots/wrought_iron')
    babyDoubleItem('tfc:metal/double_ingot/sterling_silver', '#forge:ingots/sterling_silver')
    babyDoubleItem('tfc:metal/double_ingot/zinc', '#forge:ingots/zinc')
    babyDoubleItem('tfc:metal/double_ingot/tin', '#forge:ingots/tin')
    babyDoubleItem('tfc:metal/double_ingot/silver', '#forge:ingots/silver')
    babyDoubleItem('tfc:metal/double_ingot/brass', '#forge:ingots/brass')

    babyDoubleItem('tfc:metal/double_sheet/rose_gold', '#forge:sheets/rose_gold')
    babyDoubleItem('tfc:metal/double_sheet/nickel', '#forge:sheets/nickel')
    babyDoubleItem('tfc:metal/double_sheet/gold', '#forge:sheets/gold')
    babyDoubleItem('tfc:metal/double_sheet/copper', '#forge:sheets/copper')
    babyDoubleItem('tfc:metal/double_sheet/bronze', '#forge:sheets/bronze')
    babyDoubleItem('tfc:metal/double_sheet/black_bronze', '#forge:sheets/black_bronze')
    babyDoubleItem('tfc:metal/double_sheet/bismuth_bronze', '#forge:sheets/bismuth_bronze')
    babyDoubleItem('tfc:metal/double_sheet/bismuth', '#forge:sheets/bismuth')
    babyDoubleItem('tfc:metal/double_sheet/black_steel', '#forge:sheets/black_steel')
    babyDoubleItem('tfc:metal/double_sheet/blue_steel', '#forge:sheets/blue_steel')
    babyDoubleItem('tfc:metal/double_sheet/red_steel', '#forge:sheets/red_steel')
    babyDoubleItem('tfc:metal/double_sheet/steel', '#forge:sheets/steel')
    babyDoubleItem('tfc:metal/double_sheet/cast_iron', '#forge:sheets/cast_iron')
    babyDoubleItem('tfc:metal/double_sheet/wrought_iron', '#forge:sheets/wrought_iron')
    babyDoubleItem('tfc:metal/double_sheet/sterling_silver', '#forge:sheets/sterling_silver')
    babyDoubleItem('tfc:metal/double_sheet/zinc', '#forge:sheets/zinc')
    babyDoubleItem('tfc:metal/double_sheet/tin', '#forge:sheets/tin')
    babyDoubleItem('tfc:metal/double_sheet/silver', '#forge:sheets/silver')
    babyDoubleItem('tfc:metal/double_sheet/brass', '#forge:sheets/brass')

    babyShapeless(Item.of('sophisticatedstorage:diamond_barrel', '{flatTop:1b,woodType:"oak"}'), ['#forge:barrels'])

    babyShapeless('tfc:papyrus', ['2x #forge:rods/wooden'])
    babyShapeless(Item.of('kubejs:alpha_framework', 1 + global.frameworkAddition), ['kubejs:virtual_gold_ingot'])

    event.shapeless(Item.of('tfc:wooden_bucket', '{fluid:{Amount:1000,FluidName:"immersiveengineering:creosote"}}'),
        ['tfc:wooden_bucket', 'malum:charcoal_fragment', 'kubejs:baby_proofing'])
        .keepIngredient('kubejs:baby_proofing')
        .stage('baby')
        .id('kubejs:creosote_baby')


    function babyShapeless(result, ingredients) {
        ingredients.push('kubejs:baby_proofing')
        let res = event.shapeless(result, ingredients)
            .keepIngredient('kubejs:baby_proofing')
            .stage('baby')

        let id = result.toString().replace(' ', '').split(':')
        res.id('kubejs:' + id[0] + '_' + id[1] + '_baby')

    }

    function babyDoubleItem(result, ingredients) {
        babyShapeless(result, [ingredients, ingredients])

    }

})


