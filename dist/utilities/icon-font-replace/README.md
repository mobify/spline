# Icon Font Replace

Replaces text within an element with pseudo-element content. For use with the [Icon Font mixin](/dist/utilities/icon-font).

```scss
@include icon-font-replace();
```

## Parameters

### $position [string]

> Default: `before`

Takes a value of either `before` or `after` to declare which pseudo-element to use.

### $width [string]

> Default: `1em`

Takes a unit value to set the width of the pseudo-element. Should equal the width of the icon.

## Usage

```scss
.element {
    @include icon-font-replace();
}
```

## Output

```scss
.element {
    text-indent: 110%;
    white-space: nowrap;
    overflow: hidden;

    position: relative;

    display: inline-block;
    width: 1em;
}

.element::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: block;

    text-align: center;
    text-indent: 0;
}
```
