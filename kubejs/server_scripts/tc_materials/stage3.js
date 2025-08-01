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
        .addLimb(-0.1, -0.2, db, 9.1)
        .addGrip(0.1, -0.1, 22)
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
        .addLimb(0.1, -0.1, db, 8.3)
        .addGrip(0.1, 0.1, 19)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_things:fortified')
        .addDefaultTrait(1, 'tconstruct:trueshot')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:radiation_shielding')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:tanned')
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
        .addLimb(-0.2, -0.35, db, 10)
        .addGrip(-0.1, -0.1, 21)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:heavy')
        .addDefaultTrait(1, 'etstlib:critical')
        .addPerStatTrait('tconstruct:head', 2, 'tinkers_advanced:tetanus')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:recurrent_protection')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:ductile')
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
        .addLimb(0.1, -0.2, db, 9.5)
        .addGrip(0.2, -0.2, 26)
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
        .addLimb(-0.05, 0, db, 7.7)
        .addGrip(0, -0.2, 16)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:hydraulic')
        .addDefaultTrait(1, 'tinkers_advanced:blizz_inflict')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:water_powered')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:blizz_defense')
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
        .addLimb(-0.15, -0.4, db, 12)
        .addGrip(0.1, 0.15, 26)
        .addTraits()
        .addDefaultTrait(1, 'etstlib:extra_dense')
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:extra_dense')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:blast_protection')
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
        .addLimb(-0.2, -0.2, db, 10.5)
        .addGrip(-0.3, 0, 28)
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
        .addLimb(0.2, -0.1, db, 10)
        .addGrip(0.25, 0.2, 29)
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
        .addLimb(0.1, -0.3, db, 11.9)
        .addGrip(0, 0.45, 28)
        .addDefaultTrait(1, 'etstlib:extra_dense')
        .addDefaultTrait(1, 'tconstruct:kinetic')
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
        .addLimb(0.1, 0.2, db, 8.5)
        .addGrip(0.1, 0.1, 30)
        .addDefaultTrait(1, 'tconstruct:worldbound')
        .addDefaultTrait(1, 'tconstruct:enhanced')
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
        .addLimb(0, -0.2, db, 11.2)
        .addGrip(0, 0.2, 31)
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
        .addLimb(-0.25, -0.5, db, 15.5)
        .addGrip(0.25, 0.7, 30)
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
        .addLimb(0.15, -0.25, db, 11.2)
        .addGrip(-0.15, 0.4, 31)
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
        .addLimb(0, -0.2, db, 11.5)
        .addGrip(0.05, 0.3, 33)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:invariant')
        .addDefaultTrait(1, 'tinkers_advanced:blitz_inflict')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_things:venom')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:solar_powered')
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
        .addLimb(0.4, -0.2, db, 12)
        .addGrip(-0.35, 0.3, 32)
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
        .addLimb(-0.1, -0.35, db, 13.5)
        .addGrip(0, 0, 31)
        .addTraits()
        .addDefaultTrait(1, 'etstlib:anisotropy')
        .addDefaultTrait(1, 'tinkers_things:fortified')
        .addPerStatTrait('tconstruct:armor', 2, 'etstlib:radiation_shielding')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:secondary_armor')
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
        .addLimb(-0.2, -0.35, db, 15.5)
        .addGrip(0, 0.2, 34)
        .build();

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
        .addLimb(0.1, -0.2, db, 12.5)
        .addGrip(0.1, 0.3, 35)
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:oxygenated')
        .addDefaultTrait(1, 'tconstruct:invariant')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:oxygenated')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:melee_protection')
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

    // l3
    // —— 圣魂金 ——  
    db = 800;
    let hallowed_soul_steel = createMaterialBuilder('hallowed_soul_steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 70.0, 16.0, 'minecraft:diamond')
        .addHandle(0.1, 0.4, 0.5, 0.5)
        .addPlatingHelmet(8.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(12.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(11.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(6.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addLimb(0, 0.3, db, 10)
        .addGrip(-0.1, 0.1, 35)
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:soul_stained')
        .addDefaultTrait(1, 'tconstruct:enhanced')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:soul_stained')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:golden')
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_hallowed_soul_steel',
        material: 'tconstruct:hallowed_soul_steel',
        ingot: 'kubejs:hallowed_soul_steel_ingot',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // —— 海船墓地之回响 ——  
    db = 900;
    let ship_graveyard_echo = createMaterialBuilder('ship_graveyard_echo')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 72.0, 12.0, 'minecraft:diamond')
        .addHandle(0.3, 0.6, 0.15, 0.3)
        .addPlatingHelmet(8.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(12.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(11.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(6.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addBowstring()
        .addLimb(0, 0, db, 11.2)
        .addGrip(0, 0.3, 36)
        .addTraits()
        .addDefaultTrait(1, 'etstlib:energetic_attack')
        .addDefaultTrait(1, 'tconstruct:stringy')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:revenge')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:stringy')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:ship_graveyard_echo',
        ingot: 'aquamirae:ship_graveyard_echo',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // —— Gamma框架 ——  
    db = 1100;
    let gamma_framework = createMaterialBuilder('gamma_framework')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 125.0, 14.0, 'minecraft:netherite')
        .addHandle(0.3, 0.7, 0.15, 0.3)
        .addPlatingHelmet(11.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(18.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(16.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(9.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addLimb(0.15, -0.2, db, 15)
        .addGrip(0.15, 0.3, 73)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:heavy')
        .addDefaultTrait(1, 'tconstruct:ductile')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:revenge')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:ductile')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:gamma_framework',
        ingot: 'kubejs:gamma_framework',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // —— 导热合金 ——  
    db = 1100;
    let thermoconducting = createMaterialBuilder('thermoconducting')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 74.0, 13.0, 'minecraft:netherite')
        .addHandle(0.2, 0.6, 0.15, 0.0)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:conducting')
        .addDefaultTrait(1, 'tconstruct:temperate')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:blaze_disguise')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:scorch_protection')
        .build();
    registerMaterialProcess({
        fluid: 'nuclearcraft:thermoconducting',
        material: 'tconstruct:thermoconducting',
        ingot: '#forge:ingots/thermoconducting',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // —— 虚空石符 ——  
    db = 650;
    let void_tablet = createMaterialBuilder('void_tablet')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 76.0, 9.0, 'minecraft:diamond')
        .addHandle(0.0, 0.7, 0.0, 0.0)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:soul_stained')
        .addDefaultTrait(1, 'tconstruct:stoneshield')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:void_tablet',
        ingot: 'malum:void_tablet',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // l4
    // 深海紫水晶 
    db = 1150;
    let abyssal_amethyst = createMaterialBuilder('abyssal_amethyst')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 76.0, 14.0, 'minecraft:diamond')
        .addHandle(0.5, 0.6, 0.0, 0.2)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(-0.1, -0.25, db, 15.5)
        .addGrip(-0.1, 0.5, 38)
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:siren')
        .addDefaultTrait(1, 'tconstruct:hydraulic')
        .addDefaultTrait(1, 'tinkers_things:hemodynamic')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:poseidon')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:turtle_shell')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:water_powered')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:abyssal_amethyst',
        ingot: 'aquamirae:abyssal_amethyst',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 活化彩钢*  
    db = 1150;
    let activated_chromatic_steel = createMaterialBuilder('activated_chromatic_steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(2).setNamespace("tinkers_advanced")
        .addStats()
        .addHead(db, 72.0, 11.0, 'minecraft:netherite')
        .addHandle(0.25, 0.6, 0, 0.25)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addLimb(0.1, -0.25, db, 14.5)
        .addGrip(-0.15, 0.25, 38)
        .build();

    // 六方氮化硼 
    db = 1200;
    let boron_nitride = createMaterialBuilder('boron_nitride')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 76.0, 11.0, 'minecraft:diamond')
        .addHandle(0.4, 0.7, 0.1, 0.4)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 4.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 4.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 4.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 4.0)
        .addPlatingShield(db * 0.9, 0.1, 4.0)
        .addBinding()
        .addMaille()
        .addLimb(0.4, -0.2, db, 15.5)
        .addGrip(0.4, 0.4, 38)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:lacerating')
        .addDefaultTrait(1, 'tconstruct:sharpness')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:extra_dense')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:livingwood')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:boron_nitride',
        ingot: '#forge:gems/boron_nitride',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 恶念白镴
    db = 1200;
    let malignant_pewter = createMaterialBuilder('malignant_pewter')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 76.0, 11.0, 'minecraft:diamond')
        .addHandle(0.4, 0.65, 0.1, 0.2)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 4.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 4.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 4.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 4.0)
        .addPlatingShield(db * 0.9, 0.1, 4.0)
        .addBinding()
        .addMaille()
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:soul_stained')
        .addDefaultTrait(1, 'tconstruct:enderference')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:soul_stained')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:ars_nouveau')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:malignant_pewter',
        ingot: 'malum:malignant_pewter_ingot',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 余烬异构
    db = 1400;
    let ember_profile = createMaterialBuilder('ember_profile')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(2)
        .addStats()
        .addHead(db, 88.0, 13.0, 'minecraft:netherite')
        .addHandle(0.5, 0.7, 0.15, 0.3)
        .addPlatingHelmet(10.0, db * 0.7, 0.1, 5.0)
        .addPlatingChestplate(15.0, db * 1.0, 0.1, 5.0)
        .addPlatingLeggings(13.0, db * 0.9, 0.1, 5.0)
        .addPlatingBoots(8.0, db * 0.6, 0.1, 5.0)
        .addPlatingShield(db * 0.9, 0.1, 5.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(0, -0.5, db, 24)
        .addGrip(-0.15, 0.5, 44)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:dense')
        .addDefaultTrait(1, 'tconstruct:lustrous')
        .addPerStatTrait('tconstruct:head', 1, 'tinkers_advanced:basalz_inflict')
        .addPerStatTrait('tconstruct:head', 1, 'tconstruct:lustrous')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:ember_profile',
        ingot: 'kubejs:ember_profile',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

}