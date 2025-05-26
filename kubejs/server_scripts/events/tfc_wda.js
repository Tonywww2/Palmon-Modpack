// priority: 30

ServerEvents.tags('worldgen/biome', event => {
    console.log("Dungeons Rising TFC: " + global.current_buffs.has("dungeon_1"))
    if (global.current_buffs && global.current_buffs.has("dungeon_1")) {
        event.add('dungeons_arise:has_structure/abandoned_temple_biomes',
            "tfc:plains",
            "tfc:hills"
        )

        event.add("dungeons_arise:has_structure/bandit_towers_biomes",
            "tfc:hills",
            "tfc:lowlands"
        )

        event.add("dungeons_arise:has_structure/bandit_village_biomes",
            "tfc:lowlands",
            "tfc:low_canyons"
        )

        event.add("dungeons_arise:has_structure/bathhouse_biomes",
            "tfc:low_canyons",
            "tfc:rolling_hills"
        )

        event.add("dungeons_arise:has_structure/ceryneian_hind_biomes",
            "tfc:rolling_hills",
            "tfc:badlands"
        )

        event.add("dungeons_arise:has_structure/coliseum_biomes",
            "tfc:badlands",
            "tfc:plateau"
        )

        event.add("dungeons_arise:has_structure/fishing_hut_biomes",
            "tfc:plateau",
            "tfc:canyons"
        )

        event.add("dungeons_arise:has_structure/foundry_biomes",
            "tfc:canyons",
            "tfc:mountains"
        )

        event.add("dungeons_arise:has_structure/giant_mushroom_biomes",
            "tfc:mountains",
            "tfc:old_mountains"
        )

        event.add("dungeons_arise:has_structure/greenwood_pub_biomes",
            "tfc:old_mountains",
            "tfc:oceanic_mountains"
        )

        event.add("dungeons_arise:has_structure/heavenly_challenger_biomes",
            "tfc:oceanic_mountains",
            "tfc:volcanic_mountains"
        )

        event.add("dungeons_arise:has_structure/heavenly_conqueror_biomes",
            "tfc:volcanic_mountains",
            "tfc:volcanic_oceanic_mountains"
        )

        event.add("dungeons_arise:has_structure/heavenly_rider_biomes",
            "tfc:volcanic_oceanic_mountains",
            "tfc:ocean"
        )

        event.add("dungeons_arise:has_structure/illager_campsite_biomes",
            "tfc:ocean",
            "tfc:ocean_reef"
        )

        event.add("dungeons_arise:has_structure/illager_corsair_biomes",
            "tfc:ocean_reef",
            "tfc:deep_ocean"
        )

        event.add("dungeons_arise:has_structure/illager_fort_biomes",
            "tfc:deep_ocean",
            "tfc:deep_ocean_trench"
        )

        event.add("dungeons_arise:has_structure/illager_galley_biomes",
            "tfc:deep_ocean_trench",
            "tfc:shore"
        )

        event.add("dungeons_arise:has_structure/illager_windmill_biomes",
            "tfc:shore",
            "tfc:lake"
        )

        event.add("dungeons_arise:has_structure/infested_temple_biomes",
            "tfc:lake",
            "tfc:plateau_lake"
        )

        event.add("dungeons_arise:has_structure/jungle_tree_house_biomes",
            "tfc:plateau_lake",
            "tfc:mountain_lake"
        )

        event.add("dungeons_arise:has_structure/keep_kayra_biomes",
            "tfc:mountain_lake",
            "tfc:old_mountain_lake"
        )

        event.add("dungeons_arise:has_structure/lighthouse_biomes",
            "tfc:old_mountain_lake",
            "tfc:oceanic_mountain_lake"
        )

        event.add("dungeons_arise:has_structure/merchant_campsite_biomes",
            "tfc:oceanic_mountain_lake",
            "tfc:volcanic_mountain_lake"
        )

        event.add("dungeons_arise:has_structure/mining_system_biomes",
            "tfc:volcanic_mountain_lake",
            "tfc:volcanic_oceanic_mountain_lake"
        )

        event.add("dungeons_arise:has_structure/monastery_biomes",
            "tfc:volcanic_oceanic_mountain_lake",
            "tfc:river"
        )

        event.add("dungeons_arise:has_structure/mushroom_mines_biomes",
            "tfc:river",
            "tfc:mountain_river"
        )

        event.add("dungeons_arise:has_structure/plague_asylum_biomes",
            "tfc:mountain_river",
            "tfc:old_mountain_river"
        )

        event.add("dungeons_arise:has_structure/shiraz_palace_biomes",
            "tfc:old_mountain_river",
            "tfc:volcanic_mountain_river"
        )

        event.add("dungeons_arise:has_structure/small_blimp_biomes",
            "tfc:volcanic_mountain_river",
            "tfc:oceanic_mountain_river"
        )

        event.add("dungeons_arise:has_structure/small_prairie_house_biomes",
            "tfc:oceanic_mountain_river",
            "tfc:volcanic_oceanic_mountain_river"
        )

        event.add("dungeons_arise:has_structure/thornborn_towers_biomes",
            "tfc:volcanic_oceanic_mountain_river",
            "tfc:plains"
        )

        event.add("dungeons_arise:has_structure/typhon_biomes",
            "tfc:plains",
            "tfc:hills"
        )

        event.add("dungeons_arise:has_structure/undead_pirate_ship_biomes",
            "tfc:hills",
            "tfc:lowlands"
        )

        event.add("dungeons_arise:has_structure/wishing_well_biomes",
            "tfc:lowlands",
            "tfc:low_canyons"
        )

        event.add("dungeons_arise_seven_seas:has_structure/corsair_corvette_biomes",
            "tfc:low_canyons",
            "tfc:rolling_hills"
        )

        event.add("dungeons_arise_seven_seas:has_structure/pirate_junk_biomes",
            "tfc:rolling_hills",
            "tfc:badlands"
        )

        event.add("dungeons_arise_seven_seas:has_structure/small_yacht_biomes",
            "tfc:badlands",
            "tfc:plateau"
        )

        event.add("dungeons_arise_seven_seas:has_structure/unicorn_galleon_biomes",
            "tfc:plateau",
            "tfc:canyons"
        )

        event.add("dungeons_arise_seven_seas:has_structure/victory_frigate_biomes",
            "tfc:canyons",
            "tfc:mountains"
        )
    }
})