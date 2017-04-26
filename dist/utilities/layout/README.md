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


## `position-relative`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Position relative of element.


## `position-absolute`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Position absolute of element.


## `position-fixed`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Position fixed of element.


## `position-top`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Position top of element.


## `position-right`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Position right of element.


## `position-bottom`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Position bottom of element.


## `position-left`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Position left of element.


## `position-full`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Position full of element.


## `base-bleed`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |
| `$unit` | `string` | (optional) Example: `8px` |
| `$direction` | `string` | (optional) Default: `top` |

Position full of element.


## `block-context`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Create a new Block Formatting Context. BFCs won’t overlap adjacent floats and
will contain floated children and their margins.
