# Spline

**Spline is a mixin and function library for Sass. It makes writing stylesheets for mobile-first builds faster and easier.**

Spline makes it easy for you to:

1. Write complex CSS without having to actually write complex CSS.
1. Use best practices and common patterns easily without having to remember specific code across devices.
1. Ensure consistency across your project.

For a list of all the functionality included in Spline, please [view the Documentation](#documentation).

- [**Documentation**](#documentation)
- [**Changelog**](http://github.com/mobify/spline/releases)
- [**Issues**](http://github.com/mobify/spline/issues)

## Requirements

- [Sass](http://sass-lang.com/) 3.4+

## Installation

Spline is distributed with the [Bower](http://bower.io) package manager.

1. Install the Bower package

    Paste this command into your command line in your project's root directory:

    ```
    bower install spline --save
    ```

    > **Note:** You'll need to have [Bower installed](http://bower.io/#install-bower) to run this command.
1. Import Spline at the beginning of your Sass stylesheet

    ```scss
    @import "bower-components/spline/spline";
    ```

Packages installed through Bower aren't made to be edited. If you need to edit or change anything within Spline, please consider [opening an issue or a PR](http://github.com/mobify/spline/issues) and having it added directly to the project itself.

## Updating

Spline follows [Semantic Versioning](http://www.semver.org). In a nutshell, that means that upgrading to new point releases (eg. moving from 1.0 to 1.1) is safe. Upgrading to new major releases (from 1.0 to 2.0) will cause backwards-incompatible changes.

To update Spline, paste the following command into your command line in your project's root:

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
- [Style Override](dist/utilities/style-override) (aka The Headbang Trick)

### Functions

Functions are methods of invoking Sass logic and functionality to return values. [Read this article](http://thesassway.com/advanced/pure-sass-functions) to learn more.

- [Cache Buster](dist/functions/cache-buster)
- [Icon Address](dist/functions/icon-address)
- [Rem Converter](dist/functions/rem)
- [Reverse Gradient](dist/functions/reverse-gradient)
- [Tint & Shade](dist/function/tint-shade)

### CSS3 Shorthand

Mixins that provide a shorthand way to write CSS3 functionality.

- [Border Radius](dist/css3/border-radius)

### Variables

Some default variables for use in your projects.

- [Transition Timings](dist/variables/transition-timings)

## Browser Support

Spline is written for mobile browsers. This means that Spline should support newer desktop browsers as well but old browser support is not a priority. Spline does not contain any browser prefixing. If you're looking for prefixing, we recommend you use [Autoprefixer](https://github.com/postcss/autoprefixer) in addition to Spline.

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
