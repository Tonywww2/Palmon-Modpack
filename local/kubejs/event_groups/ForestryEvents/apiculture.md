# ForestryEvents.apiculture

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: ApicultureEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| registerSwarmerMaterial | Item, float |  | void | ✘ |
| registerFlowerType | ResourceLocation, BiPredicate<Level, BlockPos>, PlantRandomFlowerFunction, boolean |  | void | ✘ |
| registerBeeEffect | ResourceLocation, UnaryOperator<IEffectData>, boolean, Function3<IGenome, IEffectData, IBeeHousing, IEffectData>, Function3<IGenome, IEffectData, IBeeHousing, IEffectData>, boolean |  | void | ✘ |
| addVillageBee | ResourceLocation, boolean, Map<IChromosome<?>, IAllele> |  | void | ✘ |
| registerCustomActivityType | ResourceLocation, IsActiveFunction, InactiveErrorFunction, LightPreference, boolean |  | void | ✘ |
| modifyHive | ResourceLocation, Consumer<IHiveBuilder> |  | void | ✘ |
| modifySpecies | ResourceLocation, Consumer<IBeeSpeciesBuilder> |  | void | ✘ |
| registerCustomHive | ResourceLocation, IHiveGen, BlockState, Predicate<Holder<Biome>>, Predicate<HumidityType>, Predicate<TemperatureType>, float, PostGenFunction |  | IHiveBuilder | ✘ |
| registerSpecies | ResourceLocation, String, String, boolean, TextColor |  | IBeeSpeciesBuilder | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

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
ForestryEvents.apiculture((event) => {
	// This space (un)intentionally left blank
});
```

