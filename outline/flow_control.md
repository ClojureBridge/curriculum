Flow Control
============

"Flow Control" is the fancy name for deciding how to react to a given circumstance. Life is full of such decisions. *If* it's a nice day out, *then* you should visit the park; *otherwise* you should stay inside and mope. *If* your car's tank is empty, *then* you should visit a gas station; *otherwise* you should continue speeding to your destination.

Software is also full of these decisions. *If* the user's input is valid, *then* you should save her data; *otherwise* you show an error message. The common pattern here is that you test some condition and react differently based on whether the condition is *true* or *false*.

In Clojure, the most basic tool we have for this process is the `if` operator. Here's how you might code the data validation scenario:

```clojure
(if (valid? data)
  (save! data)
  (output "Your data was invalid"))
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
; => "3 is greater than 1"

(if (> 1 3)
  "1 is greater than 3"
  "1 is not greater than 3")
; => "1 is not greater than 3"

(if "anything other than nil or false is considered true"
  "A string is considered true"
  "A string is not considered true")
; => "A string is considered true"

(if nil
  "nil is considered true"
  "nil is not considered true")
; => "nil is not considered true"

(if (get {:a 1} :b)
  "expressions which evaluate to nil are considered true"
  "expressions which evaluate to nil are not considered true")
; => "expressions which evaluate to nil are not considered true"
```

TODO: explain in a bit more detail

One thing you may have noticed is tha you are only allowed to evaluate one expression for each branch of the `if` expression. The `do` operator allows you to "bundle up" multiple expressions so that you can "do" multiple things. Here's an example:

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

Sometimes you might want to do multiple conditional checks. For example, your software might show a user a bunch of buttons and do different things depending on what button was pressed. In that situation, you can use `case`:

```clojure
(case button-pressed
  1 "You pressed button number 1"
  2 "You pressed button number 2"
  3 "You pressed button number 3")
```

This is equivalent to writing something like:

```clojure
(if (= 1 button-pressed)
  "You pressed button number 1"
  (if (= 2 button-pressed)
    "You pressed button number 2"
    (if (= 3 button-pressed)
      "You pressed button number 1")))
```

Another way do multiple conditional checks is with the `cond` operator. Here's the general form of `cond`:

```clojure
(cond
  test-condition-1 expression-to-evaluate-when-test-condition-1-is-true
  test-condition-2 expression-to-evaluate-when-test-condition-2-is-true
  test-condition-3 expression-to-evaluate-when-test-condition-3-is-true
  :else expression-to-evaluate-when-no-test-conditions-are-true)
```

Here's how it might be used:

```clojure
(cond
  (> 0 3) "This is false"
  (= "flowers" "unicorns") "This is false, too"
  (= 5 5) "5 is indeed equal to 5 so this is the return value")
; => "5 is indeed equal to 5 so this is the return value"
```
