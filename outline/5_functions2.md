More Functions
=========

* Important functions
  * Comparison (boolean) functions
  * String functions
* Anonymous functions

## Important functions

There are some functions that are essential when using Clojure. The
arithmetic functions and `str` have already been covered, and you need
to know them. Let's look at some others.

### Comparison (boolean) functions

You can use the function `=` to test the equality of two things. For
example, here is a function called `meaning-of-life?` that determines
whether the input is `42` or not:

```clj
(defn meaning-of-life?
  [x]
  (= x 42))
```

The other comparison functions are `>`, `>=`, `<`, `<=`, and `not=`,
and all but the last of these are used exclusively with numbers. Like
all Clojure functions, the comparison functions are used as prefixes,
so they can be a little tricky. Here's some examples:

```clj
(> 4 3)    ;=> true
(>= 4 5)   ;=> false
(< -1 1)   ;=> true
(<= -1 -2) ;=> false
(< 1 5 9)  ;=> true
(< 1 5 3)  ;=> false
```

### String functions

A large part of programming is manipulating strings. The most
important string function in Clojure to remember is `str`, which
concatenates all of its arguments into one string:

```clj
(str "Chocolate" ", " "strawberry" ", and " "vanilla")
;=> "Chocolate, strawberry, and vanilla"
```

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

### Anonymous functions

So far, all the functions we've seen have had names, like `+` and
`str` and `reduce`. However, functions don't need to have names, just
like values don't need to have names. We call functions without names
_anonymous functions_.

Before we go forward, you should understand that you can _always_ feel
free to name your functions. There is nothing wrong at all with doing
that. However, you _will_ see Clojure code with anonymous functions,
so you should be able to understand it.

An anonymous function is created with `fn`, like so:

```clj
(fn [string1 string2] (str string1 " " string2))
```

You might notice that this function is the same as the function we
called `join-with-space`. `fn` works a lot like `defn`; we still have
arguments listed as a vector and a function body. I didn't break the
line in the anonymous function above, but you can, just like you can
in a named function.

Why would you ever do this? Anonymous functions can be very useful
when we have functions that take other functions. Let's take each of
our examples above, but use anonymous functions instead of named
functions.

```clj
(map (fn [x] (* 3 x)) [1 2 3]) ;=> [3 6 9]
(reduce (fn [x y] (+ x y)) [1 2 3]) ;=> 6
(reduce
  (fn [s1 s2] (str s1 " " s2))
  ["i" "like" "peanut" "butter" "and" "jelly"])
;=> "i like peanut butter and jelly"
```
