// priority: 80
const $ClickEvent = Java.loadClass('net.minecraft.network.chat.ClickEvent');
const $ClickEventAction = Java.loadClass('net.minecraft.network.chat.ClickEvent$Action')

const $ShapedRecipe = Java.loadClass('net.minecraft.world.item.crafting.ShapedRecipe')
const itemStackFromJson = $ShapedRecipe.itemStackFromJson

global.current_buffs = new Set()
global.all_buffs = {}

global.tcRandomFix = 0.0

global.frameworkAddition = 0


/**
 * 注册一个EOT 
 * @param {string} id 唯一ID
 * @param {int} cost 消耗锚之碎片数量
 * @param {string[]} [prerequisites] 前置要求，因为ID的数组
 * @param {boolean} lineBreak 是否在这个EOT后换行
 * @param {function} initEffect 初始效果，在每个玩家第一次登录时应用
 * @param {function} recipeEffect 配方效果，在每次服务器启动后应用
 * @param {function} kjsEffect KJS效果，在加载读取种子后应用
 */
function registerBuff(id, cost, prerequisites, lineBreak, initEffect, recipeEffect, kjsEffect) {
    global.all_buffs[id] = {
        id: id,
        cost: cost,
        unlocked: false,
        prerequisites: prerequisites,
        lineBreak: lineBreak,
        initEffect: initEffect,
        recipeEffect: recipeEffect,
        kjsEffect: kjsEffect
    }
}

/**
 * 获取这个EOT的hover
 * @param buff EOT对象
 * @returns 
 */
function getHover(buff) {
    let prereqLine = buff.prerequisites.length > 0
        ? Text.empty().append('\n').append(Text.translatable('kubejs.eot.prerequisites').color(Color.AQUA))
        : Text.empty();

    buff.prerequisites.forEach(reqId => {
        let reqBuff = global.all_buffs[reqId];
        let reqColor = (reqBuff && reqBuff.unlocked) ? Color.GREEN : Color.GRAY;
        prereqLine.append(
            Text.translatable(`kubejs.eot.${reqId}_name`).color(reqColor)
        ).append(' ');
    })

    let isCurrent = global.current_buffs.has(buff.id);
    let color = isCurrent
        ? Color.LIGHT_PURPLE
        : (buff.unlocked
            ? Color.GREEN
            : (buff.prerequisites.filter(r => !global.all_buffs[r]?.unlocked).length
                ? Color.GRAY
                : Color.YELLOW
            )
        )

    let hover = Text.translatable(`kubejs.eot.${buff.id}_name`).append(' ').append(isCurrent
        ? Text.translatable('kubejs.eot.activated')
        : (buff.unlocked
            ? Text.translatable('kubejs.eot.unlocked')
            : Text.translatable('kubejs.eot.locked')
        )
    ).color(color)

    return hover
        .append('\n')
        .append(Text.translatable('kubejs.eot.cost'))
        .append(Text.of(buff.cost.toString()).color(Color.AQUA))
        .append('\n')
        .append(Text.of(buff.id).color(Color.DARK_GRAY))
        .append('\n')
        .append(Text.translatable(`kubejs.eot.${buff.id}_desc`).color(Color.WHITE))
        .append(prereqLine)
}

/**
 * 向玩家发送EOT列表
 * @param player ServerPlayer
 */
