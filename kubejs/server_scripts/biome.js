const $Gson = Java.loadClass("com.google.gson.Gson")

ItemEvents.rightClicked("minecraft:diamond", event => {
    const server = Utils.getServer()
    /**
     * @type {Internal.ResourceManager}
    */
    const manager = server.getResourceManager()
    const biomeMod = "terralith"
    const biomePath = "worldgen/biome/"
    const biomeName = "snowy_badlands"

    const rl = new ResourceLocation(biomeMod, biomePath + biomeName + ".json")
    const opt = manager.getResource(rl)
    if (opt.isPresent()) {
        const reader = opt.get().openAsReader()
        const gson = new $Gson()
        const jsonObj = gson["fromJson(java.io.Reader,java.lang.Class)"](reader, $JsonObject)
        console.log(jsonObj)
    } else {
        console.log("Resource not found: " + rl)
    }

})