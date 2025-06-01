// priority: 60

function stage5Materials(createMaterialBuilder, registerMaterialProcess) {
    let sortOrder = 500
    let temp = 2500
    let time = 200

    // 终末钢
    let db = 1300;
    let end_steel = createMaterialBuilder('end_steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 155.0, 14.0, 'minecraft:netherite')
        .addHandle(0.3, 0.75, 0.15, 0.3)
        .addPlatingHelmet(12.0, db * 0.7, 0.15, 6.0)
        .addPlatingChestplate(19.0, db * 1.0, 0.15, 6.0)
        .addPlatingLeggings(17.0, db * 0.9, 0.15, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 6.0)
        .addPlatingShield(db * 0.9, 0.15, 6.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_end_steel',
        material: 'tconstruct:end_steel',
        ingot: 'kubejs:end_steel',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // 坍缩产物
    db = 800;
    let collapse_prediction = createMaterialBuilder('collapse_prediction')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 130.0, 15.0, 'minecraft:netherite')
        .addHandle(0.2, 0.90, 0.10, 0.40)
        .addPlatingHelmet(12.0, db * 0.7, 0.15, 6.0)
        .addPlatingChestplate(19.0, db * 1.0, 0.15, 6.0)
        .addPlatingLeggings(17.0, db * 0.9, 0.15, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 6.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:collapse_prediction',
        ingot: 'kubejs:collapse_prediction',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 幽匿卷须
    let sculk_tendrils = createMaterialBuilder('sculk_tendrils')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addBowstring()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:sculk_tendrils',
        ingot: 'deeperdarker:sculk_tendrils',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 幽匿微光体
    db = 500;
    let sculk_gleam = createMaterialBuilder('sculk_gleam')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 72.0, 14.0, 'minecraft:netherite')
        .addHandle(0.50, 0.65, 0.00, 0.50)
        .addPlatingHelmet(6.0, db * 0.7, 0.15, 5.0)
        .addPlatingChestplate(8.0, db * 1.0, 0.15, 5.0)
        .addPlatingLeggings(7.0, db * 0.9, 0.15, 5.0)
        .addPlatingBoots(6.0, db * 0.6, 0.15, 5.0)
        .addBinding()
        .addMaille()
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:sculk_gleam',
        ingot: 'deeperdarker:sculk_gleam',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 虹光
    db = 900;
    let iridescent = createMaterialBuilder('iridescent')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 175.0, 14.0, 'minecraft:netherite')
        .addHandle(0.10, 0.80, 0.0, 0.10)
        .addPlatingHelmet(12.0, db * 0.7, 0.15, 7.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 6.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 7.0)
        .addBinding()
        .addMaille()
        .addBowstring()
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:iridescent',
        ingot: 'kubejs:iridescent',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 白石
    db = 500;
    let whitestone = createMaterialBuilder('whitestone')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 64, 10, 'minecraft:netherite')
        .addHandle(0, 0.7, 0, -0.2)
        .addPlatingHelmet(6, db * 0.7, 0.15, 5)
        .addPlatingChestplate(8, db * 1.0, 0.15, 5)
        .addPlatingLeggings(7, db * 0.9, 0.15, 5)
        .addPlatingBoots(5, db * 0.6, 0.15, 5)
        .addBinding()
        .addMaille()
        .build();

    // 聚变反应堆外壳
    db = 1200;
    let fusion_reactor_casing = createMaterialBuilder('fusion_reactor_casing')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 200.0, 13.0, 'minecraft:netherite')
        .addHandle(0.70, 0.70, 0.20, 0.00)
        .addPlatingHelmet(13.0, db * 0.7, 0.15, 6.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 6.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 6.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:fusion_reactor_casing',
        ingot: '#nuclearcraft:fusion_reactor_casing',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 钛
    db = 1100;
    let titanium = createMaterialBuilder('titanium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 88.0, 14.0, 'minecraft:netherite')
        .addHandle(0.2, 0.6, 0.00, 0.00)
        .addPlatingHelmet(9.0, db * 0.7, 0.15, 4.0)
        .addPlatingChestplate(15.0, db * 1.0, 0.15, 4.0)
        .addPlatingLeggings(13.0, db * 0.9, 0.15, 4.0)
        .addPlatingBoots(8.0, db * 0.6, 0.15, 4.0)
        .addPlatingShield(db * 0.9, 0.15, 4.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_titanium',
        material: 'tconstruct:titanium',
        ingot: '#forge:ingots/titanium',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // 幽冥混合物
    db = 900;
    let otherside_mixture = createMaterialBuilder('otherside_mixture')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 270.0, 12.0, 'minecraft:netherite')
        .addHandle(0.0, 0.9, 0.2, 0.1)
        .addPlatingHelmet(13.0, db * 0.7, 0.15, 7.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 7.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 7.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 7.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:otherside_mixture',
        ingot: 'kubejs:otherside_mixture',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });


    // 共振板
    db = 1200;
    let resonarium_plate = createMaterialBuilder('resonarium_plate')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 290.0, 14.0, 'minecraft:netherite')
        .addHandle(0.7, 0.8, 0.1, 0.25)
        .addPlatingHelmet(13.0, db * 0.7, 0.15, 7.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 7.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 7.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 7.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:resonarium_plate',
        ingot: 'deeperdarker:resonarium_plate',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });


    // 天华锭
    db = 1000;
    let aether_ingot = createMaterialBuilder('aether_ingot')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 275.0, 14.0, 'minecraft:netherite')
        .addHandle(-0.1, 0.85, 0.2, 0.3)
        .addPlatingHelmet(13.0, db * 0.7, 0.15, 7.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 7.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 7.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 7.0)
        .addPlatingShield(db * 0.9, 0.15, 7.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: 'kubejs:melted_aether_ingot',
        material: 'tconstruct:aether_ingot',
        ingot: 'aetherworks:ingot_aether',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });


    // 天华宝石
    db = 900;
    let aether_gem = createMaterialBuilder('aether_gem')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 280.0, 14.0, 'minecraft:netherite')
        .addHandle(0.9, 0.9, 0.25, 0.6)
        .addPlatingHelmet(13.0, db * 0.7, 0.15, 7.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 7.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 7.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 7.0)
        .addBinding()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:aether_gem',
        ingot: 'aetherworks:gem_aether',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });


    // 铌钛合金
    db = 1200;
    let niobium_titanium = createMaterialBuilder('niobium_titanium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 98.0, 15.0, 'minecraft:netherite')
        .addHandle(0.0, 0.65, -0.2, 0.75)
        .addPlatingHelmet(10.0, db * 0.7, 0.15, 4.0)
        .addPlatingChestplate(15.0, db * 1.0, 0.15, 4.0)
        .addPlatingLeggings(13.0, db * 0.9, 0.15, 4.0)
        .addPlatingBoots(8.0, db * 0.6, 0.15, 4.0)
        .addPlatingShield(db * 0.9, 0.15, 4.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: 'kubejs:niobium_titanium',
        material: 'tconstruct:niobium_titanium',
        ingot: '#forge:ingots/niobium_titanium',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });


    // 氦3晶体
    db = 800;
    let helium_3_crystal = createMaterialBuilder('helium_3_crystal')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 295.0, 15.0, 'minecraft:netherite')
        .addHandle(-0.1, 0.9, 0.2, -0.2)
        .addPlatingHelmet(14.0, db * 0.7, 0.15, 8.0)
        .addPlatingChestplate(22.0, db * 1.0, 0.15, 8.0)
        .addPlatingLeggings(19.0, db * 0.9, 0.15, 8.0)
        .addPlatingBoots(11.0, db * 0.6, 0.15, 8.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:helium_3_crystal',
        ingot: 'kubejs:helium_3_crystal',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });


    // 无夜之光
    db = 950;
    let light_of_inlixaland = createMaterialBuilder('light_of_inlixaland')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 350.0, 17.0, 'minecraft:netherite')
        .addHandle(0.2, 0.9, 0.2, 0.2)
        .addPlatingHelmet(15.0, db * 0.7, 0.2, 9.0)
        .addPlatingChestplate(23.0, db * 1.0, 0.2, 9.0)
        .addPlatingLeggings(20.0, db * 0.9, 0.2, 9.0)
        .addPlatingBoots(12.0, db * 0.6, 0.2, 9.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:light_of_inlixaland',
        ingot: 'kubejs:light_of_inlixaland',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });


    // 亚尔夫海姆之虹光
    db = 1050;
    let alfheim_iridescent = createMaterialBuilder('alfheim_iridescent')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 325.0, 16.0, 'minecraft:netherite')
        .addHandle(0.2, 0.9, 0.5, 0.8)
        .addPlatingHelmet(15.0, db * 0.7, 0.2, 9.0)
        .addPlatingChestplate(23.0, db * 1.0, 0.2, 9.0)
        .addPlatingLeggings(20.0, db * 0.9, 0.2, 9.0)
        .addPlatingBoots(12.0, db * 0.6, 0.2, 9.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addBowstring()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:alfheim_iridescent',
        ingot: 'kubejs:alfheim_iridescent',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 钛钨
    db = 2000;
    let titanium_tungsten = createMaterialBuilder('titanium_tungsten')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 345.0, 14.0, 'minecraft:netherite')
        .addHandle(0.75, 1.0, 0.0, 0.2)
        .addPlatingHelmet(16.0, db * 0.7, 0.2, 9.0)
        .addPlatingChestplate(24.0, db * 1.0, 0.2, 9.0)
        .addPlatingLeggings(21.0, db * 0.9, 0.2, 9.0)
        .addPlatingBoots(13.0, db * 0.6, 0.2, 9.0)
        .addPlatingShield(db * 0.9, 0.2, 9.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: 'kubejs:melted_titanium_tungsten',
        material: 'tconstruct:titanium_tungsten',
        ingot: 'dustandash:titanium_tungsten_alloy',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });


    // 钛铝
    db = 1550;
    let titanium_aluminum = createMaterialBuilder('titanium_aluminum')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 340.0, 21.0, 'minecraft:netherite')
        .addHandle(0.5, 0.8, 0.5, 0.8)
        .addPlatingHelmet(15.0, db * 0.7, 0.2, 10.0)
        .addPlatingChestplate(23.0, db * 1.0, 0.2, 10.0)
        .addPlatingLeggings(20.0, db * 0.9, 0.2, 10.0)
        .addPlatingBoots(12.0, db * 0.6, 0.2, 10.0)
        .addPlatingShield(db * 0.9, 0.2, 10.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: 'kubejs:melted_titanium_aluminum',
        material: 'tconstruct:titanium_aluminum',
        ingot: 'dustandash:titanium_aluminum_alloy',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });


    // Epsilon框架
    db = 1400;
    let epsilon_framework = createMaterialBuilder('epsilon_framework')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 350.0, 19.0, 'minecraft:netherite')
        .addHandle(0.2, 1.0, 0.2, 0.3)
        .addPlatingHelmet(15.0, db * 0.7, 0.2, 10.0)
        .addPlatingChestplate(24.0, db * 1.0, 0.2, 10.0)
        .addPlatingLeggings(21.0, db * 0.9, 0.2, 10.0)
        .addPlatingBoots(12.0, db * 0.6, 0.2, 10.0)
        .addPlatingShield(db * 0.9, 0.2, 10.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:epsilon_framework',
        ingot: 'kubejs:epsilon_framework',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });


    // 氦3晶体∞
    db = 1000;
    let helium_3_crystal_infinity = createMaterialBuilder('helium_3_crystal_infinity')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 365.0, 18.0, 'minecraft:netherite')
        .addHandle(0.4, 1.1, 0.35, 0.4)
        .addPlatingHelmet(15.0, db * 0.7, 0.2, 11.0)
        .addPlatingChestplate(24.0, db * 1.0, 0.2, 11.0)
        .addPlatingLeggings(21.0, db * 0.9, 0.2, 11.0)
        .addPlatingBoots(12.0, db * 0.6, 0.2, 11.0)
        .addPlatingShield(db * 0.9, 0.2, 11.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:helium_3_crystal_infinity',
        ingot: 'kubejs:helium_3_crystal_infinity',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });


    // 仪召珍珠
    db = 1100;
    let aether_pearl = createMaterialBuilder('aether_pearl')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 370.0, 18.0, 'minecraft:netherite')
        .addHandle(0.4, 1.2, 0.2, 0.4)
        .addPlatingHelmet(15.0, db * 0.7, 0.2, 10.0)
        .addPlatingChestplate(24.0, db * 1.0, 0.2, 10.0)
        .addPlatingLeggings(21.0, db * 0.9, 0.2, 10.0)
        .addPlatingBoots(12.0, db * 0.6, 0.2, 10.0)
        .addPlatingShield(db * 0.9, 0.2, 10.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:aether_pearl',
        ingot: 'aetherworks:aether_pearl',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });


    // 奇点合金
    db = 2100;
    let basepoint_alloy = createMaterialBuilder('basepoint_alloy')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 385.0, 18.0, 'minecraft:netherite')
        .addHandle(0.6, 1.1, 0.25, 0.5)
        .addPlatingHelmet(16.0, db * 0.7, 0.25, 10.0)
        .addPlatingChestplate(25.0, db * 1.0, 0.25, 10.0)
        .addPlatingLeggings(22.0, db * 0.9, 0.25, 10.0)
        .addPlatingBoots(13.0, db * 0.6, 0.25, 10.0)
        .addPlatingShield(db * 0.9, 0.25, 10.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();

    registerMaterialProcess({
        fluid: 'kubejs:melted_basepoint_alloy',
        material: 'tconstruct:basepoint_alloy',
        ingot: 'kubejs:basepoint_alloy',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });


}