global.renderBuffs = function (player) {
    // 前缀
    let line = Text.of('================================================\n================================================')
        .append('\n')
        .append(Text.translatable('kubejs.eot.list_prefix')
            .color(Color.AQUA)
            .hover(Text.translatable('kubejs.eot.description'))
        )
        .append('\n - ');

    // 主体
    for (let id in global.all_buffs) {
        if (id == "no_end") continue

        let buff = global.all_buffs[id];
        let unmet = buff.prerequisites.filter(req => !global.all_buffs[req]?.unlocked)
        let color = global.current_buffs.has(id) ?
            Color.LIGHT_PURPLE
            : (buff.unlocked ?
                Color.GREEN
                : (unmet.length ?
                    Color.GRAY
                    : Color.YELLOW)
            )

        line = line
            .append('   ')
            .append(Text.translatable(`kubejs.eot.${id}_name`)
                .color(color)
                .click(Text.clickEventOf(
                    new $ClickEvent(
                        $ClickEventAction.SUGGEST_COMMAND,
                        `/eot_activate ${id}`
                    )
                ))
                .hover(getHover(buff))
            )

        if (buff.lineBreak) {
            line = line.append('\n - ')

        } else {
            line = line.append(' ')

        }

    }

    // 后缀
    line = line.append('\n================================================\n================================================')
    player.tell(line);
}

ItemEvents.rightClicked('kubejs:anchor_shard', event => {
    global.renderBuffs(event.player)
    event.player.addItemCooldown('kubejs:anchor_shard', 40)

})

// 指令
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('eot_activate')
        .then(Commands.argument('target', Arguments.STRING.create(event))
            .executes(c => global.eotActivate(c, Commands, Arguments))
        )
    )

    event.register(Commands.literal('eot_deactivate')
        .then(Commands.argument('target', Arguments.STRING.create(event))
            .executes(c => global.eotDeactive(c, Commands, Arguments))
        )
    )

    event.register(Commands.literal('eot_show')
        .executes(c => {
            global.renderBuffs(c.source.player)

            return 1
        })
    )

})

global.eotActivate = function (c, Commands, Arguments) {
    let target = Arguments.STRING.getResult(c, 'target')
    let buff = global.all_buffs[target]
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = c.source.player

    if (!buff) {
        player.tell(Text.translatable('kubejs.eot.not_found'))
        return 0
    }

    let unmet = buff.prerequisites
        .filter(req => !global.all_buffs[req]?.unlocked)


    if (unmet.length > 0) {
        let unmetTexts = unmet.map(reqId =>
            Text.translatable(`kubejs.eot.${reqId}_name`).color(Color.GRAY)
        )

        let unmetTextsFinal = Text.empty()
        unmetTexts.forEach(txt => {
            unmetTextsFinal.append(txt).append(' ')
        })

        player.tell(
            Text.translatable('kubejs.eot.requirements_not_met')
                .color(Color.RED)
                .append(unmetTextsFinal)
        )
        return 0
    }

    if (buff.unlocked) {
        player.tell(Text.translatable('kubejs.eot.already_activated').color(Color.AQUA))
        return 0
    }

    let stack = player.mainHandItem
    if (stack.id == 'kubejs:anchor_shard' && stack.count >= buff.cost) {
        stack.shrink(buff.cost)
        buff.unlocked = true
        let arr = global.jsonData.getAsJsonArray("learned_buffs")
        let exist = false

        for (let i of arr.asList()) {
            if (i == target) {
                exist = true
                break
            }
        }

        if (exist) {
            console.log("[Warning] Already Added, That Shouldn't Happen")

        } else {
            console.log("Not Exist, adding")
            arr["add(java.lang.String)"](target)
            console.log("added: " + target)
            savePackData(global.jsonData)

        }

        player.tell(Text.translatable('kubejs.eot.success').color(Color.AQUA))
        global.renderBuffs(player)
        return 1
    }

    player.tell(Text.translatable('kubejs.eot.not_enough_shard').color(Color.RED))
    return 0
}

global.eotDeactive = function (c, Commands, Arguments) {
    let target_buff = Arguments.STRING.getResult(c, 'target')
    let buff = global.all_buffs[target_buff]
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = c.source.player

    if (buff == null) {
        player.tell(Text.translatable('kubejs.eot.not_found'))
        return 0
    }

    buff.unlocked = false
    global.renderBuffs(player)

    return 1
}

