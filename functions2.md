---
layout: default
title: More Functions
permalink: /functions2.html
---

{::options parse_block_html="true" /}
<section>
More Functions
----------------------
{: .slide-title .chapter}

* Important functions
    * Comparison (boolean) functions
    * String functions
* Anonymous functions
</section>

<section>
## Important functions
{: .slide_title .slide}

#### <button class="link" ng-model="block11" ng-click="block11=!block11">Intro</button>

> There are some functions that are essential when using Clojure. The
arithmetic functions and `str` have already been covered, and you need
to know them. Let's look at some others.
{: ng-show="block11" .description}
</section>

<section>
### Comparison (boolean) functions

#### Equality test <button class="link" ng-model="block11" ng-click="block11=!block11">Details</button>

> You can use the function `=` to test the equality of two things. For
> example, here is a function called `meaning-of-life?` that
> determines whether the input is `42` or not:
{: ng-show="block11" .description}

```clojure
(defn meaning-of-life?
  [x]
  (= x 42))
```
</section>

<section>
### Other comparison functions

#### Number comparison <button class="link" ng-model="block21" ng-click="block21=!block21">Details</button>

> The other comparison functions are `>`, `>=`, `<` and `<=`.
> All of these are used exclusively with numbers.
> Like all Clojure functions, the comparison functions are used as
> prefixes, so they can be a little tricky. Here's some examples:
{: ng-show="block21" .description}

```clojure
(> 4 3)    ;=> true
(>= 4 5)   ;=> false
(< -1 1)   ;=> true
(<= -1 -2) ;=> false
(< 1 5 9)  ;=> true
(< 1 5 3)  ;=> false
```
</section>

<section>
### String functions

#### The most important string function <button class="link" ng-model="block31" ng-click="block31=!block31">Details</button>

> A large part of programming is manipulating strings. The most
> important string function in Clojure to remember is `str`, which
> concatenates all of its arguments into one string:
{: ng-show="block31" .description}

```clojure
(str "Chocolate" ", " "strawberry" ", and " "vanilla")
;=> "Chocolate, strawberry, and vanilla"
```
</section>

<section>
### Anonymous functions

#### Functions without names <button class="link" ng-model="block41" ng-click="block41=!block41">Details</button>

> So far, all the functions we've seen have had names, like `+` and
> `str` and `reduce`. However, functions don't need to have names, just
> like values don't need to have names. We call functions without names
> _anonymous functions_.
{: ng-show="block41" .description}

> An anonymous function is created with `fn`, like so:
{: ng-show="block41" .description}

```clojure
(fn [s1 s2] (str s1 " " s2))
```

#### vs. not anonymous functions <button class="link" ng-model="block42" ng-click="block42=!block42">Details</button>

> Before we go forward, you should understand that you can _always_
> feel free to name your functions. There is nothing wrong at all with
> doing that. However, you _will_ see Clojure code with anonymous
> functions, so you should be able to understand it.
{: ng-show="block42" .description}

```clojure
(defn join-with-space
  [s1 s2]
  (str s1 " " s2))
```
</section>

<section>
#### Anonymous function usage examples <button class="link" ng-model="block51" ng-click="block51=!block51">Details</button>

> Why would you ever need anonymous functions?
> Anonymous functions can be very useful
> when we have functions that take other functions.
> Such as `map` or `reduce`, which we learned in Functions section.
> Let's look at usage examples of anonymous functions:
{: ng-show="block51" .description}

```clojure
(map (fn [x] (* 3 x)) [1 2 3]) ;=> [3 6 9]
(reduce (fn [x y] (+ x y)) [1 2 3]) ;=> 6
(reduce
  (fn [s1 s2] (str s1 " " s2))
  ["i" "like" "peanut" "butter" "and" "jelly"])
;=> "i like peanut butter and jelly"
```
</section>
