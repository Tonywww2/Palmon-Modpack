# TFCEvents.registerFoodTrait

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterFoodTraitEventJS (third-party)

```
Used to register custom food traits
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| registerTraitWithTooltip | float, ResourceLocation |  | void | ✘ |
| registerTrait | float, ResourceLocation |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `void registerTraitWithTooltip(float decayModifier, ResourceLocation id)`

  Parameters:
  - decayModifier: float- The decay modifier of the trait, a higher values means the food rots faster
  - id: ResourceLocation- The registry id of the food trait

```
registers a new food trait with a tooltip
```

- `void registerTrait(float decayModifier, ResourceLocation id)`

  Parameters:
  - decayModifier: float- The decay modifier of the trait, a higher values means the food rots faster
  - id: ResourceLocation- The registry id of the food trait

```
registers a new food trait
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
TFCEvents.registerFoodTrait((event) => {
	// This space (un)intentionally left blank
});
```

