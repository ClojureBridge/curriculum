---
layout: default
title: Simple Values
permalink: /outline/simple_values.html
---

{::options parse_block_html="true" /}

{% comment %}

http://clojurebridge.github.io/curriculum/outline/simple_values.html

{% endcomment %}

<section>
Simple Values
----------------------------------------
{: .slide-title .chapter}

* Strings
* Booleans and nil
* Keywords
* Numbers
  - Arithmetic

* Assignment: `def`
</section>

<section>
## Simple values

#### <button class="link" ng-model="block71" ng-click="block71=!block71">Intro</button>

> In order to do anything in a programming language, you need to have
> values to do stuff with. In Clojure, simple values are numbers,
> strings, booleans, nil and keywords.
{: ng-show="block71" .description}
</section>

<section ng-controller="NarrativeController">
### Strings
{: .slide_title .slide}

#### <button class="link" ng-bind-html="details" ng-model="block21" ng-click="block21=!block21"></button>

> What is a string? A string is just a piece of text. To make a
> string, you enclose it in quotation marks.
> Look at the last example. A backslash is how we put a quotation mark
> inside a string. Do not try using single quotes to make a string.
{: ng-show="block21" .description}

> Reference: [String](http://clojurebridge.github.io/community-docs/docs/clojure/string/)
{: ng-show="block21" .description}

```clojure
"Hello, World!"
"This is a longer string that I wrote for purposes of an example."
"Aubrey said, \"I think we should go to the Orange Julius.\""
```
</section>

<section ng-controller="NarrativeController">
### Booleans and nil
{: .slide_title .slide}

#### <button class="link" ng-bind-html="details" ng-model="block31" ng-click="block31=!block31"></button>

>A boolean is a true or false value, and you type them just like that,
>`true` and `false`. Often in programming, we need to ask a true or
>false question, like "Is this class in the current semester?" or "Is
>this person's birthday today?" When we ask those questions, we get a
>boolean back.
{: ng-show="block31" .description}

> There is another value `nil`, which behaves like a boolean in terms
> of __truthiness__.
> But, `nil` means no value at all and not a boolean
{: ng-show="block31" .description}

> Reference: [Truthiness](http://clojurebridge.github.io/community-docs/docs/clojure/truthiness/)
{: ng-show="block31" .description}


```clojure
true
false
nil
```
</section>

<section ng-controller="NarrativeController">
### Keywords
{: .slide_title .slide}

#### <button class="link" ng-bind-html="details" ng-model="block41" ng-click="block41=!block41"></button>

> Keywords are the strangest of the basic value types. Some computer
> languages have similar one. However, keywords don’t have a real
> world analog like numbers, strings, or booleans.
> You can think of them as a special type of string, one that’s used for
> labels. They are often used as keys of key-value pair for maps (data
> structure; will learn later).
{: ng-show="block41" .description}


```clojure
:trinity
:first
:last
```
</section>

<section ng-controller="NarrativeController">
### Numbers

#### Integers <button class="link" ng-bind-html="details" ng-model="block81" ng-click="block81=!block81"></button>

> Clojure has several different types of numbers.
{: ng-show="block81" .description}

> First up are integers. Integers include zero, the positive whole
> numbers, and the negative whole numbers, and you write them just
> like we write them normally.
{: ng-show="block81" .description}

```clojure
0
12
-42
```
</section>

<section ng-controller="NarrativeController">
#### Decimal numbers <button class="link" ng-bind-html="details" ng-model="block91" ng-click="block91=!block91"></button>

> Then we have decimal numbers, which are also called floats. They
> include any numbers that have a decimal point in them.
{: ng-show="block91" .description}

```clojure
0.0000072725
10.5
-99.9
```
</section>

<section ng-controller="NarrativeController">
#### Ratios <button class="link" ng-bind-html="details" ng-model="block101" ng-click="block101=!block101"></button>

> Finally, we have fractions, which are also called ratios. Computers
> cannot perfectly represent all floats, but ratios are always exact.
> We write them with a slash, like so:
{: ng-show="block101" .description}

> Note that, just like with pen-and-paper math, the [denominator](http://en.wikipedia.org/wiki/Fraction_%28mathematics%29) of your ratio cannot be equal to `0`.
{: ng-show="block101" .description}

```clojure
1/2
-7/3
```
</section>

<section>
### Arithmetic
{: .slide_title .slide}

#### <button class="link" ng-model="block111" ng-click="block111=!block111">Intro</button>

> You can add, subtract, multiply, and divide numbers. In Clojure,
> arithmetic looks a little different than it does when you write it
> out with pen and paper. Look at these examples:
{: ng-show="block111" .description}

```clojure
(+ 1 1)  ;=> 1 + 1 = 2
(- 12 4) ;=> 12 - 4 = 8
(* 13 2) ;=> 13 * 2 = 26
(/ 27 9) ;=> 27 / 9 = 3
```
</section>

<section ng-controller="NarrativeController">
### Infix vs. prefix notation
{: .slide-title .slide}

<button class="link" ng-bind-html="details1" ng-model="block121" ng-click="block121=!block121"></button>
<button class="link" ng-bind-html="details2" ng-model="block122" ng-click="block122=!block122"></button>

> In Clojure, `+`, `-`, `*` and `/` appear before two numbers. This is
> called _prefix notation_. What you're used to seeing is called
> _infix notation_, as the arithmetic operator is in-between the two
> operands.
{: ng-show="block121" .description}

> Languages such as **JavaScript** use **infix** notation,
> while **Clojure** only uses **prefix** notation.
> Prefix notation is useful for many reasons. Look at this example of
> an infix expression and the prefix equivalent:
{: ng-show="block122" .description}

```clojure
Infix:  1 + 2 * 3 / 4 + 5 - 6 * 7 / 8 + 9

Prefix: (+ (- (+ (+ 1 (/ (* 2 3) 4)) 5) (/ (* 6 7) 8)) 9)
```
</section>

<section ng-controller="NarrativeController">
### Why prefix is better?

#### Explicit precedence <button class="link" ng-bind-html="details" ng-model="block131" ng-click="block131=!block131"></button>

> Imagine both are unclear, but notice that in the prefix version,
> you do not have to ever think about the precedence of operators.
> Because each expression has the operator before all the operands and
> the entire expression is wrapped in parentheses, all precendence is
> explicit.
{: ng-show="block131" .description}

```clojure
Infix:  1 + 2 / 3
Prefix: (+ 1 (/ 2 3))
```

#### Less repetitive <button class="link" ng-bind-html="details" ng-model="block132" ng-click="block132=!block132"></button>

> Another reason prefix notation can be nice is that it can make long
> expressions less repetitive.
> With prefix notation, if we plan to use the same operator on many
> operands, we do not have to repeat the operator between them.
{: ng-show="block132" .description}

```clojure
Infix:  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
Prefix: (+ 1 2 3 4 5 6 7 8 9)
```
</section>

<section ng-controller="NarrativeController">
### Arithmetic with all number types

<button class="link" ng-bind-html="details" ng-model="block141" ng-click="block141=!block141"></button>

> So far, we looked at arithmetic operations by integers only.
> However, we can use floats or ratios for those operations as well.
> See these examples:
{: ng-show="block141" .description}

```clojure
(+ 4/3 7/8)   ;=> 53/24
(- 9 4.2 1/2) ;=> 4.3
(/ 27/2 1.5)  ;=> 9.0
```
</section>


<section ng-controller="NarrativeController">
## Assignment: `def`

#### <button class="link" ng-model="block161" ng-click="block161=!block161">Intro</button>

> If we had to type the same values over and over, it would be very
> hard to write a program. What we need are names for values, so we
> can refer to them in a way we can remember. This is called
> assignment. 
{: ng-show="block161" .description}
</section>

<section ng-controller="NarrativeController">
#### Assigning names to values: `def`

#### <button class="link" ng-bind-html="details" ng-model="block171" ng-click="block171=!block171"></button>

> We can assign a name to value using `def`.
> When a name is assigned a value, that name is called a *symbol*.
{: ng-show="block171" .description}

> Reference: [Assignment def](http://clojurebridge.github.io/community-docs/docs/clojure/def/)
{: ng-show="block171" .description}

```clojure
(def mangoes 3)
(def oranges 5)
(+ mangoes oranges)
;=> 8
```
</section>

<section ng-controller="NarrativeController">
#### Assign results to symbols <button class="link" ng-bind-html="details" ng-model="block181" ng-click="block181=!block181"></button>

> You can assign more than simple values to symbols. Try the following.
> Look at the last line, and see how we can use symbols by themselves to refer to a value.
{: ng-show="block181" .description}

```clojure
(def fruit (+ mangoes oranges))
(def average-fruit-amount (/ fruit 2))
average-fruit-amount
;=> 4
```
</section>

<section>
#### EXERCISE 1: Basic arithmetic

* Take your height in feet and inches and convert it to inches using arithmetic in Clojure.
* Then convert that to centimeters. There are 2.54 centimeters in an inch.
* Lastly, ask two people near you for their height in centimeters. Find the average of your heights.
</section>

<section>
#### EXERCISE 2 [BONUS]: Convert back to feet and inches

* Convert that average back to feet and inches.
* The feet and the inches will be separate numbers.
* `(quot x y)` will give you the whole number part of x divided by y.
* `(rem x y)` will give you the remainder of x divided by y.
</section>

{% comment %}

:star2: A link below is for a slide only. Go to [README.md](../README.md)
instead. :star2:

{% endcomment %}

<section>
Return to the <a href="javascript:;" onClick="Reveal.slide(1);">first slide</a>,
or go to the [curriculum outline](/curriculum/#/1).
</section>
