ServerEvents.recipes(event => {
    event.recipes.tfc.barrel_sealed(4800)
        .outputItem('cobblemon:red_apricorn_seed')
        .inputs('#forge:fruits/apple', TFC.fluidStackIngredient('tfc:limewater', 1000))
        .id('kubejs:red_apricorn_seed_1_g')

    event.recipes.tfc.barrel_sealed(4800)
        .outputItem('cobblemon:red_apricorn_seed')
        .inputs('#forge:berries', TFC.fluidStackIngredient('tfc:limewater', 1000))
        .id('kubejs:red_apricorn_seed_2_g')

    event.recipes.tfc.barrel_sealed(2400)
        .outputItem('tfc:ore/graphite')
        .inputs('#forge:coal', TFC.fluidStackIngredient('minecraft:water', 150))
        .id('kubejs:graphite_g')

    event.recipes.tfc.pot(['cobblemon:medicinal_leek','cobblemon:medicinal_leek','cobblemon:medicinal_leek','cobblemon:medicinal_leek'], Fluid.of('minecraft:water', 1000), 200, 500)
        .outputs(['cobblemon:potion', 'cobblemon:potion'], Fluid.of('minecraft:water', 0))
        .id('kubejs:medicinal_leek_potion_g')

    event.recipes.tfc.pot(['cobblemon:potion', 'cobblemon:medicinal_leek', 'cobblemon:medicinal_leek', 'cobblemon:medicinal_leek', 'cobblemon:medicinal_leek'], Fluid.of('minecraft:water', 1000), 200, 500)
        .outputs(['cobblemon:ether', 'cobblemon:ether', 'cobblemon:ether'], Fluid.of('minecraft:water', 0))
        .id('kubejs:ether_potion_g')

    })