// 应用效果
// 初始效果
PlayerEvents.advancement('dustandash:entry', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    // player.tell("第一次登陆提示")

    event.server.runCommandSilent(`/curios set curio ${player.name.getString()} 0`)

    if (global.current_buffs.size != 0) {
        player.tell(Text.translatable('kubejs.eot.first_login_info').color(Color.AQUA))

    }

    for (let id in global.all_buffs) {
        if (global.current_buffs.has(id)) {
            let buff = global.all_buffs[id]

            console.log(`[EOT] ${id} apply to ${player.name.getString()}`)
            player.tell(Text.of('   ')
                .append(Text.translatable(`kubejs.eot.${id}_name`).color(Color.LIGHT_PURPLE).hover(getHover(buff)))
            )

            buff.initEffect(event)

        }
    }

})

// 配方效果
ServerEvents.recipes(event => {
    for (let id in global.all_buffs) {
        if (global.current_buffs.has(id)) {
            let buff = global.all_buffs[id]

            console.log(`[EOT] ${id} apply to level`)

            buff.recipeEffect(event)

        }
    }
})

// KJS效果在 seed.js

const empty = (event) => { }

// 注册
// 矿工
registerBuff("miner_1", 1, ["init"], false,
    (event) => {
        event.player.give(Item.of('tfc:metal/pickaxe/red_steel'))
        event.player.give(Item.of('artifacts:night_vision_goggles'))
    },
    empty,
    (event) => {
        global.blockReachAmmount += 1.0
    })

registerBuff("miner_2", 2, ["miner_1"], false,
    (event) => {
        event.player.give(Item.of('sophisticatedbackpacks:iron_backpack'))
        event.player.give(Item.of('sophisticatedbackpacks:auto_blasting_upgrade'))
    }, (event) => {
        event.blasting('#forge:nuggets/copper', 'tfc:powder/tetrahedrite', 0.1, 30).id('kubejs:eot_miner_2_copper_1')
        event.blasting('#forge:nuggets/copper', 'tfc:powder/malachite', 0.1, 30).id('kubejs:eot_miner_2_copper_2')
        event.blasting('#forge:nuggets/copper', 'tfc:powder/native_copper', 0.1, 30).id('kubejs:eot_miner_2_copper_3')

        event.blasting('#forge:nuggets/iron', 'tfc:powder/magnetite', 0.1, 30).id('kubejs:eot_miner_2_iron_1')
        event.blasting('#forge:nuggets/iron', 'tfc:powder/hematite', 0.1, 30).id('kubejs:eot_miner_2_iron_2')
        event.blasting('#forge:nuggets/iron', 'tfc:powder/limonite', 0.1, 30).id('kubejs:eot_miner_2_iron_3')

        event.blasting('#forge:nuggets/gold', 'tfc:powder/native_gold', 0.1, 30).id('kubejs:eot_miner_2_gold')
        event.blasting('#forge:nuggets/zinc', 'tfc:powder/sphalerite', 0.1, 30).id('kubejs:eot_miner_2_zinc')
        event.blasting('#forge:nuggets/silver', 'tfc:powder/native_silver', 0.1, 30).id('kubejs:eot_miner_2_silver')
        event.blasting('#forge:nuggets/tin', 'tfc:powder/cassiterite', 0.1, 30).id('kubejs:eot_miner_2_tin')
        event.blasting('#forge:nuggets/bismuth', 'tfc:powder/bismuthinite', 0.1, 30).id('kubejs:eot_miner_2_bismuth')
        event.blasting('#forge:nuggets/nickel', 'tfc:powder/garnierite', 0.1, 30).id('kubejs:eot_miner_2_nickel')

    },
    empty)

registerBuff("miner_3", 4, ["true_ending", "miner_2"], false,
    (event) => {
        event.player.give(Item.of('avaritia:blaze_pickaxe', '{Unbreakable:1b}'))
        event.player.give(Item.of('malum:rune_of_haste'))
    }, empty,
    (event) => {
        global.blockReachAmmount += 2.0
    })

