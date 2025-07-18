ItemEvents.rightClicked('minecraft:emerald', event => {
    const player = event.player

    // ==================== 目标模式定义 ====================
    // 定义您想要的输出模式
    const targetPattern = {
        s1m: [0],        // Stage 1 Main
        s1e: [3],        // Stage 1 Extra
        s2m: [1],        // Stage 2 Main
        s2e: [0],        // Stage 2 Extra
        s3m: [1, 4],     // Stage 3 Main (两个值)
        s4m: [2, 3, 5],  // Stage 4 Main (三个值)
        s5m: [1, 2]      // Stage 5 Main (三个值中的前两个)
        // s2f, s3e, s4e, s5e 暂时不限制
    }

    console.log("=== 开始搜索种子 ===")
    console.log("目标模式:", JSON.stringify(targetPattern))
    player.tell("§6开始搜索种子，请稍等...")

    let found = false
    let searchCount = 0
    const maxSearch = 50000 // 最大搜索次数

    // 搜索循环
    for (let seedOffset = 0; seedOffset < maxSearch && !found; seedOffset++) {
        searchCount++

        // 生成19位测试种子 - 修改前几位而不是后几位
        let baseSeedStr = "503061322000000000" // 19位起始数字
        let offsetStr = seedOffset.toString()
        let testSeedStr = offsetStr + baseSeedStr.substring(offsetStr.length)

        // 确保是19位
        if (testSeedStr.length > 18) {
            testSeedStr = testSeedStr.substring(0, 18)
        } else if (testSeedStr.length < 18) {
            testSeedStr = testSeedStr.padEnd(18, '0')
        }

        let testSeed = testSeedStr + "L"

        // 详细日志前几次搜索
        if (searchCount <= 5) {
            console.log(`搜索 #${searchCount}: 种子=${testSeed}, 长度=${testSeedStr.length}`)
        }

        // 测试这个种子
        let result = testSeed_Internal(testSeed)

        // 详细日志前几次结果
        if (searchCount <= 3) {
            console.log(`搜索 #${searchCount} 结果:`)
            console.log(`  Stage 1: ${result.s1m[0]}, ${result.s1e[0]}`)
            console.log(`  Stage 2: ${result.s2m[0]}, ${result.s2e[0]}, ${result.s2f[0]}`)
            console.log(`  Stage 3: ${result.s3m[0]} ${result.s3m[1]}, ${result.s3e[0]} ${result.s3e[1]}`)
            console.log(`  Stage 4: ${result.s4m[0]} ${result.s4m[1]} ${result.s4m[2]}, ${result.s4e[0]} ${result.s4e[1]}`)
            console.log(`  Stage 5: ${result.s5m[0]} ${result.s5m[1]} ${result.s5m[2]}, ${result.s5e[0]} ${result.s5e[1]}`)
        }

        // 检查是否匹配目标模式
        let isMatch = matchesPattern(result, targetPattern)

        // 记录匹配检查过程
        if (searchCount <= 3) {
            console.log(`搜索 #${searchCount} 匹配检查: ${isMatch}`)
            for (let key in targetPattern) {
                let target = targetPattern[key]
                let actual = result[key] || []
                let keyMatch = false

                // Stage 3、4、5 支持模糊匹配（不考虑顺序）
                if (key === 's3m' || key === 's3e' || key === 's4m' || key === 's4e' || key === 's5m' || key === 's5e') {
                    // 检查目标数组中的每个值是否都在实际结果中
                    keyMatch = true
                    for (let targetValue of target) {
                        if (!actual.includes(targetValue)) {
                            keyMatch = false
                            break
                        }
                    }
                } else {
                    // Stage 1、2 仍然要求精确匹配顺序
                    keyMatch = true
                    for (let i = 0; i < target.length; i++) {
                        if (target[i] !== actual[i]) {
                            keyMatch = false
                            break
                        }
                    }
                }

                console.log(`  ${key}: 目标=${target} 实际=${actual.slice(0, target.length)} 匹配=${keyMatch}`)
            }
        }

        if (isMatch) {
            console.log(`§a找到匹配种子！种子: ${testSeed}`)
            console.log(`搜索次数: ${searchCount}`)
            console.log(`完整结果: `, JSON.stringify(result))

            player.tell(`§a找到匹配种子！`)
            player.tell(`§6种子: ${testSeed}`)
            player.tell(`§b搜索次数: ${searchCount}`)
            player.tell(`§eStage 1: ${result.s1m[0]}, ${result.s1e[0]}`)
            player.tell(`§eStage 2: ${result.s2m[0]}, ${result.s2e[0]}, ${result.s2f[0]}`)
            player.tell(`§eStage 3: ${result.s3m[0]} ${result.s3m[1]}, ${result.s3e[0]} ${result.s3e[1]}`)
            player.tell(`§eStage 4: ${result.s4m[0]} ${result.s4m[1]} ${result.s4m[2]}, ${result.s4e[0]} ${result.s4e[1]}`)
            player.tell(`§eStage 5: ${result.s5m[0]} ${result.s5m[1]} ${result.s5m[2]}, ${result.s5e[0]} ${result.s5e[1]}`)

            found = true
            break
        }

        // 每1000次输出进度（减少频率避免日志过多）
        if (searchCount % 1000 === 0) {
            console.log(`已搜索 ${searchCount} 个种子，当前种子: ${testSeed}`)
            player.tell(`§7已搜索 ${searchCount} 个种子...`)
        }
    }

    if (!found) {
        console.log(`§c搜索完成，未找到匹配的种子。搜索了 ${searchCount} 个种子。`)
        console.log(`搜索范围: 3200000000000000000L 到 ${baseSeedStr}${(maxSearch - 1).toString().padStart(18, '0')}L`)
        player.tell(`§c搜索完成，未找到匹配的种子。`)
        player.tell(`§7搜索了 ${searchCount} 个种子。`)
        player.tell(`§7建议调整目标模式或增加搜索范围`)
    }
})

