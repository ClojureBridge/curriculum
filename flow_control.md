---
layout: default
title: Flow Control
permalink: /flow_control.html
---

{::options parse_block_html="true" /}
<section>
Flow Control
-------------------------
{: .slide-title .chapter}

* `if`
* Boolean logic
* `let`
</section>

<section>
## What is flow control?
{: .slide_title .slide}

#### Decisions how to react <button class="link" ng-model="block11" ng-click="block11=!block11">Details</button>

> "Flow control" is the programming term for deciding how to react to
> a given circumstance. We make decisions like this all the time. *If*
> it's a nice day out, *then* we should visit the park; *otherwise* we
> should stay inside and play board games. *If* your car's tank is
> empty, *then* you should visit a gas station; *otherwise* you should
> continue to your destination.
{: ng-show="block11" .description}

#### Testing conditions to react <button class="link" ng-model="block12" ng-click="block12=!block12">Details</button>

> Software is also full of these decisions. *If* the user's input is
> valid, *then* we should save her data; *otherwise* we show an error
> message. The common pattern here is that you test some condition and
> react differently based on whether the condition is *true* or *false*.
{: ng-show="block12" .description}
</section>

<section>
## if
{: .slide_title .slide}

#### Example <button class="link" ng-model="block21" ng-click="block21=!block21">Details</button>

> In Clojure, the most basic tool we have for this process is the `if`
> operator. Here's how you might code the data validation scenario.
{: ng-show="block21" .description}

> If the `data` is valid, then save `data`; otherwise, show an error
> message.
{: ng-show="block21" .description}

```clojure
(if (valid? data)
  (save! data)
  (error "Your data was invalid"))
```
</section>

<section>
#### General form of `if` operator

```clojure
(if conditional-expression
  expression-to-evaluate-when-true
  expression-to-evaluate-when-false)
```
</section>

<section>
#### `if` examples

```clojure
(if (> 3 1)
  "3 is greater than 1"
  "3 is not greater than 1")
;=> "3 is greater than 1"

(if (> 1 3)
  "1 is greater than 3"
  "1 is not greater than 3")
  ;=> "1 is not greater than 3"
```
</section>

<section>
#### Truthiness <button class="link" ng-model="block51" ng-click="block51=!block51">Details</button>

> When testing the truth of an expression, Clojure considers the
> values `nil` and `false` to be false and everything else to be true.
> Here are some examples:
{: ng-show="block51" .description}


```clojure
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
</section>

<section>
### EXERCISE: Even more name formatting
{: .slide_title .slide}

* Write a function `format-name` that takes a map representing a user,
with keys `:first`, `:last`, and possibly `:middle`.
* It should return their name as a string, like so:

```clojure
(format-name {:first "Margaret" :last "Atwood"})
;=> "Margaret Atwood"

(format-name {:first "Ursula" :last "Le Guin" :middle "K."})
;=> "Ursula K. Le Guin"
```
</section>

<section>
### BONUS: Flexible name formatting
{: .slide_title .slide}

* Change `format-name` to take a second argument, `order`.
* If `order` equals `:last`, then the format should be "Last, First Middle"; otherwise, it should be "First Middle Last."
</section>

<section>
## Boolean logic with `and`, `or`, and `not`
{: .slide_title .slide}

#### <button class="link" ng-model="block81" ng-click="block81=!block81">Intro</button>

> `if` statements are not limited to testing only one thing. You can
> test multiple conditions using boolean logic. _Boolean logic_ refers
> to combining and changing the results of predicates using `and`,
> `or`, and `not`.
{: ng-show="block81" .description}

> If you've never seen this concept in programming before, remember
> that it follows the common sense way you look at things normally. Is
> this _and_ that true? Only if both are true. Is this _or_ that true?
> Yes, if either -- or both! -- are. Is this _not_ true? Yes, if it's
> false.
{: ng-show="block81" .description}
</section>

<section>
### Truthy and falsey table <button class="link" ng-model="block91" ng-click="block91=!block91">Details</button>

> `and`, `or`, and `not` work like other functions (they aren't
> exactly functions, but work like them), so they are in _prefix
> notation_, like we've seen with arithmetic.
{: ng-show="block91" .description}

| x     | y     | (`and` x y) | (`or` x y) | (`not` x) | (`not` y) |
| ----- | ----- | --------- | -------- | ------- | ------- |
| false | false | false | false | true  | true  |
| true  | false | false | true  | false | true  |
| true  | true  | true  | true  | false | false |
| false | true  | false | true  | true  | false |

</section>

<section>
#### `and`, `or`, and `not` combination <button class="link" ng-model="block101" ng-click="block101=!block101">Details</button>

> `and`, `or`, and `not` can be combined. This can be hard to read.
> Here's an example:
{: ng-show="block101" .description}

```clojure
(defn leap-year?
  "Every four years, except years divisible by 100, but yes for years divisible by 400."
  [year]
  (and (zero? (mod year 4))
       (or (zero? (mod year 400))
           (not (zero? (mod year 100))))))
