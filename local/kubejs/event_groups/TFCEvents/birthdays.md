# TFCEvents.birthdays

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: BirthdayEventJS (third-party)

```
Add and remove birthdays from the in-game calendar```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| remove | Month, int |  | void | ✘ |
| add | Month, int, String |  | void | ✘ |
| removeAll |  |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `void remove(Month var0, int var1)`

  Parameters:
  - var0: Month
  - var1: int

```
Removes the birthday from the given month and day
```

- `void add(Month var0, int var1, String var2)`

  Parameters:
  - var0: Month
  - var1: int
  - var2: String

```
Adds a new birthday
```

- `void removeAll()`
```
Removes all birthdays
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
TFCEvents.birthdays((event) => {
	// This space (un)intentionally left blank
});
```

