// priority: 60

function stage5Materials(createMaterialBuilder, registerMaterialProcess) {
    let sortOrder = 500
    let temp = 2500
    let time = 100

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
        ingot: 'nuclearcraft:fusion_reactor_casing',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 钛
    db = 1500;
    let titanium = createMaterialBuilder('titanium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(4)
        .addStats()
        .addHead(db, 250.0, 14.0, 'minecraft:netherite')
        .addHandle(0.35, 0.8, 0.00, 0.00)
        .addPlatingHelmet(13.0, db * 0.7, 0.15, 6.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 6.0)
        .addPlatingLeggings(19.0, db * 0.9, 0.15, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 6.0)
        .addPlatingShield(db * 0.9, 0.15, 6.0)
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

}