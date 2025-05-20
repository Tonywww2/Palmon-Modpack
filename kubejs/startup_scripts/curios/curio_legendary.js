StartupEvents.registry('item', event => {
    event.create('scranton_reality_anchor').attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
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
            "anchor_max_health",
            8,
            "addition"
        )
        .modifyAttribute(
            "minecraft:generic.armor_toughness",
            "anchor_armor_toughness",
            6,
            "addition"
        )
        .modifyAttribute(
            "minecraft:generic.attack_damage",
            "anchor_attack_damage",
            5,
            "addition"
        )
        .modifyAttribute(
            "minecraft:generic.movement_speed",
            "anchor_movement_speed",
            0.025,
            "addition"
        )
    )
        .displayName('§dScranton Reality Anchor')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:accessory")

    event.create('deity_from_the_outside')
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
                "deity_attack_damage",
                0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "deity_attack_speed",
                0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.movement_speed",
                "deity_movement_speed",
                0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "deity_max_health",
                0.3,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "deity_armor",
                0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor_toughness",
                "deity_armor_toughness",
                0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:critical_hit",
                "deity_critical_hit",
                0.1,
                "addition"
            )
            .modifyAttribute(
                "obscure_api:critical_damage",
                "deity_critical_damage",
                0.1,
                "multiply_total"
            )
        )
        .displayName('§d⌈Deity from outside the Arboretia⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:otherworld_relics")

    const ttgAttackDamage = "goddess_attack_damage"
    const ttgAttackSpeed = "goddess_attack_speed"
    const ttgAttackDamageHash = new $JavaString(ttgAttackDamage).hashCode()
    const ttgAttackSpeedHash = new $JavaString(ttgAttackSpeed).hashCode()
    const ttgAttackDamageUUID = new $UUID(ttgAttackDamageHash, ttgAttackDamageHash)
    const ttgAttackSpeedUUID = new $UUID(ttgAttackSpeedHash, ttgAttackSpeedHash)
    event.create('true_three_goddess')
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
                    player.getAttribute("minecraft:generic.attack_damage").removeModifier(ttgAttackDamageUUID)
                    player.getAttribute("minecraft:generic.attack_speed").removeModifier(ttgAttackSpeedUUID)

                }
            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                */
                let player = context.entity()

                if (player && !player.level.isClientSide()) {
                    if (player.age % 10 == 0) {
                        let speed = player.getSpeed()

                        let atkDamage = new $AttributeModifier(
                            ttgAttackDamageUUID,
                            ttgAttackDamage,
                            speed * 1.25,
                            "multiply_total"
                        )

                        let atkSpeed = new $AttributeModifier(
                            ttgAttackSpeedUUID,
                            ttgAttackSpeed,
                            speed * 1.25,
                            "multiply_total"
                        )

                        item.getOrCreateTag().putDouble("player_speed", speed)

                        try {
                            player.getAttribute("minecraft:generic.attack_damage").removeModifier(ttgAttackDamageUUID)
                            player.getAttribute("minecraft:generic.attack_speed").removeModifier(ttgAttackSpeedUUID)

                        } finally {
                            player.getAttribute("minecraft:generic.attack_damage").addTransientModifier(atkDamage)
                            player.getAttribute("minecraft:generic.attack_speed").addTransientModifier(atkSpeed)

                        }

                    }
                }

            })
            .modifyAttribute(
                "minecraft:generic.luck",
                "goddess_luck",
                -0.97,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.movement_speed",
                "goddess_movement_speed",
                0.075,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "goddess_max_health",
                10,
                "addition"
            )
        )
        .displayName('§d⌈Three Goddess⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:otherworld_relics")

    const gnpAttackDamage = "puree_attack_damage"
    const gnpAttackDamageHash = new $JavaString(gnpAttackDamage).hashCode()
    const gnpAttackDamageUUID = new $UUID(gnpAttackDamageHash, gnpAttackDamageHash)
    event.create('old_george_nutritional_puree')
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
                    player.getAttribute("minecraft:generic.attack_damage").removeModifier(gnpAttackDamageUUID)

                }
            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                */
                let player = context.entity()

                if (player && !player.level.isClientSide()) {
                    if (player.age % 10 == 0) {
                        let health = player.getMaxHealth()

                        let atkDamage = new $AttributeModifier(
                            gnpAttackDamageUUID,
                            gnpAttackDamage,
                            health * 0.003,
                            "multiply_base"
                        )

                        item.getOrCreateTag().putDouble("player_health", health)

                        try {
                            player.getAttribute("minecraft:generic.attack_damage").removeModifier(gnpAttackDamageUUID)

                        } finally {
                            player.getAttribute("minecraft:generic.attack_damage").addTransientModifier(atkDamage)

                        }

                    }
                }

            })
            .modifyAttribute(
                "minecraft:generic.armor",
                "puree_armor",
                -0.3,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor_toughness",
                "puree_armor_toughness",
                -0.5,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:healing_power",
                "puree_healing_power",
                -0.9875,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "puree_health_addition",
                6,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "puree_health_multiply",
                0.15,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:penetration",
                "puree_penetration",
                0.2,
                "addition"
            )
        )
        .displayName('§d⌈Old George Nutritional Puree⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:otherworld_relics")


    const mgAtkDamage = "galaxy_critical_damage"
    const mgAtkDamageHash = new $JavaString(mgAtkDamage).hashCode()
    const mgAtkDamageUUID = new $UUID(mgAtkDamageHash, mgAtkDamageHash)
    event.create('miniature_galaxy')
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
                    player.getAttribute("obscure_api:critical_damage").removeModifier(mgAtkDamageUUID)

                }
            })
            .curioTick((item, context) => {
                /**
                 * @type {Internal.ServerPlayer}
                */
                let player = context.entity()

                if (player && !player.level.isClientSide()) {
                    if (player.age % 10 == 0) {
                        let attackSpeed = player.getAttributeValue("minecraft:generic.attack_speed")

                        let modifer = new $AttributeModifier(
                            mgAtkDamageUUID,
                            mgAtkDamage,
                            attackSpeed * 1.15,
                            "addition"
                        )

                        item.getOrCreateTag().putDouble("player_attack_speed", attackSpeed)

                        try {
                            player.getAttribute("obscure_api:critical_damage").removeModifier(mgAtkDamageUUID)

                        }
                        finally {
                            player.getAttribute("obscure_api:critical_damage").addTransientModifier(modifer)

                        }

                    }
                }

            })
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "galaxy_attack_damage_addition",
                2,
                "addition"
            )
            .modifyAttribute(
                "obscure_api:critical_hit",
                "galaxy_attack_critical_hit",
                0.2,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "galaxy_attack_speed_addition",
                80,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "galaxy_attack_speed_multiply",
                -0.99,
                "multiply_total"
            )
        )
        .displayName('§d⌈Miniature Galaxy⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:otherworld_relics")

    event.create('the_necklace_of_krosa')
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
                    if (player.age % 200 == 0) {
                        switch (player.random.nextInt() * 10) {
                            case 0:
                                player.heal(10)
                                break;
                            case 1:
                                player.potionEffects.add("minecraft:regeneration", 160, 1)
                                break;
                            case 2:
                                player.potionEffects.add("minecraft:absorption", 160, 2)
                                break;
                            case 3:
                                player.potionEffects.add("minecraft:haste", 160, 2)
                                break;
                            case 4:
                                player.potionEffects.add("minecraft:strength", 160, 2)
                                break;
                            case 5:
                                player.potionEffects.add("minecraft:resistance", 160, 2)
                                break;
                            case 6:
                                player.potionEffects.add("minecraft:luck", 320, 5)
                                break;
                            case 7:
                                player.potionEffects.add("minecraft:saturation", 40, 0)
                                break;
                            case 8:
                                player.potionEffects.add("cofh_core:magic_resistance", 160, 2)
                                break;
                            case 9:
                                player.addXPLevels(1)
                                break;

                        }

                    }
                }

            })
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "krosa_attack_damage_addition",
                4,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "krosa_attack_damage_multiply_total",
                0.5,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:penetration",
                "krosa_penetration",
                0.2,
                "addition"
            )
            .modifyAttribute(
                "obscure_api:critical_hit",
                "krosa_critical_hit",
                0.1,
                "addition"
            )
        )
        .displayName('§d⌈The Necklace of Krosa⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:otherworld_relics")

    event.create('sun')
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
                    if (player.age % 200 == 0) {
                        player.potionEffects.add("minecraft:glowing", 200, 9)
                        player.potionEffects.add("minecraft:regeneration", 200, 0)

                    }
                }

            })
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "sun_attack_speed",
                0.4,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.movement_speed",
                "sun_movement_speed",
                0.05,
                "addition"
            )
            .modifyAttribute(
                "obscure_api:penetration",
                "sun_penetration",
                0.1,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "sun_attack_damage_multiply_total",
                0.15,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:critical_hit",
                "sun_critical_hit",
                0.15,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "sun_attack_damage_addition",
                4,
                "addition"
            )
        )
        .displayName('§d⌈Sun⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:otherworld_relics")

    event.create('photo_of_niko')
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
                "photo_ranged_damage_addition",
                1.0,
                "addition"
            )
            .modifyAttribute(
                "confluence:ranged_damage",
                "photo_ranged_damage_multiply_total",
                0.6,
                "multiply_total"
            )
            .modifyAttribute(
                "confluence:ranged_velocity",
                "photo_ranged_velocity",
                0.4,
                "multiply_total"
            )
            .modifyAttribute(
                "obscure_api:penetration",
                "photo_penetration",
                0.3,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "photo_armor",
                8,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.armor_toughness",
                "photo_armor_toughness",
                4,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "photo_max_health",
                0.2,
                "multiply_total"
            )
        )
        .displayName('§d⌈Photo of Niko⌋')
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:otherworld_relics")

    event.create('godricks_great_rune')
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
                    if (player.age % 200 == 0) {
                        if (player.getOffHandItem() && player.getOffHandItem() == 'minecraft:gold_nugget') {
                            player.getOffHandItem().shrink(1)
                            player.potionEffects.add("minecraft:resistance", 200, 1)

                        }

                    }
                }
            })
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "rune_attack_damage_addition",
                4,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_damage",
                "rune_attack_damage_multiply_total",
                0.5,
                "multiply_base"
            )
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "rune_attack_speed_addition",
                0.5,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.attack_speed",
                "rune_attack_speed_multiply_total",
                0.2,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "rune_max_health_addition",
                5,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.max_health",
                "rune_max_health_multiply_total",
                0.3,
                "multiply_total"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "rune_armor_addition",
                5,
                "addition"
            )
            .modifyAttribute(
                "minecraft:generic.armor",
                "rune_armor_multiply_total",
                0.3,
                "multiply_total"
            )
        )
        .displayName("§d⌈Godrick's Great Rune⌋")
        .unstackable()
        .fireResistant()
        .glow(true)
        .rarity('epic')
        .tag("curios:otherworld_relics")

})

