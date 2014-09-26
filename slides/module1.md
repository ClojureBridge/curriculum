# Module 1: Introduction to Programming with Clojure

# Why Clojure?

  * Clojure is simple and powerful.
  * Clojure is all-purpose.
  * Clojure is *fun*.

# What is Clojure good at?

  * data processing
  * concurrent applications
  * web applications
  * everything!

# What does Clojure look like?

~~~
    (+ 3 4)

    (max 8 17 2)

    (eat "sandwich")
~~~

# Comments

~~~
               ;; more food code

(eat "cookie") ;; nom nom nom

(eat "donut")  ;; mmm donuts
~~~

# What is a REPL?

  * **R**ead
  * **E**val
  * **P**rint
  * **L**oop

# Simple values: Value types

  * numbers
  * strings
  * booleans
  * keywords

# Simple values: Numbers

~~~
    ;; integers
    12
    -42

    ;; floats
    10.5
    0.00000072725

    ;; ratios
    1/2
    -7/3
~~~

# Simple values: Arithmetic

~~~

(+ 1 1)  ;; => 1 + 1 = 2

(- 12 4) ;; => 12 - 4 = 8

(* 13 2) ;; => 13 * 2 = 26

(/ 27 9) ;; => 27 / 9 = 3
~~~

# Infix vs. prefix notation

* Infix: `1 + 2 * 3 / 4 - 5`
* Prefix: `(- (+ 1 (/ (* 2 3) 4)) 5)`
* Infix: `1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9`
* Prefix: `(+ 1 2 3 4 5 6 7 8 9)'

# Arithmetic with all number types

~~~
(+ 4/3 7/8)    ;; => 53/24

(- 9 4.2 1/2)  ;; => 4.3

(* 8 1/4)      ;; => 2

(/ 27/2 1.5)   ;; => 3.0
~~~

# *Sneak Peek* at Strings, Booleans, and Keywords

~~~
;; strings
"Salut tout le monde"
"Prost!"

;; keywords
:surname
:birth-date
:r2

;; booleans
true
false
~~~

# Assigning names to values: `def`

~~~
(def mangoes 3)

(def oranges 5)

(+ mangoes oranges) ;; => 8
~~~

# Exercise: Basic arithmetic

* Take your height in feet and inches and convert it to inches using
  arithmetic in Clojure.

* Then convert that to centimeters. There are 2.54 centimeters in an inch.

* Lastly, ask two people near you for their height in
  centimeters. Find the average of your heights.

* Bonus: convert that average back to feet and inches.

* This will be two separate numbers of whole feet and decimal inches

* `(quot x y)` will give you the whole part of the quotient when
  dividing two numbers

* `(mod x y)` will give you the remainder when dividing two numbers.
