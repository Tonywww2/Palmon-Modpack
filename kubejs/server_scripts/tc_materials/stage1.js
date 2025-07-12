// priority: 60

function stage1Materials(createMaterialBuilder, registerMaterialProcess) {
    let sortOrder = 100
    let temp = 900
    let time = 100

    // 黑钢
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
        .addDefaultTrait(1, 'tconstruct:raging')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:terrafirma')
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

    // 魔灵同调宝石
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
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:pierce')
        .addDefaultTrait(1, 'etstlib:energetic_attack')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:recurrent_protection')
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

    // 安山合金
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
        .addDefaultTrait(1, 'tconstruct:momentum')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:blast_protection')
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

    // 铋*
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

    // 红钢
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
        .addDefaultTrait(1, 'tconstruct:insatiable')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:fortified')
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

    // 蓝钢
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
        .addDefaultTrait(1, 'tinkers_things:fortified')
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

    // 虚金
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
        .addDefaultTrait(1, 'tconstruct:enderference')
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

    // 艾瑟金属
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
        .addDefaultTrait(1, 'tconstruct:experienced')
        .addDefaultTrait(1, 'tconstruct:lustrous')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:elastic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:depth_protection')
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

    // 高定向热解石墨
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
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:ductile')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:flame_adaptive')
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

    // Alpha
    db = 800
    let alpha_framework = createMaterialBuilder('alpha_framework')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 28.0, 10.0, 'minecraft:netherite')
        .addHandle(0.1, 0.35, 0.05, 0.15)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(7.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(6.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:ductile')
        .addDefaultTrait(1, 'tconstruct:enhanced')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:melee_protection')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:enhanced')
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

}