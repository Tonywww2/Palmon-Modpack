# TFCEvents.worldgenData

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: TFCWorldgenDataEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| generic | String, String, JsonObject, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| geode | String, String, String, List<String>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| blockToWeightedBlockState | List<String>, List<String> |  | BlockToWeightedBlockStateMapEntry | ✘ |
| pipeVein | String, List<BlockToWeightedBlockStateMapEntry>, int, float, int, int, int, int, int, int, int, int, float, Consumer<Pipe>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| babyBoulder | String, List<BlockToBlockStatesMapEntry>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| thinSpike | String, String, int, int, int, int, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| boulder | String, List<BlockToBlockStatesMapEntry>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| clusterVein | String, List<BlockToWeightedBlockStateMapEntry>, int, float, int, int, int, Consumer<Cluster>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| soilDisc | String, List<BlockToBlockStateMapEntry>, int, int, int, Float, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| hotSpring | String, String, String, int, boolean, List<BlockToWeightedBlockStateMapEntry>, FissureDecoration, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| discVein | String, List<BlockToWeightedBlockStateMapEntry>, int, float, int, int, int, int, Consumer<Disc>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| ifThen | String, String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| spreadingBush | String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| simpleBlockState | String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| tallWildCrop | String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| randomPatch | String, Integer, Integer, Integer, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| spreadingCrop | String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| boulderState | String, List<String> |  | BlockToBlockStatesMapEntry | ✘ |
| fissureDecoration | List<BlockToWeightedBlockStateMapEntry>, int, int, int |  | FissureDecoration | ✘ |
| blockToBlockState | String, String |  | BlockToBlockStateMapEntry | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `void generic(String name, String type, JsonObject featureConfig, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - type: String- The type of configured feature to create
  - featureConfig: JsonObject- The config json object for the feature
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a configured feature of the given type with the given config and the matching placed feature
```

- `void geode(String name, String outer, String middle, List<String> innerValues, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - outer: String- Sets the outer block state of the geode
  - middle: String- Sets the middle block state of the geode
  - innerValues: List<String>- A list of weight block state in string form, sets the inner state of the geode
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a geode configured feature and the matching placed feature
```

- `BlockToWeightedBlockStateMapEntry blockToWeightedBlockState(List<String> blocks, List<String> blockStates)`

  Parameters:
  - blocks: List<String>- A list of strings, the registry names of blocks to be replaced
  - blockStates: List<String>- A list of string representations of weighted block states

```
Creates a new block list to weighted block state list map entry for use several configured features
```

- `void pipeVein(String name, List<BlockToWeightedBlockStateMapEntry> replacementMap, int rarity, float density, int minY, int maxY, int height, int radius, int minSkew, int maxSkew, int minSlant, int maxSlant, float sign, Consumer<Pipe> optionals, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - replacementMap: List<BlockToWeightedBlockStateMapEntry>- A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
  - rarity: int- Sets the 'rarity' value of the vein
  - density: float- Sets the 'density' value of the vein
  - minY: int- Sets the 'min_y' value of the vein
  - maxY: int- Sets the 'max_y' value of the vein
  - height: int- Sets the 'height' value of the vein
  - radius: int- Sets the 'radius' value of the vein
  - minSkew: int- Sets the 'min_skew' value of the vein
  - maxSkew: int- Sets the 'max_skew' value of the vein
  - minSlant: int- Sets the 'min_slant' value of the vein
  - maxSlant: int- Sets the 'max_slant' value of the vein
  - sign: float- Sets the 'sign' value of the vein
  - optionals: Consumer<Pipe>- Sets the optional values of the vein through a consumer
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:pipe_vein' configured feature and the matching placed feature
```

- `void babyBoulder(String name, List<BlockToBlockStatesMapEntry> states, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - states: List<BlockToBlockStatesMapEntry>- A list of {Block -> BlockState[]} objects in string form that define the baby boulder's state property
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a baby boulder configured feature and the matching placed feature
```

- `void thinSpike(String name, String state, int radius, int tries, int minHeight, int maxHeight, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - state: String- Sets the 'state' property of the modifier
  - radius: int- Sets the 'radius' property of the modifier
  - tries: int- Sets the 'tries' property of the modifier
  - minHeight: int- Sets the 'min_height' property of the modifier
  - maxHeight: int- Sets the 'max_height' property of the modifier
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a thin spike configured feature and the matching placed feature
```

- `void boulder(String name, List<BlockToBlockStatesMapEntry> states, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - states: List<BlockToBlockStatesMapEntry>- A list of {Block -> BlockState[]} objects in string form that define the boulder's state property
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a boulder configured feature and the matching placed feature
```

- `void clusterVein(String name, List<BlockToWeightedBlockStateMapEntry> replacementMap, int rarity, float density, int minY, int maxY, int size, Consumer<Cluster> optionals, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - replacementMap: List<BlockToWeightedBlockStateMapEntry>- A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
  - rarity: int- Sets the 'rarity' value of the vein
  - density: float- Sets the 'density' value of the vein
  - minY: int- Sets the 'min_y' value of the vein
  - maxY: int- Sets the 'max_y' value of the vein
  - size: int- Sets the 'size' value of the vein
  - optionals: Consumer<Cluster>- Sets the optional values of the vein through a consumer
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:cluster_vein' configured feature and the matching placed feature
```

