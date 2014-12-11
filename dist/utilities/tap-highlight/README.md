# Tap Highlight

Makes it easy to replace the default tap highlight with a custom tap indicator.

> Make sure to set `$fast-tap-enabled` to `true` if you are using a fast tap plugin to ensure that you don't get double tap highlighting.

```scss
.element {
    @include tap-highlight;
}
```

## Parameters

### $method [String]

> Default: `highlight`

Determines the different tap highlight methods to use. There are four options to choose from:

#### Highlight

Changes the default tap highlight color to the value of `$color`.If `$fast-tap-enabled` is set to `true`, this replaces the background with the value in the `$color` variable.

#### Custom

Removes the default tap highlight color and applies the content of the mixin to the active state.

**Example**:
```scss
@include tap-highlight($method: custom) {
    background: linear-gradient(blue, red);
}
```

#### Overlay

Intended use of the Overlay version of the Tap Highlight is if the tappable element has children elements with solid background colors, or images.

#### Box Shadow

The intended use for the Box Shadow highlight is for when you can't use either the the default highlight OR the overlay (perhaps the tappable element already uses both before and after pseudo elements).

### $color [color]

> Default: `rgba(0, 0, 0, 0.25)`

Takes a color value and sets the appropriate color for the `$method` used.

> The `highlight` method _requires_ that you use an `rgba` value.

### $fast-tap-enabled [boolean]

> Default: `false`

Tells the mixin whether fast tap is being used or not on the project. This changes how some of the methods provide the tap highlight.

### $active-selector [string]

> Default: `:active`

The class or state used to apply the tap highlight effect.

### $overlay-position [string]

> Default: `before`

Takes a value of either `before` or `after` to declare which pseudo-element to use. Only used by the `overlay` method.

### $box-shadow-blur [number]

The amount of blur to apply to the `box-shadow` method. Only used by `box-shadow` method.
