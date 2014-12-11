# Style Override

Allows overriding existing styles with extreme specificity while keeping source code clean and readable. Only use this for overriding 3rd-party CSS that cannot be changed. Does not override `!important` or inline styles; those must be dealt with separately.

```scss
@include style-override($degree, $head-selector);
```

## Parameters

### $degree [Number]

> Default: `1`

The “force” of the override. Effectively the number of id-level selectors you need to override. If you need to override 4 `id`s then you would set this to 4.

### $head-selector

> Default: `#\\!`

An id selector that matches the one on the `<head>` tag.

> **Note:** This selector must select the `<head>` tag. The default value selects `<head id="!">` which is short (since it’s prepended to every wrapped selector) and obscure (to help guarantee uniqueness). Since it’s a special character in CSS, the `!` must be escaped. Since the `\` is a special character in SCSS, the `\` for the `!` must be escaped as well.

## Usage

```scss
.example {
    @include style-override(4) {
        background: red;
    }
}
```

## Output

```scss
#\!#\!#\!#\!#\! ~ body .example {
    background: red;
}
```

