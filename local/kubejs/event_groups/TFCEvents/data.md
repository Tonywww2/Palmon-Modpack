# TFCEvents.data

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: TFCDataEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| foodItem | Ingredient, Consumer<BuildFoodItemData> |  | void | ✘ |
| foodItem | Ingredient, Consumer<BuildFoodItemData>, ResourceLocation |  | void | ✘ |
| fertilizer | Ingredient, Number, Number, Number |  | void | ✘ |
| fertilizer | Ingredient, Number, Number, Number, ResourceLocation |  | void | ✘ |
| drinkable | FluidIngredient, Consumer<BuildDrinkableData>, ResourceLocation |  | void | ✘ |
| drinkable | FluidIngredient, Consumer<BuildDrinkableData> |  | void | ✘ |
| metal | Fluid, float, float, Ingredient, Ingredient, Ingredient, int |  | void | ✘ |
| metal | Fluid, float, float, Ingredient, Ingredient, Ingredient, int, ResourceLocation |  | void | ✘ |
| fuel | Ingredient, float, int, Float |  | void | ✘ |
| fuel | Ingredient, float, int, Float, ResourceLocation |  | void | ✘ |
| climateRange | Consumer<BuildClimateRangeData>, ResourceLocation |  | void | ✘ |
| sluicing | Ingredient, String |  | void | ✘ |
| sluicing | Ingredient, String, ResourceLocation |  | void | ✘ |
| fauna | Consumer<Climate>, Consumer<BuildFaunaData>, ResourceLocation |  | void | ✘ |
| entityDamageResistance | String, Integer, Integer, Integer, ResourceLocation |  | void | ✘ |
| entityDamageResistance | String, Integer, Integer, Integer |  | void | ✘ |
| itemDamageResistance | Ingredient, Integer, Integer, Integer |  | void | ✘ |
| itemDamageResistance | Ingredient, Integer, Integer, Integer, ResourceLocation |  | void | ✘ |
| panning | BlockIngredient, String, List<String> |  | void | ✘ |
| panning | BlockIngredient, String, List<String>, ResourceLocation |  | void | ✘ |
| itemHeat | Ingredient, float, Float, Float, ResourceLocation |  | void | ✘ |
| itemHeat | Ingredient, float, Float, Float |  | void | ✘ |
| itemSize | Ingredient, Size, Weight |  | void | ✘ |
| itemSize | Ingredient, Size, Weight, ResourceLocation |  | void | ✘ |
| knappingType | Ingredient, int, int, ResourceLocation, boolean, boolean, boolean, ItemStack, ResourceLocation |  | void | ✘ |
| lampFuel | FluidIngredient, BlockIngredient, int |  | void | ✘ |
| lampFuel | FluidIngredient, BlockIngredient, int, ResourceLocation |  | void | ✘ |
| support | BlockIngredient, int, int, int |  | void | ✘ |
| support | BlockIngredient, int, int, int, ResourceLocation |  | void | ✘ |
| beneathNetherFertilizer | Ingredient, Float, Float, Float, Float, Float, ResourceLocation |  | void | ✘ |
| beneathNetherFertilizer | Ingredient, Float, Float, Float, Float, Float |  | void | ✘ |
| beneathLostPage | Ingredient, Item, int[], int[], Punishment[], String, ResourceLocation |  | void | ✘ |
| beneathLostPage | Ingredient, Item, int[], int[], Punishment[], String |  | void | ✘ |
| firmalifeGreenhouseType | BlockIngredient, int |  | void | ✘ |
| firmalifeGreenhouseType | BlockIngredient, int, ResourceLocation |  | void | ✘ |
| firmalifePlantable | Ingredient, PlanterType, Integer, Integer, Float, ItemStack, ItemStack, NutrientType, String[], String, ResourceLocation |  | void | ✘ |
| firmalifePlantable | Ingredient, PlanterType, Integer, Integer, Float, ItemStack, ItemStack, NutrientType, String[], String |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `void foodItem(Ingredient ingredient, Consumer<BuildFoodItemData> foodItemData)`

  Parameters:
  - ingredient: Ingredient- The ingredient the food definition applies to
  - foodItemData: Consumer<BuildFoodItemData>- The food item properties that are applied to the ingredient

