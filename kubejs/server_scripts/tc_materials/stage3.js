// priority: 60

function stage3Materials(createMaterialBuilder, registerMaterialProcess) {
    let sortOrder = 300
    let temp = 1500
    let time = 100

    // l1
    // —— 戴斯* ——  
    let db = 700;
    let desh = createMaterialBuilder('desh')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 44.0, 11.0, 'minecraft:diamond')
        .addHandle(-0.1, 0.45, 0.1, 0.3)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(8.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(7.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();

    // —— 基础板 ——  
    db = 750;
    let plate_basic = createMaterialBuilder('plate_basic')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 38.0, 11.0, 'minecraft:diamond')
        .addHandle(0.0, 0.4, 0.15, 0.4)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(8.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(7.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:plate_basic',
        ingot: 'nuclearcraft:plate_basic',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // —— 硼铁 ——  
    db = 650;
    let ferroboron = createMaterialBuilder('ferroboron')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 42.0, 10.0, 'minecraft:diamond')
        .addHandle(-0.1, 0.4, 0.05, 0.2)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(8.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(7.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: 'nuclearcraft:ferroboron',
        material: 'tconstruct:ferroboron',
        ingot: '#forge:ingots/ferroboron',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // —— 魂染钢* ——  
    db = 800;
    let soul_stained_steel = createMaterialBuilder('soul_stained_steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 52.0, 12.0, 'minecraft:diamond')
        .addHandle(-0.2, 0.5, 0.1, 0.2)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(9.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(8.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .build();

    // —— 鳍 ——  
    db = 400;
    let fin = createMaterialBuilder('fin')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 32.0, 8.0, 'minecraft:diamond')
        .addHandle(-0.2, 0.35, 0.3, -0.3)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(8.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(7.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:fin',
        ingot: 'aquamirae:fin',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // —— 烬钢 ——  
    db = 750;
    let ash_steel = createMaterialBuilder('ash_steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 54.0, 12.0, 'minecraft:diamond')
        .addHandle(0.15, 0.5, 0.1, 0.2)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(9.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(8.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_ash_steel',
        material: 'tconstruct:ash_steel',
        ingot: 'dustandash:ash_steel_ingot',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // —— 地岩信素* ——  
    db = 700;
    let basalz_signalum = createMaterialBuilder('basalz_signalum')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2).setNamespace("tinkers_advanced")
        .addStats()
        .addHead(db, 57.0, 12.0, 'minecraft:diamond')
        .addHandle(0.0, 0.45, 0.3, 0.5)
        .addPlatingHelmet(6.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(10.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(5.0, db * 0.6, 0.05, 3.0)
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .build();

    // —— 震荡流明* ——  
    db = 700;
    let blitz_lumium = createMaterialBuilder('blitz_lumium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2).setNamespace("tinkers_advanced")
        .addStats()
        .addHead(db, 58.0, 12.0, 'minecraft:netherite')
        .addHandle(0.2, 0.55, 0.0, 0.1)
        .addPlatingHelmet(6.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(10.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(5.0, db * 0.6, 0.05, 3.0)
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .build();

    // —— 高强 ——  
    db = 900;
    let tough_alloy = createMaterialBuilder('tough_alloy')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 56.0, 12.0, 'minecraft:netherite')
        .addHandle(0.45, 0.45, 0.1, 0.3)
        .addPlatingHelmet(6.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(10.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(5.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: 'nuclearcraft:tough_alloy',
        material: 'tconstruct:tough_alloy',
        ingot: '#forge:ingots/tough_alloy',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // l2
    // —— 神圣金 ——  
    db = 650;
    let hallowed_gold = createMaterialBuilder('hallowed_gold')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 59.0, 14.0, 'minecraft:diamond')
        .addHandle(0.1, 0.4, 0.4, 0.5)
        .addPlatingHelmet(6.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(10.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(5.0, db * 0.6, 0.05, 3.0)
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_hallowed_gold',
        material: 'tconstruct:hallowed_gold',
        ingot: 'malum:hallowed_gold_ingot',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // —— 海王* ——  
    db = 800;
    let neptunium = createMaterialBuilder('neptunium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 61.0, 13.0, 'minecraft:netherite')
        .addHandle(0.2, 0.5, 0.1, 0.2)
        .addPlatingHelmet(6.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(10.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(5.0, db * 0.6, 0.05, 3.0)
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .build();

    // —— 钨* ——  
    db = 1100;
    let tungsten = createMaterialBuilder('tungsten')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 61.0, 11.0, 'minecraft:netherite')
        .addHandle(0.7, 0.5, 0.0, 0.1)
        .addPlatingHelmet(6.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(10.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(5.0, db * 0.6, 0.05, 3.0)
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .build();

    // —— 铂* ——  
    db = 1100;
    let platinum = createMaterialBuilder('platinum')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 62.0, 14.0, 'minecraft:netherite') 
        .addHandle(0.4, 0.5, 0.1, 0.4)
        .addPlatingHelmet(6.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(10.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(5.0, db * 0.6, 0.05, 3.0)
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .build();

    // —— 现世合金 ——  
    db = 950;
    let present_alloy = createMaterialBuilder('present_alloy')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 65.0, 13.0, 'minecraft:netherite') 
        .addHandle(0.3, 0.5, 0.1, 0.2)
        .addPlatingHelmet(7.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(11.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.05, 3.0) 
        .addPlatingBoots(6.0, db * 0.6, 0.05, 3.0)
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_present_alloy',
        material: 'tconstruct:present_alloy',
        ingot: 'kubejs:present_alloy',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // —— 极寒末影* ——  
    db = 750;
    let blizz_enderium = createMaterialBuilder('blizz_enderium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2).setNamespace("tinkers_advanced")
        .addStats()
        .addHead(db, 64.0, 12.0, 'minecraft:diamond')
        .addHandle(0.3, 0.5, 0.15, 0.2) 
        .addPlatingHelmet(7.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(11.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(10.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(6.0, db * 0.6, 0.05, 3.0) 
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .build();

    // —— 裂变反应堆外壳 ——  
    db = 850;
    let fission_reactor_casing = createMaterialBuilder('fission_reactor_casing')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 62.0, 12.0, 'minecraft:diamond')
        .addHandle(0.0, 0.55, 0.15, 0.0)
        .addPlatingHelmet(7.0, db * 0.7, 0.05, 3.0) 
        .addPlatingChestplate(11.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(10.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(6.0, db * 0.6, 0.05, 3.0) 
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:fission_reactor_casing',
        ingot: '#nuclearcraft:fission_reactor_casing',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // —— 铱* ——  
    db = 1050;
    let iridium = createMaterialBuilder('iridium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2).setNamespace("tinkers_advanced")
        .addStats()
        .addHead(db, 68.0, 15.0, 'minecraft:netherite') 
        .addHandle(0.2, 0.6, 0.15, 0.2)
        .addPlatingHelmet(7.0, db * 0.7, 0.1, 3.0) 
        .addPlatingChestplate(11.0, db * 1.0, 0.1, 3.0) 
        .addPlatingLeggings(10.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(6.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0) 
        .addBinding()
        .addMaille() 
        .build();
    // registerMaterialProcess({
    //     fluid: null,
    //     material: 'tinkers_advanced:iridium',
    //     ingot: '#forge:ingots/iridium',
    //     units: 90,
    //     temperature: temp,
    //     time: time,
    //     meltIngot: false
    // });

    // —— 稳态戴斯 ——  
    db = 1050;
    let stable_desh = createMaterialBuilder('stable_desh')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 70.0, 12.0, 'minecraft:netherite') 
        .addHandle(0.3, 0.5, 0.2, 0.0)
        .addPlatingHelmet(8.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(12.0, db * 1.0, 0.1, 3.0) 
        .addPlatingLeggings(11.0, db * 0.9, 0.1, 3.0) 
        .addPlatingBoots(6.0, db * 0.6, 0.1, 3.0) 
        .addPlatingShield(db * 0.9, 0.1, 3.0) 
        .addBinding()
        .addMaille() 
        .addTraits()
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_stable_desh',
        material: 'tconstruct:stable_desh',
        ingot: 'kubejs:stable_desh_ingot',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });


}