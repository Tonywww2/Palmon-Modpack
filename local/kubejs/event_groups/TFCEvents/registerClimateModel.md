# TFCEvents.registerClimateModel

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterClimateModelEventJS (third-party)

```
Used to register/create new climate models which can be used during climate model selection
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| register | ResourceLocation, Consumer<Builder> |  | void | ✘ |
| registerClimateModel | ResourceLocation, Consumer<Builder> |  | void | ✘ |
| getDefaultWaterFogCallback |  |  | LevelPosLong2FloatCallback | ✘ |
| registerAdvancedClimateModel | ResourceLocation, Consumer<Builder> |  | void | ✘ |
| getDefaultAverageRainfallCallback |  |  | LevelPos2FloatCallback | ✘ |
| getDefaultWindVectorCallback |  |  | WindVectorCallback | ✘ |
| getDefaultAirFogCallback |  |  | LevelPosLong2FloatCallback | ✘ |
| getDefaultCurrentTemperatureCallback |  |  | TemperatureCallback | ✘ |
| getDefaultAverageTemperatureCallback |  |  | LevelPos2FloatCallback | ✘ |
| newVec2 | float, float |  | Vec2 | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `void register(ResourceLocation name, Consumer<Builder> model)`

  Parameters:
  - name: ResourceLocation- The name of the climate model
  - model: Consumer<Builder>- A consumer for a model builder

```
Creates a new climate model with the given name and properties
```

- `void registerClimateModel(ResourceLocation var0, Consumer<Builder> var1)`

  Parameters:
  - var0: ResourceLocation
  - var1: Consumer<Builder>

```
Deprecated, use `.register`
```

- `LevelPosLong2FloatCallback getDefaultWaterFogCallback()`
```
Deprecated
```

- `void registerAdvancedClimateModel(ResourceLocation var0, Consumer<Builder> var1)`

  Parameters:
  - var0: ResourceLocation
  - var1: Consumer<Builder>

```
Deprecated, use `.register`
```

- `LevelPos2FloatCallback getDefaultAverageRainfallCallback()`
```
Deprecated
```

- `WindVectorCallback getDefaultWindVectorCallback()`
```
Deprecated
```

- `LevelPosLong2FloatCallback getDefaultAirFogCallback()`
```
Deprecated
```

- `TemperatureCallback getDefaultCurrentTemperatureCallback()`
```
Deprecated
```

- `LevelPos2FloatCallback getDefaultAverageTemperatureCallback()`
```
Deprecated
```

- `Vec2 newVec2(float var0, float var1)`

  Parameters:
  - var0: float
  - var1: float

```
Deprecated
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
TFCEvents.registerClimateModel((event) => {
	// This space (un)intentionally left blank
});
```

