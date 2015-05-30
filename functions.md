---
layout: default
title: Functions
permalink: /functions.html
---

{::options parse_block_html="true" /}
<section>
Functions
-------------------------------
{: .slide-title .chapter}

* What are functions?
* Naming functions
* Important functions
    * Collection functions
* `map` and `reduce` - Functions that take other functions
</section>

<section>
## What are functions?
{: .slide_title .slide}

#### <button class="link" ng-model="block11" ng-click="block11=!block11">Intro</button>

> You have already seen some functions, such as `count`, `conj`,
> `first`, and `rest`. All the arithmetic we did used functions, as
> well: `+`, `-`, `*`, and `/`. What does it mean to be a function,
> though?
{: ng-show="block11" .description}

> A _function_ is an independent, discrete piece of code that takes in
> some values (called _arguments_) and returns a value.
{: ng-show="block11" .description}

* `count`, `conj`, `first`
* `+`, `-`, `*`, `/`
* A piece of code that takes values and returns a value
</section>

<section>
#### An example function <button class="link" ng-model="block21" ng-click="block21=!block21">Details</button>

> * `defn` specifies that we are defining a function.
> * `total-bill` is the name of this function.
> * The string on the next line is the documentation for the function, which explains what the function does. This is optional.
> * `[subtotal]` is the list of arguments. Here, we have one argument called `subtotal`.
> * `(* 1.08 subtotal)` is the _body_ of the function. This is what executes when we use the function.
{: ng-show="block21" .description}

```clojure
(defn total-bill
  "Given subtotal of bill, return total after tax."
  [subtotal]
  (* 1.08 subtotal))
```
</section>

<section>
#### How to use `total-bill` function <button class="link" ng-model="block31" ng-click="block31=!block31">Details</button>

> To use `total-bill`, we _call_ the function, just like we've done with all the functions we've already used.
{: ng-show="block31" .description}

```clojure
(total-bill 8.5)  ;=> 9.18
(total-bill 50)   ;=> 54.0
(total-bill 50/6) ;=> 9.0
```
</section>

<section>
#### A function with multiple arguments <button class="link" ng-model="block41" ng-click="block41=!block41">Details</button>

> Functions can also take more than one argument. Let's make a
> `total-with-tip` function that takes a tip percentage, in addition
> to the subtotal, and calculates the total amount paid:
{: ng-show="block41" .description}

```clojure
(defn total-with-tip
  "Given subtotal, return total after tax and tip."
  [subtotal tip-pct]
  (* 1.08 subtotal (+ 1 tip-pct)))

(total-with-tip 12.50 0.18) ;=> 15.93
(total-with-tip 50 0.18)    ;=> 63.72
```
</section>

<section>
### EXERCISE: Find per-person share of bill among a group
{: .slide_title .slide}

* Create a new function, `share-per-person`, that takes three
  arguments: the subtotal, the tip percent, and the number of people
  in the group.

* It should call our `total-with-tip` function but change the result
to return the average amount each person should pay.
</section>

<section>
## Naming functions
{: .slide_title .slide}

#### Symbols <button class="link" ng-model="block61" ng-click="block61=!block61">Details</button>

> Function names are symbols, just like the symbols we used with `def`
> when assigning names to values.
{: ng-show="block61" .description}

> Symbols have to begin with a non-numeric character, and they can
> contain alphanumeric characters, along with *, +, !, -, _, and ?.
> This flexibility is important with functions, as there are certain
> idioms we use.
{: ng-show="block61" .description}

#### Examples of predicate functions <button class="link" ng-model="block62" ng-click="block62=!block62">Details</button>

> Functions that return true or false--called _predicates_--usually end in `?`:
{: ng-show="block62" .description}

* zero?
* vector?
* empty?
</section>

<section>
## Important functions
{: .slide_title .slide}

#### <button class="link" ng-model="block71" ng-click="block71=!block71">Intro</button>

> There are some functions that are essential when using Clojure. The
> arithmetic functions have already been covered. Let's look at some
> others.
{: ng-show="block71" .description}
</section>

<section>
### Collection functions
{: .slide_title .slide}

#### <button class="link" ng-model="block81" ng-click="block81=!block81">Intro</button>

> When we learned about data structures, we saw many functions that
> operated on those data structures, including:
{: ng-show="block81" .description}

* `count`
* `conj`
* `first`
* `rest`
* `nth`
* `assoc`
* `dissoc`
* `merge`
</section>

<section>
### Functions that take other functions
{: .slide_title .slide}

#### <button class="link" ng-model="block91" ng-click="block91=!block91">Intro</button>

>Some of the most powerful functions you can use with collections can take other functions as arguments.
> This is one of the most magical things about Clojure--and many other programming languages.
> That's a complicated idea, also, may not make sense at first.
> Let's look at an example and learn more about that.
{: ng-show="block91" .description}
</section>

<section>
#### `map` function

#### <button class="link" ng-model="block101" ng-click="block101=!block101">Details</button>

> `map` is a function that takes another function, along with a
> collection. It calls the function provided to it on each member of
> the collection, then returns a new collection with the results of
> those function calls. This is a weird concept, but it is at the core
> of Clojure and functional programming in general.
{: ng-show="block101" .description}

```clojure
(def dine-in-orders [12.50 20 21 16 18.40])
(def take-out-orders [6.00 6.00 7.95 6.25])

(map total-bill dine-in-orders)  ;=> [13.5 21.6 22.68 17.28 19.872]
(map total-bill take-out-orders) ;=> [6.48 6.48 8.586 6.75]
```
</section>

<section>
#### `reduce` function

#### <button class="link" ng-model="block111" ng-click="block111=!block111">Details</button>

> Let's look at another function that takes a function. This one is
> `reduce`, and it is used to turn collections into a single value.
{: ng-show="block111" .description}

> `reduce` takes the first two members of the provided collection and
> calls the provided function with those members. Next, it calls the
> provided function again--this time, using the result of the previous
> function call, along with the next member of the collection.
> `reduce` does this over and over again until it finally reaches the
> end of the collection.
{: ng-show="block111" .description}

```clojure
(reduce + [1 2 3])   ;=> 6
(reduce max [1 2 3]) ;=> 3
```
</section>

<section>
#### `reduce` in action

#### <button class="link" ng-model="block121" ng-click="block121=!block121">Details</button>

> The `reduce` function's process is complicated, so let's illustrate
> it further.
{: ng-show="block121" .description}

> In the example below, `reduce` calls `+` with the parameters `6.48`
> and `6.48`, returning `12.96`. Then, in order, it makes the
> following function calls:
>
> * `(+ 12.96  8.586) ;=> 21.546`
> * `(+ 21.546 6.75)  ;=> 28.296`
{: ng-show="block121" .description}

```clojure
(def take-out-totals [6.48 6.48 8.586 6.75])
(reduce + take-out-totals) ;=> 28.296
```
</section>

<section>
### EXERCISE: Find the average
{: .slide_title .slide}

* Create a function called `average` that takes a vector of bill amounts and returns the average of those amounts.

* Hint: You will need to use the functions `reduce` and `count`.
</section>
