# TFCEvents.registerFaunas

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterFaunasEventJS (third-party)

```
Used to register one or more fauna definitions for an entity type
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| replace | EntityType<? extends Entity>, String, SpawnPlacements$Type, Heightmap$Types |  | void | ✘ |
| replace | EntityType<? extends Entity>, SpawnPlacements$Type, Heightmap$Types |  | void | ✘ |
| or | EntityType<? extends Entity>, SpawnPlacements$Type, Heightmap$Types |  | void | ✘ |
| or | EntityType<? extends Entity>, String, SpawnPlacements$Type, Heightmap$Types |  | void | ✘ |
| and | EntityType<? extends Entity>, String, SpawnPlacements$Type, Heightmap$Types |  | void | ✘ |
| and | EntityType<? extends Entity>, SpawnPlacements$Type, Heightmap$Types |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `void replace(EntityType<? extends Entity> entityType, String suffix, SpawnPlacements$Type placementType, Heightmap$Types heightmap)`

  Parameters:
  - entityType: EntityType<? extends Entity>- The entity type to register the fauna for
  - suffix: String- The suffix to apply to the fauna's id, may be null
  - placementType: SpawnPlacements$Type- The placement type to use for spawning
  - heightmap: Heightmap$Types- The heightmap to use for spawning

```
Registers a new fauna definition for the given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. Completely replaces the spawn conditions for the entity
```

- `void replace(EntityType<? extends Entity> entityType, SpawnPlacements$Type placementType, Heightmap$Types heightmap)`

  Parameters:
  - entityType: EntityType<? extends Entity>- The entity type to register the fauna for
  - placementType: SpawnPlacements$Type- The placement type to use for spawning
  - heightmap: Heightmap$Types- The heightmap to use for spawning

```
Registers a new fauna definition for the given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. Completely replaces the spawn conditions for the entity
```

- `void or(EntityType<? extends Entity> entityType, SpawnPlacements$Type placementType, Heightmap$Types heightmap)`

  Parameters:
  - entityType: EntityType<? extends Entity>- The entity type to register the fauna for
  - placementType: SpawnPlacements$Type- The placement type to use for spawning
  - heightmap: Heightmap$Types- The heightmap to use for spawning

```
Registers a new fauna definition for teh given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. ORs any spawn conditions the entity previously had with the fauna restrictions
```

- `void or(EntityType<? extends Entity> entityType, String suffix, SpawnPlacements$Type placementType, Heightmap$Types heightmap)`

  Parameters:
  - entityType: EntityType<? extends Entity>- The entity type to register the fauna for
  - suffix: String- The suffix to apply to the fauna's id, may be null
  - placementType: SpawnPlacements$Type- The placement type to use for spawning
  - heightmap: Heightmap$Types- The heightmap to use for spawning

```
Registers a new fauna definition for teh given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. ORs any spawn conditions the entity previously had with the fauna restrictions
```

- `void and(EntityType<? extends Entity> entityType, String suffix, SpawnPlacements$Type placementType, Heightmap$Types heightmap)`

  Parameters:
  - entityType: EntityType<? extends Entity>- The entity type to register the fauna for
  - suffix: String- The suffix to apply to the fauna's id, may be null
  - placementType: SpawnPlacements$Type- The placement type to use for spawning
  - heightmap: Heightmap$Types- The heightmap to use for spawning

```
Registers a new fauna definition for the given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. ANDs any spawn conditions the entity previously had with the fauna restrictions
```

- `void and(EntityType<? extends Entity> entityType, SpawnPlacements$Type placementType, Heightmap$Types heightmap)`

  Parameters:
  - entityType: EntityType<? extends Entity>- The entity type to register the fauna for
  - placementType: SpawnPlacements$Type- The placement type to use for spawning
  - heightmap: Heightmap$Types- The heightmap to use for spawning

```
Registers a new fauna definition for the given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. ANDs any spawn conditions the entity previously had with the fauna restrictions
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
TFCEvents.registerFaunas((event) => {
	// This space (un)intentionally left blank
});
```

