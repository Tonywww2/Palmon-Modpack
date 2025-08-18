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

    tcMelting({ "item": 'tfc_ie_addon:powder/galena' },
        { "amount": 7, "tag": "forge:molten_lead" }, 500, 10, 'kubejs:tc_melting_galena')

    tcMelting({ "tag": 'forge:ingots/black_bronze' },
        { "amount": 100, "tag": "tfc:black_bronze" }, 500, 80, 'kubejs:tc_melting_black_bronze')
    tcMelting({ "tag": 'forge:ingots/bismuth_bronze' },
        { "amount": 100, "tag": "tfc:bismuth_bronze" }, 500, 80, 'kubejs:tc_melting_bismuth_bronze')
    tcMelting({ "tag": 'forge:ingots/sterling_silver' },
        { "amount": 100, "tag": "tfc:sterling_silver" }, 500, 80, 'kubejs:tc_melting_sterling_silver')

    tcMelting({ "tag": 'forge:ingots/weak_steel' },
        { "amount": 100, "tag": "tfc:weak_steel" }, 500, 80, 'kubejs:tc_melting_weak_steel')
    // tcMelting({ "tag": 'forge:ingots/black_steel' },
    //     { "amount": 100, "tag": "tfc:black_steel" }, 500, 100, 'kubejs:tc_melting_black_steel')

    tcMelting({ "tag": 'forge:ingots/weak_red_steel' },
        { "amount": 100, "tag": "tfc:weak_red_steel" }, 500, 80, 'kubejs:tc_melting_weak_red_steel')
    tcMelting({ "tag": 'forge:ingots/weak_blue_steel' },
        { "amount": 100, "tag": "tfc:weak_blue_steel" }, 500, 80, 'kubejs:tc_melting_weak_blue_steel')

    tcMelting({ "item": 'immersive_weathering:soot' },
        { "amount": 5, "fluid": "tconstruct:liquid_soul" }, 1200, 10, 'kubejs:soot_to_liquid_soul')

    // tcMelting({ "tag": 'forge:ingots/red_steel' },
    //     { "amount": 100, "tag": "tfc:red_steel" }, 500, 80, 'kubejs:tc_melting_red_steel')
    // tcMelting({ "tag": 'forge:ingots/blue_steel' },
    //     { "amount": 100, "tag": "tfc:blue_steel" }, 500, 80, 'kubejs:tc_melting_blue_steel')

    tcAlloy([{ "amount": 90, "tag": "forge:molten_electrum" }, { "amount": 90, "tag": "forge:molten_copper" }],
        { "amount": 180, "tag": "tfc:black_bronze" }, 800, 'kubejs:tc_alloy_black_bronze_1')
    tcAlloy([{ "amount": 90, "tag": 'forge:molten_rose_gold' }, { "amount": 90, "tag": 'tfc:sterling_silver' }],
        { "amount": 180, "tag": "tfc:black_bronze" }, 800, 'kubejs:tc_alloy_black_bronze_2')
    tcAlloy([{ "amount": 30, "tag": "forge:molten_copper" }, { "amount": 30, "tag": "forge:molten_brass" }, { "amount": 30, "tag": "forge:molten_bismuth" }],
        { "amount": 90, "tag": "tfc:bismuth_bronze" }, 800, 'kubejs:tc_alloy_bismuth_bronze')
    tcAlloy([{ "amount": 30, "tag": "forge:molten_copper" }, { "amount": 60, "tag": 'forge:molten_silver' }],
        { "amount": 90, "tag": 'tfc:sterling_silver' }, 800, 'kubejs:tc_alloy_sterling_silver')

    tcAlloy([{ "amount": 90, "tag": "tfc:black_bronze" }, { "amount": 90, "tag": "forge:molten_nickel" }, { "amount": 180, "tag": "forge:molten_steel" }],
        { "amount": 360, "tag": "tfc:weak_steel" }, 800, 'kubejs:tc_alloy_weak_steel')
    tcAlloy([{ "amount": 90, "tag": "tfc:weak_steel" }, { "amount": 90, "tag": "tconstruct:molten_pig_iron" }],
        { "amount": 90, "tag": "tfc:black_steel" }, 800, 'kubejs:tc_alloy_black_steel')

    tcAlloy([{ "amount": 40, "tag": "tfc:black_steel" }, { "amount": 10, "tag": "forge:molten_rose_gold" }, { "amount": 10, "tag": "forge:molten_brass" }, { "amount": 30, "tag": "forge:molten_steel" }],
        { "amount": 90, "tag": "tfc:weak_red_steel" }, 800, 'kubejs:tc_alloy_weak_red_steel')
    tcAlloy([{ "amount": 40, "tag": "tfc:black_steel" }, { "amount": 10, "tag": "tfc:sterling_silver" }, { "amount": 10, "tag": "tfc:bismuth_bronze" }, { "amount": 30, "tag": "forge:molten_steel" }],
        { "amount": 90, "tag": "tfc:weak_blue_steel" }, 800, 'kubejs:tc_alloy_weak_blue_steel')

    tcAlloy([{ "amount": 90, "tag": "tfc:weak_red_steel" }, { "amount": 90, "tag": "tfc:black_steel" }],
        { "amount": 90, "tag": "tfc:red_steel" }, 800, 'kubejs:tc_alloy_red_steel')
    tcAlloy([{ "amount": 90, "tag": "tfc:weak_blue_steel" }, { "amount": 90, "tag": "tfc:black_steel" }],
        { "amount": 90, "tag": "tfc:blue_steel" }, 800, 'kubejs:tc_alloy_blue_steel')

    // nice tfc, you units are not unified. 2025/03/12
    tcTFCCastPureIngot({ "amount": 90, "tag": "tfc:bismuth" }, 'tfc:metal/ingot/bismuth')

    tcTFCCastIngot('sterling_silver')
    tcTFCCastIngot('black_bronze')
    tcTFCCastIngot('bismuth_bronze')

    tcTFCCastIngot('weak_steel')
    tcTFCCastIngot('black_steel')
    tcTFCCastIngot('weak_red_steel')
    tcTFCCastIngot('weak_blue_steel')
    tcTFCCastIngot('red_steel')
    tcTFCCastIngot('blue_steel')

    tcCastingTable({ "tag": 'forge:sheets' }, true, 200, { "amount": 90, "tag": "forge:molten_gold" }, 'tconstruct:plate_cast', 'kubejs:plate_cast_tfc')

    event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "tconstruct:necrotic_bone"
    },
    {
      "item": "tconstruct:ichor_congealed_slime"
    },
    {
      "item": "minecraft:ghast_tear"
    }
  ],
  "level": {
    "max": 1
  },
  "result": "tconstruct:necrotic",
  "slots": {
    "upgrades": 1
  },
  "tools": [
    {
      "tag": "tconstruct:modifiable/melee"
    },
    {
      "tag": "tconstruct:modifiable/ranged/bows"
    }
  ]
}).id('tconstruct:tools/modifiers/upgrade/necrotic')

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

    function tcTFCCastPureIngot(fluid, result) {
        tcCastingTable(
            { "item": 'tconstruct:ingot_cast' },
            false,
            50,
            fluid,
            result,
            'kubejs:tc_casting_' + result.split('/')[2] + '_pure'
        )
        tcCastingTable(
            { "item": 'tconstruct:ingot_sand_cast' },
            false,
            50,
            fluid,
            result,
            'kubejs:tc_casting_' + result.split('/')[2] + '_pure_sand'
        )
    }

})