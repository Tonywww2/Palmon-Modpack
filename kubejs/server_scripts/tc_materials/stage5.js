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
        .addLimb(0, -0.2, db, 35)
        .addGrip(-0.15, 0.3, 77)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:enderference')
        .addDefaultTrait(1, 'tconstruct:ductile')
        .addDefaultTrait(1, 'etstlib:glowing')
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
        .addLimb(-0.3, -0.45, db, 41)
        .addGrip(0.2, 0.2, 65)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:unstable')
        .addDefaultTrait(1, 'etstlib:global_traveler')
        .addDefaultTrait(1, 'tcintegrations:livingwood')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:unstable')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:livingwood')
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
        .addDefaultTrait(1, 'tconstruct:crystalbound')
        .addDefaultTrait(1, 'tconstruct:stringy')
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
        .addTraits()
        .addDefaultTrait(2, 'tinkers_advanced:metamorphium')
        .addDefaultTrait(1, 'tconstruct:diamond')
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
        .addHandle(0.1, 0.8, 0, 0.1)
        .addPlatingHelmet(12.0, db * 0.7, 0.15, 7.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 6.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 7.0)
        .addBinding()
        .addMaille()
        .addBowstring()
        .addLimb(0.2, 0.15, db, 33.5)
        .addGrip(0, 0.1, 87)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:thermal_enhance')
        .addDefaultTrait(1, 'tinkers_advanced:edging_technology')
        .addDefaultTrait(1, 'tconstruct:shiny')
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
        .addHandle(0.7, 0.7, 0.2, 0)
        .addPlatingHelmet(13.0, db * 0.7, 0.15, 6.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 6.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 6.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(-0.2, -0.2, db, 38.5)
        .addGrip(-0.15, 0.7, 100)
        .addTraits()
        .addDefaultTrait(3, 'tconstruct:invariant')
        .addDefaultTrait(1, 'tconstruct:crumbling')
        .addDefaultTrait(1, 'tinkers_things:fortified')
        .addPerStatTrait('tconstruct:armor', 2, 'etstlib:radiation_shielding')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:shulking')
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
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:platinoid_catalyst')
        .addDefaultTrait(1, 'tinkers_advanced:transition_catalyst')
        .addDefaultTrait(1, 'tinkers_advanced:flux_infused')
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
        .addHandle(0, 0.9, 0.2, 0.1)
        .addPlatingHelmet(13.0, db * 0.7, 0.15, 7.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.15, 7.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.15, 7.0)
        .addPlatingBoots(10.0, db * 0.6, 0.15, 7.0)
        .addBinding()
        .addMaille()
        .addLimb(0, -0.2, db, 44)
        .addGrip(-0.3, 0, 135)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:focusing_array')
        .addDefaultTrait(1, 'tinkers_advanced:over_hold')
        .addDefaultTrait(1, 'tconstruct:lustrous')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:focusing_array')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:over_hold')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:sensor_interrupt')
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
        .addLimb(-0.15, -0.55, db, 52)
        .addGrip(0, 0.7, 145)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:sculk_resonance')
        .addDefaultTrait(1, 'tconstruct:lightweight')
        .addDefaultTrait(1, 'tconstruct:expanded')
        .addPerStatTrait('tconstruct:armor', 2, 'tinkers_advanced:basalz_defense')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:mithridatism')
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
        .addLimb(0, -0.25, db, 45)
        .addGrip(0.2, -0.1, 137)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:swiftstrike')
        .addDefaultTrait(1, 'tinkers_advanced:proto_refining')
        .addDefaultTrait(1, 'tinkers_things:fortified')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:boundless')
        .addPerStatTrait('tconstruct:armor', 2, 'tcintegrations:ars_nouveau')
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
        .addLimb(0.2, -0.35, db, 46.2)
        .addGrip(0, 0.9, 140)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:proto_refining')
        .addDefaultTrait(1, 'tcintegrations:siren')
        .addDefaultTrait(1, 'tcintegrations:elemental')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:extra_dense')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:scorch_protection')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:blast_protection')
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
        .addDefaultTrait(1, 'etstlib:energetic_attack')
        .addDefaultTrait(1, 'tconstruct:magnetic')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:depth_protection')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:boon_of_sssss')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:magnetic')
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
        .addLimb(0, -0.2, db, 47)
        .addGrip(-0.3, -0.1, 135)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:diamond')
        .addDefaultTrait(1, 'tconstruct:lacerating')
        .addDefaultTrait(1, 'tconstruct:crumbling')
        .addPerStatTrait('tconstruct:head', 1, 'tinkers_advanced:basalz_inflict')
        .addPerStatTrait('tconstruct:head', 1, 'etstlib:critical')
        .addPerStatTrait('tconstruct:head', 1, 'tconstruct:lacerating')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:overgrowth')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:overcast')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:recurrent_protection')
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
        .addLimb(0.1, -0.2, db, 50)
        .addGrip(0.1, 0.2, 175)
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:soul_stained')
        .addDefaultTrait(1, 'etstlib:magic_strike')
        .addDefaultTrait(1, 'tinkers_advanced:echo_locating')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:soul_stained')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:gold_guard')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:terrafirma')
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
        .addBowstring()
        .addLimb(0.15, 0.2, db, 45)
        .addGrip(0.15, 0.2, 163)
        .addTraits()
        .addDefaultTrait(1, 'etstlib:terra_beam')
        .addDefaultTrait(1, 'tcintegrations:elemental')
        .addDefaultTrait(1, 'etstlib:anisotropy')
        .addDefaultTrait(1, 'tconstruct:shiny')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:mana')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:terrestrial')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:great_fairy')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:thermal_enhance')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:shiny')
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
        .addLimb(-0.2, -0.65, db, 56)
        .addGrip(0, 0.75, 173)
        .addTraits()
        .addDefaultTrait(2, 'tconstruct:sharpweight')
        .addDefaultTrait(1, 'etstlib:extra_dense')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:sharpweight')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:shulking')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:kinetic')
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
        .addLimb(-0.1, -0.2, db, 52)
        .addGrip(0.2, 0.5, 170)
        .addTraits()
        .addDefaultTrait(2, 'tinkers_advanced:electric')
        .addDefaultTrait(2, 'tconstruct:sharpness')
        .addDefaultTrait(1, 'etstlib:atomic_decompose')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:lightspeed_armor')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:ductile')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:melee_protection')
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
        .addHead(db, 485.0, 19.0, 'minecraft:netherite')
        .addHandle(0.2, 1.0, 0.2, 0.3)
        .addPlatingHelmet(17.0, db * 0.7, 0.2, 12.0)
        .addPlatingChestplate(28.0, db * 1.0, 0.2, 12.0)
        .addPlatingLeggings(25.0, db * 0.9, 0.2, 12.0)
        .addPlatingBoots(14.0, db * 0.6, 0.2, 12.0)
        .addPlatingShield(db * 0.9, 0.2, 12.0)
        .addBinding()
        .addMaille()
        .addLimb(-0.1, -0.15, db, 70)
        .addGrip(0.5, 0.2, 243)
        .addTraits()
        .addDefaultTrait(2, 'tinkers_advanced:metamorphium')
        .addDefaultTrait(1, 'etstlib:executioner')
        .addPerStatTrait('tconstruct:armor', 2, 'tconstruct:revitalizing')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:metamorphium')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:enhanced')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:epsilon_framework',
        ingot: 'kubejs:epsilon_framework',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    })

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
        .addLimb(-0.1, -0.15, db, 48.5)
        .addGrip(0, 0.4, 182)
        .addTraits()
        .addDefaultTrait(1, 'etstlib:armor_piercing')
        .addDefaultTrait(1, 'tconstruct:piercing')
        .addDefaultTrait(1, 'tconstruct:netherite')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:revenge')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:enderman_disguise')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:poseidon')
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
        .addLimb(-0.1, -0.25, db, 56)
        .addGrip(0, 0.4, 185)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:sweeping_edge')
        .addDefaultTrait(1, 'etstlib:rude')
        .addDefaultTrait(1, 'tconstruct:insatiable')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:magic_protection')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:sticky')
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
        .addLimb(0, -0.3, db, 55.5)
        .addGrip(0, 0.6, 197)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:flux_infused')
        .addDefaultTrait(1, 'tinkers_advanced:thermal_slash')
        .addDefaultTrait(1, 'etstlib:short_circuit')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:flux_infused')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:flux_defense')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:boundless')
        .addPerStatTrait('tconstruct:maille', 1, 'etstlib:hardened')
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