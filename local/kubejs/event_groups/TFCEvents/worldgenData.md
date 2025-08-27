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
| root | BlockToWeightedBlockStateMapEntry[], Integer, Integer, Integer, Float, Boolean |  | Root | ✘ |
| generic | String, String, JsonObject, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| geode | String, String, String, String[], Consumer<PlacedFeatureProperties> |  | void | ✘ |
| forest | String, String, ForestTypesMapEntry[], Boolean, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| blockToWeightedBlockState | String[], String[] |  | BlockToWeightedBlockStateMapEntry | ✘ |
| forestTypesMapEntry | ForestType, IntProvider, IntProvider, Float, IntProvider, Boolean, Boolean, IntProvider |  | ForestTypesMapEntry | ✘ |
| boulder | String, BlockToBlockStatesMapEntry[], Consumer<PlacedFeatureProperties> |  | void | ✘ |
| clusterVein | String, BlockToWeightedBlockStateMapEntry[], int, float, int, int, int, Consumer<Cluster>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| pipeVein | String, BlockToWeightedBlockStateMapEntry[], int, float, int, int, int, int, int, int, int, int, float, Consumer<Pipe>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| thinSpike | String, String, int, int, int, int, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| babyBoulder | String, BlockToBlockStatesMapEntry[], Consumer<PlacedFeatureProperties> |  | void | ✘ |
| discVein | String, BlockToWeightedBlockStateMapEntry[], int, float, int, int, int, int, Consumer<Disc>, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| ifThen | String, String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| hotSpring | String, String, String, int, boolean, BlockToWeightedBlockStateMapEntry[], FissureDecoration, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| soilDisc | String, BlockToBlockStateMapEntry[], int, int, int, Float, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| tallWildCrop | String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| simpleBlockState | String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| spreadingCrop | String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| randomPatch | String, Integer, Integer, Integer, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| spreadingBush | String, String, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| fissure | String, String, String, Integer, Integer, JsonObject, Integer, Integer, Integer, FissureDecoration, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| forestEntry | String, Consumer<Climate>, String, String, String, String, String[], String, String, String, String, Integer, Integer, Integer, Integer, Boolean, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| fissureDecoration | BlockToWeightedBlockStateMapEntry[], int, int, int |  | FissureDecoration | ✘ |
| randomTree | String, String[], Trunk, TreePlacement, Root, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| trunk | String, int, int, boolean |  | Trunk | ✘ |
| overlayTree | String, String, String, Trunk, Float, TreePlacement, Root, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| treePlacement | int, int, GroundType |  | TreePlacement | ✘ |
| blockToBlockState | String, String |  | BlockToBlockStateMapEntry | ✘ |
| stackedTree | String, TreeLayer[], Trunk, TreePlacement, Root, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| boulderState | String, String[] |  | BlockToBlockStatesMapEntry | ✘ |
| krummholz | String, String, IntProvider, Boolean, Boolean, Consumer<PlacedFeatureProperties> |  | void | ✘ |
| treeLayer | String[], int, int |  | TreeLayer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Root root(BlockToWeightedBlockStateMapEntry[] blocks, Integer width, Integer height, Integer tries, Float specialPlacerSkewChance, Boolean required)`

  Parameters:
  - blocks: BlockToWeightedBlockStateMapEntry[]- A list of {Block[] -> BlockState[]} objects, the replacement map for root blocks
  - width: Integer- The horizontal distance to attempt to place roots. May be null to default to 4
  - height: Integer- The vertical distance to attempt to place roots. May be null to default to 3
  - tries: Integer- The number of attempts to place roots that should be made. May be null to default to 5
  - specialPlacerSkewChance: Float- The chance, in the range [0, 1], for extra roots to be placed. May be null
  - required: Boolean- If roots must be placed

```
Creates a new tree root object for use with tree features
```

- `void generic(String name, String type, JsonObject featureConfig, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - type: String- The type of configured feature to create
  - featureConfig: JsonObject- The config json object for the feature
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a configured feature of the given type with the given config and the matching placed feature
```

- `void geode(String name, String outer, String middle, String[] innerValues, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - outer: String- Sets the outer block state of the geode
  - middle: String- Sets the middle block state of the geode
  - innerValues: String[]- A list of weight block state in string form, sets the inner state of the geode
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a geode configured feature and the matching placed feature
```

- `void forest(String name, String entriesTag, ForestTypesMapEntry[] types, Boolean useWeirdness, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - entriesTag: String- A configured feature tag, the entries that will be placed. All values of the tag must be of the type 'tfc:forest_entry'
  - types: ForestTypesMapEntry[]- A list of {ForestType -> ForestTypeConfig} objects
  - useWeirdness: Boolean- If weirdness should be considered. May be null, defaults to true
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:forest' configured feature and the matching placed feature
```

- `BlockToWeightedBlockStateMapEntry blockToWeightedBlockState(String[] blocks, String[] blockStates)`

  Parameters:
  - blocks: String[]- A list of strings, the registry names of blocks to be replaced
  - blockStates: String[]- A list of string representations of weighted block states

```
Creates a new block list to weighted block state list map entry for use several configured features
```

- `ForestTypesMapEntry forestTypesMapEntry(ForestType type, IntProvider treeCount, IntProvider groundcoverCount, Float perChunkChance, IntProvider bushCount, Boolean hasSpoilerOldGrowth, Boolean allowsOldGrowth, IntProvider leafPileCount)`

  Parameters:
  - type: ForestType- The `ForestType` and the key of this entry
  - treeCount: IntProvider- The tree count, may be null
  - groundcoverCount: IntProvider- The groundcover count, may be null
  - perChunkChance: Float- The chance, in the range [0, 1], per chunk, that forests will spawn
  - bushCount: IntProvider- The bush count, may be null
  - hasSpoilerOldGrowth: Boolean- If this entry has old growth spoilers. May be null to default to false
  - allowsOldGrowth: Boolean- If this entry has old growth trees. May be null to default to false
  - leafPileCount: IntProvider- The leaf pile count, may be null

```
Creates a new forest types map entry for use with forest features
```

- `void boulder(String name, BlockToBlockStatesMapEntry[] states, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - states: BlockToBlockStatesMapEntry[]- A list of {Block -> BlockState[]} objects in string form that define the boulder's state property
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a boulder configured feature and the matching placed feature
```

- `void clusterVein(String name, BlockToWeightedBlockStateMapEntry[] replacementMap, int rarity, float density, int minY, int maxY, int size, Consumer<Cluster> optionals, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - replacementMap: BlockToWeightedBlockStateMapEntry[]- A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
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

- `void pipeVein(String name, BlockToWeightedBlockStateMapEntry[] replacementMap, int rarity, float density, int minY, int maxY, int height, int radius, int minSkew, int maxSkew, int minSlant, int maxSlant, float sign, Consumer<Pipe> optionals, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - replacementMap: BlockToWeightedBlockStateMapEntry[]- A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
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

- `void babyBoulder(String name, BlockToBlockStatesMapEntry[] states, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - states: BlockToBlockStatesMapEntry[]- A list of {Block -> BlockState[]} objects in string form that define the baby boulder's state property
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a baby boulder configured feature and the matching placed feature
```

- `void discVein(String name, BlockToWeightedBlockStateMapEntry[] replacementMap, int rarity, float density, int minY, int maxY, int size, int height, Consumer<Disc> optionals, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - replacementMap: BlockToWeightedBlockStateMapEntry[]- A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
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

- `void hotSpring(String name, String wallState, String fluidState, int radius, boolean allowUnderwater, BlockToWeightedBlockStateMapEntry[] replacesOnFluidContact, FissureDecoration decoration, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - wallState: String- The block state to use for the hot spring, may be null to use the lowest rock layer rock
  - fluidState: String- The fluid to fill the spring with, may be air
  - radius: int- The approximate radius of the hot spring, in the range [1, 16]
  - allowUnderwater: boolean- If the hot spring can generate underwater
  - replacesOnFluidContact: BlockToWeightedBlockStateMapEntry[]- A list of {block[] -> weighted blockstate[]} objects, the blocks to place if placed underwater, may be null
  - decoration: FissureDecoration- A fissure decoration object, may be null to not have one present
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:hot_spring' configured feature and the matching placed feature
```

- `void soilDisc(String name, BlockToBlockStateMapEntry[] replacementMap, int minRadius, int maxRadius, int height, Float integrity, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - replacementMap: BlockToBlockStateMapEntry[]- A list of {block -> block state} objects in string form the define the disc's replacement map
  - minRadius: int- The minimum radius of the soil disc
  - maxRadius: int- The maximum radius of the soil disc
  - height: int- How tall the soil disc should be
  - integrity: Float- A number, in the range [0, 1], the specifies the probability of any given block will place, may be null to specify the default value of 1
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:soil_disc' configured feature and the matching placed feature
```

- `void tallWildCrop(String name, String block, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - block: String- The block to placed, must be an instanceof WildDoubleCropBlock
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:tall_wild_crop' configured feature and the matching placed feature
```

- `void simpleBlockState(String name, String blockState, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - blockState: String- The string representation of a block state, the state to be placed
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'minecraft:simple_block' configured feature and the matching placed feature, uses a SimpleStateProvider
```

- `void spreadingCrop(String name, String block, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - block: String- The block to placed, must be an instanceof WildSpreadingCropBlock
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:spreading_crop' configured feature and the matching placed feature
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

- `void spreadingBush(String name, String block, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - block: String- The block to placed, must be an instanceof SpreadingBushBlock
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:spreading_bush' configured feature and the matching placed feature
```

- `void fissure(String name, String wallState, String fluidState, Integer count, Integer radius, JsonObject minDepth, Integer minPieces, Integer maxPieces, Integer maxPieceLength, FissureDecoration fissureDecoration, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - wallState: String- The blockstate to use for the wall of the fissure, may be null to use the raw rock at the bottom of the world
  - fluidState: String- The blockstate of the fluid to fill the fissure with
  - count: Integer- The number of fissures to place. May be null, defaults to 5
  - radius: Integer- The radius around the target position to attempt to place fissures. May be null, defaults to 12
  - minDepth: JsonObject- A `VerticalAnchor`, the minimum depth of the fissure. May be null, defaults to 16 above bottom
  - minPieces: Integer- The minimum number of pieces that makes up a fissure. May be null, defaults to 10
  - maxPieces: Integer- The maximum number of pieces that make up a fissure. May be null, defaults to 24
  - maxPieceLength: Integer- The maximum length and individual piece of a fissure may be. May be null, defaults to 6
  - fissureDecoration: FissureDecoration- A fissure decoration object, may be null to not have one present
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:fissure' configured feature and the matching placed feature
```

- `void forestEntry(String name, Consumer<Climate> climate, String bushLog, String bushLeaves, String fallenLog, String fallenLeaves, String[] groundCover, String normalTreeFeature, String deadTreeFeature, String oldGrowthTreeFeature, String krummholzFeature, Integer oldGrowthChance, Integer spoilerOldGrowthChance, Integer fallenTreeChance, Integer deadChance, Boolean floating, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is specified
  - climate: Consumer<Climate>- The climate restrictions
  - bushLog: String- The log block to place for bushes. May be null to not have bushes
  - bushLeaves: String- The leaves block to place for bushes. Mau be null to not have bushes
  - fallenLog: String- The log block to place for fallen trees. May be null to not have fallen trees
  - fallenLeaves: String- The leaf block to place for leaf litter. May be null to not have leaf litter
  - groundCover: String[]- A list of weighted block states for other ground cover. May be null to not have any ground cover
  - normalTreeFeature: String- The feature to place for normal trees
  - deadTreeFeature: String- The feature to place for dead trees
  - oldGrowthTreeFeature: String- The feature to place for old growth trees. May be null to place the normal trees in place of old growth trees
  - krummholzFeature: String- The feature to place for krummkolz. May be null to not have krummholz
  - oldGrowthChance: Integer- The chance that a placed tree will be an old growth tree. Higher values are more rare. May be null to default to 6
  - spoilerOldGrowthChance: Integer- The chance that a placed tree will be an old growth tree during spoiler selection. Higher values are more rare. Mau be null to default to 200
  - fallenTreeChance: Integer- The chance that fallen trees will be placed. Higher values are more rare. May be null, defaults to 14
  - deadChance: Integer- The chance that dead trees will be placed. Higher values are more rare. May be null, defaults to 75
  - floating: Boolean- Sets the placement height to be world surface instead of ocean floor. May be null
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:forest_entry' configured feature and the matching placed feature
```

- `FissureDecoration fissureDecoration(BlockToWeightedBlockStateMapEntry[] replacementMap, int rarity, int radius, int count)`

  Parameters:
  - replacementMap: BlockToWeightedBlockStateMapEntry[]- A list of {block[] -> weighted blockstate[]} objects, the additional 'ores' that should spawn around the fissure
  - rarity: int- The rarity that blocks should be replaced with decoration blocks
  - radius: int- The radius around the fissure that blocks should be replaced
  - count: int- The number of blocks that should be placed, actual amount will be `count / rarity`

```
Creates a new fissure decoration object
```

- `void randomTree(String name, String[] structures, Trunk trunk, TreePlacement treePlacement, Root rootSystem, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - structures: String[]- A list of Structures that could be placed
  - trunk: Trunk- THe trunk of the tree, may be null
  - treePlacement: TreePlacement- The tree placement properties
  - rootSystem: Root- The root properties, may be null
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:random_tree' configured feature and matching placed feature
```

- `Trunk trunk(String state, int minHeight, int maxHeight, boolean wide)`

  Parameters:
  - state: String- The block state to place
  - minHeight: int- The minimum height the trunk may be
  - maxHeight: int- The maximum height the trunk may be
  - wide: boolean- If the trunk is 2x2

```
Creates a new tree trunk object for use with tree features
```

- `void overlayTree(String name, String baseStructure, String overlayStructure, Trunk trunk, Float overlayIntegrity, TreePlacement treePlacement, Root rootSystem, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - baseStructure: String- The base structure to place
  - overlayStructure: String- The structure to overlay on top of the base structure
  - trunk: Trunk- The trunk of the tree, may be null
  - overlayIntegrity: Float- The % of overlay blocks to 'rot', in the range [0, 1]. May be null to default to 0.5
  - treePlacement: TreePlacement- The tree placement properties
  - rootSystem: Root- The root properties, maye be null
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:overlay_tree' configured feature and the matching placed feature
```

- `TreePlacement treePlacement(int width, int height, GroundType groundType)`

  Parameters:
  - width: int- The horizontal distance to check
  - height: int- The vertical distance to check
  - groundType: GroundType- The type of ground the tree can place in. May be null to default to 'normal'

```
Creates a new tree placement object for use with tree features
```

- `BlockToBlockStateMapEntry blockToBlockState(String block, String state)`

  Parameters:
  - block: String- The registry name of a block to be replaced
  - state: String- A string representation of a block state

```
Creates a new block to block state map entry for use in soil disc configured features
```

- `void stackedTree(String name, TreeLayer[] layers, Trunk trunk, TreePlacement treePlacement, Root rootSystem, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - layers: TreeLayer[]- A list of tree layers
  - trunk: Trunk- The trunk of the tree
  - treePlacement: TreePlacement- The tree placement properties
  - rootSystem: Root- The root properties, may be null
  - placement: Consumer<PlacedFeatureProperties>- The placement properties

```
Creates a 'tfc:stacked_tree' configured feature and matching placed feature
```

- `BlockToBlockStatesMapEntry boulderState(String block, String[] blockStates)`

  Parameters:
  - block: String- The registry name of a block to be replaced
  - blockStates: String[]- A list of string representations of a block state

```
Creates a new block to block state list map entry for use in boulder configured features
```

- `void krummholz(String name, String block, IntProvider height, Boolean spawnsOnStone, Boolean spawnsOnGravel, Consumer<PlacedFeatureProperties> placement)`

  Parameters:
  - name: String- The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
  - block: String- The block to place
  - height: IntProvider- The height the krummholz may be
  - spawnsOnStone: Boolean- If the krummholz may spawn on stone. May be null to default to false
  - spawnsOnGravel: Boolean- If the krummholz may spawn on gravel. May be null to default to false
  - placement: Consumer<PlacedFeatureProperties>- The placement Properties

```
Creates a 'tfc:krummholz' configured feature and matching placed feature
```

- `TreeLayer treeLayer(String[] templates, int minCount, int maxCount)`

  Parameters:
  - templates: String[]- A list of structures to place
  - minCount: int- The minimum number of structures to place
  - maxCount: int- The maximum number of structures to place

```
Creates a new tree layer object for use with layer tree features
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

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
TFCEvents.worldgenData((event) => {
	// This space (un)intentionally left blank
});
```

