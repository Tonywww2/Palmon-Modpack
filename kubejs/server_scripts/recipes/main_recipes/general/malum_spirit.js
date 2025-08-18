ServerEvents.recipes(event => {

    const malumSpirit = (blocks, counts, results, type, id) => {
        event.custom({
            "type": "palmon:production",
            "category": "misc",
            "focus_stat": "HP",
            "min_level": 60,
            "required_type": type,
            "base_hp": 0,
            "base_atk": 0,
            "base_def": 0,
            "base_spa": 0,
            "base_spd": 0,
            "base_spe": 0,
            "area_blocks": blocks,
            "block_count": counts,
            "tick": 2400,
            "result_items": results,
            "result_power": 0,
            "result_fluid": null
        }).id(id)
    }

    malumSpirit([Item.of('malum:block_of_hallowed_gold').toJson()],
        20,
        [Item.of('malum:sacred_spirit').toJson()],
        "fairy",
        "kubejs:malum_sacred_spirit")

    malumSpirit([Item.of('malum:block_of_malignant_lead').toJson()],
        10,
        [Item.of('malum:wicked_spirit').toJson()],
        "poison",
        "kubejs:malum_wicked_spirit")

    malumSpirit([Item.of('malum:block_of_arcane_charcoal').toJson()],
        20,
        [Item.of('malum:arcane_spirit').toJson()],
        "psychic",
        "kubejs:malum_arcane_spirit")

    malumSpirit([Item.of('malum:block_of_null_slate').toJson()],
        20,
        [Item.of('malum:eldritch_spirit').toJson()],
        "ghost",
        "kubejs:malum_eldritch_spirit")

    malumSpirit([Item.of('malum:block_of_auric_embers').toJson()],
        20,
        [Item.of('malum:aerial_spirit').toJson()],
        "flying",
        "kubejs:malum_aerial_spirit")

    malumSpirit([Item.of('malum:block_of_alchemical_calx').toJson()],
        20,
        [Item.of('malum:aqueous_spirit').toJson()],
        "water",
        "kubejs:malum_aqueous_spirit")

    malumSpirit([Item.of('malum:block_of_brilliance').toJson()],
        20,
        [Item.of('malum:earthen_spirit').toJson()],
        "ground",
        "kubejs:malum_earthen_spirit")

    malumSpirit([Item.of('malum:block_of_blazing_quartz').toJson()],
        20,
        [Item.of('malum:infernal_spirit').toJson()],
        "fire",
        "kubejs:malum_infernal_spirit")

})