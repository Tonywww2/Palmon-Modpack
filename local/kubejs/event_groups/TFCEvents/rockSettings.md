# TFCEvents.rockSettings

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RockSettingsEventJS (third-party)

```
Define new rocks which can be referenced in a world preset json```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| defineRock | ResourceLocation, Block, Block, Block, Block, Block, Block, Block, Block, Block |  | RockSettings | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `RockSettings defineRock(ResourceLocation id, Block raw, Block hardened, Block gravel, Block cobble, Block sand, Block sandstone, Block spike, Block loose, Block mossyLoose)`

  Parameters:
  - id: ResourceLocation- The name of the the rock layer
  - raw: Block- The registry name of the raw block of the rock layer
  - hardened: Block- The registry name of the hardened block of the rock layer
  - gravel: Block- The registry name of the gravel block of the rock layer
  - cobble: Block- The registry name of the cobble block of the rock layer
  - sand: Block- The registry name of the sand block of the rock layer
  - sandstone: Block- The registry name of the sandstone block of the rock layer
  - spike: Block- The registry name of the spike block of the rock layer, may be null to indicate no spike block
  - loose: Block- The registry name of the loose block of the rock layer, may be null to indicate no loose block
  - mossyLoose: Block- The registry name of the mossy loose block of the rock layer, may be null to indicate no mossy loose block

```
Registers a new rock layer with the given blocks to TFC. Does not add it to the world. This can be used to override existing layers
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
TFCEvents.rockSettings((event) => {
	// This space (un)intentionally left blank
});
```

