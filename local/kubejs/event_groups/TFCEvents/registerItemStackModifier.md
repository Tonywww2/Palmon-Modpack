# TFCEvents.registerItemStackModifier

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterItemStackModifierEventJS (third-party)

```
Used to register custom stack modifiers which can be used with item stack providers
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| simple | ResourceLocation, SimpleApplicator |  | void | ✘ |
| withInput | ResourceLocation, ModifierApplicator |  | void | ✘ |
| withInventory | ResourceLocation, WithInventoryApplicator |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `void simple(ResourceLocation id, SimpleApplicator applicator)`

  Parameters:
  - id: ResourceLocation- The registry name of the modifier
  - applicator: SimpleApplicator- The function that will be applied to the stack when the modifier is called

```
Creates a new item stack modifier with the given id and function
```

- `void withInput(ResourceLocation id, ModifierApplicator applicator)`

  Parameters:
  - id: ResourceLocation- The registry name of the modifier
  - applicator: ModifierApplicator- The function that will be applied to the stack when the modifier is called

```
Creates a new item stack modifier with the given id and function. Depends on the input item
```

- `void withInventory(ResourceLocation id, WithInventoryApplicator applicator)`

  Parameters:
  - id: ResourceLocation- The registry name of the modifier
  - applicator: WithInventoryApplicator- The function that will be applied to the stack when the modifier is called

```
Creates a new item stack modifier with the given id and function. Depends on the input item. The inventory may be empty if the recipe type does not support it
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
TFCEvents.registerItemStackModifier((event) => {
	// This space (un)intentionally left blank
});
```