```
</section>

<section>
## `let`
{: .slide_title .slide}

#### <button class="link" ng-model="block111" ng-click="block111=!block111">Intro</button>

> When you are creating functions, you may want to assign names to
> values in order to reuse those values or make your code more
> readable. Inside of a function, however, you should _not_ use `def`,
> like you would outside of a function. Instead, you should use a
> special form called `let`.
{: ng-show="block111" .description}
</section>

<section>
#### `let` example

<button class="link" ng-model="block121" ng-click="block121=!block121">Details 1</button>
<button class="link" ng-model="block122" ng-click="block122=!block122">Details 2</button>
<button class="link" ng-model="block123" ng-click="block123=!block123">Details 3</button>
<button class="link" ng-model="block124" ng-click="block124=!block124">Details 4</button>

> This is the most complicated function we've seen so far, so let's go
> through each step. First, we have the name of the function, the
> documentation string, and the arguments, just as in other functions
{: ng-show="block121" .description}

> Next, we see `let`. `let` takes a vector of alternating names and
> values. `largest` is the first name, and we assign the result of
> `(reduce max numbers)` to it. We also assign the result of `(reduce
> min numbers)` to `smallest`.
{: ng-show="block122" .description}

> After the vector of names and values, there is the body of the
> `let`. Just like a the body of a function, this executes and returns
> a value. Within the `let`, `largest` and `smallest` are defined.
{: ng-show="block123" .description}

> Type the `spread` function into your instarepl and see how it
> evaluates.
{: ng-show="block124" .description}

```clojure
(defn spread
  "Given a collection of numbers, return the difference between the largest and smallest number."
  [numbers]
  (let [largest (reduce max numbers)
        smallest (reduce min numbers)]
    (- largest smallest)))

(spread [10 7 3 -3 8]) ;=> 13
```
</section>

<section>
### EXERCISE: Rewrite average
{: .slide_title .slide}

* Go back to the average bill amounts function you created before and use `let` to make it easier to read.
</section>

<section>
### BONUS: Ordinal numbers, part one
{: .slide_title .slide}

* Given a number (positive integer), return the string representing
the ordinal number. For many numbers, this is done by adding `"th"` to
the end.
* As part one, let us make an exception for numbers ending in a 1, 2,
or 3, by adding `"st"`, `"nd"`, or `"rd"` respectively.
* You will need the `rem` function, which takes 2 integers and returns
the remainder from dividing the first by the second.
* You will also find that nesting `if` forms (putting one inside
another) to be useful.
* Here is an example of how our function will behave:
{: .exercise}

```clojure
(ordinal 1)  ;=> "1st"
(ordinal 2)  ;=> "2nd"
(ordinal 3)  ;=> "3rd"
(ordinal 4)  ;=> "4th"
(ordinal 5)  ;=> "5th"
(ordinal 21) ;=> "21st"
(ordinal 22) ;=> "22nd"
```
</section>

<section>
### BONUS: Ordinal numbers, part two
{: .slide_title .slide}

* As part two, our exceptions above based on the last digit are
superceded when the last 2 digits are 11, 12, or 13, in which case we
add `"th"`.
* Our updated function will behave as follows:

```clojure
(ordinal 10) ;=> "10th"
(ordinal 11) ;=> "11th"
(ordinal 12) ;=> "12th"
(ordinal 13) ;=> "13th"
(ordinal 14) ;=> "14th"
```
</section>
