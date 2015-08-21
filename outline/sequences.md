---
layout: default
title: Sequences
permalink: /outline/sequences.html
---

{::options parse_block_html="true" /}

{% comment %}

http://clojurebridge.github.io/curriculum/outline/sequences.html

{% endcomment %}

<section>
[BONUS]

Sequences
-------------------------
{: .slide-title .chapter}

* What are sequences
* `doseq`
</section>

<section>
### What are sequences?
{: .slide_title .slide}

#### Clojure's data structures <button class="link" ng-model="block11" ng-click="block11=!block11">Details</button>

> In Clojure, we can say every data structure is a sequence.
> So far, we learned `vector` and `map`, both of which are sequence.
> String is also a sequence. When something is **seq-able**, it is a sequence.
{: ng-show="block11" .description}

#### `first` item or not <button class="link" ng-model="block12" ng-click="block12=!block12">Details</button>

> If something is **seq-able**, it returns the first item in the sequence
> by the `first` function. This is a good test whether it is a sequence or not.
{: ng-show="block12" .description}
</section>

<section>
#### Results of `first`

```clojure
(turtle-names)
;=> [:trinity :smith0 :smith1]  ; vector
(first (turtle-names))
;=> :trinity                    ; the first item

(:trinity (state))
;=> {:x 0, :y 0, :angle 90, :color [30 30 30]}  ; map
(first (:trinity (state)))
[:x 0]                                          ; the first item

(first "Hello, World!")  ; string
;=> \H                   ; the first item

(first :trinity)         ; keyword is not seq-able
;=> IllegalArgumentException Don't know how to create ISeq from:
clojure.lang.Keyword  clojure.lang.RT.seqFrom (RT.java:528)
```
</section>

<section>
### `doseq`

<button class="link" ng-model="block31" ng-click="block31=!block31">Details1</button>
<button class="link" ng-model="block32" ng-click="block32=!block32">Details2</button>

> Clojure is very good at *iterate* over a sequence.
> There are many functions that interact on sequences.
> The `doseq`(for **do a sequence**) is one of the well-used functions
> of such. This function works quite similar to `map` function we have
> already studied.
{: ng-show="block31" .description}

> The `doseq` function takes two parameters:
> 1. The sequence of things, for instance, a vector
> 2. A function which is repeatedly called with each element in the sequence
>
> Notice that the first argument to `doseq` specifies the sequence as
> an odd-looking vector: `[variable value ...]`.
> The number of elements in this vector need to be even, since the
> first element will be the **variable** and the next one will be
> evaluated for its **value**.
{: ng-show="block32" .description}

```clojure
;; doseq example
(doseq [n (turtle-names)] (forward n 40))
```
</section>

<section>
#### EXERCISE

* Twinkle Little Star (making sounds)
* Turtles Walk (more function study)
</section>

{% comment %}

:star2: A link below is for a slide only. Go to [README.md](../README.md)
instead. :star2:

{% endcomment %}

<section>
Return to the <a href="javascript:;" onClick="Reveal.slide(1);">first slide</a>,
or go to the [curriculum outline](/curriculum/#/1).
</section>
