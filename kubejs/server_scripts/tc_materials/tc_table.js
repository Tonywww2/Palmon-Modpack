ServerEvents.recipes(event => {
    event.custom({
        "type": "tconstruct:part_builder",
        "cost": 3,
        "pattern": "tconstruct:helmet_plating",
        "pattern_item": [
            {
                "tag": "tconstruct:patterns/default"
            },
            {
                "item": "tconstruct:helmet_plating_cast"
            }
        ],
        "result": {
            "item": "tconstruct:helmet_plating"
        }
    }).id("tconstruct:/tools/parts/builder/helmet_plating_table")

    event.custom({
        "type": "tconstruct:part_builder",
        "cost": 6,
        "pattern": "tconstruct:chestplate_plating",
        "pattern_item": [
            {
                "tag": "tconstruct:patterns/default"
            },
            {
                "item": "tconstruct:chestplate_plating_cast"
            }
        ],
        "result": {
            "item": "tconstruct:chestplate_plating"
        }
    }).id("tconstruct:/tools/parts/builder/chestplate_plating_table")

    event.custom({
        "type": "tconstruct:part_builder",
        "cost": 5,
        "pattern": "tconstruct:leggings_plating",
        "pattern_item": [
            {
                "tag": "tconstruct:patterns/default"
            },
            {
                "item": "tconstruct:leggings_plating_cast"
            }
        ],
        "result": {
            "item": "tconstruct:leggings_plating"
        }
    }).id("tconstruct:/tools/parts/builder/leggings_plating_table")

    event.custom({
        "type": "tconstruct:part_builder",
        "cost": 2,
        "pattern": "tconstruct:boots_plating",
        "pattern_item": [
            {
                "tag": "tconstruct:patterns/default"
            },
            {
                "item": "tconstruct:boots_plating_cast"
            }
        ],
        "result": {
            "item": "tconstruct:boots_plating"
        }
    }).id("tconstruct:/tools/parts/builder/boots_plating_table")

    event.custom({
        "type": "tconstruct:part_builder",
        "cost": 4,
        "pattern": "tconstruct:shield_core",
        "pattern_item": [
            {
                "tag": "tconstruct:patterns/default"
            },
            {
                "item": "tconstruct:shield_core_cast"
            }
        ],
        "result": {
            "item": "tconstruct:shield_core"
        }
    }).id("tconstruct:/tools/parts/builder/shield_core_table")

    event.custom({
        "type": "tconstruct:table_casting_material",
        "cast": {
            "item": 'minecraft:shield'
        },
        "item_cost": 4,
        "result": "tconstruct:shield_core"
    }).id("tconstruct:/tools/parts/casting/shield_core_cast")
})