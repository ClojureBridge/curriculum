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


