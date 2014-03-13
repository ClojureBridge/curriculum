Flow Control
============

"Flow control" is the programming term for deciding how to react to a given circumstance. We make decisions like this all the time. *If* it's a nice day out, *then* we should visit the park; *otherwise* we should stay inside and play board games. *If* your car's tank is empty, *then* you should visit a gas station; *otherwise* you should continue to your destination.

Software is also full of these decisions. *If* the user's input is valid, *then* we should save her data; *otherwise* we show an error message. The common pattern here is that you test some condition and react differently based on whether the condition is *true* or *false*.

## if

In Clojure, the most basic tool we have for this process is the `if` operator. Here's how you might code the data validation scenario:

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

When testing the truth of an expression, Clojure considers the values `nil` and `false` to be false and everything else to be true. Here are some examples:

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

Write a function `format-name` that takes a map representing a user, with keys `:first`, `:last`, and possibly `:middle`. It should return their name as a string, like so:

```clj
(format-name {:first "Margaret" :last "Atwood"})
;=> "Margaret Atwood"

(format-name {:first "Ursula" :last "Le Guin" :middle "K."})
;=> "Ursula K. Le Guin"
```

### BONUS: Flexible name formatting

Change `format-name` to take a second argument, `order`. If `order` equals `:last`, then the format should be "Last, First Middle"; otherwise, it should be "First Middle Last."


## Boolean logic with and, or, and not

`if` statements are not limited to testing only one thing. You can test multiple conditions using boolean logic. _Boolean logic_ refers to combining and changing the results of predicates using `and`, `or`, and `not`.

If you've never seen this concept in programming before, remember that it follows the common sense way you look at things normally. Is this _and_ that true? Only if both are true. Is this _or_ that true? Yes, if either -- or both! -- are. Is this _not_ true? Yes, if it's false.

Look at this truth table:

| x     | y     | (and x y) | (or x y) | (not x) | (not y) |
| ----- | ----- | --------- | -------- | ------- | ------- |
| false | false | false | false | true  | true  |
| true  | false | false | true  | false | true  |
| true  | true  | true  | true  | false | false |
| false | true  | false | true  | true  | false |

`and`, `or`, and `not` work like other functions (they aren't exactly functions, but work like them), so they are in _prefix notation_, like we've seen with arithmetic.

`and`, `or`, and `not` can be combined. This can be hard to read. Here's an example:

```clj
(defn leap-year?
  "Every four years, except years divisible by 100, but yes for years divisible by 400."
  [year]
  (and (zero? (mod year 4))
       (or (zero? (mod year 400))
           (not (zero? (mod year 100))))))
```


## cond **CANDIDATE FOR REMOVAL**

Sometimes you might want to do multiple conditional checks. For example, you might want to check whether a number is within a certain range. Here's the general form of `cond`:

```clojure
(cond
  test-condition-1 expression-to-evaluate-when-test-condition-1-is-true
  test-condition-2 expression-to-evaluate-when-test-condition-2-is-true
  test-condition-3 expression-to-evaluate-when-test-condition-3-is-true
  :else expression-to-evaluate-when-no-test-conditions-are-true)
```

Here's how you could use it to check that a number is within a range:

```clojure
(let [breaths-taken-today 100]
  (cond
   (and (> breaths-taken-today 0) (< breaths-taken-today 50))
   "That's a good start! You probably want to breathe more, though."

   (and (> breaths-taken-today 51) (< breaths-taken-today 100))
   "Wow, you're breathing like a pro!"

   :else
   "Hold on there buddy, that's a lot of breathing. Might want to hold off on that a bit."))
```

Clojure has other conditional operators, but they're just there to make your code slightly more concise. `if`, `do`, and `cond` will allow you to express the behavior you want for every condition!

### EXERCISE: Revisit leap year

Rewrite the `leap-year?` function shown earlier to use `cond` instead of nested boolean logic.


## do **CANDIDATE FOR REMOVAL**

One thing you may have noticed is that you are only allowed to evaluate one expression for each branch of the `if` expression. The `do` operator allows you to "bundle up" multiple expressions so that you can "do" multiple things. Here's an example:

```clojure
(if (> 5 0)
  (do
    (println "5 is indeed greater than 0!")
    (println "I wonder if 0 has low self-esteem"))
  (do
    (println "0 is indeed greater than 5!")
    (println "Because numbers have been broken I guess")))
; => "5 is indeed greater than 0!"
; => "I wonder if 0 has low self-esteem"
```

