---
layout: default
title: Flow Control
permalink: /outline/flow_control.html
---

{::options parse_block_html="true" /}

{% comment %}

http://clojurebridge.github.io/curriculum/outline/flow_control.html

{% endcomment %}

<section>
Flow Control
-------------------------
{: .slide-title .chapter}

* `if`
* `cond`
* Boolean logic
</section>

<section ng-controller="NarrativeController">
### What is flow control?
{: .slide_title .slide}

#### Decisions how to react <button class="link" ng-bind-html="details" ng-model="block11" ng-click="block11=!block11"></button>

> "Flow control" is the programming term for deciding how to react to
> a given circumstance. We make decisions like this all the time. *If*
> it's a nice day out, *then* we should visit the park; *otherwise* we
> should stay inside and play board games. *If* your car's tank is
> empty, *then* you should visit a gas station; *otherwise* you should
> continue to your destination.
{: ng-show="block11" .description}

#### Testing conditions to react <button class="link" ng-bind-html="details" ng-model="block12" ng-click="block12=!block12"></button>

> Software is also full of these decisions. *If* the user's input is
> valid, *then* we should save her data; *otherwise* we show an error
> message. The common pattern here is that you test some condition and
> react differently based on whether the condition is *true* or *false*.
{: ng-show="block12" .description}
</section>

<section ng-controller="NarrativeController">
### `if`
{: .slide_title .slide}

<button class="link" ng-bind-html="details1" ng-model="block21"
ng-click="block21=!block21"></button>
<button class="link" ng-bind-html="details2" ng-model="block22" ng-click="block22=!block22"></button>

> In Clojure, the most basic tool we have for the flow control is the `if`
> operator. Here's the example how you might code the data validation scenario.
{: ng-show="block21" .description}

> Here' an example. If adding 40 to `y` is still less than 150, then
> return `(+ y 40)`; otherwise, returns -150. (As for turtle app's
> frame, the top has 150 in y, while the bottom has -150 in y.)
{: ng-show="block22" .description}

