StartupEvents.registry('item', event => {
    event.create('present_soul')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
                // context.entity().tell("On Unquip")
            })
            .curioTick((item, context) => {

            })
            .modifyAttribute(
                "minecraft:generic.max_health",
                "present_soul_health",
                8,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "present_soul_armor",
                3,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "present_soul_attack_damage",
                1,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "present_soul_attack_speed",
                0.15,
                "addition"
            )
            .modifyAttribute(
                "forge:block_reach",
                "present_soul_reach",
                1,
                "addition"
            )
        )
        .displayName('§ePresent Soul')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:accessory")

    event.create('true_soul_of_light')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
                // context.entity().tell("On Unquip")
            })
            .curioTick((item, context) => {

            })
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "soul_of_light_attack_damage",
                0.15,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "soul_of_light_attack_speed",
                0.1,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.movement_speed",
                "soul_of_light_movement_speed",
                0.1,
                "multiply_total"
            )
            .modifyAttribute(
                "attributeslib:crit_damage",
                "soul_of_light_critical_damage",
                0.1,
                "multiply_total"
            )
        )
        .displayName('§e⌈Soul of Light⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('true_pure_darkness')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
                // context.entity().tell("On Unquip")
            })
            .curioTick((item, context) => {

            })
            .modifyAttribute(
                "minecraft:generic.max_health",
                "pure_darkness_max_health",
                0.15,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "pure_darkness_armor",
                0.15,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor_toughness",
                "pure_darkness_armor_toughness",
                0.15,
                "multiply_total"
            )
        )
        .displayName('§e⌈Pure Darkness⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('gungnir')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
                // context.entity().tell("On Unquip")
            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                 */
                const player = context.entity()
                if (player) {
                    if (player.age % 40 == 0) {
                        player.potionEffects.add("minecraft:regeneration", 80, 1)

                    }
                }

            })
            .modifyAttribute(
                "minecraft:generic.max_health",
                "gungnir_max_health",
                -0.2,
                "multiply_base"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "gungnir_armor",
                -0.2,
                "multiply_base"
            )
            .modifyAttribute(
                "obscure_api:healing_power",
                "gungnir_healing_power",
                0.4,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:penetration",
                "gungnir_penetration",
                0.2,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "gungnir_attack_damage",
                0.2,
                "multiply_total"
            )
        )
        .displayName('§e⌈Gungnir⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('laevatain')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
                // context.entity().tell("On Unquip")
            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                */
                const player = context.entity()
                if (player) {
                    if (player.age % 40 == 0) {
                        player.potionEffects.add("minecraft:regeneration", 80, 1)

                    }
                }

            })
            .modifyAttribute(
                "minecraft:generic.movement_speed",
                "laevatain_movement_speed",
                -0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.flying_speed",
                "laevatain_flying_speed",
                -0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "forge:swim_speed",
                "laevatain_swim_speed",
                -0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "laevatain_max_health",
                -0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "laevatain_armor",
                -0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:healing_power",
                "laevatain_healing_power",
                1.0,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "laevatain_attack_damage",
                0.25,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "laevatain_attack_speed",
                0.2,
                "multiply_total"
            )
        )
        .displayName('§e⌈Laevatain⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('compact_pal_factory')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
                // context.entity().tell("On Unquip")
            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                */
                const player = context.entity()
                if (player && !player.level.isClientSide()) {
                    if (player.age % 40 == 0) {
                        player.potionEffects.add("minecraft:slowness", 80, 0)

                    }
                    if (player && player.age % 800 == 0) {
                        if (player.random.nextDouble() < 0.25) {
                            let pokeBallList = Ingredient.of([
                                '#cobblemon:tier_1_poke_balls',
                                '#cobblemon:tier_2_poke_balls',
                                '#cobblemon:tier_3_poke_balls',
                                '#cobblemon:tier_4_poke_balls'
                            ]).getItemIds()

                            let stack = Item.of(pokeBallList[player.random.nextInt(pokeBallList.length)])
                            let name = stack.getDisplayName()
                            if (player.addItem(stack)) {
                                player.tell(Text.translatable('ui.kubejs.compact_pal_factory_4').append(name).gold())

                            }
                        }

                    }
                }

            })
            .modifyAttribute(
                "minecraft:generic.movement_speed",
                "factory_movement_speed",
                -0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "factory_armor",
                0.25,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor_toughness",
                "factory_toughness",
                0.1,
                "multiply_total"
            )
        )
        .displayName('§e⌈Compact Pal Factory⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('first_aid_kit')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
                // context.entity().tell("On Unquip")
            })
            .curioTick((item, context) => {
            })
            .modifyAttribute(
                "minecraft:generic.max_health",
                "kit_max_health",
                2.0,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "kit_armor",
                -0.5,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:critical_hit",
                "kit_critical_hit",
                0.1,
                "addition"
            )
        )
        .displayName('§e⌈First Aid Kit⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    const ssAtkDamage = "sages_attack_damage"
    const ssHash = new $JavaString(ssAtkDamage).hashCode()
    const ssAtkDamageUUID = new $UUID(ssHash, ssHash)
    event.create('sages_stone')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
                /**
                 * @type {Internal.ServerPlayer}
                */
                let player = context.entity()
                if (player) {
                    player.getAttribute("minecraft:generic.attack_damage").removeModifier(ssAtkDamageUUID)

                }
            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                */
                let player = context.entity()
                if (player && !player.level.isClientSide()) {
                    if (player.age % 10 == 0) {
                        let armor = player.getAttributeValue("minecraft:generic.armor")

                        let atkDamage = new $AttributeModifier(
                            ssAtkDamageUUID,
                            ssAtkDamage,
                            armor * 20,
                            "addition"
                        )

                        item.getOrCreateTag().putDouble("player_armor", armor)

                        try {
                            player.getAttribute("minecraft:generic.attack_damage").removeModifier(ssAtkDamageUUID)

                        }
                        finally {
                            player.getAttribute("minecraft:generic.attack_damage").addTransientModifier(atkDamage)

                        }


                    }
                    if (player.age % 300 == 37) {
                        player.attack(player.damageSources().fellOutOfWorld(), player.maxHealth * ((player.random.nextDouble() * 0.2) + 0.05))
                    }
                }
            })
            .modifyAttribute(
                "minecraft:generic.max_health",
                "sages_health",
                -0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "sages_armor",
                -0.96,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:critical_hit",
                "sages_critical_hit",
                0.15,
                "addition"
            )
        )
        .displayName('§e⌈Sages Stone⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('blade_of_the_huntress')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {
            })
            .curioTick((item, context) => {

            })
            .modifyAttribute(
                "obscure_api:penetration",
                "huntress_penetration",
                0.3,
                "addition"
            )
            .modifyAttribute(
                "obscure_api:critical_hit",
                "huntress_critical_hit",
                0.1,
                "addition"
            )
        )
        .displayName('§e⌈Blade of the Huntress⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('glase_soda')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {

            })
            .curioTick((item, context) => {
                /**
                   * @type {Internal.ServerPlayer}
                  */
                let player = context.entity()

                if (player && !player.level.isClientSide()) {
                    if (player.age % 300 == 0) {
                        player.potionEffects.add("minecraft:absorption", 300, 0)
                    }
                }
            })
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "soda_attack_damage",
                0.2,
                "multiply_base"
            )
        )
        .displayName('§e⌈Glase Soda⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('white_mask')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {

            })
            .curioTick((item, context) => {
                /**
                   * @type {Internal.ServerPlayer}
                  */
                let player = context.entity()

                if (player && !player.level.isClientSide()) {
                    if (player.age % 100 == 0) {
                        player.potionEffects.add("minecraft:strength", 80, 0)
                    }
                }
            })
            .modifyAttribute(
                "obscure_api:critical_hit",
                "white_mask_critical_hit",
                0.2,
                "addition"
            )
            .modifyAttribute(
                "obscure_api:critical_damage",
                "white_mask_critical_damage",
                0.15,
                "addition"
            )
            .modifyAttribute(
                "obscure_api:healing_power",
                "white_mask_healing_power",
                0.1,
                "multiply_total"
            )
        )
        .displayName('§e⌈White Mask⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('epiphany_pendant')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {

            })
            .curioTick((item, context) => {
            })
            .modifyAttribute(
                "confluence:ranged_damage",
                "epiphany_pendant_ranged_damage_addition",
                0.5,
                "addition"
            )
            .modifyAttribute(
                "confluence:ranged_damage",
                "epiphany_pendant_ranged_damage_multiply",
                0.5,
                "multiply_total"
            )
            .modifyAttribute(
                "confluence:ranged_velocity",
                "epiphany_pendant_ranged_velocity",
                0.5,
                "multiply_total"
            )
        )
        .displayName('§e⌈Epiphany Pendant⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('divergence_meter')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {

            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                 */
                let player = context.entity()

                if (player && !player.level.isClientSide()) {
                    if (player.age % 28800 == 63) {
                        let arr = player.level.getSeed().toString().split('')
                        player.tell(Text.literal(arr[0] + '.' + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + '%').gold())

                    }
                }
            })
            .modifyAttribute(
                "minecraft:generic.luck",
                "divergence_meter_luck",
                0.01048596,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "divergence_meter_max_health",
                0.15,
                "multiply_base"
            )
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "divergence_meter_attack_damage",
                0.2,
                "multiply_base"
            )
        )
        .displayName('§e⌈Divergence Meter⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")

    event.create('inspiration_mushroom')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, context) => {
                return true
            })
            .canUnequip((item, context) => {
                return true
            })
            .onEquip((item1, context, item2) => {
                // context.entity().tell("On Equip")
            })
            .onUnequip((item1, context, item2) => {

            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                 */
                let player = context.entity()

                if (player && !player.level.isClientSide()) {
                    if (player.age % 2400 == 0) {
                        player.tell("灵感菇力孤立")

                    }
                }
            })
            .modifyAttribute(
                "minecraft:generic.luck",
                "inspiration_mushroom_luck",
                2.04,
                "multiply_total"
            )
            .modifyAttribute(
                "attributeslib:crit_damage",
                "inspiration_mushroom_crit_damage",
                0.2,
                "multiply_total"
            )
        )
        .displayName('§e⌈Inspiration Mushroom⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('rare')
        .tag("curios:otherworld_relics")
})

