# Icon Font

Makes it easier to consistently declare icon fonts in your project.

Used in conjunction with:
- [Web Font](/dist/utilities/web-font)
- [Icon Font Replace](/dist/utilities/icon-font-replace)

> A custom font must have been defined using @font-face or web-font().

> The `$icon-font` variable must be defined as the font-family to use for the `icon-font` mixin.

```scss
@include icon-font();
```

## Parameters

### $position [string]

> Default: `before`

Takes a value of either `before` or `after` to declare which pseudo-element to use.

## Usage

```scss
$icon-font: 'icon-font';

.element {
    @include icon-font;
}
```
