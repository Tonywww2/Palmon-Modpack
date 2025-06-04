ServerEvents.recipes(event => {
    event.recipes.immersiveengineering.blueprint('ad_astra:steel_tank',
        [
            '8x #forge:plates/steel',
            '4x #forge:plates/iron',
            '2x #forge:rods/steel',
            '2x #forge:rods/iron'
        ], 'components')
        .id('kubejs:steel_tank')

})