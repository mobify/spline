# Spline

Spline is a mixin and function library for Sass. It’s a set of tools made to make writing stylesheets faster and easier.

## CSS3

- [Border Radius](dist/css3/border-radius)

## Utilities

- [Change Break Tag](dist/utilities/change-br)
- [Clearfix](dist/utilities/clearfix)
- [Text Ellipsis](dist/utilities/ellipsis)
- [Hide Text](dist/utilities/hide-text)

### Icon Font

Makes it easier to consistently declare icon fonts in your project.

```scss
.element {
    @include icon-font();
}
```

> A custom font must have been defined using @font-face or web-font().

> The `$icon-font` variable must be defined as the font-family to use for the `icon-font` mixin.

#### Parameters

##### $position [string]

> Default: `before`

Takes a value of either `before` or `after` to declare which pseudo-element to use.

#### Usage

```scss
$icon-font: 'icon-font';

.element {
    @include icon-font;
}
```

### Icon Font Replace

Replaces text within an element with pseudo-element content. For use with Icon Fonts.

```scss
.element {
    @include icon-font-replace();
}
```

#### Parameters

##### $position [string]

> Default: `before`

Takes a value of either `before` or `after` to declare which pseudo-element to use.

##### $width [string]

> Default: `1em`

Takes a unit value to set the width of the pseudo-element. Should equal the width of the icon.

#### Usage

```scss
.element {
    @include icon-font-replace();
}
```

#### Output

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

### Tap Highlight

Makes it easy to replace the default tap highlight with a custom tap indicator.

> Make sure to set `$fast-tap-enabled` to `true` if you are using a fast tap plugin to ensure that you don't get double tap highlighting.

```scss
.element {
    @include tap-highlight;
}
```

#### Parameters

##### $method [String]

> Default: `highlight`

Determines the different tap highlight methods to use. There are four options to choose from:

###### Highlight

Changes the default tap highlight color to the value of `$color`.If `$fast-tap-enabled` is set to `true`, this replaces the background with the value in the `$color` variable.

###### Custom

Removes the default tap highlight color and applies the content of the mixin to the active state.

**Example**:
```scss
@include tap-highlight($method: custom) {
    background: linear-gradient(blue, red);
}
```

###### Overlay

Intended use of the Overlay version of the Tap Highlight is if the tappable element has children elements with solid background colors, or images.

###### Box Shadow

The intended use for the Box Shadow highlight is for when you can't use either the the default highlight OR the overlay (perhaps the tappable element already uses both before and after pseudo elements).

##### $color [color]

> Default: `rgba(0, 0, 0, 0.25)`

Takes a color value and sets the appropriate color for the `$method` used.

> The `highlight` method _requires_ that you use an `rgba` value.

##### $fast-tap-enabled [boolean]

> Default: `false`

Tells the mixin whether fast tap is being used or not on the project. This changes how some of the methods provide the tap highlight.

##### $active-selector [string]

> Default: `:active`

The class or state used to apply the tap highlight effect.

##### $overlay-position [string]

> Default: `before`

Takes a value of either `before` or `after` to declare which pseudo-element to use. Only used by the `overlay` method.

##### $box-shadow-blur [number]

The amount of blur to apply to the `box-shadow` method. Only used by `box-shadow` method.

### Triangle

Draws a triangle using the borders of the element.

```scss
@include triangle(
    'triangle',
    'right',
    '12px'
    'blue'
);
```

#### Parameters

##### $type [string]

> Default: `triangle`

Takes either `triangle` or `equilateral`.