> Reference: [Conditional `if`](http://clojurebridge.github.io/community-docs/docs/clojure/if/)
{: ng-show="block22" .description}

```clojure
(if (< (+ y 40) 150)
  (+ y 40)
  -150))
```
</section>

<section ng-controller="NarrativeController">
#### General form of `if` operator

```clojure
(if conditional-expression
  expression-to-evaluate-when-true
  expression-to-evaluate-when-false)
```
</section>

<section ng-controller="NarrativeController">
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

<section ng-controller="NarrativeController">
#### Truthiness <button class="link" ng-bind-html="details" ng-model="block51" ng-click="block51=!block51"></button>

> When testing the truth of an expression, Clojure considers the
> values `nil` and `false` to be false and everything else to be true.
> Here are some examples:
{: ng-show="block51" .description}

> Reference: [Truthiness](http://clojurebridge.github.io/community-docs/docs/clojure/truthiness/)
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
#### EXERCISE 1: Y value within a frame
{: .slide_title .slide}

* Write a function `y-within-frame` that takes y (vertical position) as an argument.
* You may use if example in the slide.
* The function should return the y value that won't exceed 150.

    - See: [x and y in absolute values](https://github.com/ClojureBridge/welcometoclojurebridge/blob/master/outline/TURTLE.md#x-and-y-in-absolute-values)

```clojure
;; if example
(if (< (+ y 40) 150)
  (+ y 40)
  -150))
```

```clojure
;; usage of y-within-frame function
(y-within-frame 80)    ;=> 120
(y-within-frame 180)   ;=> -150
```
</section>

<section ng-controller="NarrativeController">
### `cond`
{: .slide_title .slide}

<button class="link" ng-bind-html="details1" ng-model="block61" ng-click="block61=!block61"></button>
<button class="link" ng-bind-html="details2" ng-model="block62" ng-click="block62=!block62"></button>

> The `if` operator takes only one predicate.
> When we want to use multiple predicates, `if` is not a good option.
> We have to write nested, nested, ... and nested `if` conditions.
> To branch to multiple situations, `cond` operator works well.
{: ng-show="block61" .description}

> Here's the example. If adding 40 to y exceeds 150, evaluate the
> first form. In this case, it returns -150. If adding 40 to y is less
> than -150, evaluate the second form. In this case, it returns 150.
> If both two predicates return false, evaluate the `:else` form. In
> this case, it returns y plus 40. If we use this function in the
> turtle app, we can keep our turtle between top and bottom of the frame.
{: ng-show="block62" .description}

> Reference: [Conditional `cond`](http://clojurebridge.github.io/community-docs/docs/clojure/cond/)
{: ng-show="block62" .description}

```clojure
(cond
  (> (+ y 40) 150) -150
  (< (+ y 40) -150) 150
  :else (+ y 40)))
```
</section>

<section ng-controller="NarrativeController">
#### General form of `cond` operator

```clojure
(cond
  predicate1 expression-to-evaluate-when-predicate1-is-true
  predicate2 expression-to-evaluate-when-predicate2-is-true
  ...
  :else expression-to-evaluate-when-all-above-are-false)
```
</section>

<section>
#### EXERCISE 2: Y value within a frame - part 2
{: .slide_title .slide}

> The function we wrote in the previous exercise, `y-within-frame`, has
> a flaw. If the given y value is -1000, the function will return -960.
> Since y value of the frame bottom is -150, -960 is beyond that.
> Your turtle will go invisible area. Let's make it real within-frame
> function using `cond`.

* Write a function `y-within-frame-cond` that takes y (vertical position) as an argument.
* You may use `cond` example in the slide.
* The function should return the y value between -150 and 150.

    - See: [x and y in absolute values](https://github.com/ClojureBridge/welcometoclojurebridge/blob/master/outline/TURTLE.md#x-and-y-in-absolute-values)

```clojure
;; usage of y-within-frame-cond function
(y-within-frame-cond 200)    ;=> -150
(y-within-frame-cond -200)   ;=> 150
(y-within-frame-cond 0)      ;=> 40
```
</section>

<section ng-controller="NarrativeController">
### Boolean logic with `and`, `or`, and `not`
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

<section ng-controller="NarrativeController">
### Truthy and falsey table <button class="link" ng-bind-html="details" ng-model="block91" ng-click="block91=!block91"></button>

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

<section ng-controller="NarrativeController">
#### `and`, `or`, and `not` combination <button class="link" ng-bind-html="details" ng-model="block101" ng-click="block101=!block101"></button>

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

<section ng-controller="NarrativeController">
#### [Bonus] `cond`, `and`, `or`, and `not` combination <button class="link" ng-bind-html="details" ng-model="block110" ng-click="block110=!block110"></button>

> We have learned `cond`, `and`, `or`, and `not`. Let's think what function we can write
> combining those.
> Here's an example:
{: ng-show="block110" .description}

```clojure
(defn true-or-false?
  "Given op, returns true or false"
  [op]
  (let [x true
        y false]
    (cond
      (= op :and) (and x y)
      :else false)))

(defn correct?
  "Given op and ans, returns message whether ans was corret or not"
  [op ans]
  (if (= ans (true-or-false? op))
      "You won"
      "You lost"))
```
</section>

<section>
#### EXERCISE 3: [Bonus] Complete `true-or-false?` function
{: .slide_title .slide}

> `true-or-false?` function in previous slide sees only `:and`
> operation. Add `:or`, `:not` operation in the function.

* Use `core.clj` of `myproject` and InstaREPL
* Add `(= op :or)` and `(= op :not)` in `cond`
* For `:not`, choose either x or y for the argument

```clojure
;; usage of correct? function
(corret? :and false)   ;=> "You won"
(corret? :or false)    ;=> "You lost"
(corret? :not true)    ;=> "You won"  (this may be "You lost")
```
</section>

{% comment %}

:star2: A link below is for a slide only. Go to [README.md](../README.md)
instead. :star2:

{% endcomment %}

<section>
Return to the <a href="javascript:;" onClick="Reveal.slide(1);">first slide</a>,
or go to the [curriculum outline](/curriculum/#/1).
</section>
