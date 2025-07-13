# TFCEvents.defaultWorldSettings

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: ModifyDefaultWorldGenSettingsEventJS (third-party)

```
Allows for editing of TFC's worldgen values after the `overworld.json` file is read
and before players are able to edit values on TFC's worldgen configuration screen

Note: this event may fire for already existing worlds, but any changes made will not effect them
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| SETTINGS_TRANSFORMER | MapCodec.ResultFunction<Settings> | ✔ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| flatBedrock |  |  | void | ✘ |
| flatBedrock | boolean |  | void | ✘ |
| getRock | String |  | RockSettings | ✘ |
| removeLayer | String |  | void | ✘ |
| removeOceanFloorLayer | String |  | void | ✘ |
| setTemperatureScale | int |  | void | ✘ |
| getOceanFloorLayers |  |  | List<String> | ✘ |
| setTemperatureConstant | float |  | void | ✘ |
| removeVolcanicLayer | String |  | void | ✘ |
| setRainfallConstant | float |  | void | ✘ |
| setSpawnDistance | int |  | void | ✘ |
| setSpawnCenterZ | int |  | void | ✘ |
| setRainfallScale | int |  | void | ✘ |
| setSpawnCenterX | int |  | void | ✘ |
| setContinentalness | float |  | void | ✘ |
| addLandLayer | String |  | void | ✘ |
| removeFromBottom | String |  | void | ✘ |
| removeRock | String |  | void | ✘ |
| defineLayer | String, Map<String, String> |  | void | ✘ |
| getLayerIds |  |  | List<String> | ✘ |
| removeLandLayer | String |  | void | ✘ |
| setGrassDensity | float |  | void | ✘ |
| getRockNames |  |  | Set<String> | ✘ |
| addRock | RockSettings, String, boolean |  | void | ✘ |
| addToBottom | String |  | void | ✘ |
| addRockFromId | ResourceLocation, String, boolean |  | void | ✘ |
| cleanSlate |  |  | void | ✘ |
| addOceanFloorLayer | String |  | void | ✘ |
| addVolcanicLayer | String |  | void | ✘ |
| addUpliftLayer | String |  | void | ✘ |
| removeUpliftLayer | String |  | void | ✘ |
| getVolcanicLayers |  |  | List<String> | ✘ |
| getLandLayers |  |  | List<String> | ✘ |
| getUpliftLayers |  |  | List<String> | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `void flatBedrock()`
```
Sets flat bedrock to true
```

- `void flatBedrock(boolean var0)`

  Parameters:
  - var0: boolean

```
Sets if the world should have flat bedrock, defaults to false
```

- `RockSettings getRock(String var0)`

  Parameters:
  - var0: String

```
Gets the `RockSettings` with the given name
```

- `void removeLayer(String var0)`

  Parameters:
  - var0: String

```
Removes the given layer from the generator
```

- `void removeOceanFloorLayer(String var0)`

  Parameters:
  - var0: String

```
Removes the given layer from the 'ocean_floor' layer type
```

- `void setTemperatureScale(int var0)`

  Parameters:
  - var0: int

```
Sets the temperature scale of the world, the distance from pole to pole, defaults to 20000
```

- `List<String> getOceanFloorLayers()`
```
Gets the layers that are currently in the 'ocean_floor' layer type
```

- `void setTemperatureConstant(float var0)`

  Parameters:
  - var0: float

```
Sets the relative constant temperature of the world, defaults to 0
```

- `void removeVolcanicLayer(String var0)`

  Parameters:
  - var0: String

```
Removes the given layer from the 'volcanic' layer type
```

- `void setRainfallConstant(float var0)`

  Parameters:
  - var0: float

```
Sets the relative constant temperature of the world, defaults to 0
```

- `void setSpawnDistance(int var0)`

  Parameters:
  - var0: int

```
Sets the distance from the spawn center that players may spawn
```

- `void setSpawnCenterZ(int var0)`

  Parameters:
  - var0: int

```
Sets the spawn center on the z-coordinate
```

- `void setRainfallScale(int var0)`

  Parameters:
  - var0: int

```
Sets the rainfall scale of the world, the distance between peaks in intensity, defaults to 20000
```

- `void setSpawnCenterX(int var0)`

  Parameters:
  - var0: int

```
Sets the spawn center on the x-coordinate
```

- `void setContinentalness(float var0)`

  Parameters:
  - var0: float

```
Sets the proportion of the world that is land instead of water, defaults to 0.5
```

- `void addLandLayer(String var0)`

  Parameters:
  - var0: String

```
Adds the given layer to the 'land' layer type
```

- `void removeFromBottom(String var0)`

  Parameters:
  - var0: String

```
Removes the given rock from the bottom layer
```

- `void removeRock(String var0)`

  Parameters:
  - var0: String

```
Removes the given rock from the generator
```

- `void defineLayer(String id, Map<String, String> rockMap)`

  Parameters:
  - id: String- The name of the layer to add
  - rockMap: Map<String, String>- A map of rock names to layer names, associates a rock with the layer that will generate underneath it

```
Defines a new rock layer
```

- `List<String> getLayerIds()`
```
Gets the names of all layers currently in the generator's pool of layers
```

- `void removeLandLayer(String var0)`

  Parameters:
  - var0: String

```
Removes the given layer from the 'land' layer type
```

- `void setGrassDensity(float var0)`

  Parameters:
  - var0: float

```
Sets the grass density of the world, defaults to 0.5
```

- `Set<String> getRockNames()`
```
Gets the names of all rocks currently in the generator's pool of rocks
```

- `void addRock(RockSettings rock, String name, boolean bottom)`

  Parameters:
  - rock: RockSettings- the `RockSettings` to add
  - name: String- The name which the rock can be referenced by
  - bottom: boolean- If the rock should be added as a 'bottom' layer rock

```
Adds the given rock to the generator's pool of available rocks
```

- `void addToBottom(String var0)`

  Parameters:
  - var0: String

```
Adds the given rock to the bottom layer
```

- `void addRockFromId(ResourceLocation id, String name, boolean bottom)`

  Parameters:
  - id: ResourceLocation- The registered id of the `RockSettings` to add
  - name: String- The name which the rock can be referenced by
  - bottom: boolean- If the rock should be added as a 'bottom' layer rock

```
Adds the given rock to the generator's pool of available rocks
```

- `void cleanSlate()`
```
Removes all rocks and rock layers from the generator
```

- `void addOceanFloorLayer(String var0)`

  Parameters:
  - var0: String

```
Adds the given layer to the 'ocean_floor' layer type
```

- `void addVolcanicLayer(String var0)`

  Parameters:
  - var0: String

```
Adds the given layer to the 'volcanic' layer type
```

- `void addUpliftLayer(String var0)`

  Parameters:
  - var0: String

```
Adds the given layer to the 'uplift' layer type
```

- `void removeUpliftLayer(String var0)`

  Parameters:
  - var0: String

```
Removes the given layer from the 'uplift' layer type
```

- `List<String> getVolcanicLayers()`
```
Gets the layers that are currently in the 'volcanic' layer type
```

- `List<String> getLandLayers()`
```
Gets the layers that are currently in the 'land' layer type
```

- `List<String> getUpliftLayers()`
```
Gets the layers that are currently in the 'uplift' layer type
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
TFCEvents.defaultWorldSettings((event) => {
	// This space (un)intentionally left blank
});
```

