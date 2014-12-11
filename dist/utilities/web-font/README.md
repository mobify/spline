# Web Font

Generates an `@font-face` declaration.

> **Note:** This mixin expects fonts to be named a specific way. It uses the font style and font weight values to build out the file name.
>
> For example:
> - Normal font: `sourcesanspro.EXT`
> - Normal font: `sourcesanspro.EXT`
> - Italic font: `sourcesanspro-italic.EXT`
> - Bold font: `sourcesanspro-bold.EXT`
> - Light font: `sourcesanspro-300.EXT`
>     - (Note that this uses the weight value not a 'light' string)
> - Bold Italic font: `sourcesanspro-bold-italic.EXT`

## Parameters

### $font-family [String]

The name of the font family you want to use in your project (eg. `'sourcesanspro'`);

### $path [String]

> Default: `'../fonts/#{$font-family}'`

The path to the folder containing your font files.

### $formats [Map]

> Default: See the [Web Font Settings file](/dist/settings/_font.scss)

A map containing key/value pairs for the File Extension and the Format Name of the font. You can generally rely on the default Spline settings for this.

### $font-weight [String]

> Default: `normal`

The font-weight for the font you're including.

### $font-style [String]

> Default: `normal`

The font-style for the font you're including.

### $cache-buster [Boolean]

> Default `false`

Whether you want to use our built-in [Cache Buster](/dist/functions/cache-buster) to ensure your fonts aren't cached by the browser.

## Usage

```scss
@include web-font(
    $font-family: 'sourcesanspro',
    $font-weight: bold,
    $font-style: italic
);
```

## Output

```scss
@font-face {
    font-family: "sourcesanspro";
    font-weight: bold;
    font-style: italic;
    src: url("../fonts/sourcesanspro/sourcesanspro.woff?5090165236") format("woff"), url("../fonts/sourcesanspro/sourcesanspro.ttf?4493557934") format("truetype"), url("../fonts/sourcesanspro/sourcesanspro.svg?4531890893") format("svg");
}
```
