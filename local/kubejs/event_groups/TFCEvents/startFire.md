# TFCEvents.startFire

## Basic info

- Valid script types: [SERVER]

- Has result? ✔

- Event class: StartFireEventJS (third-party)

```
This event is used for lighting things with fire. It can be cancelled to handle lighting of an external device or source
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getLevel |  |  | Level | ✘ |
| getItem |  |  | ItemStack | ✘ |
| getTargetedFace |  |  | Direction | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getBlock |  |  | BlockContainerJS | ✘ |
| isStrong |  |  | boolean | ✘ |
| removeGameStage | String |  | void | ✘ |
| addGameStage | String |  | void | ✘ |
| getPlayer |  |  | Player | ✘ |
| hasGameStage | String |  | boolean | ✘ |
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
Returns the level of the event
```

- `ItemStack getItem()`
```
Returns the item used to start the fire
```

- `Direction getTargetedFace()`
```
Returns the targeted face of the event
```

- `LivingEntity getEntity()`
```
Returns the player that started the fire, may be null
```

- `BlockContainerJS getBlock()`
```
Returns the level and position of the event
```

- `boolean isStrong()`
```
Returns true if fire created is considered 'strong'
```

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
```

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
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
TFCEvents.startFire((event) => {
	// This space (un)intentionally left blank
});
```

