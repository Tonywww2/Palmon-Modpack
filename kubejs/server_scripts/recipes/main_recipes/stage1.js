ServerEvents.recipes(event => {
    event.shapeless('minecraft:slime_ball', ['tfc:glue'])
        .id('kubejs:slime_ball')
    event.shapeless('minecraft:dried_kelp', ['tfc:food/dried_kelp'])
        .id('kubejs:dried_kelp_comp')
    event.shapeless('tfc:bellows', ['supplementaries:bellows', '#forge:leather'])
        .id('kubejs:bellows_comp')

    event.shapeless('cobblemon:ancient_poke_ball', [Ingredient.of(['cobblemon:ancient_poke_ball', 'cobblemon:ancient_citrine_ball', 'cobblemon:ancient_verdant_ball', 'cobblemon:ancient_azure_ball', 'cobblemon:ancient_roseate_ball', 'cobblemon:ancient_slate_ball', 'cobblemon:ancient_slate_ball'])]).id('kubejs:ball_0_s1')
    event.shapeless('cobblemon:ancient_poke_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/red']).id('kubejs:ball_1_s1')
    event.shapeless('cobblemon:ancient_citrine_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/yellow']).id('kubejs:ball_2_s1')
    event.shapeless('cobblemon:ancient_verdant_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/green']).id('kubejs:ball_3_s1')
    event.shapeless('cobblemon:ancient_azure_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/blue']).id('kubejs:ball_4_s1')
    event.shapeless('cobblemon:ancient_roseate_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/pink']).id('kubejs:ball_5_s1')
    event.shapeless('cobblemon:ancient_slate_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/black']).id('kubejs:ball_6_s1')
    event.shapeless('cobblemon:ancient_ivory_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/white']).id('kubejs:ball_7_s1')

    event.shapeless('tfc:kaolin_clay', ['tfc_ie_addon:powder/bauxite', '#forge:clay']).id('kubejs:kaolin_clay_s1')

    event.shapeless('4x tfc:wood/planks/douglas_fir', ['palmon:wood']).id('kubejs:palmon_wood_to_planks_s1')
    event.shapeless('palmon:empty_contract', ['minecraft:paper', 'cobblemon:red_apricorn', 'tfc:volcanic_glass_bottle', 'minecraft:black_dye']).id('kubejs:empty_contract_s1')
    event.shapeless('minecraft:gravel', ['#forge:gravel']).id('kubejs:gravel_to_minecraft_s1')
    event.shapeless('thermal:enderium_coin', ['4x thermal:signalum_coin']).id('kubejs:signalum_to_enderium_coin_s1')
    event.shapeless('4x thermal:signalum_coin', ['thermal:enderium_coin']).id('kubejs:enderium_to_signalum_coin_s1')
    event.shapeless('palmon:stone', ['2x tfc:rock/smooth/granite', '2x tfc:rock/smooth/diorite', '2x tfc:rock/smooth/andesite', '2x tfc:rock/smooth/dacite']).id('kubejs:palmon_stone_s1')

    event.shapeless('minecraft:crafting_table',['#tfc:workbenches']).id('kubejs:crafting_table_shapeless_s1')

    event.shapeless('minecraft:glass',['4x #forge:glass_panes']).id('kubejs:glass_s1')
    event.shapeless('tfc:papyrus',['2x #forge:rods/wooden', 'tfc:food/sugarcane']).id('kubejs:papyrus_s1')

    event.stonecutting('minecraft:crafting_table', ['#minecraft:logs']).id('kubejs:crafting_table_stonecutting_s1')
    event.smelting('minecraft:dried_kelp', ['tfc:plant/winged_kelp', 'tfc:plant/leafy_kelp'], 200, 10).id('kubejs:kelp_s1')
    event.smithing('mekanism:configurator', '#forge:gems/lapis', 'thermal:wrench', '#forge:plates/steel').id('kubejs:configurator_s1')

    event.shaped('tfc:bloomery', [
        'DBD',
        'C C',
        'DBD'
    ],
        {
            B: '#forge:double_sheets/any_bronze',
            C: ['#forge:double_ingots/black_bronze', 'tfc:metal/double_ingot/bismuth_bronze', 'tfc:metal/double_ingot/bronze'],
            D: '#forge:ingots/brick'
        }).id('kubejs:tfc_bloomery_s1')

    event.shaped('tfc:blast_furnace', [
        'DBD',
        'CAC',
        'DBD'
    ],
        {
            A: 'tfc:crucible',
            B: '#forge:sheets/wrought_iron',
            C: '#forge:ingots/cast_iron',
            D: '#forge:stone_bricks'
        }).id('kubejs:tfc_blast_furnace_s1')

    event.shaped('4x tfc:metal/rod/brass', [
        'A ',
        ' A'
    ],
        {
            A: '#forge:ingots/brass'
        }).id('kubejs:brass_rods_s1')

    event.shaped('minecraft:furnace', [
        'AAA',
        'B B',
        'ADA'
    ],
        {
            A: '#forge:cobblestone',
            B: '#forge:rods/red_steel',
            D: 'minecraft:glowstone'
        }).id('kubejs:furnace_s1')

    event.shaped('minecraft:bucket', [
        'ABA',
        ' A '
    ],
        {
            A: '#forge:plates/steel',
            B: 'minecraft:barrel'
        }).id('kubejs:bucket_s1')

    event.shaped('minecraft:anvil', [
        'AAA',
        ' B ',
        'BBB'
    ],
        {
            A: '#forge:storage_blocks/iron',
            B: '#forge:ingots/cast_iron'
        }).id('kubejs:anvil_s1')

    event.shaped('4x mekanism:basic_logistical_transporter', [
        'ABA',
    ],
        {
            A: '#forge:ingots/steel',
            B: 'minecraft:iron_bars'
        }).id('kubejs:basic_logistical_transporter_s1')

    event.shaped('kubejs:present_soul', [
        'ABA',
        'BFB',
        'ABA'
    ],
        {
            A: 'tfc:soot',
            B: 'kubejs:virtual_gold_ingot',
            F: 'tfc:hematitic_glass_bottle'
        }).id('kubejs:present_soul_s1')

    event.shaped('ad_astra:steel_tank', [
        ' A ',
        'BAB',
        ' B '
    ],
        {
            A: '#forge:sheets/wrought_iron',
            B: '#forge:sheets/steel'
        }).id('kubejs:steel_tank_s1')

    event.shaped('3x cobblemon:ancient_poke_ball', [
        'AAA',
        'BCB',
        'DDD'
    ],
        {
            A: 'cobblemon:red_apricorn',
            B: 'tfc:metal/sheet/copper',
            C: '#tfc:trim_materials',
            D: 'palmon:wood'
        }).id('kubejs:ancient_poke_ball_s1')

    event.shaped('9x tconstruct:seared_brick', [
        'ACB',
        'CDC',
        'BCA'
    ],
        {
            A: '#forge:sand',
            B: '#forge:gravel',
            C: '#forge:clay',
            D: 'tfc:ceramic/fire_brick'
        }).id('kubejs:seared_brick_s1')

    event.recipes.tfc.barrel_sealed(4800)
        .outputItem('thermal:slag')
        .outputFluid(Fluid.of('immersiveengineering:creosote', 1000))
        .inputs('#forge:coal', TFC.fluidStackIngredient('tfc:limewater', 1000))
        .id('kubejs:creosote_s1')

    event.recipes.tfc.barrel_sealed(4800)
        .outputFluid(Fluid.of('ad_astra:fuel', 1000))
        .inputs('32x #forge:dusts/redstone', TFC.fluidStackIngredient('immersiveengineering:creosote', 2000))
        .id('kubejs:fuel_s1')

    event.shaped('palmon:working_station', [
        'AAA',
        'BCB',
        'DDD'
    ],
        {
            A: '#forge:ingots/gold',
            B: 'palmon:wood',
            C: 'nuclearcraft:coil_copper',
            D: '#forge:ingots/cast_iron'
        }).id('kubejs:working_station_s1')

    event.shaped('palmon:production_machine', [
        'ABA',
        'CDC',
        'EEE'
    ],
        {
            A: ['#forge:sheets/brass', '#forge:gears/brass'],
            B: 'minecraft:crafting_table',
            C: ['minecraft:hopper', 'woodenhopper:wooden_hopper'],
            D: ['tfc:metal/pickaxe/wrought_iron', 'minecraft:diamond_pickaxe'],
            E: '#forge:ingots/cast_iron'
        }).id('kubejs:production_machine_s1')

    event.shaped('palmon:processing_station', [
        'ABA',
        'CDC',
        'EEE'
    ],
        {
            A: '#forge:ingots/cast_iron',
            B: 'tfc:bellows',
            C: 'minecraft:hopper',
            D: 'minecraft:smithing_table',
            E: '#forge:ingots/black_steel'
        }).id('kubejs:processing_station_s1')

    event.shaped('tconstruct:crafting_station', [
        'ACA',
        'BDB',
        'B B'
    ],
        {
            A: 'tconstruct:pattern',
            B: '#tconstruct:planklike',
            C: 'kubejs:alpha_framework',
            D: '#forge:crafting_tables'
        }).id('kubejs:tc_crafting_station_s1')

    event.shaped('tconstruct:part_builder', [
        'A A',
        ' B ',
        'A A'
    ],
        {
            A: 'tconstruct:pattern',
            B: 'tconstruct:crafting_station'
        }).id('kubejs:tc_part_builder_s1')

    event.shaped('tconstruct:tinker_station', [
        'AAA',
        'CBC',
        'C C'
    ],
        {
            A: 'tconstruct:pattern',
            B: 'tconstruct:crafting_station',
            C: '#tconstruct:planklike'
        }).id('kubejs:tc_tinker_station_s1')

    event.shaped('minecraft:barrel', [
        'ADA',
        'ABA',
        'ADA'
    ],
        {
            A: '#tconstruct:planklike',
            B: '#tfc:barrels',
            D: '#minecraft:wooden_slabs'
        }).id('kubejs:barrel')

    event.shaped('sophisticatedbackpacks:backpack', [
        'ABA',
        'BCB',
        'BBB'
    ],
        {
            A: 'tfc:metal/bars/wrought_iron',
            B: '#forge:leather',
            C: '#forge:barrels/wooden'
        }).id('kubejs:backpack_s1')

    event.recipes.occultism.ritual(
        'occultism:infused_pickaxe',
        [
            'occultism:spirit_attuned_pickaxe_head',
            'tfc:metal/pickaxe/steel'
        ],
        'occultism:book_of_binding_bound_djinni',
        'occultism:craft_foliot'
    ).id("kubejs:infused_pickaxe_s1")

    let t = 'thermal:device_water_gen'
    event.recipes.createSequencedAssembly([
        'cookingforblockheads:sink'
    ], 'mekanism:steel_casing', [
        event.recipes.createDeploying(t, [t, 'minecraft:iron_ingot']),
        event.recipes.createFilling(t, [t, Fluid.of('minecraft:water', 1000)]),
    ]).transitionalItem(t)
        .loops(500)
        .id('kubejs:sink_s1')

    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "type": "sophisticatedcore:item_enabled",
                "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
            }
        ],
        "key": {
            "B": {
                "item": "sophisticatedbackpacks:copper_backpack"
            },
            "I": {
                "item": "tfc:metal/ingot/black_steel"
            }
        },
        "pattern": [
            " I ",
            "IBI",
            " I "
        ],
        "result": {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
    }).id('kubejs:iron_backpack_s1')

})

