function basicMaterials(createMaterialBuilder, registerMaterialProcess) {
    let sortOrder = 50
    let temp = 800
    let time = 100

    // —— 防腐木* ——  
    let db = 150;
    let treated_wood = createMaterialBuilder('treated_wood')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 4, 3, 'minecraft:wood')
        .addHandle(0.2, 0.1, 0.1, 0)
        .addPlatingHelmet(1, db * 0.7, 0, 0)
        .addPlatingChestplate(2, db * 1.0, 0, 0)
        .addPlatingLeggings(2, db * 0.9, 0, 0)
        .addPlatingBoots(1, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .build();

    // —— 木* ——  
    db = 100;
    let wood = createMaterialBuilder('wood')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 4, 3, 'minecraft:wood')
        .addHandle(0, 0, 0, 0)
        .addPlatingHelmet(1, db * 0.7, 0, 0)
        .addPlatingChestplate(2, db * 1.0, 0, 0)
        .addPlatingLeggings(2, db * 0.9, 0, 0)
        .addPlatingBoots(1, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();

    // —— 岩石* ——  
    db = 100;
    let rock = createMaterialBuilder('rock')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 5, 3, 'minecraft:stone')
        .addHandle(0, 0, -0.2, 0)
        .addPlatingHelmet(1, db * 0.7, 0, 0)
        .addPlatingChestplate(2, db * 1.0, 0, 0)
        .addPlatingLeggings(2, db * 0.9, 0, 0)
        .addPlatingBoots(1, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .addShieldCore()
        .build();

    // —— 燧石* ——  
    db = 105;
    let flint = createMaterialBuilder('flint')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 5, 4, 'minecraft:stone')
        .addHandle(0, 0.1, 0.1, 0)
        .addPlatingHelmet(1, db * 0.7, 0, 0)
        .addPlatingChestplate(2, db * 1.0, 0, 0)
        .addPlatingLeggings(2, db * 0.9, 0, 0)
        .addPlatingBoots(1, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .build();

    // —— 骨头* ——  
    db = 150;
    let bone = createMaterialBuilder('bone')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 4, 3, 'minecraft:stone')
        .addHandle(-0.2, 0.15, 0, -0.2)
        .addPlatingHelmet(1, db * 0.7, 0, 0)
        .addPlatingChestplate(2, db * 1.0, 0, 0)
        .addPlatingLeggings(2, db * 0.9, 0, 0)
        .addPlatingBoots(1, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .build();

    // —— 铁* ——  
    db = 450;
    let iron = createMaterialBuilder('iron')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 9, 5, 'minecraft:iron')
        .addHandle(0.1, 0.15, 0, 0.1)
        .addPlatingHelmet(2, db * 0.7, 0, 1)
        .addPlatingChestplate(3, db * 1.0, 0, 1)
        .addPlatingLeggings(3, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 铅* ——  
    db = 350;
    let lead = createMaterialBuilder('lead')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 8, 4, 'minecraft:gold')
        .addHandle(0, 0.1, -0.1, 0)
        .addPlatingHelmet(2, db * 0.7, 0, 0)
        .addPlatingChestplate(3, db * 1.0, 0, 0)
        .addPlatingLeggings(3, db * 0.9, 0, 0)
        .addPlatingBoots(2, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .build();

    // —— 银* ——  
    db = 400;
    let silver = createMaterialBuilder('silver')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 8, 4, 'minecraft:iron')
        .addHandle(0, 0.1, 0.1, 0.2)
        .addPlatingHelmet(2, db * 0.7, 0, 0)
        .addPlatingChestplate(3, db * 1.0, 0, 0)
        .addPlatingLeggings(3, db * 0.9, 0, 0)
        .addPlatingBoots(2, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .build();

    // —— 生铁* ——  
    db = 500;
    let pig_iron = createMaterialBuilder('pig_iron')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 7, 5, 'minecraft:gold')
        .addHandle(0.15, 0.15, 0, 0.2)
        .addPlatingHelmet(2, db * 0.7, 0, 1)
        .addPlatingChestplate(3, db * 1.0, 0, 1)
        .addPlatingLeggings(3, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 玫瑰金* ——  
    db = 550;
    let rose_gold = createMaterialBuilder('rose_gold')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 6, 6, 'minecraft:iron')
        .addHandle(-0.1, 0, 0.25, 0.3)
        .addPlatingHelmet(2, db * 0.7, 0, 0)
        .addPlatingChestplate(3, db * 1.0, 0, 0)
        .addPlatingLeggings(3, db * 0.9, 0, 0)
        .addPlatingBoots(2, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .build();

    // —— 青铜* ——  
    db = 600;
    let bronze = createMaterialBuilder('bronze')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 7, 5, 'minecraft:netherite')
        .addHandle(0.2, 0.1, 0, 0.1)
        .addPlatingHelmet(2, db * 0.7, 0, 1)
        .addPlatingChestplate(3, db * 1.0, 0, 1)
        .addPlatingLeggings(3, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 紫菘* ——  
    db = 450;
    let chorus = createMaterialBuilder('chorus')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 14, 6, 'minecraft:gold')
        .addHandle(0.2, 0.15, 0.2, 0)
        .addBinding()
        .addMaille()
        .build();

    // —— 康铜* ——
    db = 350;
    let constantan = createMaterialBuilder('constantan')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 6, 5, 'minecraft:gold')
        .addHandle(0.3, 0, 0.15, 0.2)
        .addPlatingHelmet(2, db * 0.7, 0, 1)
        .addPlatingChestplate(3, db * 1.0, 0, 1)
        .addPlatingLeggings(3, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 殷钢* ——
    db = 400;
    let invar = createMaterialBuilder('invar')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 9, 6, 'minecraft:iron')
        .addHandle(0.1, 0.15, 0, 0.1)
        .addPlatingHelmet(2, db * 0.7, 0, 1)
        .addPlatingChestplate(3, db * 1.0, 0, 1)
        .addPlatingLeggings(3, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 琥珀金* ——
    db = 350;
    let electrum = createMaterialBuilder('electrum')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 6, 6, 'minecraft:gold')
        .addHandle(0, 0.05, 0.3, 0.2)
        .addPlatingHelmet(2, db * 0.7, 0, 0)
        .addPlatingChestplate(3, db * 1.0, 0, 0)
        .addPlatingLeggings(3, db * 0.9, 0, 0)
        .addPlatingBoots(2, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .build();

    // —— 钢* ——
    db = 500;
    let steel = createMaterialBuilder('steel')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 10, 6, 'minecraft:diamond')
        .addHandle(0.1, 0.2, 0, 0.4)
        .addPlatingHelmet(2, db * 0.7, 0, 1)
        .addPlatingChestplate(3, db * 1.0, 0, 1)
        .addPlatingLeggings(3, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 黄铜* ——
    db = 300;
    let brass = createMaterialBuilder('brass')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1).setNamespace("tcintegrations")
        .addStats()
        .addHead(db, 7, 5, 'minecraft:gold')
        .addHandle(0, -0.1, 0, 0.4)
        .addPlatingHelmet(2, db * 0.7, 0, 1)
        .addPlatingChestplate(3, db * 1.0, 0, 1)
        .addPlatingLeggings(3, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 铜* ——
    db = 300;
    let copper = createMaterialBuilder('copper')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 6, 5, 'minecraft:gold')
        .addHandle(0, 0, 0.2, 0.2)
        .addPlatingHelmet(2, db * 0.7, 0, 1)
        .addPlatingChestplate(3, db * 1.0, 0, 1)
        .addPlatingLeggings(3, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 粘木* ——
    db = 300;
    let slimewood = createMaterialBuilder('slimewood')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 15, 6, 'minecraft:iron')
        .addHandle(0.1, 0.1, 0.2, 0)
        .addPlatingHelmet(3, db * 0.7, 0, 1)
        .addPlatingChestplate(4, db * 1.0, 0, 1)
        .addPlatingLeggings(4, db * 0.9, 0, 1)
        .addPlatingBoots(2, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 紫水晶青铜* ——
    db = 700;
    let amethyst_bronze = createMaterialBuilder('amethyst_bronze')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 17, 10, 'minecraft:diamond')
        .addHandle(0.3, 0.15, 0.2, 0.3)
        .addPlatingHelmet(3, db * 0.7, 0, 2)
        .addPlatingChestplate(4, db * 1.0, 0, 2)
        .addPlatingLeggings(4, db * 0.9, 0, 2)
        .addPlatingBoots(3, db * 0.6, 0, 2)
        .addBinding()
        .addMaille()
        .build();

    // —— 纳瓦* ——
    db = 500;
    let nahuatl = createMaterialBuilder('nahuatl')
        .setCraftable(true).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 17, 7, 'minecraft:diamond')
        .addHandle(0, 0.25, 0.1, 0)
        .addPlatingHelmet(3, db * 0.7, 0, 1)
        .addPlatingChestplate(4, db * 1.0, 0, 1)
        .addPlatingLeggings(4, db * 0.9, 0, 1)
        .addPlatingBoots(3, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 钴* ——
    db = 700;
    let cobalt = createMaterialBuilder('cobalt')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 19, 9, 'minecraft:diamond')
        .addHandle(0.2, 0.2, 0.2, 0.2)
        .addPlatingHelmet(4, db * 0.7, 0, 2)
        .addPlatingChestplate(5, db * 1.0, 0, 2)
        .addPlatingLeggings(5, db * 0.9, 0, 2)
        .addPlatingBoots(3, db * 0.6, 0, 1)
        .addBinding()
        .addMaille()
        .build();

    // —— 余烬黏液* ——
    db = 650;
    let cinderslime = createMaterialBuilder('cinderslime')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1)
        .addStats()
        .addHead(db, 21, 9, 'minecraft:diamond')
        .addHandle(0.2, 0.3, 0.1, 0.3)
        .addPlatingHelmet(4, db * 0.7, 0, 2)
        .addPlatingChestplate(6, db * 1.0, 0, 2)
        .addPlatingLeggings(5, db * 0.9, 0, 2)
        .addPlatingBoots(3, db * 0.6, 0, 2)
        .addBinding()
        .addMaille()
        .build();

    // —— 锑* ——
    db = 550;
    let antimony_ingot = createMaterialBuilder('antimony')
        .setCraftable(false).setSortOrder(sortOrder++).setTier(1).setNamespace("tinkers_advanced")
        .addStats()
        .addHead(db, 20, 7, 'minecraft:iron')
        .addHandle(0.1, 0.25, 0.05, 0.2)
        .addPlatingHelmet(3, db * 0.7, 0, 0)
        .addPlatingChestplate(4, db * 1.0, 0, 0)
        .addPlatingLeggings(4, db * 0.9, 0, 0)
        .addPlatingBoots(3, db * 0.6, 0, 0)
        .addBinding()
        .addMaille()
        .build();

}