# TFCEvents.selectClimateModel

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: SelectClimateModelEventJS (third-party)

```
An event which is posted while a world is loading or selecting its climate model
This provides access to the level, and is fired during world load
It is only fired on server, and the climate model will to synced to client automatically
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getLevel |  |  | Level | ✘ |
| getModelName |  |  | ResourceLocation | ✘ |
| getModel |  |  | ClimateModel | ✘ |
| setModel | ClimateModel |  | void | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Level getLevel()`
```
The event's Level
```

- `ResourceLocation getModelName()`
```
Returns the name of the event's current model
```

- `ClimateModel getModel()`
```
The event's climate model
```

- `void setModel(ClimateModel var0)`

  Parameters:
  - var0: ClimateModel

```
Sets the event's climate model
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
TFCEvents.selectClimateModel((event) => {
	// This space (un)intentionally left blank
});
```