registerBuff("miner_4", 4, ["master_ending", "miner_3"], true,
    (event) => {
        event.player.give(Item.of('occultism:dimensional_mineshaft', '{BlockEntityTag:{ForgeCaps:{},id:"occultism:dimensional_mineshaft",inputHandler:{Items:[{Count:1b,Slot:0,id:"occultism:miner_marid_master",tag:{Unbreakable:1b}}],Size:1}}}'))
    },
    empty,
    (event) => {
        global.blockReachAmmount += 3.0
    })

// 战斗
registerBuff("fighter_1", 1, ["init"], false,
    empty,
    empty,
    (event) => {
        global.attack_damageAmmount += 4.0
    })

registerBuff("fighter_2", 1, ["init"], false,
    empty,
    empty,
    (event) => {
        global.attack_speedAmmount += 0.075
    })

registerBuff("fighter_3", 2, ["fighter_1", "fighter_2"], false,
    empty,
    empty,
    (event) => {
        global.attack_damageAmmount += 4.0
        global.attack_speedAmmount += 0.075
    })

registerBuff("assassin_1", 1, ["init"], false,
    empty,
    empty,
    (event) => {
        global.critical_chanceAmmount += 0.05
    })

registerBuff("assassin_2", 1, ["assassin_1"], false,
    empty,
    empty,
    (event) => {
        global.critical_chanceAmmount += 0.05
    })

registerBuff("fighter_4", 3, ["true_ending", "fighter_3", "assassin_2"], false,
    empty,
    empty,
    (event) => {
        global.attack_damageAmmount += 4.0
        global.attack_speedAmmount += 0.1
        global.critical_chanceAmmount += 0.05
    })

registerBuff("fighter_5", 3, ["master_ending", "fighter_4"], true,
    empty,
    empty,
    (event) => {
        global.attack_damageAmmount += 5.0
        global.attack_speedAmmount += 0.1
        global.critical_chanceAmmount += 0.05
    })
registerBuff("slashblade_1", 1, ["fighter_3"], false,
    empty,
    empty,
    (event) => {
        global.slashblade_damageAmmount += 0.75
    })
registerBuff("slashblade_2", 2, ["true_ending", "slashblade_1"], false,
    empty,
    empty,
    (event) => {
        global.slashblade_damageAmmount += 0.75
    })
registerBuff("slashblade_3", 4, ["master_ending", "slashblade_1"], true,
    empty,
    empty,
    (event) => {
        global.slashblade_damageAmmount += 1.5
    })

registerBuff("tank_1", 1, ["init"], false,
    empty,
    empty,
    (event) => {
        global.max_healthAmmount += 0.05
    })

registerBuff("tank_2", 2, ["tank_1"], false,
    empty,
    empty,
    (event) => {
        global.max_healthAmmount += 0.05
    })

registerBuff("sheild_1", 1, ["init"], false,
    empty,
    empty,
    (event) => {
        global.armorAmmount += 3.0
    })

registerBuff("sheild_2", 2, ["sheild_1"], false,
    empty,
    empty,
    (event) => {
        global.armorAmmount += 4.0
    })

registerBuff("tank_sp", 1, ["tank_1", "sheild_1"], false,
    (event) => {
        event.player.give(Item.of('dustandash:rock_solid'))
    },
    empty,
    empty)

registerBuff("tank_3", 3, ["true_ending", "tank_2", "sheild_2"], false,
    empty,
    empty,
    (event) => {
        global.max_healthAmmount += 0.1
        global.armorAmmount += 5.0
        global.healing_powerAmmount += 0.15
    })

registerBuff("tank_4", 3, ["master_ending", "tank_3"], true,
    empty,
    empty,
    (event) => {
        global.max_healthAmmount += 0.1
        global.armorAmmount += 6.0
        global.armor_toughnessAmmount += 6.0
    })


