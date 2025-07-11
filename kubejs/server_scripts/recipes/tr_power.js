// priority: 60

const machines = [
    'techreborn:alloy_smelter',
    'techreborn:assembling_machine',
    'techreborn:blast_furnace',
    'techreborn:centrifuge',
    'techreborn:chemical_reactor',
    'techreborn:compressor',
    'techreborn:distillation_tower',
    'techreborn:extractor',
    'techreborn:fluid_replicator',
    'techreborn:grinder',
    'techreborn:implosion_compressor',
    'techreborn:industrial_electrolyzer',
    'techreborn:industrial_grinder',
    'techreborn:rolling_machine',
    'techreborn:scrapboxinator',
    'techreborn:vacuum_freezer',
    'techreborn:wire_mill',
    "techreborn:recycler"
];

ServerEvents.recipes(event => {
    machines.forEach(machineType => {
        let recipes = event.findRecipes({ type: machineType });
        recipes.forEach(recipe => {
            let originalRecipe = recipe.json
            let rid = recipe.getId()
            event.remove({id: rid})

            // console.log(originalRecipe)

            let power = originalRecipe.get("power").getAsInt() * 8
            // power = $Integer.valueOf((power + '').split('.')[0])
            power = new $Double(power).intValue()
            originalRecipe["addProperty(java.lang.String,java.lang.Number)"]("power", power)
            // console.log(originalRecipe)

            event.custom(originalRecipe).id(rid + '_fixed')
            // console.info(`Fixed power for recipe: ${rid}, new power: ${power} EU/t`)
        })
    })
})