// 内部测试函数
function testSeed_Internal(testSeed) {
    // 基于测试种子生成随机数组
    const random = Utils.random
    const longSeed = $Long.parseLong(testSeed.replace('L', ''), 10) + 34
    random.setSeed(longSeed)

    let testLevelRandomMap = []
    for (let i = 0; i < 1280; i++) {
        testLevelRandomMap.push(random.nextDouble())
    }

    // 创建局部变量，初始索引需要匹配实际情况
    let localRandomIndex = 0

    // 跳过 EOT 使用的随机数（根据当前激活的buffs计算）
    let eotKjsCount = 0
    for (let id in global.all_buffs) {
        if (global.current_buffs.has(id)) {
            let buff = global.all_buffs[id]
            if (buff.kjsEffect && buff.kjsEffect.toString().includes('randomNext')) {
                eotKjsCount++
            }
        }
    }
    localRandomIndex += eotKjsCount

    // 第一次调用时记录初始状态
    if (testSeed.endsWith("0000000000000000000L")) {
        console.log(`初始随机索引: ${localRandomIndex}, EOT随机数使用: ${eotKjsCount}`)
        console.log(`激活的buffs数量: ${global.current_buffs.size}`)
    }

    // 局部函数
    function localRandomNext(range) {
        if (localRandomIndex >= testLevelRandomMap.length) {
            localRandomIndex = 0
        }
        let result = Math.floor(testLevelRandomMap[localRandomIndex++] * range)
        return result
    }

    function localGenerateUniqueIntegers(size, n) {
        if (n > size) throw new Error("n 不能大于 s");
        let result = []
        let map = new Map()

        for (let i = 0; i < n; i++) {
            let r = localRandomNext(size - i)
            let selected = map.has(r) ? map.get(r) : r;
            let last = size - i - 1;
            let mappedLast = map.has(last) ? map.get(last) : last;

            map.set(r, mappedLast)
            result.push(selected)
        }

        return result
    }

    // 生成所有 stage 的结果（按照 seed.js 的顺序）
    let s1m = localGenerateUniqueIntegers(3, 1)
    let s1e = localGenerateUniqueIntegers(4, 1)
    let s2m = localGenerateUniqueIntegers(3, 1)
    let s2e = localGenerateUniqueIntegers(4, 1)
    let s2f = localGenerateUniqueIntegers(2, 1)
    let s3m = localGenerateUniqueIntegers(6, 2)
    let s3e = localGenerateUniqueIntegers(5, 2)
    let s4m = localGenerateUniqueIntegers(6, 3)
    let s4e = localGenerateUniqueIntegers(5, 2)
    let s5m = localGenerateUniqueIntegers(5, 3)
    let s5e = localGenerateUniqueIntegers(3, 2)

    return {
        "s1m": s1m,
        "s1e": s1e,
        "s2m": s2m,
        "s2e": s2e,
        "s2f": s2f,
        "s3m": s3m,
        "s3e": s3e,
        "s4m": s4m,
        "s4e": s4e,
        "s5m": s5m,
        "s5e": s5e
    }
}

// 模式匹配函数
function matchesPattern(result, pattern) {
    // 检查每个定义的模式
    for (let key in pattern) {
        if (!result[key]) {
            console.log(`匹配失败: 缺少key ${key}`)
            continue
        }

        let target = pattern[key]
        let actual = result[key]

        // Stage 3、4、5 支持模糊匹配（不考虑顺序）
        if (key === 's3m' || key === 's3e' || key === 's4m' || key === 's4e' || key === 's5m' || key === 's5e') {
            // 检查目标数组中的每个值是否都在实际结果中
            let allFound = true
            for (let targetValue of target) {
                if (!actual.includes(targetValue)) {
                    allFound = false
                    break
                }
            }
            if (!allFound) {
                return false
            }
        } else {
            // Stage 1、2 仍然要求精确匹配顺序
            for (let i = 0; i < target.length; i++) {
                if (target[i] !== actual[i]) {
                    return false
                }
            }
        }
    }

    return true
}