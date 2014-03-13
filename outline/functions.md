Functions
=========

## What are functions?

You have already seen some functions, such as `count`, `conj`, `first`, and `rest`. All the arithmetic we did had functions as well: `+`, `-`, `*`, and `/`. What does it mean to be a function, though?

A function is a discrete piece of code that takes in some values (called _arguments_) and returns other values. Let's see an example:

```clj
(defn triple
  "Given a number, return 3 times that number."
  [x]
  (+ x x x))
```

In this code:

* `defn` specifies that we are defining a function.
* `triple` is the name of this function.
* The string on the next line is the documentation for the function. This is optional.
* `[x]` is the list of arguments. We have one argument called `x`.
* `(+ x x x)` is the _body_ of the function. This is what executes when we use this function.

To use `triple`, we _call the function_, just like we did with all the functions we've already used.

```clj
(triple 2)    ;=> 6
(triple 3/2)  ;=> 9/2
(triple 30.3) ;=> 90.9
```

Functions can take more than one argument. Let's make an `average` function that takes two numbers and gives us the average of those two numbers:

```clj
(defn average
  [x y]
  (/ (+ x y) 2))

(average 2 3) ;=> 5/2
```

### EXERCISE: Make a function to format names

The `str` function can take any number of arguments, and it concatenates them together to make a string. Write a function called `format-name` that takes two arguments, `first-name` and `last-name`. This function should output the name like so: `Last, First`.

## Naming functions

Function names are symbols, just like the symbols we used with _def_ when assigning names to values.

Symbols have to begin with a non-numeric character and can contain alphanumeric characters and *, +, !, -, _, and ?. This flexibility is important with functions, as we have certain idioms we use.

Functions that return true or false -- called _predicates_ -- usually end in `?`.

* `zero?`
* `vector?`
* `empty?`

## Important functions

There are some functions that are essential to know to use Clojure. The arithmetic ones and `str` have already been covered, and you need to know them. Let's look at some others.

### Comparison functions

You will often need to test the equality of two things. `=` is the function you use to do that. Imagine a function called `vegetarian?` that determines if a person is vegetarian or not:

```clj
(defn vegetarian?
  [person]
  (= :vegetarian (get person :dietary-restrictions)))
```

Other comparison functions are `>`, `>=`, `<`, `<=`, and `not=`. All but the last of these are for use with numbers. Because they, like all Clojure functions, are used as prefixes, they can be a little tricky. Here's some examples:

```clj
(> 4 3)    ;=> true
(>= 4 5)   ;=> false
(< -1 1)   ;=> true
(<= -1 -2) ;=> false
```

### String functions

A large part of programming is manipulating strings. The most important string function in Clojure to remember is `str`, which concatenates all of its arguments into one string.

```clj
(str "Chocolate" ", " "strawberry" ", and " "vanilla")
;=> "Chocolate, strawberry, and vanilla"
```

TODO add more string functions from clojure.string?

### Collection functions

When we learned about data structures, we saw many functions that operated on those data structures. Some of them were:

* count
* conj
* first
* rest
* nth
* assoc
* dissoc
* merge

Some of the most powerful functions you can use with collections can take other functions as arguments. That's a complicated idea, so we'll learn more about that next.

## Functions that take other functions

One of the most magical things about Clojure -- and many other programming languages -- is that it can have functions that take other functions as arguments. That may not make sense at first, so let's look at an example.

```clj
(defn triple
  [x]
  (+ x x x))

(map triple [1 2 3]) ;=> [3 6 9]
```

`map` is a function that takes another function and a collection. It then calls the function provided to it on each member of the collection and returns a new collection with the results of those function calls. This is a weird concept, but is at the core of Clojure and functional programming in general.

Let's look at another function that takes a function. This one is `reduce`, and it is used to turn collections into a single value.

```clj
(defn add
  [x y]
  (+ x y))

(reduce add [1 2 3]) ;=> 6
```

