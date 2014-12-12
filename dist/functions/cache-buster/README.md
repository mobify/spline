# Cache Buster

This is used to help cache bust browser url requests, such as when importing fonts with `@font-face`.

```scss
cache-buster()
```

## Parameters

### $seed [Number]

> Default: `9999999999`

This number is used to generate a random hash - higher is better

### $separator [String]

> Default: `?`

Used to attach the seed number to the URL.

> **Note:** If the url already has a query string on it, you may want to consider changing this to an ampersand `&` so the cache-buster isn't interfering with any other of the queries.

## Usage

```scss
.element {
    background-image: url('image.png' + cache-buster());
}
```

## Output

```scss
.element {
    background-image: url('image.png?912932');
}
```
