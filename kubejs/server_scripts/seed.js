// priority: 70
global.jsonData = null

// 种子， 随机数列表，列表当前位置
global.seed = ""
global.levelRandomMap = []
global.randomIndex = 0

const s3MaterialList = ['jaopca:processors.iesnium', 'nuclearcraft:barium_dust', 'forestry:flexible_casing', 'malum:void_tablet', 'kubejs:elite_mechanism_final', 'kubejs:ember_profile']
const s4MaterialList = ['kubejs:marid_binded_gem', 'kubejs:superconducting_coil_type_1', 'kubejs:unify_essence', 'draconicevolution:wyvern_core', 'industrialforegoing:machine_frame_supreme', 'jaopca:processors.calorite']
const s5MaterialList1 = ['kubejs:otherside_mixture', 'kubejs:helium_3_crystal', 'kubejs:iridescent', 'jaopca:processors.aetherium', 'dustandash:titanium_tungsten_alloy']
const s5MaterialList2 = ['kubejs:light_of_inlixaland', 'kubejs:helium_3_crystal_infinity', 'kubejs:alfheim_iridescent', 'aetherworks:aether_pearl', 'kubejs:basepoint_alloy']

global.removeBMRecipes = true

// 读取数据
global.jsonData = loadPackData()

global.seed = global.jsonData.get("last_seed").toString()
global.seed = global.seed.replace('\"', "")
console.log("[ROUGELIKE RECIPES] Loading Scripts, catched Seed: " + global.seed)

console.log("[EOT] All Learned Buffs: ")
let tmp = ""

let learnedArr = global.jsonData.getAsJsonArray("learned_buffs")
for (let i of learnedArr) {
    let id = i.getAsString()
    // console.log(id)
    tmp += i + " "
    let buff = global.all_buffs[id]
    buff.unlocked = true
}
console.log(tmp)

let seedMap = global.jsonData.getAsJsonObject("all_seed_data")
if (!seedMap.has(global.seed)) {
    // 新 seed
    console.log("[EOT] New Seed")
    let tmp = ""
    let newArr = new $JsonArray()
    for (let i in global.all_buffs) {
        if (global.all_buffs[i].unlocked) {
            newArr["add(java.lang.String)"](i)
            // console.log(i)
            tmp += i + " "
            global.current_buffs.add(i)
        }
    }
    seedMap.add(global.seed, newArr)
    console.log(tmp)

} else {
    // 旧 seed
    console.log("[EOT] Old Seed, Current Buffs: ")
    let tmp = ""
    let existArr = seedMap.getAsJsonArray(global.seed)
    for (let i of existArr) {
        let id = String(i.getAsString())
        // console.log(id)
        tmp += id + " "
        global.current_buffs.add(id)
    }
    console.log(tmp)
}
savePackData(global.jsonData)

// console.log(global.all_buffs)
// for (let i of global.current_buffs.entries()){
//     console.log(i)
//     console.log(typeof i)
// }

// Seed 和随机Map
const random = Utils.random
const longSeed = $Long.parseLong(global.seed.replace('L', ""), 10) + 34
random.setSeed(longSeed)

for (let i = 0; i < 1280; i++) {
    global.levelRandomMap.push(random.nextDouble())
}

// console.log(global.levelRandomMap)

// EOT: KJS效果
let strtmp = ""
for (let id in global.all_buffs) {
    if (global.current_buffs.has(id)) {
        let buff = global.all_buffs[id]

        // console.log(`[EOT] ${id} apply to kjs`)
        tmp += id + " "

        buff.kjsEffect(null)

    }
}
console.log(`[EOT] apply to kjs`)
console.log(tmp)

// 游戏加载后
ServerEvents.loaded(event => {
    const { server } = event
    let currentSeed = String(NBT.l(server.worldData.worldGenOptions().seed()))

    // 判断是否为上次进入的种子
    console.log("[ROUGELIKE RECIPES]", "Current Seed: " + currentSeed, "Catched Seed: " + global.seed)
    if (global.seed != currentSeed) {
        console.log("[ROUGELIKE RECIPES] Seeds not matched, reloading")

        global.seed = currentSeed

        let jsonData = loadPackData()
        jsonData.addProperty("last_seed", currentSeed)
        savePackData(jsonData)

        server.scheduleInTicks(10, () => server.runCommandSilent("reload"))
        // mohist 特供
        server.scheduleInTicks(10, () => server.runCommandSilent("minecraft:reload"))

    } else {
        console.log("[ROUGELIKE RECIPES] Seeds matched")

    }

})

