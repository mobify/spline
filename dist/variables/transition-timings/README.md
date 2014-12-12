# Transition Timings

Some variables for easily setting cubic-bezier timing functions. Timing functions courtesy of [jquery.easie](http://github.com/jaukia/easie) and [Ceaser](https://github.com/matthewlein/Ceaser/blob/master/developer/ceaser-easings.scss).

## Demo

You can find a demo of these easing functions here: http://jqueryui.com/easing/

## Usage

```scss
.element {
    transition: left 0.2s $ease-in-quad;
}
```

## Output

```scss
.element {
    transition: left 0.2s cubic-bezier(0.550,  0.085, 0.680, 0.530);
}
```
