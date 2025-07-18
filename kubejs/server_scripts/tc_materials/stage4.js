// priority: 60

function stage4Materials(createMaterialBuilder, registerMaterialProcess) {
    let sortOrder = 400
    let temp = 2000
    let time = 150

    // 紫金*
    let db = 1100;
    let ostrum = createMaterialBuilder('ostrum')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(3).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 72.0, 12.0, 'minecraft:netherite')
        .addHandle(0.1, 0.6, 0.1, 0.35)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)
        .addPlatingShield(db * 0.9, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addLimb(-0.2, -0.2, db, 22)
        .addGrip(0, 0.1, 36)
        .build();

    // 塑料*
    db = 550;
    let plastic = createMaterialBuilder('plastic')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(3).setNamespace("tinkers_advanced")
        .addStats()
        .addHead(db, 54.0, 10.0, 'minecraft:wood')
        .addHandle(0.4, 0.3, 0.4, 0.5)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)
        .addBinding()
        .addMaille()
        .addLimb(-0.1, 0, db, 15.5)
        .addGrip(0.2, 0.4, 27)
        .build();

    // 谐振水晶*
    db = 850;
    let resonance_crystal = createMaterialBuilder('resonance_crystal')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(3).setNamespace("tinkers_advanced")
        .addStats()
        .addHead(db, 84.0, 12.0, 'minecraft:diamond')
        .addHandle(0.15, 0.55, 0.15, -0.2)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)
        .addBinding()
        .build();

    // 源质钢
    db = 1100;
    let elementium = createMaterialBuilder('elementium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(3)
        .addStats()
        .addHead(db, 96.0, 12.0, 'minecraft:netherite')
        .addHandle(0.2, 0.55, 0.1, 0.2)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 4.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 4.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 4.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 4.0)
        .addPlatingShield(db * 0.9, 0.1, 4.0)
        .addBinding()
        .addMaille()
        .addLimb(0.2, -0.2, db, 23)
        .addGrip(0.1, 0.2, 48)
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:mana')
        .addDefaultTrait(1, 'tcintegrations:alf')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:mana')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:great_fairy')
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_elementium',
        material: 'tconstruct:elementium',
        ingot: '#forge:ingots/elementium',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // 耐热*
    db = 1150;
    let calorite = createMaterialBuilder('calorite')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(3).setNamespace('tcintegrations')
        .addStats()
        .addHead(db, 102.0, 13.0, 'minecraft:netherite')
        .addHandle(0.3, 0.6, 0.0, 0.2)
        .addPlatingHelmet(9.0, db * 0.7, 0.1, 4.0)
        .addPlatingChestplate(14.0, db * 1.0, 0.1, 4.0)
        .addPlatingLeggings(12.0, db * 0.9, 0.1, 4.0)
        .addPlatingBoots(7.0, db * 0.6, 0.1, 4.0)
        .addPlatingShield(db * 0.9, 0.1, 4.0)
        .addBinding()
        .addMaille()
        .addLimb(0, -0.4, db, 24)
        .addGrip(0, 0.3, 51)
        .build();

    // 精灵钢
    db = 1150;
    let alfsteel = createMaterialBuilder('alfsteel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(3)
        .addStats()
        .addHead(db, 120.0, 13.0, 'minecraft:diamond')
        .addHandle(0.5, 0.7, 0.15, 0.3)
        .addPlatingHelmet(10.0, db * 0.7, 0.1, 4.0)
        .addPlatingChestplate(15.0, db * 1.0, 0.1, 4.0)
        .addPlatingLeggings(13.0, db * 0.9, 0.1, 4.0)
        .addPlatingBoots(8.0, db * 0.6, 0.1, 4.0)
        .addPlatingShield(db * 0.9, 0.1, 4.0)
        .addBinding()
        .addMaille()
        .addLimb(0.15, -0.3, db, 23)
        .addGrip(0.15, 0.5, 60)
        .addTraits()
        .addDefaultTrait(1, 'tcintegrations:mana')
        .addDefaultTrait(1, 'tcintegrations:alf')
        .addDefaultTrait(1, 'tcintegrations:terra')
        .addDefaultTrait(1, 'etstlib:energetic_attack')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:mana')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:great_fairy')
        .addPerStatTrait('tconstruct:armor', 1, 'tcintegrations:terrestrial')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:magic_protection')
        .build();
    registerMaterialProcess({
        fluid: 'kubejs:melted_alfsteel',
        material: 'tconstruct:alfsteel',
        ingot: 'mythicbotany:alfsteel_ingot',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

    // 智能龙
    db = 1200;
    let intelligent_draconium = createMaterialBuilder('intelligent_draconium')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(3)
        .addStats()
        .addHead(db, 125.0, 12.0, 'minecraft:netherite')
        .addHandle(0.1, 0.7, 0.15, 0.3)
        .addPlatingHelmet(10.0, db * 0.7, 0.1, 4.0)
        .addPlatingChestplate(16.0, db * 1.0, 0.1, 4.0)
        .addPlatingLeggings(14.0, db * 0.9, 0.1, 4.0)
        .addPlatingBoots(8.0, db * 0.6, 0.1, 4.0)
        .addBinding()
        .addMaille()
        .addLimb(0.5, -0.4, db, 31)
        .addGrip(0, 0.1, 63)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:flux_infused')
        .addDefaultTrait(1, 'tinkers_advanced:disintegrate')
        .addDefaultTrait(1, 'tconstruct:swiftstrike')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:flux_infused')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:piezoelectric_effect')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:energy_shield')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:intelligent_draconium',
        ingot: 'kubejs:intelligent_draconium_ingot',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 超导线圈1
    db = 1150;
    let superconducting_coil_type_1 = createMaterialBuilder('superconducting_coil_type_1')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(3)
        .addStats()
        .addHead(db, 130.0, 13.0, 'minecraft:netherite')
        .addHandle(0, 0.8, 0.15, 0.0)
        .addPlatingHelmet(11.0, db * 0.7, 0.1, 5.0)
        .addPlatingChestplate(18.0, db * 1.0, 0.1, 5.0)
        .addPlatingLeggings(16.0, db * 0.9, 0.1, 5.0)
        .addPlatingBoots(9.0, db * 0.6, 0.1, 5.0)
        .addBinding()
        .addMaille()
        .addLimb(-0.15, -0.25, db, 25)
        .addGrip(-0.2, 0, 65)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_things:fortified')
        .addDefaultTrait(1, 'tinkers_advanced:electric_food')
        .addDefaultTrait(1, 'tinkers_things:hemodynamic')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:superconducting_coil_type_1',
        ingot: 'kubejs:superconducting_coil_type_1',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 归一精华
    db = 900;
    let unify_essence = createMaterialBuilder('unify_essence')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(3)
        .addStats()
        .addHead(db, 130.0, 15.0, 'minecraft:netherite')
        .addHandle(-0.2, 0.8, 0.2, 0.15)
        .addPlatingHelmet(11.0, db * 0.7, 0.1, 5.0)
        .addPlatingChestplate(18.0, db * 1.0, 0.1, 5.0)
        .addPlatingLeggings(16.0, db * 0.9, 0.1, 5.0)
        .addPlatingBoots(9.0, db * 0.6, 0.1, 5.0)
        .addPlatingShield(db * 0.9, 0.1, 5.0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .addBowstring()
        .addLimb(0.1, -0.1, db, 22.5)
        .addGrip(0.1, -0.2, 65)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:overslime')
        .addDefaultTrait(1, 'tconstruct:overlord')
        .addDefaultTrait(1, 'tconstruct:overcast')
        .addDefaultTrait(1, 'tconstruct:overgrowth')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:unify_essence',
        ingot: 'kubejs:unify_essence',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // Delta框架
    db = 1200;
    let delta_framework = createMaterialBuilder('delta_framework')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(3)
        .addStats()
        .addHead(db, 145.0, 14.0, 'minecraft:diamond')
        .addHandle(0.2, 0.8, 0.15, 0.3)
        .addPlatingHelmet(12.0, db * 0.7, 0.1, 7.0)
        .addPlatingChestplate(19.0, db * 1.0, 0.1, 6.0)
        .addPlatingLeggings(17.0, db * 0.9, 0.1, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.1, 7.0)
        .addPlatingShield(db * 0.9, 0.1, 6.0)
        .addBinding()
        .addMaille()
        .addLimb(-0.2, -0.2, db, 36.5)
        .addGrip(0.25, 0.2, 73)
        .addTraits()
        .addDefaultTrait(1, 'tinkers_advanced:elastic')
        .addDefaultTrait(1, 'etstlib:glowing')
        .addDefaultTrait(1, 'tconstruct:dwarven')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:delta_framework',
        ingot: 'kubejs:delta_framework',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 魔王宝石
    db = 900;
    let marid_binded_gem = createMaterialBuilder('marid_binded_gem')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(3)
        .addStats()
        .addHead(db, 140.0, 15.0, 'minecraft:netherite')
        .addHandle(0.7, 0.65, 0.25, 0.0)
        .addPlatingHelmet(12.0, db * 0.7, 0.1, 7.0)
        .addPlatingChestplate(19.0, db * 1.0, 0.1, 6.0)
        .addPlatingLeggings(17.0, db * 0.9, 0.1, 6.0)
        .addPlatingBoots(10.0, db * 0.6, 0.1, 6.0)
        .addPlatingShield(db * 0.9, 0.1, 6.0)
        .addBinding()
        .addMaille()
        .addLimb(0, -0.2, db, 35)
        .addGrip(0.2, 0.7, 70)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:shiny')
        .addDefaultTrait(1, 'tconstruct:autosmelt')
        .addDefaultTrait(1, 'tcintegrations:livingwood')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:shiny')
        .addPerStatTrait('tconstruct:armor', 1, 'etstlib:crystal_armor')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:flamewake')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:marid_binded_gem',
        ingot: 'kubejs:marid_binded_gem',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: false
    });

    // 腾炎
    db = 1300;
    let ignitium = createMaterialBuilder('ignitium')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(3)
        .addStats()
        .addHead(db, 145.0, 12.0, 'minecraft:netherite')
        .addHandle(0.3, 0.85, 0.0, 0.0)
        .addPlatingHelmet(13.0, db * 0.7, 0.1, 6.0)
        .addPlatingChestplate(20.0, db * 1.0, 0.1, 6.0)
        .addPlatingLeggings(18.0, db * 0.9, 0.1, 6.0)
        .addPlatingBoots(11.0, db * 0.6, 0.1, 6.0)
        .addPlatingShield(db * 0.9, 0.1, 6.0)
        .addBinding()
        .addMaille()
        .addLimb(-0.1, -0.45, db, 35)
        .addGrip(0, 0.3, 73)
        .addTraits()
        .addDefaultTrait(1, 'tconstruct:scorching')
        .addDefaultTrait(1, 'tconstruct:netherite')
        .addPerStatTrait('tconstruct:head', 1, 'tconstruct:scorching')
        .addPerStatTrait('tconstruct:head', 1, 'tinkers_advanced:basalz_inflict')
        .addPerStatTrait('tconstruct:head', 1, 'tconstruct:pierce')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:scorch_protection')
        .addPerStatTrait('tconstruct:armor', 1, 'tinkers_advanced:basalz_defense')
        .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:netherite')
        .build();
    registerMaterialProcess({
        fluid: null,
        material: 'tconstruct:ignitium',
        ingot: 'cataclysm:ignitium_ingot',
        units: 90,
        temperature: temp,
        time: time,
        meltIngot: true
    });

}