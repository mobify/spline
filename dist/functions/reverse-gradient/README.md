# Reverse Gradient

Reverse a gradient by passing in a `linear-gradient()` function. This function makes it easy to quickly reverse gradients you have set up in variables.

```scss
reverse-gradient($gradient);
```

## Parameters

### $gradient [String]

Takes a `linear-gradient()` as its value.

## Usage

```scss
$gradient: linear-gradient(to top right, blue, red, green 100%);

.example {
    background: reverse-gradient($gradient);
}
```

## Output

```scss
.example {
    background: linear-gradient(to bottom left, blue, red, green 100%);
}
```
