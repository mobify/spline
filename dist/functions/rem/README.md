# Rem Converter

This function generates a relative rem value from a pixel unit.

For example, to get a relational value of 12px, you can write `rem(12)` when the base font size is 100%. If the base font-size is something other than 100%, you can pass the function a different base value (`rem(12, 150%)`).

```scss
rem(12)
```

## Parameters

### $pxval [Number]

The pixel value without the unit (`12`, not `12px`).

### $base [Number]

> Default: The default can be found in the [Rem settings file](/dist/settings/_rem.scss)

The percentile font size set on `html`. To set your own default, declare a `$rem-base` variable somewhere.

## Usage

```scss
.example {
    font-size: rem(12);
}
```

## Output

```scss
.example {
    font-size: 0.75rem;
}
```
