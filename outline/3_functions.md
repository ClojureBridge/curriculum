Functions
=========

* What are functions?
* Naming functions
* Important functions
  * Collection functions
* `map` and `reduce` - Functions that take other functions

## What are functions?

You have already seen some functions, such as `count`, `conj`,
`first`, and `rest`. All the arithmetic we did had functions, as well:
`+`, `-`, `*`, and `/`. What does it mean to be a function, though?

A _function_ is an independent, discrete piece of code that takes in
some values (called _arguments_) and returns other values. Let's see
an example:

```clj
(defn total-bill
  "Given subtotal of bill, return total after tax."
  [subtotal]
  (* 1.08 subtotal))
```

In this code:

* `defn` specifies that we are defining a function.
* `total-bill` is the name of this function.
* The string on the next line is the documentation for the function,
  which explains what the function does. This is optional.
* `[subtotal]` is the list of arguments. Here, we have one argument
  called `subtotal`.
* `(* 1.08 subtotal)` is the _body_ of the function. This is what
  executes when we use the function.

To use `total-bill`, we _call_ the function, just like we've done with
all the functions we've already used.

```clj
(total-bill 8.5)  ;=> 9.18
(total-bill 50)   ;=> 54.0
(total-bill 50/6) ;=> 9.0
```

Functions can also take more than one argument. Let's make a
`total-with-tip` function that additionally takes a tip percentage and
calculates the total amount paid:

```clj
(defn total-with-tip
  "Given subtotal, return total after tax and tip."
  [subtotal tip-pct]
  (* 1.08 subtotal (+ 1 tip-pct)))

(total-with-tip 12.50 0.18) ;=> 15.93
(total-with-tip 50 0.18)    ;=> 63.72
```

### EXERCISE: Find per-person share of bill among a group

Modify our `total-with-tip` function, and call the new function
`share-per-person`, that additionally takes in as an argument the
number of people in the group for a bill.  Have the function return
the average bill amount per person.

## Naming functions

Function names are symbols, just like the symbols we used with `def`
when assigning names to values.

Symbols have to begin with a non-numeric character, and they can
contain alphanumeric characters, along with *, +, !, -, _, and ?. This
flexibility is important with functions, as there are certain idioms
we use.

Functions that return true or false--called _predicates_--usually end
in `?`:

* `zero?`
* `vector?`
* `empty?`

## Important functions

There are some functions that are essential when using Clojure. The
arithmetic functions have already been covered. Let's look at some
others.

### Collection functions

When we learned about data structures, we saw many functions that
operated on those data structures, including:

* `count`
* `conj`
* `first`
* `rest`
* `nth`
* `assoc`
* `dissoc`
* `merge`

Some of the most powerful functions you can use with collections can
take other functions as arguments. That's a complicated idea, so we'll
learn more about that next.

## `map` and `reduce` - Functions that take other functions

One of the most magical things about Clojure--and many other
programming languages--is that it can have functions that take other
functions as arguments. That may not make sense at first, so let's
look at an example:

```clj
(def dine-in-orders [12.50 20 21 16 18.40])
(def take-out-orders [6.00 6.00 7.95 6.25])

(map total-bill dine-in-orders)  ;=> [13.5 21.6 22.68 17.28 19.872]
(map total-bill take-out-orders) ;=> [6.48 6.48 8.586 6.75]
```

`map` is a function that takes another function, along with a
collection. It calls the function provided to it on each member of the
collection, then returns a new collection with the results of those
function calls. This is a weird concept, but it is at the core of
Clojure and functional programming in general.

Let's look at another function that takes a function. This one is
`reduce`, and it is used to turn collections into a single value:

```clj
(defn add
  [x y]
  (+ x y))

(reduce add [1 2 3]) ;=> 6
```

`reduce` takes the first two members of the provided collection and
calls the provided function with those members. Next, it calls the
provided function again--this time, using the result of the previous
function call, along with the next member of the collection. `reduce`
does this over and over again until it finally reaches the end of the
collection.

This process is complicated, so let's illustrate it further.

```clj
(def take-out-totals [6.48 6.48 8.586 6.75])

(reduce add take-out-totals) ;=> 28.296
```

In the example above, `reduce` calls `add` with the parameters `6.48`
and `6.48`, returning `12.96`. Then, in order, it makes the following
function calls:

* `(add 12.96    8.586)   ;=> 21.546`
* `(add 21.546   6.75)    ;=> 28.296`

### EXERCISE: Find the average

Create a function called `average` that takes a vector of bill amounts
and returns the average of those amounts.

Hint: You will need to use `reduce` and `count`.
