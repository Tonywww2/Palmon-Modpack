// priority: 100

const $AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")
const $UUID = Java.loadClass("java.util.UUID")
const $JavaString = Java.loadClass("java.lang.String")

const $TargetingConditions = Java.loadClass('net.minecraft.world.entity.ai.targeting.TargetingConditions')

const $JsonObject = Java.loadClass("com.google.gson.JsonObject")
const $JsonArray = Java.loadClass("com.google.gson.JsonArray")

const PACK_DATA_PATH = "kubejs\\packdata\\palmon_pack_data.json"

// function hashCode(string) {
//     let hash = 0;
//     for (let i = 0; i < string.length; i++) {
//         let code = string.charCodeAt(i)
//         hash = ((hash << 5) - hash) + code
//         hash = hash & hash
//     }
//     return hash
// }

function loadPackData() {
    let json = JsonIO.readJson(PACK_DATA_PATH)
    if (!json) {
        json = new $JsonObject()
    }
    if (!json.has("learned_buffs")) json.add("learned_buffs", new $JsonArray())
    if (!json.has("all_seed_data")) json.add("all_seed_data", new $JsonObject())
    return json
}

function savePackData(json) {
    JsonIO.write(PACK_DATA_PATH, json)
}

function deFusionCrafting(event, ingredients, catalyst, result, tier, total_energy, id) {
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": catalyst,
        "ingredients": ingredients,
        "result": result,
        "tier": tier,
        "total_energy": total_energy
    }).id(id)
}
