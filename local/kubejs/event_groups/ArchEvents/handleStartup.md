# ArchEvents.handleStartup

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: ProxyEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| LOG | Logger | ✔ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getReturnType |  |  | String | ✘ |
| getGenericReturnType |  |  | String | ✘ |
| getParameters |  |  | Map<String, Object> | ✘ |
| getMethodName |  |  | String | ✘ |
| setResult | Object |  | void | ✘ |
| getResult |  |  | Object | ✘ |
| getArgs |  |  | Object[] | ✘ |
| getArg | int |  | Object | ✘ |
| hasResult |  |  | boolean | ✘ |
| requiresResult |  |  | boolean | ✘ |
| getResultOptional |  |  | Optional<Object> | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

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
ArchEvents.handleStartup(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

