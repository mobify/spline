# Spline-SCSS

Spline-SCSS, or just Spline, is a mixin and function library for Sass. It makes writing stylesheets for mobile-first builds faster and easier. Spline provides methods to manipulate text, use web & icon fonts, create CSS3 shapes, and much more.

- [**Installation**](#installation)
- [**Documentation**](#documentation)
- [**Browser Support**](#browser-support)
- [**Changelog**](http://github.com/mobify/spline/releases)
- [**Issues**](http://github.com/mobify/spline/issues)

## Requirements

- [Sass](http://sass-lang.com/) 3.4+

## Installation

Spline is distributed with the [NPM](https://www.npmjs.com/) package manager.

1. Install the NPM package

    Paste this command into your command line in your project's root directory:

    ```
    npm install spline-scss --save-dev
    ```

    > **Note:** You'll need to have [Node and NPM installed](https://docs.npmjs.com/getting-started/installing-node) to run this command.

2. Import Spline at the beginning of your Sass stylesheet

    ```scss
    @import "node_modules/spline-scss/dist/spline";
    ```

Packages installed through NPM aren't made to be edited. If you need to edit or change anything within Spline, please consider [opening an issue or a PR](http://github.com/mobify/spline/issues) and having it added directly to the project itself.

## Updating

Spline follows [Semantic Versioning](http://www.semver.org). In a nutshell, that means that upgrading to new point releases (eg. moving from 1.0 to 1.1) is safe. Upgrading to new major releases (from 1.0 to 2.0) will cause backwards-incompatible changes.

To update Spline, paste the following command into your command line in your project's root:

```
npm update spline-scss
```

## Documentation

### Utilities

The core set of mixins for the project.

- [Border](dist/utilities/border)
- [Change BR](dist/utilities/change-br)
- [Color](dist/utilities/color)
- [Dimensions](dist/utilities/dimensions)
- [Ellipsis](dist/utilities/ellipsis)
- [Flexbox](dist/utilities/flexbox)
- [Hide Text](dist/utilities/hide-text)
- [Icon Font](dist/utilities/icon-font)
- [Icon Font Replace](dist/utilities/icon-font-replace)
- [Margin](dist/utilities/margin)
- [Padding](dist/utilities/padding)
- [Squish Text](dist/utilities/squish-text)
- [Style Override](dist/utilities/style-override) (aka The Headbang Trick)
- [Tap Highlight](dist/utilities/tap-highlight)
- [Text](dist/utilities/text)
- [Triangle](dist/utilities/triangle)
- [Visibility](dist/utilities/visibility)
- [Web Font](dist/utilities/web-font)

### Functions

Functions are methods of invoking Sass logic and functionality to return values. [Read this article](http://thesassway.com/advanced/pure-sass-functions) to learn more.

- [Cache Buster](dist/functions/cache-buster)
- [Icon Address](dist/functions/icon-address)
- [Rem Converter](dist/functions/rem)
- [Reverse Gradient](dist/functions/reverse-gradient)
- [Tint & Shade](dist/function/tint-shade)

### Variables

Some default variables for use in your projects.

- [Transition Timings](dist/variables/transition-timings)

## Browser Support

Spline is written for mobile browsers. This means that Spline should support newer desktop browsers as well but old browser support is not a priority. Spline does not contain any browser prefixing. If you're looking for prefixing, we recommend you use [Autoprefixer](https://github.com/postcss/autoprefixer) in addition to Spline.

- iOS 6+
- Android Browser 2.3+
- Chrome for Android 35+

Other browsers may be supported but Spline is not actively developed on them. If you find any issues with specific browsers, please log them in our [Issues tracker](http://github.com/mobify/spline/issues).

## How To Test

1. Run `npm install`
2. Run `npm run lint`
3. Ensure linter passes
4. Run `grunt`
5. Ensure that all the `DEBUG` output in your terminal are all passing
6. Open `test/index.html` in your browser
7. Ensure all the tests descriptions are accurate compared to how the styles render

## Credits

Spline is maintained and funded on [Mobify](http://www.mobify.com)'s dime. If you've got things you'd like to see added or removed, submit a PR or tweet at [Jeff Kamo](http://www.twitter.com/jeffkamo). A special shout out to [Kyle Peatt](http://twitter.com/kpeatt), and [Ryan Frederick](http://twitter.com/ry5n) for their past contributions, with which Spline was made possible.

We also owe a lot of thanks to [Thoughtbot's Bourbon](http://www.github.com/thoughtbot/Bourbon) and [Compass](http://compass-style.org/). Spline was inspired by both of these projects and draws a lot of its work from them.

## License

*MIT License. Spline-SCSS is Copyright © 2014-2016 Mobify. It is free software and may be redistributed under the terms specified in the LICENSE file.*
