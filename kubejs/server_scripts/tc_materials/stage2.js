// priority: 60

function stage2Materials(createMaterialBuilder, registerMaterialProcess) {
    let sortOrder = 200
    let temp = 900
    let time = 100

    // 烈焰石英
    let db = 200;
    let blazing_quartz = createMaterialBuilder('blazing_quartz')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 17.0, 6.0, 'minecraft:diamond')
        .addHandle(0.1, 0.1, 0.0, 0.0)
        .addPlatingHelmet(3.0, db * 0.7, 0, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0, 1.0)
        .addBinding()
        .addLimb(0, -0.1, db, 2.3)
        .addGrip(-0.15, 0.1, 8)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:fiery')
        .addDefaultTrait(1, 'tconstruct:lightweight')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:flame_barrier')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:flame_adaptive')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:blazing_quartz',
        ingot: 'malum:blazing_quartz',
        leftover: 'malum:blazing_quartz_fragment',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 余烬晶体
    db = 250;
    let ember_crystal = createMaterialBuilder('ember_crystal')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 18.0, 6.0, 'minecraft:diamond')
        .addHandle(-0.3, 0.3, 0.1, 0.2)
        .addPlatingHelmet(3.0, db * 0.7, 0, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0, 1.0)
        .addBinding()
        .addLimb(-0.2, -0.4, db, 3.4)
        .addGrip(0, -0.3, 9)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:blasting')
        .addDefaultTrait(1, 'tinkers_things:weakness')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:sculking')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:blast_protection')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:ember_crystal',
        ingot: 'embers:ember_crystal',
        leftover: 'embers:ember_shard',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 活木*
    db = 250;
    let livingwood = createMaterialBuilder('livingwood')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 13.0, 6.0, 'minecraft:diamond')
        .addHandle(0, 0.15, 0.2, 0.0)
        .addPlatingHelmet(4.0, db * 0.7, 0, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0, 1.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(-0.1, -0.15, db, 2.7)
        .addGrip(0, 0, 6)
        .build();

    // 活石*
    db = 200;
    let livingrock = createMaterialBuilder('livingrock')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 14.0, 6.0, 'minecraft:diamond')
        .addHandle(0.1, 0.2, 0.0, 0.3)
        .addPlatingHelmet(3.0, db * 0.7, 0.1, 1.0)
        .addPlatingChestplate(4.0, db * 1.0, 0.1, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0.1, 1.0)
        .addPlatingBoots(3.0, db * 0.6, 0.1, 1.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(-0.2, -0.3, db, 3.0)
        .addGrip(-0.2, 0.1, 7)
        .build();

    // 魔力钢*
    db = 500;
    let manasteel = createMaterialBuilder('manasteel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 20.0, 8.0, 'minecraft:diamond')
        .addHandle(0.1, 0.2, 0.1, 0.15)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addLimb(0.1, -0.3, db, 3.8)
        .addGrip(0, 0.1, 10)
        .build();

    // 赛特斯*
    db = 300;
    let certus_quartz = createMaterialBuilder('certus_quartz')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_advanced')
        .addStats()
        .addHead(db, 19.0, 8.0, 'minecraft:diamond')
        .addHandle(0, 0.2, 0.0, 0.3)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(5.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(4.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addLimb(-0.2, -0.1, db, 3.5)
        .addGrip(0.2, 0, 9)
        .build();

    // 血曜石*
    db = 450;
    let hematite = createMaterialBuilder('hematite')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_things')
        .addStats()
        .addHead(db, 21.0, 8.0, 'minecraft:diamond')
        .addHandle(-0.2, 0.3, 0.05, 0.1)
        .addPlatingHelmet(3.0, db * 0.7, 0.05, 1.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 1.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 1.0)
        .addPlatingBoots(2.0, db * 0.6, 0.05, 1.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(-0.2, -0.45, db, 5.0)
        .addGrip(0, -0.2, 11)
        .build();

    // 黎明石
    db = 600;
    let dawnstone = createMaterialBuilder('dawnstone')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 23.0, 9.0, 'minecraft:diamond')
        .addHandle(0.2, 0.3, 0.05, 0.2)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(0.1, -0.3, db, 4.6)
        .addGrip(-0.15, 0.2, 11)
        .addTraits()
        .addDefaultTrait(1, 'etstlib:glowing')
        .addDefaultTrait(1, 'tconstruct:dwarven')
        .addPerStatTrait('tconstruct:head', 1, 'tconstruct:breathtaking')
        .addPerStatTrait('tconstruct:head', 1, 'etstlib:momentum_accelerate')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:glowing')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:clearing')
        .build();
    registerMaterialProcess({
        fluid: 'embers:molten_dawnstone',
        material: 'tconstruct:dawnstone',
        ingot: '#forge:ingots/dawnstone',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 福鲁伊克斯*
    db = 400;
    let fluix_crystal = createMaterialBuilder('fluix_crystal')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_advanced')
        .addStats()
        .addHead(db, 23.0, 8.0, 'minecraft:diamond')
        .addHandle(0.2, 0.0, -0.2, 0.4)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addBinding()
        .addLimb(-0.1, -0.15, db, 4.2)
        .addGrip(0, 0.2, 11)
        .build();

    // 狱烬下界合金*
    db = 900;
    let blaze_netherite = createMaterialBuilder('blaze_netherite')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1).setNamespace('tinkers_advanced')
        .addStats()
        .addHead(db, 27.0, 10.0, 'minecraft:netherite')
        .addHandle(0.3, 0.35, 0.0, 0.2)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(7.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(6.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(3.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(0.1, -0.3, db, 5.3)
        .addGrip(-0.3, 0.3, 14)
        .build();

    // 马玉灵*
    db = 800;
    let manyullyn = createMaterialBuilder('manyullyn')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 25.0, 9.0, 'minecraft:netherite')
        .addHandle(0.2, 0.25, 0.1, 0)
        .addPlatingHelmet(4.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(6.0, db * 1.0, 0.05, 2.0)
        .addPlatingLeggings(5.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(-0.1, -0.35, db, 5.6)
        .addGrip(0, 0.2, 13)
        .build();

    // Beta
    db = 800;
    let beta_framework = createMaterialBuilder('beta_framework')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 78.0, 13.0, 'minecraft:netherite')
        .addHandle(0.3, 0.6, 0.05, 0.3)
        .addPlatingHelmet(9.0, db * 0.7, 0.05, 4.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.05, 4.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.05, 4.0)
        .addPlatingBoots(7.0, db * 0.6, 0.05, 4.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(0, -0.3, db, 11.3)
        .addGrip(-0.1, 0.3, 36)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_things:fortified')
        .addDefaultTrait(1, 'tconstruct:piercing')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:secondary_armor')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:beta_framework',
        ingot: 'kubejs:beta_framework',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 远古下界合金
    temp = 1200
    db = 1000;
    let ancient_netherite = createMaterialBuilder('ancient_netherite')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 32.0, 8.0, 'minecraft:netherite')
        .addHandle(0.4, 0.35, 0.0, 0.0)
        .addPlatingHelmet(5.0, db * 0.7, 0.05, 2.0)
        .addPlatingChestplate(8.0, db * 1.0, 0.05, 4.0)
        .addPlatingLeggings(6.0, db * 0.9, 0.05, 2.0)
        .addPlatingBoots(4.0, db * 0.6, 0.05, 2.0)
        .addPlatingShield(db * 0.9, 0.05, 2.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(-0.2, -0.5, db, 11.2)
        .addGrip(-0.1, 0.4, 16)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:netherite')
        .addDefaultTrait(1, 'tconstruct:insatiable')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:netherite')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:inert_metal')
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_ancient_netherite',
        material: 'tconstruct:ancient_netherite',
        ingot: 'kubejs:ancient_netherite',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // 泰拉
    db = 700;
    let terrasteel = createMaterialBuilder('terrasteel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 56.0, 11.0, 'minecraft:netherite')
        .addHandle(0.1, 0.25, 0.25, 0.35)
        .addPlatingHelmet(6.0, db * 0.7, 0.05, 3.0)
        .addPlatingChestplate(10.0, db * 1.0, 0.05, 3.0)
        .addPlatingLeggings(9.0, db * 0.9, 0.05, 3.0)
        .addPlatingBoots(5.0, db * 0.6, 0.05, 3.0)
        .addPlatingShield(db * 0.9, 0.05, 3.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(0, -0.2, db, 9.1)
        .addGrip(0.1, 0.1, 13)
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:mana')
        .addDefaultTrait(1, 'etstlib:terra_beam')
        .addDefaultTrait(1, 'tcintegrations:alf')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:mana')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:terrestrial')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:recurrent_protection')
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_terrasteel',
        material: 'tconstruct:terrasteel',
        ingot: '#forge:ingots/terrasteel',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

}