// 机动性
registerBuff("speed_1", 1, ["init"], false,
    (event) => {
        event.player.give(Item.of('confluence:anklet_of_the_wind'))
        event.player.give(Item.of('artifacts:running_shoes'))
    },
    empty,
    (event) => {
        global.movementSpeedAmmount += 0.1
    })

registerBuff("speed_2", 3, ["true_ending", "speed_1"], false,
    (event) => {
        event.player.give(Item.of('confluence:terraspark_boots'))
    },
    empty,
    (event) => {
        global.movementSpeedAmmount += 0.1
    })

registerBuff("flight_1", 3, ["master_ending", "speed_1"], true,
    (event) => {
        event.player.give(Item.of('ars_nouveau:caster_tome', '{"ars_nouveau:caster":{current_slot:0,flavor:"Launches the caster into the air and grants temporary elytra flight!",hidden_recipe:"",is_hidden:0b,spell_count:1,spells:{spell0:{name:"Takeoff!",recipe:{part0:"ars_nouveau:glyph_self",part1:"ars_nouveau:glyph_launch",part2:"ars_nouveau:glyph_launch",part3:"ars_nouveau:glyph_glide",part4:"ars_nouveau:glyph_duration_down",size:5},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}}}},display:{Name:\'{"italic":true,"color":"dark_purple","text":"Takeoff!"}\'}}'))
    },
    empty,
    (event) => {
        global.movementSpeedAmmount += 0.1
        global.maxManaAmmount += 0.2
    })

// 宝可梦 *
registerBuff("poke_1", 2, ["init"], false,
    (event) => {
        event.player.give(Item.of('2x cobblemon:master_ball'))
        event.player.give(Item.of('cobblemon:kings_rock'))
    },
    empty,
    empty)

registerBuff("poke_2", 2, ["true_ending"], false,
    (event) => {
        event.server.runCommand(`pokegiveother ${event.player.name.string} porygonz level=20 hp_iv=31 special_attack_iv=31 speed_iv=31`)
    },
    empty,
    empty)

registerBuff("poke_3", 2, ["master_ending"], true,
    (event) => {
        event.server.runCommand(`pokegiveother ${event.player.name.string} gimmighoul level=20 hp_iv=31 defence_iv=31 special_defence_iv=31 special_attack_iv=31 speed_iv=31`)
    },
    (event) => {
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
                "item": 'cobblemon:gilded_chest'
            },
            "cast_consumed": false,
            "cooling_time": 60,
            "fluid": {
                "amount": 90,
                "tag": 'forge:molten_gold'
            },
            "result": 'cobblemon:relic_coin'
        }).id('kubejs:eot_poke_3_relic_coin')
    },
    empty)

// 工业 *
registerBuff("thermal_1", 2, ["init"], false,
    (event) => {
        event.player.give(Item.of('thermal:satchel',
            '{ItemInv:{ItemInv:[{Count:1b,Slot:0b,id:"thermal:dynamo_stirling"},{Count:1b,Slot:1b,id:"thermal:machine_furnace"},{Count:1b,Slot:2b,id:"thermal:machine_pulverizer"},{Count:1b,Slot:3b,id:"thermal:wrench",tag:{}},{Count:2b,Slot:4b,id:"thermal_extra:abyssal_machine_speed_augment"}]}}'))
    },
    empty,
    empty)

registerBuff("thermal_2", 2, ["true_ending", "thermal_1"], false,
    (event) => {
        event.player.give(Item.of('2x thermal_extra:abyssal_upgrade_augment'))
    },
    (event) => {
        event.shaped('thermal_extra:abyssal_upgrade_augment', [
            'AAA',
            'ABA',
            'AAA'
        ],
            {
                A: 'thermal_extra:abyssal_dust',
                B: 'thermal:upgrade_augment_3'
            }).id('kubejs:eot_thermal_2_abyssal_upgrade_augment')
    },
    empty)