- `void soilDisc(String name, List<BlockToBlockStateMapEntry> replacementMap, int minRadius, int maxRadius, int height, Float integrity, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - replacementMap: List<BlockToBlockStateMapEntry>- A list of {block -> block state} objects in string form the define the disc's replacement map
  - minRadius: int- The minimum radius of the soil disc
  - maxRadius: int- The maximum radius of the soil disc
  - height: int- How tall the soil disc should be
  - integrity: Float- A number, in the range [0, 1], the specifies the probability of any given block will place, may be null to specify the default value of 1
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:soil_disc' configured feature and the matching placed feature
```

- `void hotSpring(String name, String wallState, String fluidState, int radius, boolean allowUnderwater, List<BlockToWeightedBlockStateMapEntry> replacesOnFluidContact, FissureDecoration decoration, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - wallState: String- The block state to use for the hot spring, may be null to use the lowest rock layer rock
  - fluidState: String- The fluid to fill the spring with, may be air
  - radius: int- The approximate radius of the hot spring, in the range [1, 16]
  - allowUnderwater: boolean- If the hot spring can generate underwater
  - replacesOnFluidContact: List<BlockToWeightedBlockStateMapEntry>- A list of {block[] -> weighted blockstate[]} objects, the blocks to place if placed underwater, may be null
  - decoration: FissureDecoration- A fissure decoration object, may be null to not have one present
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:hot_spring' configured feature and the matching placed feature
```

- `void discVein(String name, List<BlockToWeightedBlockStateMapEntry> replacementMap, int rarity, float density, int minY, int maxY, int size, int height, Consumer<Disc> optionals, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - replacementMap: List<BlockToWeightedBlockStateMapEntry>- A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
  - rarity: int- Sets the 'rarity' value of the vein
  - density: float- Sets the 'density' value of the vein
  - minY: int- Sets the 'min_y' value of the vein
  - maxY: int- Sets the 'max_y' value of the vein
  - size: int- Sets the 'size' value of the vein
  - height: int- Sets the 'height' value of the vein
  - optionals: Consumer<Disc>- Sets the optional values of the vein through a consumer
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:cluster_vein' configured feature and the matching placed feature
```

- `void ifThen(String name, String if_, String then, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - if_: String- A placed feature id, that will always try to place
  - then: String- A placed feature id, that will only place if the first feature is placed
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:if_then' configured feature and the matching placed feature
```

- `void spreadingBush(String name, String block, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - block: String- The block to placed, must be an instanceof SpreadingBushBlock
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:spreading_bush' configured feature and the matching placed feature
```

- `void simpleBlockState(String name, String blockState, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - blockState: String- The string representation of a block state, the state to be placed
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'minecraft:simple_block' configured feature and the matching placed feature, uses a SimpleStateProvider
```

- `void tallWildCrop(String name, String block, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - block: String- The block to placed, must be an instanceof WildDoubleCropBlock
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:tall_wild_crop' configured feature and the matching placed feature
```

- `void randomPatch(String name, Integer tries, Integer xzSpread, Integer ySpread, String feature, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - tries: Integer- How many times the feature should attempt to place, may be null to default to 128
  - xzSpread: Integer- The horizontal spread of the patch, may be null to default to 7
  - ySpread: Integer- The vertical spread of the patch, may be null to default to 3
  - feature: String- The feature to attempt to place for the patch
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'minecraft:random_patch' configured feature and the matching placed feature
```

- `void spreadingCrop(String name, String block, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - block: String- The block to placed, must be an instanceof WildSpreadingCropBlock
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:spreading_crop' configured feature and the matching placed feature
```

- `BlockToBlockStatesMapEntry boulderState(String block, List<String> blockStates)`

  Parameters:
  - block: String- The registry name of a block to be replaced
  - blockStates: List<String>- A list of string representations of a block state

```
Creates a new block to block state list map entry for use in boulder configured features
```

- `FissureDecoration fissureDecoration(List<BlockToWeightedBlockStateMapEntry> replacementMap, int rarity, int radius, int count)`

  Parameters:
  - replacementMap: List<BlockToWeightedBlockStateMapEntry>- A list of {block[] -> weighted blockstate[]} objects, the additional 'ores' that should spawn around the fissure
  - rarity: int- The rarity that blocks should be replaced with decoration blocks
  - radius: int- The radius around the fissure that blocks should be replaced
  - count: int- The number of blocks that should be placed, actual amount will be `count / rarity`

```
Creates a new fissure decoration object
```

- `BlockToBlockStateMapEntry blockToBlockState(String block, String state)`

  Parameters:
  - block: String- The registry name of a block to be replaced
  - state: String- A string representation of a block state

```
Creates a new block to block state map entry for use in soil disc configured features
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
TFCEvents.worldgenData((event) => {
	// This space (un)intentionally left blank
});
```

