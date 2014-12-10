# Squish Text

Hides text in an element by squishing the text into oblivion. Use this if you need to hide text contained in an inline element but still have it read by a screen reader.

This is [based on Nicolas Gallagher's technique](http://nicolasgallagher.com/another-css-image-replacement-technique/).

> **Warning** This does not work on Android 4.2 and lower. Try our [hide-text mixin](/dist/utilities/hide-text) instead.

```scss
@include hide-text($direction);
```

## Parameters

### $direction [string]

> Default: `right`

Takes a value of either `right` or `left` to apply different types of text replacement. See the source for the different techniques.

## Usage

```scss
.element {
    @include hide-text();
}
```

## Output

```scss
.element {
    text-indent: 110%;
    white-space: nowrap;
    overflow: hidden;
}
```
