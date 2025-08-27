ServerEvents.recipes(event => {
    const recipes = event.findRecipes({ type: "embers:alchemy" });
    recipes.forEach(recipe => {
        let rid = recipe.getId()
        if (!global.idsToRemove.has(rid)) {
            let originalRecipe = recipe.json
            let areaBlocks = []
            originalRecipe.get("aspects").getAsJsonArray().forEach(tag => {
                let tagString = tag.get("tag").getAsString()
                
                if (tagString === "embers:aspectus/iron") {
                    areaBlocks.push(Item.of("embers:iron_crystal_seed").toJson())

                } else if (tagString === "embers:aspectus/copper") {
                    areaBlocks.push(Item.of("embers:copper_crystal_seed").toJson())

                } else if (tagString === "embers:aspectus/lead") {
                    areaBlocks.push(Item.of("embers:lead_crystal_seed").toJson())

                } else if (tagString === "embers:aspectus/silver") {
                    areaBlocks.push(Item.of("embers:silver_crystal_seed").toJson())

                } else if (tagString === "embers:aspectus/dawnstone") {
                    areaBlocks.push(Item.of("embers:dawnstone_crystal_seed").toJson())

                } else if (tagString === 'embers:aspectus/aetherium') {
                    areaBlocks.push(Item.of("aetherworks:forge_anvil").toJson())
                }
            })

            let ingMap = new Map()
            originalRecipe.get("inputs").getAsJsonArray().forEach(ing => {
                let name = undefined;
                if (ing.get("tag") !== null) {
                    // tag
                    name = '#' + ing.get("tag").getAsString()
                } else {
                    // item
                    name = ing.get("item").getAsString()
                }
                name = String(name)
                if (!ingMap.has(name)) {
                    ingMap.set(name, 2)
                } else {
                    ingMap.set(name, ingMap.get(name) + 1)
                }
            })
            let timeFactor = 1;
            let ingredients = []
            ingMap.forEach((v, k) => {
                ingredients.push(Item.of(k, v).toJson())
                timeFactor += v
            })
            ingredients.push(originalRecipe.tablet)
            ingredients.push(Item.of('rats:oratchalcum_nugget', (timeFactor / 2) + 1).toJson())

            event.custom({
                "type": "palmon:processing",
                "category": "misc",
                "focus_stat": "ATTACK",
                "min_level": 95,
                "required_type": "fire",
                "base_hp": 20,
                "base_atk": 50 + (timeFactor * 5),
                "base_def": 20,
                "base_spa": 20,
                "base_spd": 20,
                "base_spe": 20,
                "area_blocks": areaBlocks,
                "block_count": 4,
                "input_items": ingredients,
                "input_power": 50000 + (timeFactor * 10000),
                "input_fluid": null,
                "tick": 5000 + (timeFactor * 1200),
                "result_items": [
                    originalRecipe.get("output")
                ]
            }).id(rid + "_acc_s6")
        }
    })
})