registerBuff("mek_1", 3, ["true_ending"], false,
    (event) => {
        event.player.give(Item.of('mekanism_extras:absolute_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"1024000000"}]}}'))
        event.player.give(Item.of('16x mekanism_extras:absolute_universal_cable'))
    },
    empty,
    empty)

registerBuff("framework_architect_1", 3, ["true_ending"], false,
    empty,
    empty,
    (event) => {
        global.frameworkAddition += 1
    })

registerBuff("fuel_1", 1, ["init"], false,
    (event) => {
        event.player.give(Item.of('8x thermal:charcoal_block'))
    },
    (event) => {
        event.custom({
            "type": "tconstruct:casting_basin",
            "cast": {
                "tag": 'tfc:log_pile_logs'
            },
            "cast_consumed": true,
            "cooling_time": 400,
            "fluid": {
                "amount": 3000,
                "tag": 'forge:creosote'
            },
            "result": 'thermal:charcoal_block'
        }).id('kubejs:eot_fuel_1_charcoal_block')
    },
    empty)

registerBuff("fuel_2", 1, ["true_ending", "fuel_1"], true,
    (event) => {
        event.player.give(Item.of('tfc:metal/axe/red_steel', "{Unbreakable:1b,display:{Name:'{\"text\":\"Jonny?\"}'}}").enchant('minecraft:efficiency', 5))
    },
    empty,
    (event) => {
        global.movementSpeedAmmount += 0.1
    })

// 特殊 *
registerBuff("special_1", 2, ["init"], false, (event) => {
    event.player.give(Item.of('draconicevolution:advanced_dislocator', '{fuel:128}'))
},
    empty,
    empty)

registerBuff("special_2", 6, ["true_ending"], false,
    (event) => {
        if (global.jsonData.has("delivery_coordinate_gamma")) {
            let stack = itemStackFromJson(global.jsonData.getAsJsonObject('delivery_coordinate_gamma'))
            event.player.give(stack)
        }
        if (global.jsonData.has("delivery_coordinate_epsilon")) {
            let stack = itemStackFromJson(global.jsonData.getAsJsonObject('delivery_coordinate_epsilon'))
            event.player.give(stack)
        }
        if (global.jsonData.has("delivery_coordinate_ultimate")) {
            let stack = itemStackFromJson(global.jsonData.getAsJsonObject('delivery_coordinate_ultimate'))
            event.player.give(stack)
        }
    },
    (event) => {
        event.shaped('kubejs:delivery_coordinate_gamma', [
            'ABA',
            'B B',
            'ABA'
        ],
            {
                A: 'kubejs:gamma_framework',
                B: 'minecraft:ender_chest'
            }).id('kubejs:eot_special_2_delivery_coordinate_gamma')

        event.shaped('kubejs:delivery_coordinate_epsilon', [
            'ABA',
            'B B',
            'ABA'
        ],
            {
                A: 'kubejs:epsilon_framework',
                B: 'minecraft:ender_chest'
            }).id('kubejs:eot_special_2_delivery_coordinate_epsilon')

        event.shaped('kubejs:delivery_coordinate_ultimate', [
            'ABA',
            'B B',
            'ABA'
        ],
            {
                A: 'kubejs:cognitio',
                B: 'minecraft:ender_chest'
            }).id('kubejs:eot_special_2_delivery_coordinate_ultimate')

    },
    empty)

registerBuff("relics_1", 2, ["init"], false,
    (event) => {
        event.player.give(Item.of('ftbquests:lootcrate', '{type:"focus"}'))
    },
    empty,
    empty)

registerBuff("relics_2", 2, ["relics_1"], false,
    (event) => {
        event.player.give(Item.of('ftbquests:lootcrate', '{type:"focus"}'))
    },
    empty,
    empty)

registerBuff("relics_3", 5, ["master_ending"], false,
    (event) => {
        event.player.give(Item.of('ftbquests:lootcrate', '{type:"limit"}'))
    },
    empty,
    empty)

