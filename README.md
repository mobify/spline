# Spline

**Spline is a mixin and function library for Sass. It makes writing stylesheets for mobile-first builds faster and easier.**

Spline is written with an eye towards mobile browser support. Spline does not contain any browser prefixing — if you're looking for prefixing, we recommend you use [Autoprefixer](https://github.com/postcss/autoprefixer) instead.

- [**Documentation**](#documentation)
- [**Changelog**](http://github.com/mobify/spline/releases)
- [**Issues**](http://github.com/mobify/spline/issues)

## Requirements

- [Sass](http://sass-lang.com/) 3.4+

## Installation

Spline is distributed with the [Bower](http://bower.io) package manager.

1. Install the Bower package

```
bower install spline --save
```

2. Import Spline at the beginning of your Sass stylesheet

```scss
@import "bower-components/spline/spline";
```

If you need to edit or change anything within Spline, please consider [opening an issue or a PR](http://github.com/mobify/spline/issues) and having it added directly to the project itself.

## Documentation

### CSS3

- [Border Radius](dist/css3/border-radius)

### Utilities

- [Change Break Tag](dist/utilities/change-br)
- [Clearfix](dist/utilities/clearfix)
- [Text Ellipsis](dist/utilities/ellipsis)
- [Hide Text](dist/utilities/hide-text)
- [Squish Text](dist/utilities/squish-text)
- [Icon Font](dist/utilities/icon-font)
- [Icon Font Replace](dist/utilities/icon-font-replace)

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

## Browser Support

- iOS 6+
- Android Browser 2.3+
- Chrome for Android 35+

Other browsers may be supported but Spline is not actively developed on them. If you find any issues with specific browsers, please log them in our [Issues tracker](http://github.com/mobify/spline/issues).

## The Mobify CSS Triforce ![Triforce](http://img4.wikia.nocookie.net/__cb20091113050618/zelda/images/1/1a/Obtained_Triforce_Piece.gif)

Spline is part of the ![Triforce](http://img4.wikia.nocookie.net/__cb20091113050618/zelda/images/1/1a/Obtained_Triforce_Piece.gif)_Mobify CSS Triforce_: a collection of three UI Development projects built for making mobile e-commerce builds easier.

- **Spline**: A mobile-first mixin and function library for Sass.
- [**Vellum**](http://github.com/mobify/vellum): A set of default styles for mobile-first builds.
- [**Stencil**](http://github.com/mobify/stencil): A library of common UI patterns for mobile e-commerce builds.

## Credits

Spline was built with a whole lot of care by [Jeff Kamo](http://www.twitter.com/jeffkamo), [Kyle Peatt](http://twitter.com/kpeatt), and [Ryan Frederick](http://twitter.com/ry5n). It is maintained and funded on [Mobify](http://www.mobify.com)'s dime. If you've got things you'd like to see added or removed, submit a PR or tweet at us.

We also owe a lot of thanks to [Thoughtbot's Bourbon](http://www.github.com/thoughtbot/Bourbon) and [Compass](http://compass-style.org/). Spline was inspired by both of these projects and draws a lot of its work from them.

## License

*MIT License. Spline is Copyright © 2014 Mobify. It is free software and may be redistributed under the terms specified in the LICENSE file.*
