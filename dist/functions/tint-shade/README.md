# Tint & Shade

## Tint

Add a percentage of white to a color

```scss
tint($color, $percent);
```

### Parameters

#### $color [Color]

The color to be tinted.

#### $percent [Number]

The percentage amount the color is to be tinted.

### Usage

.element {
    background-color: tint(red, 50%);
}

### Output

.element {
    background-color: #ff7f7f;
}

## Shade

Add a percentage of black to a color

### Parameters

#### $color [Color]

The color to be shaded.

#### $percent [Number]

The percentage amount the color is to be shaded.

### Usage

.element {
    background-color: shade(red, 50%);
}

### Output

.element {
    background-color: #7f0000;
}
