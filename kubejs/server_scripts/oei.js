ServerEvents.highPriorityData(event => {
    event.addJson("oneenoughitem:replacements/raw_materials.json", [
        {
            "matchItems":
                [
                    "#forge:raw_materials/silver"
                ],
            "resultItems": "thermal:raw_silver"
        },
        {
            "matchItems":
                [
                    "#forge:raw_materials/cobalt"
                ],
            "resultItems": "tconstruct:raw_cobalt"
        },
        {
            "matchItems":
                [
                    "#forge:raw_materials/uranium"
                ],
            "resultItems": "mekanism:raw_uranium"
        },
        {
            "matchItems":
                [
                    "#forge:raw_materials/tin"
                ],
            "resultItems": "thermal:raw_tin"
        },
        {
            "matchItems":
                [
                    "#forge:raw_materials/lead"
                ],
            "resultItems": "thermal:raw_lead"
        },
        {
            "matchItems":
                [
                    "#forge:raw_materials/zinc"
                ],
            "resultItems": "create:raw_zinc"
        }
    ])
    event.addJson("oneenoughitem:replacements/raw_material_blocks.json", [
        {
            "matchItems":
                [
                    '#forge:storage_blocks/raw_silver'
                ],
            "resultItems": 'thermal:raw_silver_block'
        },
        {
            "matchItems":
                [
                    '#forge:storage_blocks/raw_uranium'
                ],
            "resultItems": 'mekanism:block_raw_uranium'
        },
        {
            "matchItems":
                [
                    '#forge:storage_blocks/raw_tin'
                ],
            "resultItems": 'thermal:raw_tin_block'
        },
        {
            "matchItems":
                [
                    '#forge:storage_blocks/raw_lead'
                ],
            "resultItems": 'thermal:raw_lead_block'
        },
    ])

    event.addJson("oneenoughitem:replacements/ingots.json", [
        {
            "matchItems":
                [
                    '#forge:ingots/tin'
                ],
            "resultItems": 'tfc:metal/ingot/tin'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/zinc'
                ],
            "resultItems": 'tfc:metal/ingot/zinc'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/steel'
                ],
            "resultItems": 'tfc:metal/ingot/steel'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/copper'
                ],
            "resultItems": 'minecraft:copper_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/lead'
                ],
            "resultItems": 'thermal:lead_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/nickel'
                ],
            "resultItems": 'tfc:metal/ingot/nickel'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/bronze'
                ],
            "resultItems": 'tfc:metal/ingot/bronze'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/brass'
                ],
            "resultItems": 'tfc:metal/ingot/brass'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/invar'
                ],
            "resultItems": 'thermal:invar_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/silver'
                ],
            "resultItems": 'tfc:metal/ingot/silver'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/gold'
                ],
            "resultItems": 'minecraft:gold_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/electrum'
                ],
            "resultItems": 'thermal:electrum_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/aluminum'
                ],
            "resultItems": 'techreborn:aluminum_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/titanium'
                ],
            "resultItems": 'techreborn:titanium_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/chromium'
                ],
            "resultItems": 'techreborn:chrome_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/tungsten'
                ],
            "resultItems": 'techreborn:tungsten_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/osmium'
                ],
            "resultItems": 'mekanism:ingot_osmium'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/uranium'
                ],
            "resultItems": 'mekanism:ingot_uranium'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/rose_gold'
                ],
            "resultItems": 'tfc:metal/ingot/rose_gold'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/pig_iron'
                ],
            "resultItems": 'tfc:metal/ingot/pig_iron'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/constantan'
                ],
            "resultItems": 'thermal:constantan_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/bismuth'
                ],
            "resultItems": 'tfc:metal/ingot/bismuth'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/iridium'
                ],
            "resultItems": 'techreborn:iridium_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/neutronium'
                ],
            "resultItems": 'avaritia:neutron_ingot'
        },
        {
            "matchItems":
                [
                    '#forge:ingots/cobalt'
                ],
            "resultItems": 'tconstruct:cobalt_ingot'
        },
    ])
})