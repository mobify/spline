# Flexbox

Border mixins are used to add (or remove) simple border styles.


## `flexbox`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Flexbox is the parent most property mixin. It's the container that wraps
flex children.


## `flexbox-gutters`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |
| `$unit` | `string` | (optional) Example: `8px` |

Add gutters to your flexbox layout using this utility. In order for the gutters
to work correctly, the below `flexbox-inner-gutters` mixin must be added to
flex children in the flexbox.


## `flexbox-inner-gutters`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |
| `$unit` | `string` | (optional) Example: `8px` |

If you're using the above `flexbox-gutter` mixin, you must also include this
`flexbox-inner-gutters` mixin to all of the flex children in order for the
gutters to work as intended.


## `align-top`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Align, vertically, flex children to the top of the flex container.


## `align-center`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Align, vertically, flex children to the center of the flex container.


## `align-bottom`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Align, vertically, flex children to the bottom of the flex container.


## `justify-start`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Align, horizontally, flex children to the "start" of the flex container,
which is typically the left. On right-to-left websites, that would be
the right.


## `justify-end`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Align, horizontally, the flex children to the "end" of the flex container,
which is typically the right. On right-to-left websites, that would be
the left.


## `justify-between`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Align, horizontally, the flex children so the space out evenly apart from each
other. The outer most flex children will push up as far against the flex container's edges as they can go.


## `justify-center`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Align, horizontally, the flex children into the center of the flex container.


## `justify-around`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Align, horizontally, flex children so they space out evenly apart from each
other, including the space between the first, last and edges of the
flex container.

## `direction-column`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

It establishes the main-axis of a flex container, direction from left to right.


## `direction-column-reverse`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

It establishes the main-axis of a flex container, direction from right to left.


## `direction-row`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

It establishes the main-axis of a flex container, direction from top to bottom.


## `direction-row-reverse`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

It establishes the main-axis of a flex container, direction from bottom to top.


## `flex`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Allow a flex child to grow and shrink as needed. This means the flex child
does so according to the following setting: `flex: 1 1 auto`.


## `flex-shrink`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Shrink the flex children to a minimum size.


## `flex-none`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Either grow nor shrink the flex children.


## `order-1`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Set the flex child's order to `1`.


## `order-2`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Set the flex child's order to `2`.


## `order-3`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Set the flex child's order to `3`.


## `order-4`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Set the flex child's order to `4`.


## `order-5`

| Parameters | Type | Example |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |

Set the flex child's order to `5`.