global.occ_trigger = false

ServerEvents.recipes((event) => {

    console.log(`Begin Index: ${global.randomIndex}`)
    // stage 1 1+1
    // main
    let s1m = generateUniqueIntegers(3, 1)
    let sf1m = [
        () => s1Occ(event),
        () => s1Im(event),
        () => s1Create(event)
    ]
    sf1m[s1m[0]]()

    // extra
    let s1e = generateUniqueIntegers(4, 1)
    let sf1e = [
        () => e1SB(event),
        () => e1TC(event),
        () => e1PK(event),
        () => e1PL(event)
    ]
    sf1e[s1e[0]]()
    console.log(`s1 recipes loaded: ${s1m[0]}, ${s1e[0]}`)

    // stage 2 1+1
    // main
    let s2m = generateUniqueIntegers(3, 1)
    let sf2m = [
        () => s2Sp(event),
        () => s2Bot(event),
        () => s2AE(event)
    ]
    sf2m[s2m[0]]()

    // extra
    let s2e = generateUniqueIntegers(4, 1)
    let sf2e = [
        () => e2CM(event),
        () => e2ER(event),
        () => e2ID(event),
        () => e2RFT(event)
    ]
    sf2e[s2e[0]]()

    // final
    let s2f = generateUniqueIntegers(2, 1)
    let sf2f = [
        () => s2Frame1(event),
        () => s2Frame2(event)
    ]
    sf2f[s2f[0]]()
    console.log(`s2 recipes loaded: ${s2m[0]}, ${s2e[0]}, ${s2f[0]}`)

    // stage 3 2+2
    // main
    let s3m = generateUniqueIntegers(6, 2)
    let sf3m = [
        () => s3SP(event),
        () => s3NC(event),
        () => s3Fo(event),
        () => s3Ma(event),
        () => s3Cr(event),
        () => s3Em(event)
    ]
    sf3m[s3m[0]]()
    sf3m[s3m[1]]()

    // extra 
    let s3e = generateUniqueIntegers(5, 2)
    let sf3e = [
        () => e3MR(event),
        () => e3SFM(event),
        () => e3XN(event),
        () => e3RFT(event),
        () => e3CR(event)
    ]
    sf3e[s3e[0]]()
    sf3e[s3e[1]]()

    // convergence
    s3ConvergenceRecipe(event, s3m[0], s3m[1])
    console.log(`s3 recipes loaded: ${s3m[0]} ${s3m[1]}, ${s3e[0]} ${s3e[1]}`)

    // stage 4 3+2
    // main
    let s4m = generateUniqueIntegers(6, 3)
    let sf4m = [
        () => s4Occ(event),
        () => s4TR(event),
        () => s4ARS(event),
        () => s4DE(event),
        () => s4IFM(event),
        () => s4AA(event)
    ]
    sf4m[s4m[0]]()
    sf4m[s4m[1]]()
    sf4m[s4m[2]]()

    // extra
    let s4e = generateUniqueIntegers(5, 2)
    let sf4e = [
        () => e4IFS(event),
        () => e4IFU(event),
        () => e4EFF(event),
        () => e4TIB(event),
        () => e4PLM(event)
    ]
    sf4e[s4e[0]]()
    sf4e[s4e[1]]()

    // convergence
    s4ConvergenceRecipe(event, s4m[0], s4m[1], s4m[2])
    console.log(`s4 recipes loaded: ${s4m[0]} ${s4m[1]} ${s4m[2]}, ${s4e[0]} ${s4e[1]}`)

    // stage 5 3+2
    // main
    let s5m = generateUniqueIntegers(5, 3)
    let sf5m = [
        () => s5DD(event),
        () => s5NCF(event),
        () => s5ELF(event),
        () => s5EAW(event),
        () => s5DNA(event)
    ]
    sf5m[s5m[0]]()
    sf5m[s5m[1]]()
    sf5m[s5m[2]]()

    //extra
    let s5e = generateUniqueIntegers(3, 2)
    let sf5e = [
        () => e5IDW(event),
        () => e5FL(event),
        () => e5BM(event)
    ]
    sf5e[s5e[0]]()
    sf5e[s5e[1]]()
    // convergence
    s5ConvergenceRecipe(event, s5m[0], s5m[1], s5m[2])

    console.log(`s5 recipes loaded: ${s5m[0]} ${s5m[1]} ${s5m[2]}, ${s5e[0]} ${s5e[1]}`)

    if (global.removeBMRecipes) {
        // Botanical Machinery, by e5BM
        event.remove({ mod: 'botanicalmachinery' })

    }

    console.log(`Final Index: ${global.randomIndex}`)

})

