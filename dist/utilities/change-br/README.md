# Change Break

This mixin provides a shorthand method to convert `<br>` tags into any arbitrary content.

```scss
    @include change-br($content);
```

## Parameters

### $content [string]

> Default: ` `

Takes a string and replaces all occurrences of break tags with that string.

## Usage

```scss
.element {
    @include change-br;
}
```

## Output

```scss
.element {
    br {
    content: ‘’;
  }

    br::after {
        content: $content;
    }
}
```
