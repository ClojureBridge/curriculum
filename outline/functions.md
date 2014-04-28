Functions
=========

* What are functions?
* Naming functions
* Important functions
  * Collection functions
* `map` and `reduce` - Functions that take other functions

## What are functions?

You have already seen some functions, such as `count`, `conj`, `first`, and `rest`. All the arithmetic we did had functions, as well: `+`, `-`, `*`, and `/`. What does it mean to be a function, though?

A _function_ is an independent, discrete piece of code that takes in some values (called _arguments_) and returns other values. Let's see an example:

```clj
(defn triple
  "Given a number, return 3 times that number."
  [x]
  (+ x x x))
```

In this code:

* `defn` specifies that we are defining a function.
* `triple` is the name of this function.
* The string on the next line is the documentation for the function, which explains what the function does. This is optional.
* `[x]` is the list of arguments. Here, we have one argument called `x`.
* `(+ x x x)` is the _body_ of the function. This is what executes when we use the function.

To use `triple`, we _call_ the function, just like we've done with all the functions we've already used.

```clj
(triple 2)    ;=> 6
(triple 3/2)  ;=> 9/2
(triple 30.3) ;=> 90.9
```

Functions can also take more than one argument. Let's make an `average` function that takes two numbers and gives us the average of those two numbers:

```clj
(defn average
  [x y]
  (/ (+ x y) 2))

(average 2 3) ;=> 5/2
```

### EXERCISE: Make a function to format names

The `str` function can take any number of arguments, and it concatenates them together to make a string. Write a function called `format-name` that takes two arguments, `first-name` and `last-name`. This function should output the name like so: `Last, First`.

## Naming functions

Function names are symbols, just like the symbols we used with `def` when assigning names to values.

Symbols have to begin with a non-numeric character, and they can contain alphanumeric characters, along with *, +, !, -, _, and ?. This flexibility is important with functions, as there are certain idioms we use.

Functions that return true or false--called _predicates_--usually end in `?`:

* `zero?`
* `vector?`
* `empty?`

## Important functions

There are some functions that are essential when using Clojure. The arithmetic functions and `str` have already been covered, and you need to know them. Let's look at some others.


### Collection functions

When we learned about data structures, we saw many functions that operated on those data structures, including:

* `count`
* `conj`
* `first`
* `rest`
* `nth`
* `assoc`
* `dissoc`
* `merge`

Some of the most powerful functions you can use with collections can take other functions as arguments. That's a complicated idea, so we'll learn more about that next.

## `map` and `reduce` - Functions that take other functions

One of the most magical things about Clojure--and many other programming languages--is that it can have functions that take other functions as arguments. That may not make sense at first, so let's look at an example:

```clj
(defn triple
  [x]
  (+ x x x))

(map triple [1 2 3]) ;=> [3 6 9]
```

`map` is a function that takes another function, along with a collection. It calls the function provided to it on each member of the collection, then returns a new collection with the results of those function calls. This is a weird concept, but it is at the core of Clojure and functional programming in general.

Let's look at another function that takes a function. This one is `reduce`, and it is used to turn collections into a single value:

```clj
(defn add
  [x y]
  (+ x y))

(reduce add [1 2 3]) ;=> 6
```

`reduce` takes the first two members of the provided collection and calls the provided function with those members. Next, it calls the provided function again--this time, using the result of the previous function call, along with the next member of the collection. `reduce` does this over and over again until it finally reaches the end of the collection.

This process is complicated, so let's illustrate it further.

```clj
(defn join-with-space
  [string1 string2]
  (str string1 " " string2))

(reduce join-with-space ["i" "like" "peanut" "butter" "and" "jelly"])
;=> "i like peanut butter and jelly"
```

In the example above, `reduce` calls `join-with-space` with the parameters `"i"` and `"like"`, returning `"i like"`. Then, in order, it makes the following function calls:

* `(join-with-space "i like" "peanut")`
* `(join-with-space "i like peanut" "butter")`
* `(join-with-space "i like peanut butter" "and")`
* `(join-with-space "i like peanut butter and" "jelly")`

Another example of a function that uses a function is `sort-by`. It takes a function and sorts a sequence by applying that function to each element of the sequence. 

```clj
(sort-by val > {:amy 3, :renee 5, :lisa 4})
;=> ([:renee 5] [:lisa 4] [:amy 3])
```

### EXERCISE: Find the average

Create a function called `average` that takes a vector of numbers and returns the average of those numbers.

Hint: You will need to use `reduce` and `count`.