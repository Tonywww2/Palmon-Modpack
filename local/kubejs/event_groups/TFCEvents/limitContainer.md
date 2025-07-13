# TFCEvents.limitContainer

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: ContainerLimiterEventJS (third-party)

```
This event is fired whenever a player closes a menu that is not the player's own inventory

A full list of valid menus can be obtained by running the command `/kubejs dump_registry minecraft:menu`

The implementation of this event is based on Oversized Item in Storage area, a 1.12 addon. It is licensed under the BSD License
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| limit | Size, int, int, boolean |  | void | ✘ |
| limit | Size, int, int |  | void | ✘ |
| limit | Size, boolean |  | void | ✘ |
| limit | Size |  | void | ✘ |
| lowerLimit | Size, int, int |  | void | ✘ |
| lowerLimit | Size, int, int, boolean |  | void | ✘ |
| lowerLimit | Size, boolean |  | void | ✘ |
| lowerLimit | Size |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `void limit(Size size, int min, int max, boolean allowsEqual)`

  Parameters:
  - size: Size- The size the slots are limited to
  - min: int- The index of the start of the slots to be limited
  - max: int- The index of the end of the lots to be limited
  - allowsEqual: boolean- If items with a size equal to the provided `size` should be allowed

```
Limits the given slot range to the provided size
```

- `void limit(Size size, int min, int max)`

  Parameters:
  - size: Size- The size the slots are limited to
  - min: int- The index of the start of the slots to be limited
  - max: int- The index of the end of the lots to be limited

```
Limits the given slot range to the provided size, disallowing items with a size greater than the given size
```

- `void limit(Size size, boolean allowsEqual)`

  Parameters:
  - size: Size- The size which the container is limited to
  - allowsEqual: boolean- If items with a size equal to the provided `size` should be allowed

```
Limits the entire container to the given size
```

- `void limit(Size var0)`

  Parameters:
  - var0: Size

```
Limits the entire container to the given size, disallowing items with a size greater than the given size
```

- `void lowerLimit(Size size, int min, int max)`

  Parameters:
  - size: Size- The minimum size items in the container may be
  - min: int- The index of the start of the slots to be limited
  - max: int- The index of the end of the lots to be limited

```
Limits items in the provided slot range to a size equal to or greater than the provided size
```

- `void lowerLimit(Size size, int min, int max, boolean allowsEqual)`

  Parameters:
  - size: Size- The minimum size items in the container may be
  - min: int- The index of the start of the slots to be limited
  - max: int- The index of the end of the lots to be limited
  - allowsEqual: boolean- If items with a size equal to the provided `size` should be allowed

```
Limits items in the provided slot range to a size greater than the provided size
```

- `void lowerLimit(Size size, boolean allowsEqual)`

  Parameters:
  - size: Size- The minimum size items in the container may be
  - allowsEqual: boolean- If items with a size equal to the provided `size` should be allowed

```
Limits items in the container to a size
```

- `void lowerLimit(Size var0)`

  Parameters:
  - var0: Size

```
Limits items in the container to a size equal to or greater than the provided size
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
TFCEvents.limitContainer(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

