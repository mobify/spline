# Layout

## Clearfix

Provides an easy way to contain floats without adding additional markup.

Based on [Nicolas Gallagher's micro-clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) and [this one by Thierry Koblentz](http://www.css-101.org/articles/clearfix/latest-new-clearfix-so-far.php).

```scss
@include clearfix;
```

### Usage

```scss
.element {
    @include clearfix;
}
```

### Output

```scss
.element::before,
.element::after {
    content: ' ';
    display: table;
}

.element::after {
    clear: both;
}
```
