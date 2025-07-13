// priority: -100

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
]

const crafting = [
    'minecraft:crafting_shapeless',
    'minecraft:crafting_shaped',
    'create:mechanical_crafting'
]

ServerEvents.recipes(event => {
    machines.forEach(machineType => {
        let recipes = event.findRecipes({ type: machineType })
        recipes.forEach(recipe => {
            let originalRecipe = recipe.json
            let rid = recipe.getId()
            if (!global.idsToRemove.has(rid)) {
                event.remove({ id: rid })

                // console.log(originalRecipe)

                let power = originalRecipe.get("power").getAsInt() * 8
                // power = $Integer.valueOf((power + '').split('.')[0])
                power = new $Double(power).intValue()
                originalRecipe["addProperty(java.lang.String,java.lang.Number)"]("power", power)
                // console.log(originalRecipe)

                event.custom(originalRecipe).id(rid + '_fixed')
                // console.info(`Fixed power for recipe: ${rid}, new power: ${power} EU/t`)}
            }
        })
    })

    crafting.forEach(machineType => {
        let recipes = event.findRecipes({ type: machineType });

        recipes.forEach(recipe => {
            let originalRecipe = recipe.json
            let result = originalRecipe.get("result")
            let rid = recipe.getId()

            if (result !== null && result.isJsonObject()) {
                let resultObj = result.getAsJsonObject()
                let resultItem = resultObj.get("item")
                if (resultItem !== null && resultItem.isJsonPrimitive()) {
                    let itemName = resultItem.getAsString()
                    if (!itemName.includes("glass") && (itemName.includes("frame") || itemName.includes("casing"))) {
                        event.remove({ id: rid })

                        let count = 1
                        let countElement = resultObj.get("count")
                        if (countElement !== null && countElement.isJsonPrimitive()) {
                            count = countElement.getAsInt()
                        }
                        count += global.frameworkAddition

                        // 正确的方式修改count属性
                        resultObj["addProperty(java.lang.String,java.lang.Number)"]("count", new $Double(count).intValue())

                        // console.log(`modified recipe: ${originalRecipe}`)
                        event.custom(originalRecipe).id(rid + '_framework_architect')
                    }
                }
            }
        })
    })

    let dissolutionRecipes = event.findRecipes({ type: 'industrialforegoing:dissolution_chamber' })
    dissolutionRecipes.forEach(recipe => {
        let originalRecipe = recipe.json
        let output = originalRecipe.get("output")
        let rid = recipe.getId()
        if (output !== null && output.isJsonObject()) {
            let outputObj = output.getAsJsonObject()
            let resultItem = outputObj.get("item")
            if (resultItem !== null && resultItem.isJsonPrimitive()) {
                let itemName = resultItem.getAsString()
                if (itemName.includes("frame") || itemName.includes("casing")) {
                    event.remove({ id: rid })

                    let count = 1
                    let countElement = outputObj.get("count")
                    if (countElement !== null && countElement.isJsonPrimitive()) {
                        count = countElement.getAsInt()
                    }
                    count += global.frameworkAddition

                    // 正确的方式修改count属性
                    outputObj["addProperty(java.lang.String,java.lang.Number)"]("count", new $Double(count).intValue())

                    // console.log(`modified recipe: ${originalRecipe}`)
                    event.custom(originalRecipe).id(rid + '_framework_architect')
                }
            }
        }
    })
})