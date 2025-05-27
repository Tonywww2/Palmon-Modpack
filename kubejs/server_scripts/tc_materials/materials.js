// priority: 50
// @js-check

// By Tonywww, 原始用途：帕鲁梦整合包
ServerEvents.highPriorityData(event => {

    /**
     * @param {string} id       材料的唯一标识，用作生成 JSON 文件名
     * @returns {object}        返回一个链式调用的 builder 对象
     */
    function createMaterialBuilder(id) {
        const definition = { craftable: false, hidden: false, sortOrder: 0, tier: 0 };
        const stats = {};
        const traits = { default: [], perStat: {} };

        let hasStats = false
        let hasTraits = false

        let namespace = "tconstruct"

        const builder = {
            /** 
             * 设置该材料是否可合成
             * @param {boolean} bool  
             * @returns {object} builder
             */
            setCraftable(bool) { definition.craftable = bool; return builder; },

            /** 
             * 设置该材料是否隐藏
             * @param {boolean} bool  
             * @returns {object} builder
             */
            setHidden(bool) { definition.hidden = bool; return builder; },

            /** 
             * 设置材料的排序
             * @param {number} n  
             * @returns {object} builder
             */
            setSortOrder(n) { definition.sortOrder = n; return builder; },

            /** 
             * 设置材料的阶段
             * @param {number} n  
             * @returns {object} builder
             */
            setTier(n) { definition.tier = n; return builder; },

            /**
             * 设置命名空间
             */
            setNamespace(str) { namespace = str; return builder; },

            addStats() { hasStats = true; return builder; },
            addTraits() { hasTraits = true; return builder; },

            /**
             * 添加头部（Head）属性
             * @param {number} durability
             * @param {number} melee_attack
             * @param {number} mining_speed
             * @param {string} mining_tier
             * @returns {object} builder
             */
            addHead(durability, melee_attack, mining_speed, mining_tier) {
                stats['tconstruct:head'] = {
                    durability: durability,
                    melee_attack: melee_attack,
                    mining_speed: mining_speed,
                    mining_tier: mining_tier
                };
                return builder;
            },

            /**
             * 添加手柄（Handle）属性
             * @param {number} durability
             * @param {number} melee_damage
             * @param {number} melee_speed
             * @param {number} mining_speed
             * @returns {object} builder
             */
            addHandle(durability, melee_damage, melee_speed, mining_speed) {
                stats['tconstruct:handle'] = {
                    durability: durability,
                    melee_damage: melee_damage,
                    melee_speed: melee_speed,
                    mining_speed: mining_speed
                };
                return builder;
            },

            /**
             * 添加头盔（Plating Helmet）属性
             * @param {number} armor
             * @param {number} durability
             * @param {number} knockback_resistance
             * @param {number} toughness
             * @returns {object} builder
             */
            addPlatingHelmet(armor, durability, knockback_resistance, toughness) {
                stats['tconstruct:plating_helmet'] = {
                    armor: armor,
                    durability: durability,
                    knockback_resistance: knockback_resistance,
                    toughness: toughness
                };
                return builder;
            },

            /**
             * 添加胸甲（Plating Chestplate）属性
             * @param {number} armor
             * @param {number} durability
             * @param {number} knockback_resistance
             * @param {number} toughness
             * @returns {object} builder
             */
            addPlatingChestplate(armor, durability, knockback_resistance, toughness) {
                stats['tconstruct:plating_chestplate'] = {
                    armor: armor,
                    durability: durability,
                    knockback_resistance: knockback_resistance,
                    toughness: toughness
                };
                return builder;
            },

            /**
             * 添加护腿（Plating Leggings）属性
             * @param {number} armor
             * @param {number} durability
             * @param {number} knockback_resistance
             * @param {number} toughness
             * @returns {object} builder
             */
            addPlatingLeggings(armor, durability, knockback_resistance, toughness) {
                stats['tconstruct:plating_leggings'] = {
                    armor: armor,
                    durability: durability,
                    knockback_resistance: knockback_resistance,
                    toughness: toughness
                };
                return builder;
            },

            /**
             * 添加靴子（Plating Boots）属性
             * @param {number} armor
             * @param {number} durability
             * @param {number} knockback_resistance
             * @param {number} toughness
             * @returns {object} builder
             */
            addPlatingBoots(armor, durability, knockback_resistance, toughness) {
                stats['tconstruct:plating_boots'] = {
                    armor: armor,
                    durability: durability,
                    knockback_resistance: knockback_resistance,
                    toughness: toughness
                };
                return builder;
            },

            /**
             * 添加盾牌（Plating Shield）属性
             * @param {number} durability
             * @param {number} knockback_resistance
             * @param {number} toughness
             * @returns {object} builder
             */
            addPlatingShield(durability, knockback_resistance, toughness) {
                stats['tconstruct:plating_shield'] = {
                    durability: durability,
                    knockback_resistance: knockback_resistance,
                    toughness: toughness
                };
                return builder;
            },

            /**
             * 添加弓把（Grip）属性
             * @param {number} accuracy
             * @param {number} durability
             * @param {number} melee_damage
             * @returns {object} builder
             */
            addGrip(accuracy, durability, melee_damage) {
                stats['tconstruct:grip'] = {
                    accuracy: accuracy,
                    durability: durability,
                    melee_damage: melee_damage
                };
                return builder;
            },

            /**
             * 添加弩机（Limb）属性
             * @param {number} accuracy
             * @param {number} draw_speed
             * @param {number} durability
             * @param {number} velocity
             * @returns {object} builder
             */
            addLimb(accuracy, draw_speed, durability, velocity) {
                stats['tconstruct:limb'] = {
                    accuracy: accuracy,
                    draw_speed: draw_speed,
                    durability: durability,
                    velocity: velocity
                };
                return builder;
            },

            /**
             * 添加绑定节（Binding），无属性
             * @returns {object} builder
             */
            addBinding() {
                stats['tconstruct:binding'] = {};
                return builder;
            },

            /**
             * 添加锁链基底（Maille），无属性
             * @returns {object} builder
             */
            addMaille() {
                stats['tconstruct:maille'] = {};
                return builder;
            },

            /**
             * 添加弓弦（Bowstring），无属性
             * @returns {object} builder
             */
            addBowstring() {
                stats['tconstruct:bowstring'] = {};
                return builder;
            },

            /**
             * 添加盾牌衬板（Shield Core），无属性
             * @returns {object} builder
             */
            addShieldCore() {
                stats['tconstruct:shield_core'] = {};
                return builder;
            },

            /**
             * 添加能量核心（Flux Core）属性
             * @param {number} capacity
             * @param {number} generate
             * @returns {object} builder
             */
            addFluxCore(capacity, generate) {
                stats['tinkers_advanced:flux_core'] = {
                    capacity: capacity,
                    generate: generate
                };
                return builder;
            },

            /**
             * 添加默认材料词条
             * @param {number} level
             * @param {string} name
             * @returns {object} builder
             */
            addDefaultTrait(level, name) {
                traits.default.push({ level: level, name: name });
                return builder;
            },

            /**
             * 添加针对单个 stat 的词条
             * @param {string} statId   stat 标识，如 "tconstruct:armor"
             * @param {number} level
             * @param {string} name
             * @returns {object} builder
             */
            addPerStatTrait(statId, level, name) {
                if (!traits.perStat[statId]) traits.perStat[statId] = [];
                traits.perStat[statId].push({ level: level, name: name });
                return builder;
            },

            /**
             * 最终生成所有 JSON 文件：definition、stats、traits
             * @returns {void}
             */
            build() {
                event.addJson(`${namespace}:tinkering/materials/definition/${id}.json`, definition);
                if (hasStats) event.addJson(`${namespace}:tinkering/materials/stats/${id}.json`, { stats: stats });
                if (hasTraits) event.addJson(`${namespace}:tinkering/materials/traits/${id}.json`, traits);
            }
        };

        return builder;
    }

    /**
       * @param {Object} opts
       * @param {string} opts.fluid        熔化后得到的流体 ID
       * @param {string} opts.material     最终材料 ID
       * @param {string} opts.ingot        锭物品 ID
       * @param {string} opts.leftover     多余物品
       * @param {number} opts.units        锭对应多少毫桶（mb）
       * @param {number} opts.temperature  熔炼温度
       * @param {number} opts.time         熔炼/冷却时间
       * @param {boolean} [opts.meltIngot] 是否生成 锭→流体 配方
       */
    function registerMaterialProcess({
        fluid,
        material,
        ingot,
        leftover,
        units,
        temperature,
        time,
        meltIngot
    }) {
        function makeIngredient(itemId) {
            if (itemId.startsWith('#')) {
                return { tag: itemId.slice(1) };
            } else {
                return { item: itemId };
            }
        }

        // 物品 → 流体
        function melting(itemId, factor) {
            const ingredient = makeIngredient(itemId);
            const fluidAmount = units * factor;
            event.addJson(
                `tconstruct:recipes/kjs/melting/${itemId.replace(':', '_').replace('#', '')}`,
                {
                    type: "tconstruct:melting",
                    ingredient: ingredient,
                    result: { fluid: fluid, amount: fluidAmount },
                    temperature: temperature,
                    time: time
                }
            );
        }

        // 加工台合成
        function materialPart(itemId, needed, value, leftover) {
            const ingredient = makeIngredient(itemId);
            const json = {
                type: "tconstruct:material",
                ingredient: ingredient,
                material: material,
                needed: needed,
                value: value
            };
            if (leftover) json.leftover = leftover;
            event.addJson(
                `tconstruct:recipes/kjs/material/${itemId.replace(':', '_').replace('#', '')}`,
                json
            );
        }

        // 如果需要，为锭生成 熔炼 → 流体 配方
        if (meltIngot) {
            melting(ingot, 1);
        }

        // 锭 → 部件
        materialPart(ingot, 1, 1, leftover);

        // 流体 → 部件
        if (fluid) {
            event.addJson(
                `tconstruct:recipes/kjs/material_fluid/${fluid.replace(':', '_')}`,
                {
                    type: "tconstruct:material_fluid",
                    fluid: { fluid: fluid, amount: units },
                    temperature: time,
                    output: material
                }
            );
        }
    }

    // 正式定义
    // Stage 1
    let sortOrder = 100
    let temp = 900
    let time = 100

    let db = 600

    let black_steel = createMaterialBuilder('black_steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 10.0, 7.0, 'minecraft:diamond')
        .addHandle(0, 0.2, 0, 0.1)
        .addPlatingHelmet(2.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(3.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(3.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addDefaultTrait(1, 'etstlib:critical')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: "tfc:metal/black_steel",
        material: "tconstruct:black_steel",
        ingot: '#forge:ingots/black_steel',
        leftover: 'cataclysm:black_steel_nugget',
        units: 100,
        temperature: temp,
        time: time,
        meltIngot: true
    })

    db = 650
    let spirit_attuned_gem = createMaterialBuilder('spirit_attuned_gem')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 13.0, 7.0, 'minecraft:netherite')
        .addHandle(0.1, 0.15, 0.05, 0)
        .addPlatingHelmet(2.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(3.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:spirit_attuned_gem',
        ingot: 'occultism:spirit_attuned_gem',
        leftover: 'techreborn:diamond_nugget',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    })

    db = 550
    let andesite_alloy = createMaterialBuilder('andesite_alloy')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 11.0, 8.0, 'minecraft:diamond')
        .addHandle(0.3, 0, 0, 0.2)
        .addPlatingHelmet(2.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(3.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(3.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: 'kubejs:melted_andesite_alloy',
        material: 'tconstruct:andesite_alloy',
        ingot: 'create:andesite_alloy',
        leftover: 'minecraft:andesite',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    })

    db = 450
    let bismuth = createMaterialBuilder('bismuth')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_advanced')
        .addStats()
        .addHead(db, 9.0, 6.0, 'minecraft:diamond')
        .addHandle(-0.1, 0.2, 0.05, 0)
        .addPlatingHelmet(1.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(3.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(3.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(1.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .build()

    db = 750
    let red_steel = createMaterialBuilder('red_steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 17.0, 7.0, 'minecraft:netherite')
        .addHandle(-0.1, 0.25, 0, 0.05)
        .addPlatingHelmet(2.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(3.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: "tfc:metal/red_steel",
        material: "tconstruct:red_steel",
        ingot: '#forge:ingots/red_steel',
        leftover: 'cataclysm:black_steel_nugget',
        units: 100,
        temperature: temp,
        time: time,
        meltIngot: true
    })

    db = 850
    let blue_steel = createMaterialBuilder('blue_steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 15.0, 8.0, 'minecraft:netherite')
        .addHandle(0.3, 0.15, 0.1, 0.2)
        .addPlatingHelmet(3.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: "tfc:metal/blue_steel",
        material: "tconstruct:blue_steel",
        ingot: '#forge:ingots/blue_steel',
        leftover: 'cataclysm:black_steel_nugget',
        units: 100,
        temperature: temp,
        time: time,
        meltIngot: true
    })

    db = 650
    let virtual_gold = createMaterialBuilder('virtual_gold')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 18.0, 9.0, 'minecraft:netherite')
        .addHandle(0, 0.3, 0.05, 0.1)
        .addPlatingHelmet(3.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: 'kubejs:melted_virtual_gold',
        material: 'tconstruct:virtual_gold',
        ingot: 'kubejs:virtual_gold_ingot',
        leftover: 'cataclysm:black_steel_nugget',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    })

    db = 650
    let iesnium = createMaterialBuilder('iesnium')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 18.0, 9.0, 'minecraft:netherite')
        .addHandle(0.1, 0.25, 0.05, 0.25)
        .addPlatingHelmet(3.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(5.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addBowstring()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: 'jaopca:molten.iesnium',
        material: 'tconstruct:iesnium',
        ingot: '#forge:ingots/iesnium',
        leftover: 'occultism:iesnium_nugget',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    })

    db = 250
    let hop_graphite = createMaterialBuilder('hop_graphite')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 22.0, 7.0, 'minecraft:diamond')
        .addHandle(-0.1, 0.3, 0.1, 0.1)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(5.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:hop_graphite',
        ingot: '#forge:ingots/hop_graphite',
        leftover: 'tfc:powder/graphite',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    })

    db = 800
    let alpha_framework = createMaterialBuilder('alpha_framework')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 23.0, 9.0, 'minecraft:netherite')
        .addHandle(0.1, 0.3, 0.05, 0.15)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(4.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:alpha_framework',
        ingot: 'kubejs:alpha_framework',
        leftover: 'cataclysm:black_steel_nugget',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    })

    // Stage 2
    sortOrder = 200

    // 烈焰石英
    db = 200;
    let blazing_quartz = createMaterialBuilder('blazing_quartz')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 17.0, 6.0, 'minecraft:diamond')
        .addHandle(0.1, 0.1, 0.0, 0.0)
        .addPlatingHelmet(3.0, db * 0.7, 0, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0, 1.0)
        .addPlatingShield(db * 0.9, 0, 1.0)
        .addBinding()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:blazing_quartz',
        ingot: 'malum:blazing_quartz',
        leftover: 'malum:blazing_quartz_fragment',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 余烬晶体
    db = 250;
    let ember_crystal = createMaterialBuilder('ember_crystal')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 18.0, 6.0, 'minecraft:diamond')
        .addHandle(-0.3, 0.3, 0.1, 0.2)
        .addPlatingHelmet(3.0, db * 0.7, 0, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0, 1.0)
        .addPlatingShield(db * 0.9, 0, 1.0)
        .addBinding()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:ember_crystal',
        ingot: 'embers:ember_crystal',
        leftover: 'embers:ember_shard',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 活木*
    db = 250;
    let livingwood = createMaterialBuilder('livingwood')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 13.0, 6.0, 'minecraft:diamond')
        .addHandle(0.0, 0.15, 0.2, 0.0)
        .addPlatingHelmet(4.0, db * 0.7, 0, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0, 1.0)
        .addPlatingShield(db * 0.9, 0, 1.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();

    // 活石*
    db = 200;
    let livingrock = createMaterialBuilder('livingrock')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 14.0, 6.0, 'minecraft:diamond')
        .addHandle(0.1, 0.2, 0.0, 0.3)
        .addPlatingHelmet(3.0, db * 0.7, 0.1, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0.1, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0.1, 1.0)
        .addPlatingBoots(3.0, db * 0.6, 0.1, 1.0)
        .addPlatingShield(db * 0.9, 0.1, 1.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();

    // 魔力钢*
    db = 500;
    let manasteel = createMaterialBuilder('manasteel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 20.0, 8.0, 'minecraft:diamond')
        .addHandle(0.1, 0.2, 0.1, 0.15)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .build();

    // 赛特斯*
    db = 300;
    let certus_quartz = createMaterialBuilder('certus_quartz')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_advanced')
        .addStats()
        .addHead(db, 19.0, 8.0, 'minecraft:diamond')
        .addHandle(0.0, 0.2, 0.0, 0.3)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(5.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .build();

    // 血曜石*
    db = 450;
    let hematite = createMaterialBuilder('hematite')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_things')
        .addStats()
        .addHead(db, 21.0, 8.0, 'minecraft:diamond')
        .addHandle(-0.2, 0.3, 0.05, 0.1)
        .addPlatingHelmet(3.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0.05, 1.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();

    // 黎明石
    db = 600;
    let dawnstone = createMaterialBuilder('dawnstone')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 23.0, 9.0, 'minecraft:diamond')
        .addHandle(0.2, 0.3, 0.05, 0.2)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: 'embers:molten_dawnstone',
        material: 'tconstruct:dawnstone',
        ingot: '#forge:ingots/dawnstone',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 福鲁伊克斯*
    db = 400;
    let fluix_crystal = createMaterialBuilder('fluix_crystal')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_advanced')
        .addStats()
        .addHead(db, 23.0, 8.0, 'minecraft:diamond')
        .addHandle(0.2, 0.0, -0.2, 0.4)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .build();

    // 狱烬下界合金*
    db = 900;
    let blaze_netherite = createMaterialBuilder('blaze_netherite')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_advanced')
        .addStats()
        .addHead(db, 27.0, 10.0, 'minecraft:netherite')
        .addHandle(0.3, 0.35, 0.0, 0.2)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(7.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(6.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();

    // 马玉灵*
    db = 800;
    let manyullyn = createMaterialBuilder('manyullyn')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 25.0, 9.0, 'minecraft:netherite')
        .addHandle(0.2, 0.25, 0.1, 0)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();

    // Beta框架
    db = 800;
    let beta_framework = createMaterialBuilder('beta_framework')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 28.0, 10.0, 'minecraft:netherite')
        .addHandle(0.3, 0.35, 0.05, 0.3)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(7.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(6.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:beta_framework',
        ingot: 'kubejs:beta_framework',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 远古下界合金
    temp = 1200
    db = 1000;
    let ancient_netherite = createMaterialBuilder('ancient_netherite')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 32.0, 8.0, 'minecraft:netherite')
        .addHandle(0.4, 0.35, 0.0, 0.0)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(8.0, db * 1.0, 0.05, 4.0)
        .addPlatingLeggings(6.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_ancient_netherite',
        material: 'tconstruct:ancient_netherite',
        ingot: 'kubejs:ancient_netherite',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // 泰拉
    db = 700;
    let terrasteel = createMaterialBuilder('terrasteel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 26.0, 11.0, 'minecraft:netherite')
        .addHandle(0.1, 0.25, 0.25, 0.35)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(7.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(6.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_terrasteel',
        material: 'tconstruct:terrasteel',
        ingot: '#forge:ingots/terrasteel',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

})
