# Quil Cheatsheet

## Shapes -- (these only work in the draw function!)

`(line x1 y1 x2 y2)`  
Draws a line (a direct path between two points) to the screen. x1, y1, x2 and y3 are all numbers which are being used as coordinates, or pixels from the top left on your screen.

`(rect x y width height)`  
Draws a rectangle to the screen. x and y are coordinates. Width and height are how big the box is, again in numbers.

`(ellipse x y width height)`  
Draws an ellipse (oval) in the display window.


## Color
`(color r g b a)`  
A color consists of 4 values. The first three values (red, green, blue in values from 0 to 255) will give a color. Adding a 4th alpha value (from 0 to 1) will give you a transparent color. For example 0 0 255 0.5 will give you a transparent blue.

`(background color)`  
This sets the whole canvas to one color. Great for erasing the screen every draw.

`(fill color)`  
This sets the fill of shapes which are painted after calling this function.

`(stroke color)`  
This sets a stroke, a border around the shapes painted after.

`(no-fill)` or `(no-stroke)`  
This disables the fill or stroke of shapes to be drawn.

Example:  
```
(background (color 255 0 0))
(fill (color 0 0 255))
(ellipse 100 100 30 30)
```


## Text

`(text your-text x y)`  
This displays your text on the screen at certain coordinates.

## Mouse
These are useful functions to get values from your mouse. Great if you want move things on your screen. 

`(mouse-x)` => number  
`(mouse-y)` => number  
`(mouse-pressed?)` => true/false

What do you think this does?  
`(ellipse (mouse-x) (mouse-y) 30 30)`


## Time

`(frame-count)` => number
The number of frames displayed since the program started. Give it a try while wrapping it in `(mod num div)` a modulo function e.g. `(ellipse 100 100 (mod (frame-count) 30) (mod (frame-count) 30))`


## More Quil functions!
The functions above are just a couple of simple ones to get you started. There are way more and more detailed descriptions of Quil's library online: http://quil.info/api
