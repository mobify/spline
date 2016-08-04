# Layout

Layout behavior for properties related to floats, position, etc.


## `float-start`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Float an element to the "start", which is typically the left. On right-to-left
websites, it's to the right.


## `float-end`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Float an element to the "start", which is typically the right. On right-to-left
websites, it's to the left.


## `clearfix`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Contain all floated children and their margins.


## `position-context`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Create a new positioning context.


## `block-context`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Create a new Block Formatting Context. BFCs won’t overlap adjacent floats and
will contain floated children and their margins.