This is what `reduce` does: it takes the first two members of the collection provided and calls the provided function with those members. It then calls the function again, using the result of the previous function call and the next member of the collection. It does this over and over until it reaches the end of the collection.

This is complicated, so let's illustrate it further.

```clj
(defn join-with-space
  [string1 string2]
  (str string1 " " string2))

(reduce join-with-space ["i" "like" "peanut" "butter" "and" "jelly"])
;=> "i like peanut butter and jelly"
```

First, `reduce` calls `join-with-space` with "i" and "like", returning "i like". Then, in order, it makes the following function calls:

* `(join-with-space "i like" "peanut")`
* `(join-with-space "i like peanut" "butter")`
* `(join-with-space "i like peanut butter" "and")`
* `(join-with-space "i like peanut butter and" "jelly")`

One more example of a function that uses a function, sort-by. It takes a function and sorts a sequence by applying that function to each element of the sequence. 

```clj
(sort-by val > {:amy 3, :renee 5, :lisa 4})
;=> ([:renee 5] [:lisa 4] [:amy 3])
```
### Anonymous functions

So far, all the functions we've seen have names, like `+` and `str` and `reduce`. Functions don't have to have names, though, just like values don't have to have names. We call functions without names _anonymous functions_.

Before we go forward, you should understand that you can _always_ feel free to name all of your functions. There is nothing wrong at all with doing that. However, you will see Clojure code with anonymous functions, so you should be able to understand it.

An anonymous function is created with `fn`, like so:

```clj
(fn [string1 string2] (str string1 " " string2))
```

You might recognize that as the function we created before that we called `join-with-space`. `fn` works a lot like `defn`: we still have arguments listed as a vector and a function body. I didn't break the line in the anonymous function above, but you can, just like you can in a named function.

Why would you ever do this? Anonymous functions can be very useful when we have functions that take other functions. Let's take each of our examples above, but use anonymous functions instead of named functions.

```clj
(map (fn [x] (+ x x x)) [1 2 3]) ;=> [3 6 9]
(reduce (fn [x y] (+ x y)) [1 2 3]) ;=> 6
(reduce
  (fn [s1 s2] (str s1 " " s2))
  ["i" "like" "peanut" "butter" "and" "jelly"])
;=> "i like peanut butter and jelly"
```

### EXERCISE: Find the average

Create a function called `average` that takes a vector of numbers and returns the average of those numbers.

Hint: you will need to use `reduce` and `count`.

### EXERCISE: Get the names of people

Create a function called `get-names` that takes a vector of maps of people and returns a vector of their names.

Here is an example of how it should work:

```clj
(get-names [{:first "Margaret" :last "Atwood"}
            {:first "Doris" :last "Lessing"}
            {:first "Ursula" :last "Le Guin"}
            {:first "Alice" "Munro"}])

;=> ["Margaret Atwood" "Doris Lessing" "Ursula Le Guin" "Alice Munro"]
```

## `let`

Sometimes when you are creating functions, you may want to assign names to values in order to reuse them or make your code more readable. Inside a function, however, you should _not_ use `def`, like you would outside a function. You use a special form called `let`. Let's look at an example:

```clj
(defn spread
  "Given a collection of numbers, return the difference between the largest and smallest number."
  [numbers]
  (let [largest (reduce max numbers)
        smallest (reduce min numbers)]
    (- largest smallest)))

(spread [10 7 3 -3 8]) ;=> 13
```

This is the most complicated function we've seen yet, so let's go through each step. First, we have the name of the function, the documentation string, and the arguments, like in other functions.

Next, we see `let`. `let` takes a vector of alternating names and values. `largest` is the first name, and we assign the result of `(reduce max numbers)` to it. We assign the result of `(reduce min numbers)` to `smallest`.

After the vector of names and values, there is the body of the `let`. Just like a the body of a function, this executes and returns a value. Within the `let`, `largest` and `smallest` are defined.

Type the `spread` function into your instarepl and see how it evaluates.

### EXERCISE: Rewrite average

Go back to the `average` function you created before and use `let` to make it easier to read.
