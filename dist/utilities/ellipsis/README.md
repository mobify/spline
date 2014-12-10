# Text Ellipsis

Add ellipses to the end of a single line of text. The element this is applied to will need to have a width set for this to work.

> Caution: This mixin forces your text to not wrap (necessary for ellipsis to work).

```scss
@include ellipsis;
```

## Usage

```scss
.element {
    @include ellipsis;
}
```

## Output

```scss
.element {
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
}
```
