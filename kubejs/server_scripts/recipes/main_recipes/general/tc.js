ServerEvents.recipes(event => {
    tcFuel('immersiveengineering:creosote', 100, 20, 1000)
    tcFuel('tcintegrations:molten_ostrum', 400, 20, 2100)
    tcFuel('kubejs:methane_helium_3_fuel', 800, 10, 2750)

    tcMelting({ "item": 'tfc:powder/native_silver' },
        { "amount": 7, "tag": "forge:molten_silver" }, 500, 10, 'kubejs:tc_melting_native_silver')
    tcMelting({ "item": 'tfc:powder/native_gold' },
        { "amount": 7, "tag": "forge:molten_gold" }, 500, 10, 'kubejs:tc_melting_native_gold')
    tcMelting({ "item": 'tfc:powder/sphalerite' },
        { "amount": 7, "tag": "forge:molten_zinc" }, 500, 10, 'kubejs:tc_melting_sphalerite')
    tcMelting({ "item": 'tfc:powder/cassiterite' },
        { "amount": 7, "tag": "forge:molten_tin" }, 500, 10, 'kubejs:tc_melting_cassiterite')
    tcMelting({ "item": 'tfc:powder/bismuthinite' },
        { "amount": 7, "tag": 'tfc:bismuth' }, 500, 10, 'kubejs:tc_melting_bismuthinite')
    tcMelting({ "item": 'tfc:powder/garnierite' },
        { "amount": 7, "tag": "forge:molten_nickel" }, 500, 10, 'kubejs:tc_melting_garnierite')

    tcMelting({ "item": 'tfc:powder/native_copper' },
        { "amount": 7, "tag": "forge:molten_copper" }, 500, 10, 'kubejs:tc_melting_native_copper')
    tcMelting({ "item": 'tfc:powder/malachite' },
        { "amount": 7, "tag": "forge:molten_copper" }, 500, 10, 'kubejs:tc_melting_malachite')
    tcMelting({ "item": 'tfc:powder/tetrahedrite' },
        { "amount": 7, "tag": "forge:molten_copper" }, 500, 10, 'kubejs:tc_melting_tetrahedrite')

    tcMelting({ "item": 'tfc:powder/magnetite' },
        { "amount": 7, "tag": "forge:molten_iron" }, 500, 10, 'kubejs:tc_melting_magnetite')
    tcMelting({ "item": 'tfc:powder/limonite' },
        { "amount": 7, "tag": "forge:molten_iron" }, 500, 10, 'kubejs:tc_melting_limonite')
    tcMelting({ "item": 'tfc:powder/hematite' },
        { "amount": 7, "tag": "forge:molten_iron" }, 500, 10, 'kubejs:tc_melting_hematite')

    tcAlloy([{ "amount": 30, "tag": "forge:molten_copper" }, { "amount": 60, "tag": "forge:molten_silver" }],
        { "amount": 90, "tag": "tfc:sterling_silver" }, 800, 'kubejs:tc_alloy_sterling_silver')

    tcAlloy([{ "amount": 90, "tag": "forge:molten_electrum" }, { "amount": 90, "tag": "forge:molten_copper" }],
        { "amount": 180, "tag": "tfc:black_bronze" }, 800, 'kubejs:tc_alloy_black_bronze')
    tcAlloy([{ "amount": 30, "tag": "forge:molten_copper" }, { "amount": 30, "tag": "forge:molten_brass" }, { "amount": 30, "tag": "forge:molten_bismuth" }],
        { "amount": 180, "tag": "tfc:bismuth_bronze" }, 800, 'kubejs:tc_alloy_bismuth_bronze')

    tcAlloy([{ "amount": 90, "tag": "tfc:black_bronze" }, { "amount": 90, "tag": "forge:molten_nickel" }, { "amount": 180, "tag": "forge:molten_steel" }],
        { "amount": 360, "tag": "tfc:weak_steel" }, 800, 'kubejs:tc_alloy_weak_steel')
    tcAlloy([{ "amount": 90, "tag": "tfc:weak_steel" }, { "amount": 90, "tag": "tconstruct:molten_pig_iron" }],
        { "amount": 90, "tag": "tfc:" }, 800, 'kubejs:tc_alloy_black_steel')

    tcAlloy([{ "amount": 40, "tag": "tfc:black_steel" }, { "amount": 10, "tag": "forge:molten_rose_gold" }, { "amount": 10, "tag": "forge:molten_brass" }, { "amount": 30, "tag": "forge:molten_steel" }],
        { "amount": 90, "tag": "tfc:weak_red_steel" }, 800, 'kubejs:tc_alloy_weak_red_steel')
    tcAlloy([{ "amount": 40, "tag": "tfc:black_steel" }, { "amount": 10, "tag": "tfc:sterling_silver" }, { "amount": 10, "tag": "tfc:bismuth_bronze" }, { "amount": 30, "tag": "forge:molten_steel" }],
        { "amount": 90, "tag": "tfc:weak_blue_steel" }, 800, 'kubejs:tc_alloy_weak_blue_steel')

    tcAlloy([{ "amount": 90, "tag": "tfc:weak_red_steel" }, { "amount": 90, "tag": "tfc:black_steel" }],
        { "amount": 90, "tag": "tfc:red_steel" }, 800, 'kubejs:tc_alloy_red_steel')
    tcAlloy([{ "amount": 90, "tag": "tfc:weak_blue_steel" }, { "amount": 90, "tag": "tfc:black_steel" }],
        { "amount": 90, "tag": "tfc:blue_steel" }, 800, 'kubejs:tc_alloy_blue_steel')

    // nice tfc, you units are not unified. 2025/03/12
    tcTFCCastIngot('sterling_silver')
    tcTFCCastIngot('black_bronze')
    tcTFCCastIngot('bismuth_bronze')

    tcTFCCastIngot('weak_steel')
    tcTFCCastIngot('black_steel')
    tcTFCCastIngot('weak_red_steel')
    tcTFCCastIngot('weak_blue_steel')
    tcTFCCastIngot('red_steel')
    tcTFCCastIngot('blue_steel')

    tcCastingTable({ "item": 'tfc:metal/sheet/blue_steel' }, true, 200, { "amount": 180, "tag": "tfc:red_steel" }, 'kubejs:virtual_gold_ingot', 'kubejs:virtual_gold_ingot')
    tcCastingTable({ "tag": 'forge:sheets' }, true, 200, { "amount": 90, "tag": "forge:molten_gold" }, 'tconstruct:plate_cast', 'kubejs:plate_cast_tfc')

    // tcMaterial({"tag": "forge:ingots/blue_steel"}, "tconstruct:blue_steel", {"tag": "forge:nuggets/steel"}, 'tfc:metal/blue_steel', 100, 50, true, 1000);
    // tcMaterial({"tag": "forge:ingots/red_steel"}, "tconstruct:red_steel", {"tag": "forge:nuggets/steel"}, 'tfc:metal/red_steel', 100, 50, true, 1000);

    // tcMaterial({"item": "adventuresmod:moltarium_ingot"}, "tconstruct:moltarium", {"item": "minecraft:netherite_scrap"}, 'kubejs:melted_moltarium', 90, 50, true, 1000);
    // tcMaterial({"item": "cobblemon:tumblestone"}, "tconstruct:tumblestone", {"item": "minecraft:cobblestone"}, null, 90, 50, true, 1000);
    // tcMaterial({"item": "embers:ember_crystal"}, "tconstruct:ember_crystal", {"item": "embers:ember_shard"}, null, 90, 50, true, 1000);
    // tcMaterial({"item": "palmon:refined_copper_ingot"}, "tconstruct:refined_copper", {"item": "minecraft:copper_ingot"}, 'kubejs:melted_refined_copper', 90, 50, true, 1000);
    // tcMaterial({"item": "malum:processed_soulstone"}, "tconstruct:soulstone", {"item": "minecraft:cobblestone"}, null, 90, 50, true, 1000);

    // tcMaterial({"item": "ad_astra:desh_ingot"}, "tconstruct:desh", {"item": "ad_astra:desh_nugget"}, 'jaopca:molten.desh', 90, 50, false, 1000);
    // tcMaterial({"item": "cobblemon:sky_tumblestone"}, "tconstruct:sky_tumblestone", {"item": "minecraft:cobblestone"}, null, 90, 50, true, 1000);
    // tcMaterial({"item": "cobblemon:black_tumblestone"}, "tconstruct:black_tumblestone", {"item": "minecraft:cobblestone"}, null, 90, 50, true, 1000);
    // tcMaterial({"item": "embers:dawnstone_ingot"}, "tconstruct:dawnstone", {"item": "embers:dawnstone_nugget"}, 'embers:molten_dawnstone', 90, 50, true, 1000);
    // tcMaterial({"item": "nuclearcraft:hard_carbon_ingot"}, "tconstruct:hard_carbon", {"item": "nuclearcraft:graphite_dust"}, 'nuclearcraft:hard_carbon', 144, 50, true, 1000);

    // tcMaterial({"item": "nuclearcraft:tough_alloy_ingot"}, "tconstruct:tough_alloy", {"tag": "forge:nuggets/steel"}, 'nuclearcraft:tough_alloy', 144, 50, true, 1000);
    // tcMaterial({"item": "malum:soul_stained_steel_ingot"}, "tconstruct:soul_stained_steel", {"item": "malum:soul_stained_steel_nugget"}, 'kubejs:melted_soul_stained_steel', 90, 50, true, 1000);
    // tcMaterial({"item": "cobblemon:max_revive"}, "tconstruct:max_revive", {"item": "cobblemon:revive"}, null, 90, 50, true, 1000);
    // tcMaterial({"item": "palmon:refined_steel_ingot"}, "tconstruct:refined_steel", {"tag": "forge:nuggets/steel"}, 'kubejs:melted_refined_steel', 90, 50, true, 1000);
    // tcMaterial({"item": "nuclearcraft:extreme_ingot"}, "tconstruct:extreme_alloy", {"tag": "forge:nuggets/steel"}, 'nuclearcraft:extreme', 144, 50, true, 1000);

    // tcMaterial({"item": "nuclearcraft:thermoconducting_ingot"}, "tconstruct:thermoconducting_alloy", {"tag": "forge:nuggets/steel"}, 'nuclearcraft:thermoconducting', 144, 50, true, 1000);
    // tcMaterial({"item": "thermal:enderium_ingot"}, "tconstruct:enderium", {"item": "thermal:enderium_nugget"}, 'tconstruct:molten_enderium', 90, 50, false, 1000);
    // tcMaterial({"item": "palmon:refined_m_steel_ingot"}, "tconstruct:refined_m_steel", {"tag": "forge:nuggets/steel"}, 'kubejs:melted_refined_m_steel', 90, 50, true, 1000);
    // tcMaterial({"item": "palmon:polymer_plate"}, "tconstruct:polymer", {"item": "minecraft:paper"}, null, 90, 50, true, 1000);
    // tcMaterial({"item": "cataclysm:cursium_ingot"}, "tconstruct:cursium", {"tag": "forge:nuggets/steel"}, 'kubejs:melted_cursium', 90, 50, true, 1000);

    // tcMaterial({"item": "cataclysm:witherite_ingot"}, "tconstruct:witherite", {"tag": "forge:nuggets/steel"}, 'kubejs:melted_witherite', 90, 50, true, 1500);
    // tcMaterial({"item": "cataclysm:ignitium_ingot"}, "tconstruct:ignitium", {"tag": "forge:nuggets/steel"}, 'kubejs:melted_ignitium', 90, 50, true, 1500);
    // tcMaterial({"item": "occultism:iesnium_ingot"}, "tconstruct:iesnium", {"item": "occultism:iesnium_nugget"}, 'jaopca:molten.iesnium', 90, 50, false, 1500);
    // tcMaterial({"item": "botania:terrasteel_ingot"}, "tconstruct:terrasteel", {"item": "botania:terrasteel_nugget"}, 'kubejs:melted_terrasteel', 90, 50, true, 1000);
    // tcMaterial({"item": "adventuresmod:glowing_obsidian"}, "tconstruct:glowing_obsidian", {"item": "minecraft:cobblestone"}, 'kubejs:melted_glowing_obsidian', 90, 50, true, 1000);

    // tcMaterial({"item": "nuclearcraft:boron_nitride_gem"}, "tconstruct:boron_nitride_gem", {"item": "nuclearcraft:boron_dust"}, 'nuclearcraft:boron_nitride_solution', 144, 50, true, 1500);
    // tcMaterial({"item": "ad_astra:ostrum_ingot"}, "tconstruct:ostrum", {"item": "ad_astra:ostrum_nugget"}, 'jaopca:molten.ostrum', 90, 50, false, 1500);
    // tcMaterial({"item": "adventuresmod:voidarium_ingot"}, "tconstruct:voidarium", {"item": "minecraft:end_stone"}, 'kubejs:melted_voidarium', 90, 50, true, 1500);
    // tcMaterial({"item": "adventuresmod:mythril_ingot"}, "tconstruct:mythril", {"item": "adventuresmod:mythril_fragment"}, 'kubejs:melted_mythril', 90, 50, true, 1500);
    // tcMaterial({"item": "botania:gaia_ingot"}, "tconstruct:gaia", {"item": "botania:terrasteel_nugget"}, 'kubejs:melted_gaia', 90, 50, true, 1500);

    // tcMaterial({"item": "ae2:cell_component_64k"}, "tconstruct:cell_component_64k", {"item": "ae2:charged_certus_quartz_crystal"}, null, 90, 50, true, 1500);
    // tcMaterial({"item": "ad_astra:calorite_ingot"}, "tconstruct:calorite", {"item": "ad_astra:calorite_nugget"}, 'jaopca:molten.calorite', 90, 50, false, 1500);
    // tcMaterial({"item": "kubejs:reinforced_sheet"}, "tconstruct:reinforced_sheet", {"item": "botania:terrasteel_nugget"}, null, 90, 50, true, 1500);
    // tcMaterial({"item": "kubejs:beryllium_bronze_alloy"}, "tconstruct:beryllium_bronze_alloy", {"item": "nuclearcraft:beryllium_ingot"}, 'kubejs:melted_beryllium_bronze_alloy', 90, 50, true, 1500);

    function tcMaterial(ingredient, material, leftover, fluid, cnt, time, newFluid, tmp) {
        let n = material.split(':')[1];
        event.custom({
            "type": "tconstruct:material",
            "ingredient": ingredient,
            "value": 1,
            "needed": 1,
            "material": material,
            "leftover": leftover
        }).id('kubejs:tc_material_' + n);

        if (fluid) {
            event.custom({
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "amount": cnt,
                    "fluid": fluid
                },
                "temperature": tmp,
                "output": material
            }).id('kubejs:tc_material_fluid_' + n);

            if (newFluid) {
                event.custom({
                    "type": "tconstruct:melting",
                    "ingredient": ingredient,
                    "result": {
                        "amount": cnt,
                        "fluid": fluid
                    },
                    "temperature": tmp,
                    "time": time
                }).id('kubejs:tc_melting_' + n);

                event.custom({//浇筑为锭
                    "type": "tconstruct:casting_table",
                    "cast": {
                        "tag": "tconstruct:casts/multi_use/ingot"
                    },
                    "cooling_time": time,
                    "fluid": {
                        "amount": cnt,
                        "fluid": fluid
                    },
                    "result": ingredient
                }).id('kubejs:tc_casting_' + n);
            }

        }
    }

    function tcFuel(fluid, duration, rate, temp) {
        event.custom({
            "type": "tconstruct:melting_fuel",
            "duration": duration,
            "fluid": {
                "amount": 100,
                "fluid": fluid
            },
            "rate": rate,
            "temperature": temp
        }).id('kubejs:tc_fuel_' + fluid.split(':')[1])
    }

    function tcMelting(input, outputFluid, temp, time, id) {
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": input,
            "result": outputFluid,
            "temperature": temp,
            "time": time
        }).id(id)
    }

    function tcAlloy(inputs, result, temp, id) {
        event.custom({
            "type": "tconstruct:alloy",
            "inputs": inputs,
            "result": result,
            "temperature": temp
        }).id(id)
    }

    function tcCastingTable(cast, castConsumed, coolingTime, fluid, result, id) {
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": cast,
            "cast_consumed": castConsumed,
            "cooling_time": coolingTime,
            "fluid": fluid,
            "result": result
        }).id(id)
    }

    function tcTFCCastIngot(material) {
        tcCastingTable(
            { "item": 'tconstruct:ingot_cast' },
            false,
            50,
            { "amount": 100, "tag": "tfc:" + material },
            'tfc:metal/ingot/' + material,
            'kubejs:tc_casting_' + material
        )
        tcCastingTable(
            { "item": 'tconstruct:ingot_sand_cast' },
            false,
            50,
            { "amount": 100, "tag": "tfc:" + material },
            'tfc:metal/ingot/' + material,
            'kubejs:tc_casting_' + material + '_sand'
        )
    }

})