```
Adds a food definition to the specified ingredient
```

- `void foodItem(Ingredient ingredient, Consumer<BuildFoodItemData> foodItemData, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient the food definition applies to
  - foodItemData: Consumer<BuildFoodItemData>- The food item properties that are applied to the ingredient
  - name: ResourceLocation- The name of the food item data

```
Adds a food definition to the specified ingredient
```

- `void fertilizer(Ingredient ingredient, Number nitrogen, Number phosphorous, Number potassium)`

  Parameters:
  - ingredient: Ingredient- The ingredient the fertilizer data applies to
  - nitrogen: Number- The nitrogen value of the fertilizer, may be null to not define a value, defaults to 0
  - phosphorous: Number- The phosphorous value of the fertilizer, may be null to not define a value, defaults to 0
  - potassium: Number- The potassium value of the fertilizer, amy be null to not define a value, defaults to 0

```
Adds a fertilizer definition to the specified ingredient
```

- `void fertilizer(Ingredient ingredient, Number nitrogen, Number phosphorous, Number potassium, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient the fertilizer data applies to
  - nitrogen: Number- The nitrogen value of the fertilizer, may be null to not define a value, defaults to 0
  - phosphorous: Number- The phosphorous value of the fertilizer, may be null to not define a value, defaults to 0
  - potassium: Number- The potassium value of the fertilizer, amy be null to not define a value, defaults to 0
  - name: ResourceLocation- The name of the fertilizer data

```
Adds a fertilizer definition to the specified ingredient
```

- `void drinkable(FluidIngredient fluidIngredient, Consumer<BuildDrinkableData> drinkableData, ResourceLocation name)`

  Parameters:
  - fluidIngredient: FluidIngredient- The fluids this drinkable applies to
  - drinkableData: Consumer<BuildDrinkableData>- The drinkable properties that are applied to the fluid ingredient
  - name: ResourceLocation- The name of the drinkable data

```
Defines that a fluid is directly drinkable
```

- `void drinkable(FluidIngredient fluidIngredient, Consumer<BuildDrinkableData> drinkableData)`

  Parameters:
  - fluidIngredient: FluidIngredient- The fluids this drinkable applies to
  - drinkableData: Consumer<BuildDrinkableData>- The drinkable properties that are applied to the fluid ingredient

```
Defines that a fluid is directly drinkable
```

- `void metal(Fluid fluid, float meltTemperature, float heatCapacity, Ingredient ingot, Ingredient doubleIngot, Ingredient sheet, int tier)`

  Parameters:
  - fluid: Fluid- The fluid the metal is based on
  - meltTemperature: float- The melting temperature °C of the metal
  - heatCapacity: float- Specifies how fast the metal heats up relative to others. Measured in Energy / (mB x °C)
  - ingot: Ingredient- The ingredient which specifies the metal's ingots, may be null
  - doubleIngot: Ingredient- The ingredient which specifies the metal's double ingots, may be null
  - sheet: Ingredient- The ingredient which specifies the metal's sheets, may be null
  - tier: int- The tier of the metal

```
Defines a metal
```

- `void metal(Fluid fluid, float meltTemperature, float heatCapacity, Ingredient ingot, Ingredient doubleIngot, Ingredient sheet, int tier, ResourceLocation name)`

  Parameters:
  - fluid: Fluid- The fluid the metal is based on
  - meltTemperature: float- The melting temperature °C of the metal
  - heatCapacity: float- Specifies how fast the metal heats up relative to others. Measured in Energy / (mB x °C)
  - ingot: Ingredient- The ingredient which specifies the metal's ingots, may be null
  - doubleIngot: Ingredient- The ingredient which specifies the metal's double ingots, may be null
  - sheet: Ingredient- The ingredient which specifies the metal's sheets, may be null
  - tier: int- The tier of the metal
  - name: ResourceLocation- The name of the metal

```
Defines a metal
```

- `void fuel(Ingredient ingredient, float temperature, int duration, Float purity)`

  Parameters:
  - ingredient: Ingredient- The ingredient the fuel definition applies to
  - temperature: float- The temperature °C that the fuel burns at
  - duration: int- The number of ticks the fuel burns for
  - purity: Float- The purity of the fuel, may be null to not specify a value

```
Adds a fuel definition to the specified ingredient
```

- `void fuel(Ingredient ingredient, float temperature, int duration, Float purity, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient the fuel definition applies to
  - temperature: float- The temperature °C that the fuel burns at
  - duration: int- The number of ticks the fuel burns for
  - purity: Float- The purity of the fuel, may be null to not specify a value
  - name: ResourceLocation- The name of the fuel definition

```
Adds a fuel definition to the specified ingredient
```

- `void climateRange(Consumer<BuildClimateRangeData> climateRange, ResourceLocation name)`

  Parameters:
  - climateRange: Consumer<BuildClimateRangeData>- Climate range properties for the given climate range
  - name: ResourceLocation- The name of the climate range

```
Specifies the climate range data of the given name
```

- `void sluicing(Ingredient ingredient, String lootTable)`

  Parameters:
  - ingredient: Ingredient- The ingredient the sluicing definition applies to
  - lootTable: String- The location of a loot table to be dropped for this item

```
Adds a sluicing definition to the ingredient
```

- `void sluicing(Ingredient ingredient, String lootTable, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient the sluicing definition applies to
  - lootTable: String- The location of a loot table to be dropped for this item
  - name: ResourceLocation- The name of the sluicing definition

```
Adds a sluicing definition to the ingredient
```

- `void fauna(Consumer<Climate> climate, Consumer<BuildFaunaData> fauna, ResourceLocation name)`

  Parameters:
  - climate: Consumer<Climate>- The fauna's climate requirements
  - fauna: Consumer<BuildFaunaData>- Additional fauna properties for the given fauna
  - name: ResourceLocation- The name of the fauna definition

```
Specifies the fauna data of the given name
```

- `void entityDamageResistance(String entityTag, Integer piercing, Integer slashing, Integer crushing, ResourceLocation name)`

  Parameters:
  - entityTag: String- The entity tag to apply the damage resistances to
  - piercing: Integer- The piercing value of this resistance, may be null to not specify a value
  - slashing: Integer- The slashing value of this resistance, may be null to not specify a value
  - crushing: Integer- the crushing value of this resistance, may be null to not specify a value
  - name: ResourceLocation- The name of the damage resistance

```
Adds an entity damage resistance to the specified entity tag
```

- `void entityDamageResistance(String entityTag, Integer piercing, Integer slashing, Integer crushing)`

  Parameters:
  - entityTag: String- The entity tag to apply the damage resistances to
  - piercing: Integer- The piercing value of this resistance, may be null to not specify a value
  - slashing: Integer- The slashing value of this resistance, may be null to not specify a value
  - crushing: Integer- the crushing value of this resistance, may be null to not specify a value

```
Adds an entity damage resistance to the specified entity tag
```

- `void itemDamageResistance(Ingredient ingredient, Integer piercing, Integer slashing, Integer crushing)`

  Parameters:
  - ingredient: Ingredient- The ingredient this resistance applies to
  - piercing: Integer- The piercing value of this resistance, may be null to not specify a value
  - slashing: Integer- The slashing value of this resistance, may be null to not specify a value
  - crushing: Integer- the crushing value of this resistance, may be null to not specify a value

```
Adds an item damage resistance to the specified ingredient
```

- `void itemDamageResistance(Ingredient ingredient, Integer piercing, Integer slashing, Integer crushing, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient this resistance applies to
  - piercing: Integer- The piercing value of this resistance, may be null to not specify a value
  - slashing: Integer- The slashing value of this resistance, may be null to not specify a value
  - crushing: Integer- the crushing value of this resistance, may be null to not specify a value
  - name: ResourceLocation- The name of the damage resistance

```
Adds an item damage resistance to the specified ingredient
```

- `void panning(BlockIngredient blockIngredient, String lootTable, List<String> models)`

  Parameters:
  - blockIngredient: BlockIngredient- The block ingredient the definition applies to
  - lootTable: String- The location of a loot table to be dropped by the ingredient
  - models: List<String>- A list of model locations to be iterated through as panning progresses

```
Adds a panning definition to the block ingredient
```

- `void panning(BlockIngredient blockIngredient, String lootTable, List<String> models, ResourceLocation name)`

  Parameters:
  - blockIngredient: BlockIngredient- The block ingredient the definition applies to
  - lootTable: String- The location of a loot table to be dropped by the ingredient
  - models: List<String>- A list of model locations to be iterated through as panning progresses
  - name: ResourceLocation- The name of the panning definition

```
Adds a panning definition to the block ingredient
```

- `void itemHeat(Ingredient ingredient, float heatCapacity, Float forgingTemperature, Float weldingTemperature, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient the heat definition applies to
  - heatCapacity: float- Specifies how fast the ingredient heats up relative to others. Measured in Energy / °C
  - forgingTemperature: Float- Specifies the temperature °C required to work the ingredient. May be null to allow working at any temperature
  - weldingTemperature: Float- Specifies the temperature °C required to weld the ingredient. May be null to allow welding at any temperature
  - name: ResourceLocation- The name of the heat definition

```
Adds a heat definition to the specified ingredient
```

- `void itemHeat(Ingredient ingredient, float heatCapacity, Float forgingTemperature, Float weldingTemperature)`

  Parameters:
  - ingredient: Ingredient- The ingredient the heat definition applies to
  - heatCapacity: float- Specifies how fast the ingredient heats up relative to others. Measured in Energy / °C
  - forgingTemperature: Float- Specifies the temperature °C required to work the ingredient. May be null to allow working at any temperature
  - weldingTemperature: Float- Specifies the temperature °C required to weld the ingredient. May be null to allow welding at any temperature

```
Adds a heat definition to the specified ingredient
```

- `void itemSize(Ingredient ingredient, Size size, Weight weight)`

  Parameters:
  - ingredient: Ingredient- The ingredient this item size definition applies to
  - size: Size- Sets the size of the definition, may be 'tiny', 'very_small', 'small', 'normal', 'large', 'very_large', 'huge', or null to not specify a size
  - weight: Weight- Sets the weight of the definition, may be 'very_light', 'light', 'medium', 'heavy', 'very_heavy', or null to not specify a weight

```
Adds an item size definition tot he specified ingredient
```

- `void itemSize(Ingredient ingredient, Size size, Weight weight, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient this item size definition applies to
  - size: Size- Sets the size of the definition, may be 'tiny', 'very_small', 'small', 'normal', 'large', 'very_large', 'huge', or null to default to 'medium'
  - weight: Weight- Sets the weight of the definition, may be 'very_light', 'light', 'medium', 'heavy', 'very_heavy', or null to default to 'medium'
  - name: ResourceLocation- The name of the item size definition

```
Adds an item size definition to the specified ingredient
```

- `void knappingType(Ingredient ingredient, int ingredientCount, int amountToConsume, ResourceLocation clickSound, boolean consumeAfterComplete, boolean useDisabledTexture, boolean spawnsParticles, ItemStack jeiIconItem, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient of the knapping type's item stack ingredient
  - ingredientCount: int- The count of the knapping type's item stack ingredient
  - amountToConsume: int- The amount of items that get used by the recipe
  - clickSound: ResourceLocation- The registry name of a sound that plays when knapping occurs
  - consumeAfterComplete: boolean- If items should be consumed as soon as a square is clicked, or when the result is removed from the slot
  - useDisabledTexture: boolean- If true, a clicked slot will show a different texture rather than nothing at all
  - spawnsParticles: boolean- if true, the screen will show particles when knapping
  - jeiIconItem: ItemStack- An item stack, used as the category icon in the auto-generated jei category
  - name: ResourceLocation- The name of the knapping type

```
Defines a knapping type
```

- `void lampFuel(FluidIngredient fluidIngredient, BlockIngredient blockIngredient, int burnRate)`

  Parameters:
  - fluidIngredient: FluidIngredient- The fluid ingredient which determines which fluids the the lamp fuel applies to
  - blockIngredient: BlockIngredient- The block ingredient which determines what (lamp) blocks are valid for this fuel
  - burnRate: int- How fast the lamp consumes fuel, in ticks per mB

```
Defines a lamp fuel
```

- `void lampFuel(FluidIngredient fluidIngredient, BlockIngredient blockIngredient, int burnRate, ResourceLocation name)`

  Parameters:
  - fluidIngredient: FluidIngredient- The fluid ingredient which determines which fluids the the lamp fuel applies to
  - blockIngredient: BlockIngredient- The block ingredient which determines what (lamp) blocks are valid for this fuel
  - burnRate: int- How fast the lamp consumes fuel, in ticks per mB
  - name: ResourceLocation- The name of the lamp fuel

```
Defines a lamp fuel
```

- `void support(BlockIngredient blockIngredient, int up, int down, int horizontal)`

  Parameters:
  - blockIngredient: BlockIngredient- The block ingredient that defines what blocks the definition applies to
  - up: int- The number of blocks upwards the block supports
  - down: int- The number og blocks downwards the block supports
  - horizontal: int- The number of blocks horizontally the block supports

```
Defines a support definition
```

- `void support(BlockIngredient blockIngredient, int up, int down, int horizontal, ResourceLocation name)`

  Parameters:
  - blockIngredient: BlockIngredient- The block ingredient that defines what blocks the definition applies to
  - up: int- The number of blocks upwards the block supports
  - down: int- The number og blocks downwards the block supports
  - horizontal: int- The number of blocks horizontally the block supports
  - name: ResourceLocation- The name of the support definition

```
Defines a support definition
```

- `void beneathNetherFertilizer(Ingredient ingredient, Float death, Float destruction, Float decay, Float sorrow, Float flame, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The ingredient for the nether fertilizer
  - death: Float- The death value of the fertilizer, may be null, defaults to 0
  - destruction: Float- The destruction value of the fertilizer, may be null, defaults to 0
  - decay: Float- The decay value of the fertilizer, may be null, defaults to 0
  - sorrow: Float- The sorrow value of the fertilizer, may be null, defaults to 0
  - flame: Float- The flame value of the fertilizer, may be null, defaults to 0
  - name: ResourceLocation- The name of the nether fertilizer

```
Defines a new nether fertilizer
```

- `void beneathNetherFertilizer(Ingredient ingredient, Float death, Float destruction, Float decay, Float sorrow, Float flame)`

  Parameters:
  - ingredient: Ingredient- The ingredient for the nether fertilizer
  - death: Float- The death value of the fertilizer, may be null, defaults to 0
  - destruction: Float- The destruction value of the fertilizer, may be null, defaults to 0
  - decay: Float- The decay value of the fertilizer, may be null, defaults to 0
  - sorrow: Float- The sorrow value of the fertilizer, may be null, defaults to 0
  - flame: Float- The flame value of the fertilizer, may be null, defaults to 0

```
Defines a new nether fertilizer
```

- `void beneathLostPage(Ingredient cost, Item reward, int[] costs, int[] rewards, Punishment[] punishments, String langKey, ResourceLocation name)`

  Parameters:
  - cost: Ingredient- The item required for this ritual
  - reward: Item- The item reward for this ritual
  - costs: int[]- The number of `cost` items that are required, will be randomly selected from when the page is initialized
  - rewards: int[]- The number of `reward` items that will be resultant from a ritual, will be selected from when the page is initialized
  - punishments: Punishment[]- Possible punishments for this ritual, will be randomly selected from when the page is initialized
  - langKey: String- A custom lang key to use for the ingredient in the lost page screen
  - name: ResourceLocation- The name of the lost page definition

```
Defines a new lost page
```

- `void beneathLostPage(Ingredient cost, Item reward, int[] costs, int[] rewards, Punishment[] punishments, String langKey)`

  Parameters:
  - cost: Ingredient- The item required for this ritual
  - reward: Item- The item reward for this ritual
  - costs: int[]- The number of `cost` items that are required, will be randomly selected from when the page is initialized
  - rewards: int[]- The number of `reward` items that will be resultant from a ritual, will be selected from when the page is initialized
  - punishments: Punishment[]- Possible punishments for this ritual, will be randomly selected from when the page is initialized
  - langKey: String- A custom lang key to use for the ingredient in the lost page screen

```
Defines a new lost page
```

- `void firmalifeGreenhouseType(BlockIngredient ingredient, int tier)`

  Parameters:
  - ingredient: BlockIngredient- The blocks that make up the greenhouse type
  - tier: int- The tier of the greenhouse

```
Defines a new greenhouse type
```

- `void firmalifeGreenhouseType(BlockIngredient ingredient, int tier, ResourceLocation name)`

  Parameters:
  - ingredient: BlockIngredient- The blocks that make up the greenhouse type
  - tier: int- The tier of the greenhouse
  - name: ResourceLocation- The name of the greenhouse type

```
Defines a new greenhouse type
```

- `void firmalifePlantable(Ingredient ingredient, PlanterType planterType, Integer tier, Integer stages, Float extraSeedChance, ItemStack seed, ItemStack crop, NutrientType nutrient, String[] textures, String special, ResourceLocation name)`

  Parameters:
  - ingredient: Ingredient- The seed items to be used for this plantable definition
  - planterType: PlanterType- The planter type to use, may be null to default to 'quad'
  - tier: Integer- The greenhouse type tier the plantable requires to function, defaults to 0
  - stages: Integer- How many stages the planter has, one less than the number of textures the planter must cycle through, may be null for 'trellis', and 'bonsai' planter types
  - extraSeedChance: Float- A number, in the range [0, 1], that determines the chance of getting an extra seed back when the planter grows, may be null to default to 0.5
  - seed: ItemStack- The seed returned by the planter when finished growing, if null no seed will be dropped
  - crop: ItemStack- The product of the crop, will always be returned
  - nutrient: NutrientType- The nutrient he plant consumes, may be null to default to 'nitrogen'
  - textures: String[]- An array of strings, corresponding to the textures the planter uses

Usage:
For planter types `large`, `quad`, `hydroponic`, and `hanging`: Order the textures the same as the growth order
For planter type `trellis`: Order the textures in the order growing, dry, flowering, fruiting
For planter type `bonsai`: Order the textures in the order fruiting. dry. flowering, branch, leaves

  - special: String- A string, the extra texture used by hanging planter types

Usage:
For planter types `large`, `quad`, `hydroponic`, `trellis`, and `bonsai`: Pass in null
For planter type `hanging`: Pass the fruit texture

  - name: ResourceLocation- The name of the plantable definition

```
Defines a new plantable definition
```

- `void firmalifePlantable(Ingredient ingredient, PlanterType planterType, Integer tier, Integer stages, Float extraSeedChance, ItemStack seed, ItemStack crop, NutrientType nutrient, String[] textures, String special)`

  Parameters:
  - ingredient: Ingredient- The seed items to be used for this plantable definition
  - planterType: PlanterType- The planter type to use, may be null to default to 'quad'
  - tier: Integer- The greenhouse type tier the plantable requires to function, defaults to 0
  - stages: Integer- How many stages the planter has, one less than the number of textures the planter must cycle through, may be null for 'trellis', and 'bonsai' planter types
  - extraSeedChance: Float- A number, in the range [0, 1], that determines the chance of getting an extra seed back when the planter grows, may be null to default to 0.5
  - seed: ItemStack- The seed returned by the planter when finished growing, if null no seed will be dropped
  - crop: ItemStack- The product of the crop, will always be returned
  - nutrient: NutrientType- The nutrient he plant consumes, may be null to default to 'nitrogen'
  - textures: String[]- An array of strings, corresponding to the textures the planter uses

Usage:
For planter types `large`, `quad`, `hydroponic`, and `hanging`: Order the textures the same as the growth order
For planter type `trellis`: Order the textures in the order growing, dry, flowering, fruiting
For planter type `bonsai`: Order the textures in the order fruiting. dry. flowering, branch, leaves

  - special: String- A string, the extra texture used by hanging planter types

Usage:
For planter types `large`, `quad`, `hydroponic`, `trellis`, and `bonsai`: Pass in null
For planter type `hanging`: Pass the fruit texture


```
Defines a new plantable definition
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
TFCEvents.data((event) => {
	// This space (un)intentionally left blank
});
```

