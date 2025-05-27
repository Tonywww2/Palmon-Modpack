ServerEvents.recipes(event => {
    event.shapeless('4x tfc:wood/planks/douglas_fir', ['palmon:wood'])
    event.shapeless('farmersdelight:rich_soil', ['#tfc:dirt', '2x enchanted:wood_ash', '2x minecraft:rotten_flesh', '4x minecraft:bone_meal'])
    event.shapeless('cobblemon:medicinal_leek', ['enchanted:mandrake_root', 'enchanted:exhale_of_the_horned_one', '#forge:eggs'])
    event.shapeless('palmon:empty_contract', ['minecraft:paper', 'cobblemon:red_apricorn', 'tfc:volcanic_glass_bottle', 'minecraft:black_dye'])
    
    event.shapeless('minecraft:gravel', ['#forge:gravel'])

    event.shapeless('cobblemon:ancient_poke_ball', [Ingredient.of(['cobblemon:ancient_poke_ball', 'cobblemon:ancient_citrine_ball', 'cobblemon:ancient_verdant_ball', 'cobblemon:ancient_azure_ball', 'cobblemon:ancient_roseate_ball', 'cobblemon:ancient_slate_ball', 'cobblemon:ancient_slate_ball'])])
    event.shapeless('cobblemon:ancient_poke_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/red'])
    event.shapeless('cobblemon:ancient_citrine_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/yellow'])
    event.shapeless('cobblemon:ancient_verdant_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/green'])
    event.shapeless('cobblemon:ancient_azure_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/blue'])
    event.shapeless('cobblemon:ancient_roseate_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/pink'])
    event.shapeless('cobblemon:ancient_slate_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/black'])
    event.shapeless('cobblemon:ancient_ivory_ball', ['cobblemon:ancient_poke_ball', '#forge:dyes/white'])

    event.shapeless('cobblemon:ancient_feather_ball', ['#forge:feathers', 'cobblemon:ancient_azure_ball'])
    event.shapeless('cobblemon:ancient_wing_ball', ['#forge:feathers', 'cobblemon:ancient_great_ball'])
    event.shapeless('cobblemon:ancient_jet_ball', ['#forge:feathers', 'cobblemon:ancient_ultra_ball'])

    event.shapeless('cobblemon:ancient_heavy_ball', ['palmon:stone', 'cobblemon:ancient_slate_ball'])
    event.shapeless('cobblemon:ancient_leaden_ball', ['palmon:stone', 'cobblemon:ancient_great_ball'])
    event.shapeless('cobblemon:ancient_gigaton_ball', ['palmon:stone', 'cobblemon:ancient_ultra_ball'])
    event.shapeless('thermal:enderium_coin', ['4x thermal:signalum_coin'])
    event.shapeless('4x thermal:signalum_coin', ['thermal:enderium_coin'])
    
    event.shapeless('palmon:stone', ['2x tfc:rock/smooth/granite', '2x tfc:rock/smooth/diorite', '2x tfc:rock/smooth/andesite', '2x tfc:rock/smooth/dacite'])

    event.shaped('minecraft:barrel', [
        'ACA',
        'ABA',
        'AAA'
    ],
        {
            A: '#tfc:lumber',
            B: '#tfc:barrels',
            C: '#forge:dusts/redstone'
        })

    event.shaped('cobblemon:ancient_poke_ball', [
        'AAA',
        'BCB',
        'DDD'
    ],
        {
            A: 'cobblemon:red_apricorn',
            B: 'tfc:metal/sheet/copper',
            C: '#tfc:trim_materials',
            D: 'palmon:wood'
        })

    event.shaped('enchanted:witch_oven', [
        ' A ',
        'BBB',
        'CCC'
    ],
        {
            A: 'castirongrill:cast_iron_grill',
            B: '#forge:sheets/cast_iron',
            C: '#forge:rods/cast_iron'
        })

    event.shaped('palmon:working_station', [
        'AAA',
        'BCB',
        'DDD'
    ],
        {
            A: '#forge:sheets/gold',
            B: 'palmon:wood',
            C: 'tfcgroomer:copper_grooming_station',
            D: 'tfc:metal/double_sheet/wrought_iron'
        })

    event.shaped('palmon:production_machine', [
        'ABA',
        'CDC',
        'EEE'
    ],
        {
            A: '#forge:double_sheets/brass',
            B: 'minecraft:crafting_table',
            C: 'minecraft:hopper',
            D: '#tfc:anvils',
            E: '#forge:double_sheets/wrought_iron'
        })

    event.shaped('palmon:processing_station', [
        'ABA',
        'CDC',
        'EEE'
    ],
        {
            A: '#forge:sheets/wrought_iron',
            B: 'tfc:bellows',
            C: 'minecraft:hopper',
            D: 'tfc:blast_furnace',
            E: '#forge:double_sheets/black_steel'
        })

    event.shaped('sophisticatedbackpacks:backpack', [
        'ABA',
        'BCB',
        'ADA'
    ],
        {
            A: '#forge:sheets/wrought_iron',
            B: '#forge:leather',
            C: '#forge:barrels/wooden',
            D: 'minecraft:saddle'
        })

    event.shaped('minecraft:furnace', [
        'AAA',
        'BCB',
        'ADA'
    ],
        {
            A: '#forge:cobblestone',
            B: '#forge:rods/red_steel',
            C: 'tfc:wrought_iron_grill',
            D: 'minecraft:glowstone'
        })

    event.shaped('nethersdelight:blackstone_furnace', [
        'AAA',
        'BCB',
        'ADA'
    ],
        {
            A: 'minecraft:blackstone',
            B: '#forge:rods/red_steel',
            C: 'tfc:wrought_iron_grill',
            D: 'minecraft:glowstone'
        })

    event.shaped('quark:blackstone_furnace', [
        'AAA',
        'BCB',
        'ADA'
    ],
        {
            A: 'minecraft:blackstone',
            B: '#forge:rods/red_steel',
            C: 'tfc:wrought_iron_grill',
            D: 'minecraft:glowstone'
        })

    event.shaped('quark:deepslate_furnace', [
        'AAA',
        'BCB',
        'ADA'
    ],
        {
            A: 'minecraft:cobbled_deepslate',
            B: '#forge:rods/red_steel',
            C: 'tfc:wrought_iron_grill',
            D: 'minecraft:glowstone'
        })

    event.shaped('botanicalmachinery:mana_emerald', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'enchanted:foul_fume',
            B: 'palmon:m_crystal',
            C: '#forge:gems/emerald'
        })

    event.shaped('minecraft:bucket', [
        'ABA',
        ' A '
    ],
        {
            A: '#forge:plates/steel',
            B: 'minecraft:barrel'
        })

    event.shaped('kubejs:present_soul', [
        'ABA',
        'CFD',
        'AEA'
    ],
        {
            A: 'tfc:soot',
            B: ['tfc:metal/helmet/red_steel', 'tfc:metal/helmet/blue_steel'],
            C: ['tfc:metal/chestplate/red_steel', 'tfc:metal/chestplate/blue_steel'],
            D: ['tfc:metal/greaves/red_steel', 'tfc:metal/greaves/blue_steel'],
            E: ['tfc:metal/boots/red_steel', 'tfc:metal/boots/blue_steel'],
            F: 'tfc:hematitic_glass_bottle'
        })

    event.shaped('redstone_arsenal:flux_obsidian_rod', [
        ' BA',
        ' C ',
        'AB '
    ],
        {
            A: 'redstone_arsenal:flux_gem',
            B: 'redstone_arsenal:obsidian_rod',
            C: 'thermal:upgrade_augment_3'
        })

    event.shaped('botania:alfheim_portal', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#botania:livingwood_logs',
            B: '#forge:plates/ostrum',
            C: 'kubejs:reinforced_sheet'
        })

    event.shaped('palmon:boost_frame_5', [
        'ABA',
        'ACA',
        'ADA'
    ],
        {
            A: 'palmon:refined_m_steel_ingot',
            B: 'botania:gaia_ingot',
            C: 'palmon:boost_frame_4',
            D: 'industrialforegoing:machine_frame_supreme'
        })

    event.shaped('minecraft:netherite_upgrade_smithing_template', [
        'ABA',
        'ACA',
        'AAA'
    ],
        {
            A: '#forge:gems/diamond',
            B: '#forge:ingots/netherite_scrap',
            C: '#forge:netherrack'
        })

    event.shaped('minecraft:anvil', [
        'AAA',
        ' B ',
        'BBB'
    ],
        {
            A: '#forge:storage_blocks/iron',
            B: '#forge:ingots/cast_iron'
        })

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
    })

})