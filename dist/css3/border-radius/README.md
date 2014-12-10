### Border Radius (Shorthand)

Often, you’ll want to only round one side of a box. These mixins provide a shorthand for that use case.

```scss
    @include border-top-radius($radii);
    @include border-bottom-radius($radii);
    @include border-left-radius($radii);
    @include border-right-radius($radii);
```

#### Parameters

##### $radii [string]

Takes a pixel or percentage value string and applies that as the border radius value.

#### Usage

```scss
.element {
    @include border-top-radius(5px);
}
```

#### Output

```scss
.element {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
```
