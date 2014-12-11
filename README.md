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
1. Import Spline at the beginning of your Sass stylesheet

    ```scss
    @import "bower-components/spline/spline";
    ```

Packages installed through Bower aren't made to be edited. If you need to edit or change anything within Spline, please consider [opening an issue or a PR](http://github.com/mobify/spline/issues) and having it added directly to the project itself.

## Updating

Spline follows [Semantic Versioning](http://www.semver.org). In a nutshell, that means that upgrading to new point releases (eg. moving from 1.0 to 1.1) is safe. Upgrading to new major releases (from 1.0 to 2.0) will cause backwards-incompatible changes.

To update Spline, run the following command:

```
bower update spline
```

## Documentation

### Utilities

The core set of mixins for the project.

- [Change Break Tag](dist/utilities/change-br)
- [Clearfix](dist/utilities/clearfix)
- [Text Ellipsis](dist/utilities/ellipsis)
- [Hide Text](dist/utilities/hide-text)
- [Squish Text](dist/utilities/squish-text)
- [Icon Font](dist/utilities/icon-font)
- [Icon Font Replace](dist/utilities/icon-font-replace)
- [Tap Highlight](dist/utilities/tap-highlight)
- [Triangle](dist/utilities/triangle)
- [Web Font](dist/utilities/web-font)

### Functions

Functions are methods of invoking Sass logic and functionality to return values. [Read this article to learn more](http://thesassway.com/advanced/pure-sass-functions).

- [Cache Buster](dist/functions/cache-buster)
- [Icon Address](dist/functions/icon-address)
- [Rem Converter](dist/functions/rem)

### CSS3 Shorthand

Mixins that provide a shorthand way to write CSS3 functionality.

- [Border Radius](dist/css3/border-radius)

## Browser Support

- iOS 6+
- Android Browser 2.3+
- Chrome for Android 35+

Other browsers may be supported but Spline is not actively developed on them. If you find any issues with specific browsers, please log them in our [Issues tracker](http://github.com/mobify/spline/issues).

## The Mobify CSS Triforce ![Triforce](http://img4.wikia.nocookie.net/__cb20091113050618/zelda/images/1/1a/Obtained_Triforce_Piece.gif)

Spline is part of the _Mobify CSS Triforce_: a collection of three UI Development projects built for making mobile e-commerce builds easier.

- **Spline**: A mobile-first mixin and function library for Sass.
- [**Vellum**](http://github.com/mobify/vellum): A set of default styles for mobile-first builds.
- [**Stencil**](http://github.com/mobify/stencil): A library of common UI patterns for mobile e-commerce builds.

## Credits

Spline was built with a whole lot of care by [Jeff Kamo](http://www.twitter.com/jeffkamo), [Kyle Peatt](http://twitter.com/kpeatt), and [Ryan Frederick](http://twitter.com/ry5n). It is maintained and funded on [Mobify](http://www.mobify.com)'s dime. If you've got things you'd like to see added or removed, submit a PR or tweet at us.

We also owe a lot of thanks to [Thoughtbot's Bourbon](http://www.github.com/thoughtbot/Bourbon) and [Compass](http://compass-style.org/). Spline was inspired by both of these projects and draws a lot of its work from them.

## License

*MIT License. Spline is Copyright © 2014 Mobify. It is free software and may be redistributed under the terms specified in the LICENSE file.*