function generateUniqueIntegers(size, n) {
    if (n > size) throw new Error("n 不能大于 s");
    let result = []
    let map = new Map()

    for (let i = 0; i < n; i++) {
        let r = randomNext(size - i)
        let selected = map.has(r) ? map.get(r) : r;
        let last = size - i - 1;
        let mappedLast = map.has(last) ? map.get(last) : last;

        map.set(r, mappedLast)
        result.push(selected)
    }

    return result
}

function randomNext(range) {
    if (global.randomIndex >= global.levelRandomMap.length) {
        global.randomIndex = 0
    }
    return Math.floor(global.levelRandomMap[global.randomIndex++] * range)
}

/**
 * 生成一个随机数，范围为 -0.01 到 0.01
 * @return {float} 返回一个随机数，范围为 -0.01 到 0.01
 * */
function randomNextScaled() {
    let value = randomNext(200) - 100
    value /= 10000.0
    // console.log("Random Value: " + value)
    return value
}

function randomSample(n, range) {
    if (range === 0) {
        throw new Error("范围内的数字不足以进行抽样")
    }
    const result = []
    let availableNumbers = Array.from(new Array(range).keys())

    for (let i = 0; i < n; i++) {
        let randomIndex = randomNext(availableNumbers.length)
        result.push(availableNumbers[randomIndex])
        availableNumbers.splice(randomIndex, 1)

    }

    return result
}

/**
 * @param {Internal.RecipesEventJS} event
 * @param {int} index1
 * @param {int} index2
 * @param {int} index3
 */
function s5ConvergenceRecipe(event, index1, index2, index3) {
    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "SPECIAL_ATTACK",
        "min_level": 95,
        "required_type": "water",
        "base_hp": 80,
        "base_atk": 80,
        "base_def": 70,
        "base_spa": 130,
        "base_spd": 120,
        "base_spe": 70,
        "area_blocks": [
            {
                "item": 'supplementaries:sugar_cube'
            },
            {
                "item": 'cobblemon:healing_machine'
            },
            {
                "item": 'cobblemon:monitor'
            }
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'kubejs:delta_framework',
                "count": 1
            },
            {
                "item": s5MaterialList1[index1],
                "count": 3
            },
            {
                "item": s5MaterialList2[index2],
                "count": 2
            },
            {
                "item": s5MaterialList2[index3],
                "count": 1
            },
            {
                "item": 'kubejs:collapse_prediction',
                "count": 4
            },
            {
                "item": 'kubejs:end_steel',
                "count": 3
            },
            {
                "item": 'forestry:flexible_casing',
                "count": 1
            },
            {
                "item": 'malum:void_tablet',
                "count": 1
            }
        ],
        "input_power": 81920000,
        "input_fluid": {
            "fluid": "nuclearcraft:aqua_regia_acid",
            "amount": 2000
        },
        "tick": 2400,
        "result_items": [
            {
                "item": 'kubejs:epsilon_framework',
                "count": 1 + global.frameworkAddition
            }
        ]
    }).id('kubejs:epsilon_framework_s5')
}

/**
 * @param {Internal.RecipesEventJS} event
 * @param {int} index1
 * @param {int} index2
 * @param {int} index3
 */
function s4ConvergenceRecipe(event, index1, index2, index3) {

    event.recipes.create.mechanical_crafting(Item.of('kubejs:delta_framework', 1 + global.frameworkAddition), [
        '  A  ',
        ' BXB ',
        'AD DA',
        ' EFE ',
        'AY ZA',
        'AAGAA'
    ], {
        A: '#forge:plates/elementium',
        B: '#forge:gears/ostrum',
        D: '#forge:rods/elementium',
        E: 'ae2:cell_component_1k',
        F: 'kubejs:gamma_framework',
        G: 'kubejs:essence_computation_frame',

        X: s4MaterialList[index1],
        Y: s4MaterialList[index2],
        Z: s4MaterialList[index3]
    }).id('kubejs:delta_framework_s4')


}

/**
 * @param {Internal.RecipesEventJS} event
 * @param {int} index1
 * @param {int} index2
 */
