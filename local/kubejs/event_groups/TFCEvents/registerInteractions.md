# TFCEvents.registerInteractions

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterInteractionsEventJS (third-party)

```
Used to register custom item-block interactions that go through TFC's interaction pipeline
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| registerCustomPlacements |  |  | void | ✔ |
| interaction | Ingredient, OnItemUseAction |  | void | ✘ |
| interaction | Ingredient, boolean, OnItemUseAction |  | void | ✘ |
| interaction | Ingredient, boolean, boolean, OnItemUseAction |  | void | ✘ |
| addBlockItemPlacement | Supplier<Item>, Supplier<Block> |  | void | ✔ |
| blockItemPlacement | Item, Block |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `void interaction(Ingredient ingredient, OnItemUseAction action)`

  Parameters:
  - ingredient: Ingredient- The items this interactions applies to
  - action: OnItemUseAction- A callback for the action to perform, requires an `InteractionResult` be returned

```
Registers an interaction, targeting blocks, but not air, by default
```

- `void interaction(Ingredient ingredient, boolean targetAir, OnItemUseAction action)`

  Parameters:
  - ingredient: Ingredient- The items this interactions applies to
  - targetAir: boolean- If the interaction should register when clicking in the air
  - action: OnItemUseAction- A callback for the action to perform, requires an `InteractionResult` be returned

```
Registers an interaction, targeting blocks by default
```

- `void interaction(Ingredient ingredient, boolean targetBlocks, boolean targetAir, OnItemUseAction action)`

  Parameters:
  - ingredient: Ingredient- The items this interactions applies to
  - targetBlocks: boolean- If blocks should be targeted in the interaction
  - targetAir: boolean- If the interaction should register when clicking in the air
  - action: OnItemUseAction- A callback for the action to perform, requires an `InteractionResult` be returned

```
Registers an interaction
```

- `void blockItemPlacement(Item item, Block block)`

  Parameters:
  - item: Item- The item
  - block: Block- The block to be placed

```
Registers a default block placement interaction
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
TFCEvents.registerInteractions((event) => {
	// This space (un)intentionally left blank
});
```

