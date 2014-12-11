## Triangle

Draws a triangle using the borders of the element.

```scss
@include triangle(
    'triangle',
    'right',
    '12px'
    'blue'
);
```

## Parameters

### $type [string]

Takes either `'triangle'` or `'isosceles'`.

**Triangle** creates an equilateral triangle (all three sides are the same length).

**Isosceles** creates an angled triangle.

### $direction [String]

The direction of the triangle. Valid options depends on the chosen shape:

#### Triangle

- `'up'`
- `'down'`
- `'left'`
- `'right'`

#### Isosceles

- `'up-left'`
- `'up-right'`
- `'down-left'`
- `'down-right'`

### $size [Number]

Takes a number with a unit to use for the size of the generated triangle (eg. `10px`).

### $color [Color]

Takes a color value to use as the color of the triangle.

## Usage

```scss
.element {
    @include triangle(
        'triangle',
        'up',
        10px,
        #bada55
    );
}
```

## Output

```scss
.element {
    width: 0;
    height: 0;

    border-color: #bada55;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #bada55;
    border-left: 10px solid transparent;
}

```
