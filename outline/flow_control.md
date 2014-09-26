Flow Control
============

* `if`
* Boolean logic
* `let`

"Flow control" is the programming term for deciding how to react to a
given circumstance. We make decisions like this all the time. *If*
it's a nice day out, *then* we should visit the park; *otherwise* we
should stay inside and play board games. *If* your car's tank is
empty, *then* you should visit a gas station; *otherwise* you should
continue to your destination.

Software is also full of these decisions. *If* the user's input is
valid, *then* we should save her data; *otherwise* we show an error
message. The common pattern here is that you test some condition and
react differently based on whether the condition is *true* or *false*.

## if

In Clojure, the most basic tool we have for this process is the `if`
operator. Here's how you might code the data validation scenario:

```clojure
(if (valid? data)
  (save! data)
  (error "Your data was invalid"))
```

The general form of the `if` operator is:

```clojure
(if conditional-expression
  expression-to-evaluate-when-true
  expression-to-evaluate-when-false)
```

When testing the truth of an expression, Clojure considers the values
`nil` and `false` to be false and everything else to be true. Here are
some examples:

```clojure
(if (> 3 1)
  "3 is greater than 1"
  "3 is not greater than 1")
;=> "3 is greater than 1"

(if (> 1 3)
  "1 is greater than 3"
  "1 is not greater than 3")
;=> "1 is not greater than 3"

(if "anything other than nil or false is considered true"
  "A string is considered true"
  "A string is not considered true")
;=> "A string is considered true"

(if nil
  "nil is considered true"
  "nil is not considered true")
;=> "nil is not considered true"

(if (get {:a 1} :b)
  "expressions which evaluate to nil are considered true"
  "expressions which evaluate to nil are not considered true")
;=> "expressions which evaluate to nil are not considered true"
```

### EXERCISE: Even more name formatting

Write a function `format-name` that takes a map representing a user,
with keys `:first`, `:last`, and possibly `:middle`. It should return
their name as a string, like so:

```clj
(format-name {:first "Margaret" :last "Atwood"})
;=> "Margaret Atwood"

(format-name {:first "Ursula" :last "Le Guin" :middle "K."})
;=> "Ursula K. Le Guin"
```

### BONUS: Flexible name formatting

Change `format-name` to take a second argument, `order`. If `order`
equals `:last`, then the format should be "Last, First Middle";
otherwise, it should be "First Middle Last."

## Boolean logic with and, or, and not

`if` statements are not limited to testing only one thing. You can
test multiple conditions using boolean logic. _Boolean logic_ refers
to combining and changing the results of predicates using `and`, `or`,
and `not`.

If you've never seen this concept in programming before, remember that
it follows the common sense way you look at things normally. Is this
_and_ that true? Only if both are true. Is this _or_ that true? Yes,
if either -- or both! -- are. Is this _not_ true? Yes, if it's false.

Look at this truth table:

| x     | y     | (and x y) | (or x y) | (not x) | (not y) |
| ----- | ----- | --------- | -------- | ------- | ------- |
| false | false | false | false | true  | true  |
| true  | false | false | true  | false | true  |
| true  | true  | true  | true  | false | false |
| false | true  | false | true  | true  | false |

`and`, `or`, and `not` work like other functions (they aren't exactly
functions, but work like them), so they are in _prefix notation_, like
we've seen with arithmetic.

`and`, `or`, and `not` can be combined. This can be hard to
read. Here's an example:

```clj
(defn leap-year?
  "Every four years, except years divisible by 100, but yes for years divisible by 400."
  [year]
  (and (zero? (mod year 4))
       (or (zero? (mod year 400))
           (not (zero? (mod year 100))))))
```


## `let`

When you are creating functions, you may want to assign names to
values in order to reuse those values or make your code more
readable. Inside of a function, however, you should _not_ use `def`,
like you would outside of a function. Instead, you should use a
special form called `let`. Let's look at an example:

```clj
(defn spread
  "Given a collection of numbers, return the difference between the largest and smallest number."
  [numbers]
  (let [largest (reduce max numbers)
        smallest (reduce min numbers)]
    (- largest smallest)))

(spread [10 7 3 -3 8]) ;=> 13
```

This is the most complicated function we've seen so far, so let's go
through each step. First, we have the name of the function, the
documentation string, and the arguments, just as in other functions.

Next, we see `let`. `let` takes a vector of alternating names and
values. `largest` is the first name, and we assign the result of
`(reduce max numbers)` to it. We also assign the result of `(reduce
min numbers)` to `smallest`.

After the vector of names and values, there is the body of the
`let`. Just like a the body of a function, this executes and returns a
value. Within the `let`, `largest` and `smallest` are defined.

Type the `spread` function into your instarepl and see how it
evaluates.

### EXERCISE: Rewrite average

Go back to the average bill amounts function you created before and
use `let` to make it easier to read.

### BONUS: Ordinal numbers

Given a number (positive integer), return the string representing the
ordinal number.  For many numbers, this is done by adding `"th"` to
the end.  As part one, let us make an exception for numbers ending in
a 1, 2, or 3, by adding `"st"`, `"nd"`, or `"rd"` respectively.  You
will need the `rem` function, which takes 2 integers and returns the
remainder from dividing the first by the second.  You will also find
that nesting `if` forms (putting one inside another) to be useful.
Here is an example of how our function will behave:

```clj
(ordinal 1)  ;=> "1st"
(ordinal 2)  ;=> "2nd"
(ordinal 3)  ;=> "3rd"
(ordinal 4)  ;=> "4th"
(ordinal 5)  ;=> "5th"
(ordinal 21) ;=> "21st"
(ordinal 22) ;=> "22nd"
```

As part two, our exceptions above based on the last digit are
superceded when the last 2 digits are 11, 12, or 13, in which case we
add `"th"`.  Our updated function will behave as follows:

```clj
(ordinal 10) ;=> "10th"
(ordinal 11) ;=> "11th"
(ordinal 12) ;=> "12th"
(ordinal 13) ;=> "13th"
(ordinal 14) ;=> "14th"
```
