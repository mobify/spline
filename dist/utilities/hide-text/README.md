# Hide Text

Hides text in an element so you can see the background, but still leaves it visible to screen readers.

This is based on [Scott Kellum's Image Replacement technique](http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/) but uses 110% for better coverage.

> **Note:** This only works on `block` or `inline-block` elements and works best when a width is set.

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