function s3ConvergenceRecipe(event, index1, index2) {
    switch (index1) {
        // switch (true) {
        case 0:
            // sp
            event.shaped(Item.of('kubejs:gamma_framework', 1 + global.frameworkAddition), [
                'ACA',
                'BDB',
                'AEA'
            ],
                {
                    A: 'kubejs:stable_desh_ingot',
                    B: 'kubejs:spirit_coil',
                    C: s3MaterialList[index2],
                    D: 'jaopca:processors.iesnium',
                    E: 'kubejs:beta_framework'
                }).id('kubejs:gamma_framework_s3_0')

            break
        case 1:
            // nuclearcraft
            event.custom({
                "type": "nuclearcraft:assembler",
                "input": [
                    {
                        "count": 1,
                        "item": 'kubejs:beta_framework'
                    },
                    {
                        "count": 4,
                        "item": 'nuclearcraft:barium_dust'
                    },
                    {
                        "count": 1,
                        "item": s3MaterialList[index2]
                    },
                    {
                        "count": 3,
                        "item": 'kubejs:stable_desh_ingot'
                    },
                    {
                        "count": 3,
                        "item": 'kubejs:present_alloy'
                    }
                ],
                "output": [
                    {
                        "count": 1 + global.frameworkAddition,
                        "item": 'kubejs:gamma_framework'
                    }
                ],
                "powerModifier": 5.0,
                "radiation": 0.0,
                "timeModifier": 5.0
            }).id('kubejs:gamma_framework_s3_1')

            break
        case 2:
            // forestry
            event.custom({
                "type": "forestry:carpenter",
                "box": {
                    "item": 'forestry:impregnated_casing'
                },
                "liquid": {
                    "Amount": 1000,
                    "FluidName": "forestry:seed_oil"
                },
                "recipe": {
                    "type": "minecraft:crafting_shaped",
                    "category": "misc",
                    "key": {
                        "A": {
                            "item": 'kubejs:stable_desh_ingot'
                        },
                        "B": {
                            "item": 'kubejs:present_alloy'
                        },
                        "C": {
                            "item": s3MaterialList[index2]
                        },
                        "D": {
                            "item": 'kubejs:ember_profile'
                        },
                        "E": {
                            "item": 'kubejs:beta_framework'
                        }
                    },
                    "pattern": [
                        'ACA',
                        'BDB',
                        'AEA'
                    ],
                    "result": Item.of('kubejs:gamma_framework', 1 + global.frameworkAddition).toJson(),
                    "show_notification": true
                },
                "time": 150
            }).id('kubejs:gamma_framework_s3_2')

            break
        case 3:
            // malum
            event.custom({
                "type": "malum:spirit_infusion",
                "extra_items": [
                    {
                        "count": 1,
                        "item": 'malum:void_tablet'
                    },
                    {
                        "count": 3,
                        "item": 'kubejs:stable_desh_ingot'
                    },
                    {
                        "count": 1,
                        "item": 'kubejs:present_alloy'
                    },
                    {
                        "count": 1,
                        "item": s3MaterialList[index2]
                    }
                ],
                "input": {
                    "count": 1,
                    "item": 'kubejs:beta_framework'
                },
                "output": Item.of('kubejs:gamma_framework', 1 + global.frameworkAddition).toJson(),
                "spirits": [
                    {
                        "type": "eldritch",
                        "count": 1
                    }
                ]
            }).id('kubejs:gamma_framework_s3_3')
            break
        case 4:
            // create
            event.recipes.create.mechanical_crafting(Item.of('kubejs:gamma_framework', 1 + global.frameworkAddition), [
                '  F  ',
                ' ACA ',
                'FBDBF',
                ' AEA ',
                '  F  '
            ], {
                A: 'kubejs:stable_desh_ingot',
                B: '#forge:plates/obsidian',
                C: s3MaterialList[index2],
                D: 'kubejs:elite_mechanism_final',
                E: 'kubejs:beta_framework',
                F: '#forge:plates/brass',
            }).id('kubejs:gamma_framework_s3_4')
            break
        case 5:
            // ember
            event.shaped(Item.of('kubejs:gamma_framework', 1 + global.frameworkAddition), [
                'ACA',
                'BDB',
                'AEA'
            ],
                {
                    A: 'kubejs:stable_desh_ingot',
                    B: 'kubejs:present_alloy',
                    C: s3MaterialList[index2],
                    D: 'kubejs:ember_profile',
                    E: 'kubejs:beta_framework'
                }).id('kubejs:gamma_framework_s3_5')
            break
    }

}
