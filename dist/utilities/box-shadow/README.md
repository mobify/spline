# Box Shadow

Border mixins are used to add box shadow styles.


## `box-shadow`

| Parameters | Type | Details |
| ---------- | ---- | ------- |
| `$important` | `boolean` | (optional) Default: false |
| `$inset` | `boolean` | (optional) Default: false |
| `$box-shadow` | `string` | (optional) Default: null |
| `$inset-box-shadow` | `string` | (optional) Default: null |
| `$horizontal` | `string` | (optional) Default: null |
| `$vertical` | `string` | (optional) Default: null |
| `$blur` | `string` | (optional) Default: null |
| `$distance` | `string` | (optional) Default: null |
| `$color` | `string` | (optional) Default: null |

Adds box shadow.


## Usage

```scss
.box-shadow {
    @include box-shadow(true, false, $box-shadow);
}
```

```scss
.box-shadow-inset {
    @include box-shadow(true, false, $box-shadow);
}
```

```scss
.box-shadow-brand {
    @include box-shadow(true, false, $box-shadow: null, $horizontal: 2px, $vertical: 2px, $blur: 5px, $distance: 5px, $color: $brand-color);
}
```

```scss
.box-shadow-accent-inset {
    @include box-shadow(true, true, $box-shadow: null, $inset-box-shadow: null, $horizontal: 2px, $vertical: 2px, $blur: 5px, $distance: 5px, $color: $accent-color);
}
```
