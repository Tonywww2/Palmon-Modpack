// priority: 50

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
            setNamespace(str) { namespace = str },

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
                event.addJson(`${namespace}:tinkering/materials/stats/${id}.json`, { stats: stats });
                event.addJson(`${namespace}:tinkering/materials/traits/${id}.json`, traits);
            }
        };

        return builder;
    }

    /**
       * @param {Object} opts
       * @param {string} opts.fluid        熔化后得到的流体 ID
       * @param {string} opts.material     最终材料 ID
       * @param {string} opts.ingot        锭物品 ID
       * @param {number} opts.units        锭对应多少毫桶（mb）
       * @param {number} opts.temperature  熔炼温度
       * @param {number} opts.time         熔炼/冷却时间
       * @param {boolean} [opts.meltIngot] 是否生成 锭→流体 配方
       */
    function registerMaterialProcess({
        fluid,
        material,
        ingot,
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
                `tconstruct:recipes/kjs/melting/${itemId.replace(':', '_')}`,
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
                `tconstruct:recipes/kjs/material/${itemId.replace(':', '_')}`,
                json
            );
        }

        // 如果需要，为锭生成 熔炼 → 流体 配方
        if (meltIngot) {
            melting(ingot, 1);
        }

        // 锭 → 部件
        materialPart(ingot, 1, 1);

        // 流体 → 部件
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

    // 正式定义
    let black_steel = createMaterialBuilder('black_steel')
        .setCraftable(false).setSortOrder(100).setTier(1)
        .addHead(600, 10.0, 7.0, 'minecraft:diamond')
        .addHandle(0, 0.2, 0, 0.1)
        .addPlatingHelmet(2.0, 200, 0.05, 1.0)
        .addPlatingChestplate(3.0, 300, 0.05, 1.0)
        .addPlatingLeggings(3.0, 250, 0.05, 1.0)
        .addPlatingBoots(2.0, 200, 0.05, 1.0)
        .addPlatingShield(300, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addDefaultTrait(1, 'etstlib:critical')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build()

    registerMaterialProcess({
        fluid: "tfc:metal/black_steel",
        material: "tconstruct:black_steel",
        ingot: 'tfc:metal/ingot/black_steel',
        units: 100,
        temperature: 800,
        time: 100,
        meltIngot: true
    })

})
