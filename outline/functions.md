---
layout: default
title: Functions
permalink: /outline/functions.html
---

{::options parse_block_html="true" /}

{% comment %}

http://clojurebridge.github.io/curriculum/outline/functions.html

{% endcomment %}

<section>
Functions
-------------------------------
{: .slide-title .chapter}

* What are functions?
* Naming functions
* [bonus section] Functions that take other functions
    - `map` and `reduce`
* [bonus section] Anonymous function
* [bonus section] Assignment: `let`
</section>

<section ng-controller="NarrativeController">
### What are functions?
{: .slide_title .slide}

#### <button class="link" ng-model="block11" ng-click="block11=!block11">Intro</button>

> You have already seen some functions, such as `count`, `conj`,
> `first`, and `rest`. All the arithmetic we did used functions, as
> well: `+`, `-`, `*`, and `/`. What does it mean to be a function,
> though?
{: ng-show="block11" .description}

> A *function* is an independent, discrete piece of code that takes in
> some values (called *arguments*) and returns a value.
{: ng-show="block11" .description}

> Reference: [Basics of Function](http://clojurebridge.github.io/community-docs/docs/clojure/function-creation/)
{: ng-show="block11" .description}

* `count`, `conj`, `first`
* `+`, `-`, `*`, `/`
* A piece of code that takes values and returns a value
</section>

<section ng-controller="NarrativeController">
#### An example function <button class="link" ng-bind-html="details" ng-model="block21" ng-click="block21=!block21"></button>

> * `defn` specifies that we are defining a function.
> * `forward-right` is the *name* of this function.
> * The string on the next line is the documentation for the function, which explains what the function does. This is optional.
> * `[turtle]` is the list of *arguments*. Here, we have one argument called `turtle`.
> * `(forward turtle 60) (right turtle 135)` is the *body* of the function. This is what executes when we use the function.
{: ng-show="block21" .description}

```clojure
(defn forward-right
  "Moves specified turtle forward and tilts its head"
  [turtle]
  (forward turtle 60)
  (right turtle 135))
```
</section>

<section ng-controller="NarrativeController">
#### How to use `forward-right` function <button class="link" ng-bind-html="details" ng-model="block31" ng-click="block31=!block31"></button>

> To use `forward-right`, we *call* the function, just like we've done with all the functions we've already used.
{: ng-show="block31" .description}

```clojure
(forward-right :trinity)  ;=> {:trinity {:angle 135}}
(forward-right :neo) ;=> {:neo {:angle 135}}
```
</section>

<section ng-controller="NarrativeController">
#### A function with multiple arguments <button class="link" ng-bind-html="details" ng-model="block41" ng-click="block41=!block41"></button>

> Functions can also take more than one argument. Let's make a
> `forward-right-with-len` function that takes a forward length, in addition
> to the turtle.
{: ng-show="block41" .description}

```clojure
(defn forward-right-with-len
  "Given turtle and length, forward the turtle and tilts its head"
  [turtle len]
  (forward turtle len)
  (right turtle 135))

(forward-right-with-len :trinity 90) ;=> {:trinity {:angle 135}}
(forward-right-with-len :neo 80)  ;=> {:neo {:angle 135}}
```
</section>

<section>
#### EXERCISE 1: Move turtles using function
{: .slide_title .slide}

1. Write a function
  * Go to `walk.clj`
  * On the editor, write `forward-right` function (below) which appeared in the slide.
  * (Optional) Save `walk.clj`
  * Select whole `forward-right` function and hit Eval Selection
2. Use a function
  * Type `(forward-right :trinity)` on right REPL pane
  * Repeat above at least 8 times (use up arrow and hit enter)

```clojure
(defn forward-right
  "Moves specified turtle forward and tilts its head"
  [turtle]
  (forward turtle 60)
  (right turtle 135))
```
</section>

<section>
#### EXERCISE 2: Move turtles using function with parameters
{: .slide_title .slide}

* Go to `walk.clj`
* On the editor, write `forward-right-with-len-ang` functon that takes three
  arguments, turtle, len, and angle (extension of `forward-right-with-len`)
* Select entire `forward-right-with-len-ang` function and hit Reload Selection
* On the REPL pane, type `(forward-right-with-len-ang :trinity 60 120)`
* Repeat above, evaluating the function on REPL, many times
</section>


<section ng-controller="NarrativeController">
### Naming functions
{: .slide_title .slide}

#### Names are Symbols <button class="link" ng-bind-html="details" ng-model="block61" ng-click="block61=!block61"></button>

> Function names are symbols, just like the symbols we used with `def`
> when assigning names to values.
{: ng-show="block61" .description}

> Symbols have to begin with a non-numeric character, and they can
> contain alphanumeric characters, along with *, +, !, -, _, and ?.
> This flexibility is important with functions, as there are certain
> idioms we use.
{: ng-show="block61" .description}

#### Two types of functions <button class="link" ng-bind-html="details" ng-model="block62" ng-click="block62=!block62"></button>

> Clojure has two type of functions:
> 1. function that returns a value,
> 2. function that returns true or false.
> The second type is called *predicate*s.
{: ng-show="block62" .description}


##### Predicate function examples <button class="link" ng-bind-html="details" ng-model="block63" ng-click="block63=!block63"></button>

> In Clojure, `=` is a predicate function, which may be a surprising
> fact. Other than that, like many other computer languages,
> Clojure has predicate functions to test greater than, less than or such.
> Mostly predicate functions end with `?`.
{: ng-show="block63" .description}

> * `=`, `not=`
> * `>`, `<`, `>=`, `<=`
> * `true?`, `false?`, `empty?`, `nil?`, `vector?`, `map?`

</section>

<section ng-controller="NarrativeController">
#### [Bonus section]

### Functions that take other functions
{: .slide_title .slide}

#### <button class="link" ng-model="block71" ng-click="block71=!block71">Intro</button>

> Some of the most powerful functions you can use with collections can
> take other functions as arguments.
> This is one of the most magical things about Clojure--and many other programming languages.
> That's a complicated idea, also, may not make sense at first.
> Let's look at an example and learn more about that.
{: ng-show="block71" .description}

> Reference: [Higher-order Function](http://clojurebridge.github.io/community-docs/docs/clojure/higher-order-function/)
{: ng-show="block71" .description}
</section>

<section ng-controller="NarrativeController">
#### `map` function

#### <button class="link" ng-bind-html="details" ng-model="block101" ng-click="block101=!block101"></button>

> `map` is a function that takes another function, along with a
> collection. It calls the function provided to it on each member of
> the collection, then returns a new collection with the results of
> those function calls. This is a weird concept, but it is at the core
> of Clojure and functional programming in general.
{: ng-show="block101" .description}

```clojure
(map inc [1 2 3]) ;=> (2 3 4)
(map (partial + 90) [0 30 60 90]) ;=> (90 120 150 180)
```

> References:
> [partial](http://clojuredocs.org/clojure.core/partial)
</section>

<section ng-controller="NarrativeController">
#### `reduce` function

#### <button class="link" ng-bind-html="details" ng-model="block111" ng-click="block111=!block111"></button>

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
(reduce str (turtle-names)) ;=> ":trinity:neo:oracle:cypher"
(reduce + [30 60 90])       ;=> 180
```
</section>

<section>
#### EXERCISE 3 [BONUS]: Find the average
{: .slide_title .slide}

* Create a function called `average` that takes a vector of maps.
* Use `[{:angle 30} {:angle 90} {:angle 50}]` as input.
* Calculate average value of :angle.

* Hint: You will need to use the functions `map`, `reduce` and `count`.
</section>


<section ng-controller="NarrativeController">
#### [Bonus section]

### Anonymous functions

#### Functions without names <button class="link" ng-bind-html="details" ng-model="block201" ng-click="block201=!block201"></button>

> So far, all the functions we've seen have had names, like `+` and
> `str` and `reduce`. However, functions don't need to have names, just
> like values don't need to have names. We call functions without names
> *anonymous functions*.
> An anonymous function is created with `fn`, like so:
{: ng-show="block201" .description}

> Reference: [Anonymous Function](http://clojurebridge.github.io/community-docs/docs/clojure/anonymous-function/)
{: ng-show="block201" .description}


```clojure
(fn [s1 s2] (str s1 " " s2))
```

#### vs. not anonymous functions <button class="link" ng-bind-html="details" ng-model="block202" ng-click="block202=!block202"></button>

> Before we go forward, you should understand that you can _always_
> feel free to name your functions. There is nothing wrong at all with
> doing that. However, you _will_ see Clojure code with anonymous
> functions, so you should be able to understand it.
{: ng-show="block202" .description}

```clojure
(defn join-with-space
  [s1 s2]
  (str s1 " " s2))
```
</section>

<section ng-controller="NarrativeController">
#### Anonymous function usage examples <button class="link" ng-bind-html="details" ng-model="block203" ng-click="block203=!block203"></button>

> Why would you ever need anonymous functions?
> Anonymous functions can be very useful
> when we have functions that take other functions.
> Such as `map` or `reduce`, which we learned in Functions section.
> Let's look at usage examples of anonymous functions:
{: ng-show="block203" .description}

```clojure
(map (fn [t] (forward t 45)) (turtle-names))
;=> ({:trinity {:length 45}} {:neo {:length 45}} {:oracle {:length
45}} {:cypher {:length 45}})

(reduce (fn [x y] (+ x y)) [1 2 3]) ;=> 6

(reduce (fn [a b] (str a ", " b)) (map name (turtle-names)))
;=> "trinity, neo, oracle, cypher"
```
</section>

<section ng-controller="NarrativeController">
#### [Bonus section]

### Assignment: `let`
{: .slide_title .slide}

#### <button class="link" ng-model="block301" ng-click="block301=!block301">Intro</button>

> When you are creating functions, you may want to assign names to
> values in order to reuse those values or make your code more
> readable. Inside of a function, however, you should _not_ use `def`,
> like you would outside of a function. Instead, you should use a
> special form called `let`.
{: ng-show="block301" .description}
</section>

<section ng-controller="NarrativeController">
#### Assigning names to values: `let`
{: .slide_title .slide}

#### <button class="link" ng-bind-html="details" ng-model="block305" ng-click="block305=!block305"></button>

> We can assign a name to value using `let` like `def`.
> When a name is assigned to a value, the name is called a *symbol*.
{: ng-show="block305" .description}

> Reference: [Assignment let](http://clojurebridge.github.io/community-docs/docs/clojure/let/)
{: ng-show="block305" .description}

```clojure
(let [mangoes 3
      oranges 5]
  (+ mangoes oranges))
;=> 8
```
</section>

<section ng-controller="NarrativeController">
#### `let` example

<button class="link" ng-bind-html="details1" ng-model="block311" ng-click="block311=!block311"></button>
<button class="link" ng-bind-html="details2" ng-model="block312" ng-click="block312=!block312"></button>
<button class="link" ng-bind-html="details3" ng-model="block313" ng-click="block313=!block313"></button>
<button class="link" ng-bind-html="exercise" ng-model="block314" ng-click="block314=!block314"></button>

> This is the most complicated function we've seen so far, so let's go
> through each step. First, we have the name of the function, the
> documentation string, and the arguments, just as in other functions
{: ng-show="block311" .description}

> Next, we see `let`. `let` takes a vector of alternating names and
> values. `t1` is the first name, and we assign the result of
> `(first names)` to it. We also assign the result of `(last names)`
> to `t2`.
{: ng-show="block312" .description}

> After the vector of names and values, there is the body of the
> `let`. Just like a the body of a function, this executes and returns
> a value. Within the `let`, `t1` and `t2` are defined.
{: ng-show="block313" .description}

> Go to `walk.clj` and write `opposite` function.
> Then, evaluate `opposite` function at the last line of the function definition.
> Also, evaluate usage example of `opposite` function.
{: ng-show="block314" .description}

```clojure
;; function definition
(defn opposite
  "Given a collection of turtle names, moves two of them in different directions."
  [names]
  (let [t1 (first names)
        t2 (last names)]
    (forward t1 40)
    (backward t2 30)))

;; function usage
(opposite (turtle-names))
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
