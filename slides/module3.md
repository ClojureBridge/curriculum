# Module 3: Functions

# What are functions?

* `count, conj first`
* `+ - * /`
* A piece of code that takes values and returns a value.

# An example function

~~~
    (defn total-bill
      "Given subtotal of bill, return total after tax."
      [subtotal]
      (* 1.08 subtotal))

    (total-bill 8.5)  ;; => 9.18
    (total-bill 50)   ;; => 54.0
    (total-bill 50/6) ;; => 9.0
~~~

# An example function

~~~
    (defn            ;; specifies that we are defining a function
          total-bill ;; the name of this function

                     ;; documentation, optional
          "Given subtotal of bill, return total..."

          [x]        ;; list of arguments

                     ;; body of function
          (* 1.08 subtotal))
~~~

# A function with multiple arguments.

~~~
    (defn total-with-tip
      "Given subtotal, return total after tax and tip."
      [subtotal tip-pct]       ;; takes 2 arguments
      (* 1.08 subtotal (+ 1 tip-pct)))

      (total-with-tip 12 0.18) ;; => 15.93
~~~


# Exercise: Find per-person share of bill among a group

Modify our `total-with-tip` function, and call the new
function `share-per-person`, that additionally takes in as
an argument the number of people in the group for a bill.

Have the function return the average bill amount per person.

# Naming functions

  * Functions are named like any other value.
  * Predicate functions usually end in `?`:

~~~
    zero?
    vector?
    empty?
~~~

# Functions that take other functions: map!

~~~
(def dine-in-orders [12.50 20 21 16 18.40])
(def take-out-orders[6.00 6.00 7.95 6.25])

(map total-bill dine-in-orders)  ;; => [13.5 21.6 22.68 17.28 19.872]
(map total-bill take-out-orders) ;; => [6.48 6.48 8.586 6.75]
~~~


# Functions that take other functions: reduce!

~~~
    (defn add
      [x y]
      (+ x y))

    (reduce add [1 2 3]) ;; => 6
~~~

# `reduce` in action

~~~
    (def take-out-totals [6.48 6.48 8.586 6.75])

    (reduce add take-out-totals) ;; => 28.296
~~~

# `reduce` in action

~~~
    (def take-out-totals [6.48 6.48 8.586 6.75])
    (reduce add take-out-totals)    ;; => 28.296

    (add 6.48    6.48)  ;; => 12.96
    (add 12.96   8.586) ;; => 21.546
    (add 21.546  6.75)  ;; => 28.296
~~~

# Exercise: Find the average

Create a function called `average` that takes a vector of
bill amounts and returns the average of those amounts.

Hint: you will need to use `reduce` and `count`.
