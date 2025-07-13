# TFCEvents.collapse

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: CollapseEventJS (third-party)

```
Fires whenever a collapse happens for both real and fake collapses```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getLevel |  |  | Level | ✘ |
| isFake |  |  | boolean | ✘ |
| getCenterBlock |  |  | BlockContainerJS | ✘ |
| getCenterPos |  |  | BlockPos | ✘ |
| getSecondaryPositions |  |  | List<BlockPos> | ✘ |
| getRadiusSquared |  |  | double | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `List<BlockPos> getSecondaryPositions()`
```
Returns a list of `BlockPos`es where a block collapses or, if the collapse is fake, particles spawn
```

- `double getRadiusSquared()`
```
Returns the maximum distance from the center block of collapsing blocks, or 0 if the collapse is fake
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
TFCEvents.collapse((event) => {
	// This space (un)intentionally left blank
});
```

