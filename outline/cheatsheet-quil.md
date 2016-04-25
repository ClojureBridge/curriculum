# Quil Cheatsheet

## Shapes -- (these only work in the draw function!)

```clj
(line x1 y1 x2 y2)
```

Draws a line (a direct path between two points) to the screen. `x1`, `y1`,
`x2`, and `y3` are all numbers which are being used as coordinates, or pixels
from the top left on your screen.

```clj
(rect x y width height)
```

Draws a rectangle to the screen. `x` and `y` are coordinates. `width` and
`height` are how big the box is, again in numbers.

```clj
(ellipse x y width height)
```

Draws an ellipse (oval) in the display window.

## Color

```clj
(color r g b a)
```

A color consists of four values. The first three values (red, green, blue in
values from `0` to `255`) will give a color. Provide a fourth value to set the
opacity. `(color 0 0 255 128)`, for example, is half-transparent blue.

```clj
(background color)
```

This sets the whole canvas to one color. Great for erasing the screen every
draw.

```clj
(fill color)
```

This sets the fill of shapes which are painted after calling this function.

```clj
(stroke color)
```

This sets a stroke, a border around the shapes painted after.

```clj
(no-fill)
(no-stroke)
```

These disable the fill and/or stroke of shapes to be drawn. For example:

```clj
(background (color 255 0 0))
(fill (color 0 0 255))
(ellipse 100 100 30 30)
```

## Text

```clj
(text your-text x y)
```

This displays your text on the screen at certain coordinates.

## Mouse

These are useful functions to get values from your mouse. Great if you want
move things on your screen.

```clj
(mouse-x) ;=> number
(mouse-y) ;=> number
(mouse-pressed?) ;=> true/false
```

What do you think this does?

```clj
(ellipse (mouse-x) (mouse-y) 30 30)
```

## Time

```clj
(frame-count) ;=> number
```

The number of frames displayed since the program started. Give it a try while
wrapping it in `(mod num div)` a modulo function. For example:

```clj
(ellipse 100 100 (mod (frame-count) 30) (mod (frame-count) 30))
```

## More Quil functions

The functions mentioned above are just a few simple ones to get you started.
The [API documentation](http://quil.info/api) lists all Quil's functions, of
which there are many!
