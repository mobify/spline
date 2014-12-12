# Icon Address

This is used to help cache bust browser URL requests such as when importing fonts with `@font-face`.

```scss
icon-address($icon-name)
```

## Parameters

### $icon-name [String]

This string (without quotes) refers to the icon in the $icon-list map, which we expect to map to a unicode address

> **Note:** `$icon-list` is required to have been previously defined. It is a map of all available icons and their icon codes. You can see [an example of this in the Settings file](/dist/settings/_icon-font.scss).

## Usage

```scss
.element::after {
    content: icon-address('twitter');
}
```

## Output

```scss
.element {
    content: '/e2306';
}
```
