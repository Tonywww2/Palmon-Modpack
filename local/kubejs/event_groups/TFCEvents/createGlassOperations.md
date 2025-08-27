# TFCEvents.createGlassOperations

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: CreateGlassOperationsEventJS (third-party)

```
Fired early on in loading to add new glass operations to the game

Important: operations must be added in the same order and with the same names for client
and server, otherwise the connection will be refused
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| create | String, StackSupplier, ResourceLocation |  | void | ✘ |
| create | String, StackSupplier |  | void | ✘ |
| create | String, StackSupplier, ResourceLocation, float |  | void | ✘ |
| create | String |  | void | ✘ |
| createPowder | ResourceLocation, String, ResourceLocation, float |  | void | ✘ |
| createPowder | ResourceLocation, String, ResourceLocation |  | void | ✘ |
| createPowder | ResourceLocation, String |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `void create(String name, StackSupplier displayStack, ResourceLocation customSound)`

  Parameters:
  - name: String- The name of the operation, will be prepended with 'KUBEJS_'
  - displayStack: StackSupplier- A supplier for an item stack that will be used to represent the operation in JEI
  - customSound: ResourceLocation- The registry id of a sound to play, defaults to 'minecraft:block.anvil.use'

```
Creates a new glass operation
```

- `void create(String name, StackSupplier displayStack)`

  Parameters:
  - name: String- The name of the operation, will be prepended with 'KUBEJS_'
  - displayStack: StackSupplier- A supplier for an item stack that will be used to represent the operation in JEI

```
Creates a new glass operation
```

- `void create(String name, StackSupplier displayStack, ResourceLocation customSound, float minHeat)`

  Parameters:
  - name: String- The name of the operation, will be prepended with 'KUBEJS_'
  - displayStack: StackSupplier- A supplier for an item stack that will be used to represent the operation in JEI
  - customSound: ResourceLocation- The registry id of a sound to play, defaults to 'minecraft:block.anvil.use'
  - minHeat: float- The minimum temperature required for the operation to be enacted, defaults to 480°C

```
Creates a new glass operation
```

- `void create(String name)`

  Parameters:
  - name: String- The name of the operation, will be prepended with 'KUBEJS_'

```
Creates a new glass operation
```

- `void createPowder(ResourceLocation powderItemId, String name, ResourceLocation customSound, float minHeat)`

  Parameters:
  - powderItemId: ResourceLocation- The registry id of the powder item to associate with the created operation. Requires the `tfc:powders` tag in order to be put into a bowl
  - name: String- The name of the operation, will be prepended with 'KUBEJS_'
  - customSound: ResourceLocation- The registry id of a sound to play, defaults to 'minecraft:block.anvil.use'
  - minHeat: float- The minimum temperature required for the operation to be enacted, defaults to 480°C

```
Creates a new glass operation and associates it with an item for use in powder bowls and the add powder ISP modifier
```

- `void createPowder(ResourceLocation powderItemId, String name, ResourceLocation customSound)`

  Parameters:
  - powderItemId: ResourceLocation- The registry id of the powder item to associate with the created operation. Requires the `tfc:powders` tag in order to be put into a bowl
  - name: String- The name of the operation, will be prepended with 'KUBEJS_'
  - customSound: ResourceLocation- The registry id of a sound to play, defaults to 'minecraft:block.anvil.use'

```
Creates a new glass operation and associates it with an item for use in powder bowls and the add powder ISP modifier
```

- `void createPowder(ResourceLocation powderItemId, String name)`

  Parameters:
  - powderItemId: ResourceLocation- The registry id of the powder item to associate with the created operation. Requires the `tfc:powders` tag in order to be put into a bowl
  - name: String- The name of the operation, will be prepended with 'KUBEJS_'

```
Creates a new glass operation and associates it with an item for use in powder bowls and the add powder ISP modifier
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
TFCEvents.createGlassOperations((event) => {
	// This space (un)intentionally left blank
});
```

