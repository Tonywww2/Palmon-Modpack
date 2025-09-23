const $Minecraft = Java.loadClass("net.minecraft.client.Minecraft")

let curiosList = [
    'kubejs:present_soul',
    'kubejs:true_soul_of_light',
    'kubejs:true_pure_darkness',
    'kubejs:gungnir',
    'kubejs:laevatain',
    'kubejs:compact_pal_factory',
    'kubejs:first_aid_kit',
    'kubejs:sages_stone',
    'kubejs:blade_of_the_huntress',
    'kubejs:glase_soda',
    'kubejs:white_mask',
    'kubejs:epiphany_pendant',
    'kubejs:divergence_meter',
    'kubejs:inspiration_mushroom',
    'kubejs:ancient_proudsoul_tiny',

    'kubejs:scranton_reality_anchor',
    'kubejs:phosphophyllite',
    'kubejs:deity_from_the_outside',
    'kubejs:true_three_goddess',
    'kubejs:old_george_nutritional_puree',
    'kubejs:miniature_galaxy',
    'kubejs:the_necklace_of_krosa',
    'kubejs:sun',
    'kubejs:photo_of_niko',
    'kubejs:godricks_great_rune',
    'kubejs:izanagis_burden',
    'kubejs:ancient_proudsoul',
    'kubejs:redstone_of_aja',
]
let itemList = [
    'kubejs:helium_3_crystal_infinity',
    'industrialforegoing:meat_feeder'

]
let deliveryCoordinate = ['kubejs:delivery_coordinate_gamma', 'kubejs:delivery_coordinate_epsilon', 'kubejs:delivery_coordinate_ultimate']

ItemEvents.tooltip(event => {
    /**
     * @type {Internal.ClientPlayerKJS}
     */
    let player = $Minecraft.getInstance().player
    event.add('confluence:brain_of_confusion', [Text.translate("ui.kubejs.banned").gold()])
    event.add('kubejs:baby_proofing', [Text.literal("Here is a BABY! ").gold()])
    event.add('cobblemon:relic_coin', [Text.translate("ui.kubejs.relic_coin").gold()])

    event.add('#kubejs:voucher', [Text.translate("ui.kubejs.voucher").gold()])
    event.add('cataclysm:abyss_eye', [Text.translate("ui.kubejs.abyss_eye").darkPurple()])
    event.add('kubejs:anchor_shard', [Text.translate("ui.kubejs.anchor_shard").darkBlue()])
    event.add('kubejs:cognitio', [Text.translate("ui.kubejs.cognitio").darkBlue()])
    event.add('confluence:demon_heart', [Text.translate("ui.kubejs.demon_heart").darkBlue()])

    deliveryCoordinate.forEach(element => {
        event.addAdvanced(element, (item, advanced, text) => {
            text.add(1, Text.translate("kubejs.eot.delivery_coordinate_desc1").gold())
            text.add(2, Text.translate("kubejs.eot.delivery_coordinate_desc2").gold())
            text.add(3, Text.translate("kubejs.eot.delivery_coordinate_desc3").gold())

        })
    })

    curiosList.forEach(element => {
        event.addAdvanced(element, (item, advanced, text) => {
            text.add(1, Text.translate("ui.kubejs." + element.split(':')[1]).aqua())
            text.add(2, Text.translate("ui.kubejs.no_dulp_curio").gold())
            text.add(3, Text.empty())

        })

    })

    itemList.forEach(element => {
        event.addAdvanced(element, (item, advanced, text) => {
            text.add(1, Text.translate("ui.kubejs." + element.split(':')[1]).aqua())
            text.add(2, Text.empty())

        })

    })

    event.addAdvanced('kubejs:scranton_reality_anchor', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.scranton_reality_anchor_2").gold())

    })
    event.addAdvanced('kubejs:phosphophyllite', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.phosphophyllite_2").gold())
        text.add(5, Text.translate("ui.kubejs.phosphophyllite_3").darkRed())

    })

    event.addAdvanced('kubejs:compact_pal_factory', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.compact_pal_factory_2").gold())
        text.add(5, Text.translate("ui.kubejs.compact_pal_factory_3").gold())

    })

    event.addAdvanced('kubejs:sages_stone', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.sages_stone_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_armor")) {
            let armor = item.nbt.getDouble("player_armor")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatAddition(armor * 20)).append(' ').append(Text.translatable('attribute.name.generic.attack_damage')).blue())

        }

    })

    event.addAdvanced('kubejs:glase_soda', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.glase_soda_2").gold())
    })

    event.addAdvanced('kubejs:true_three_goddess', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.true_three_goddess_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_speed")) {
            let speed = item.nbt.getDouble("player_speed")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatPercentage(speed * 1.25)).append(' ').append(Text.translatable('attribute.name.generic.attack_damage')).blue())
            text.add(8, Text.literal(formatPercentage(speed * 1.25)).append(' ').append(Text.translatable('attribute.name.generic.attack_speed')).blue())

        }

    })

    event.addAdvanced('kubejs:old_george_nutritional_puree', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.old_george_nutritional_puree_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_health")) {
            let health = item.nbt.getDouble("player_health")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatPercentage(health * 0.003)).append(' ').append(Text.translatable('attribute.name.generic.attack_damage')).blue())

        }

    })

    event.addAdvanced('kubejs:miniature_galaxy', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.miniature_galaxy_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_attack_speed")) {
            let attackSpeed = item.nbt.getDouble("player_attack_speed")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatPercentage(attackSpeed * 1.2)).append(' ').append(Text.translatable('attributeslib:crit_damage')).blue())

        }

    })

    event.addAdvanced('kubejs:the_necklace_of_krosa', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.the_necklace_of_krosa_2").gold())

    })

    event.addAdvanced('kubejs:godricks_great_rune', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.godricks_great_rune_2").gold())

    })

    event.addAdvanced('kubejs:ancient_proudsoul', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.ancient_proudsoul_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_food_count")) {
            let foodCount = item.nbt.getDouble("player_food_count")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatAddition(foodCount * 0.8)).append(' ').append(Text.translatable('attribute.name.generic.attack_damage')).blue())

        }

    })


    event.add('thermal:lumium_coin', Text.translatable('ui.kubejs.lumium_coin').gold())
    event.add('thermal:copper_coin', Text.translatable('ui.kubejs.copper_coin').gold())

    event.addAdvanced('deeperdarker:heart_of_the_deep', (item, advanced, text) => {
        text.add(1, Text.translate("ui.kubejs.heart_of_the_deep").gold())

    })

    event.addAdvanced('deeperdarker:reinforced_echo_shard', (item, advanced, text) => {
        text.add(1, Text.translate("ui.kubejs.reinforced_echo_shard").gold())

    })

    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (event.alt && item.nbt) {
            text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
        }
    })

})

function formatPercentage(num) {
    return (num >= 0 ? "+" : "") + (num * 100).toFixed(2) + "%";
}

function formatAddition(num) {
    return (num >= 0 ? "+" : "") + (num).toFixed(2);
}