registerBuff("relics_4", 5, ["master_ending", "relics_3"], true,
    (event) => {
        event.player.give(Item.of('ftbquests:lootcrate', '{type:"limit"}'))
    },
    empty,
    empty)


registerBuff("survive_1", 2, ["init"], false,
    empty,
    (event) => {
        event.shapeless('tconstruct:crafting_station', ['#forge:workbenches', 'tconstruct:pattern']).id('kubejs:survive_1_crafting_station')
        event.shapeless('6x tfc:wood/lumber/douglas_fir', ['#minecraft:logs', '#forge:rods/wooden']).id('kubejs:survive_1_lumber_from_logs')

        event.shaped('minecraft:furnace', [
            'AAA',
            'A A',
            'AAA'
        ],
            {
                A: '#forge:cobblestone'
            }).id('kubejs:survive_1_furnace')

        event.smelting('tfc:metal/ingot/steel', ['#forge:ingots/refined_iron'], 1, 400).id('kubejs:survive_1_smelting_steel')

    },
    empty)

registerBuff("tfc_smith_1", 3, ["true_ending", "survive_1"], false,
    (event) => {
        event.player.give(Item.of('thermal:satchel', '{ItemInv:{ItemInv:[{Count:1b,ForgeCaps:{"tfc:item_heat":{heat:0.0f,ticks:0L}},Slot:0b,id:"tfc:metal/anvil/steel"},{Count:1b,ForgeCaps:{"tfc:item_heat":{heat:0.0f,ticks:0L}},Slot:1b,id:"tfc:metal/hammer/steel",tag:{Damage:0,Unbreakable:1b}},{Count:1b,ForgeCaps:{"tfc:item_heat":{heat:0.0f,ticks:0L}},Slot:2b,id:"tfc:metal/saw/steel",tag:{Damage:0,Unbreakable:1b}},{Count:1b,ForgeCaps:{"tfc:item_heat":{heat:0.0f,ticks:0L}},Slot:3b,id:"tfc:metal/propick/steel",tag:{Damage:0,Unbreakable:1b}},{Count:1b,ForgeCaps:{"tfc:item_heat":{heat:0.0f,ticks:0L}},Slot:4b,id:"tfc:metal/knife/steel",tag:{Damage:0,Unbreakable:1b}},{Count:1b,ForgeCaps:{"tfc:item_heat":{heat:0.0f,ticks:0L}},Slot:5b,id:"tfc:metal/chisel/steel",tag:{Damage:0,Unbreakable:1b}}]}}'))
    },
    empty,
    empty)

registerBuff("tcr_1", 1, ["init"], false,
    empty,
    empty,
    (event) => {
        global.tcRandomFix += 0.005
    })

registerBuff("tcr_2", 2, ["true_ending", "tcr_1"], false,
    empty,
    empty,
    (event) => {
        global.tcRandomFix += 0.005
    })

registerBuff("tcr_3", 4, ["master_ending", "tcr_2"], true,
    empty,
    empty,
    (event) => {
        global.tcRandomFix += 0.01
    })


// 锚
registerBuff("init", 0, [], false,
    (event) => {
        giveAnchorShard(event.player, 1)
    },
    empty,
    empty)

registerBuff("true_ending", 3, ["init"], false,
    (event) => {
        event.player.give(Item.of('kubejs:present_soul'))
        event.player.stages.add('true_ending')
    },
    stage7,
    empty)

// *在tfc_wda中检测
registerBuff("dungeon_1", 2, ["true_ending"], false,
    (event) => {
        event.player.give(Item.of('minecraft:iron_chestplate', '{Unbreakable:1b}'))
    },
    empty,
    empty)

registerBuff("master_ending", 3, ["true_ending"], false,
    (event) => {
        event.player.give(Item.of('kubejs:scranton_reality_anchor'))
    },
    empty,
    empty)

registerBuff("no_end", 7, ["master_ending"], false,
    (event) => {

    },
    empty,
    empty)



