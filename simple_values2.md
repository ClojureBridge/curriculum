---
layout: default
title: String, Boolean, nil and Keyword
permalink: /simple_values2.html
---

{::options parse_block_html="true" /}
<section>
More Simple Values
------------------------------
{: .slide-title .chapter}

* Simple values
    - Strings
    - Booleans and nil
    - Keywords
</section>

<section>
## Simple values
{: .slide_title .slide}

#### <button class="link" ng-model="block11" ng-click="block11=!block11">Intro</button>

> We have already seen simple values that are numbers.  Now we will
> take a closer look at simple values that are strings, booleans, and
> keywords.
{: ng-show="block11" .description}
</section>

<section>
### Strings and characters
{: .slide_title .slide}

#### <button class="link" ng-model="block21" ng-click="block21=!block21">Details</button>

> What is a string? A string is just a piece of text. To make a
> string, you enclose it in quotation marks.
{: ng-show="block21" .description}

> Look at the last example. A backslash is how we put a quotation mark
> inside a string. Do not try using single quotes to make a string.
{: ng-show="block21" .description}

> Strings are made up of characters. You can make a single character
> by using a backslash, but we won't need to make individual
> characters for this course.
{: ng-show="block21" .description}

```clojure
"Hello world"
"This is a longer string that I wrote for purposes of an example."
"Aubrey said, \"I think we should go to the Orange Julius.\""
```
</section>

<section>
### Booleans and nil
{: .slide_title .slide}

#### <button class="link" ng-model="block31" ng-click="block31=!block31">Details</button>

>A boolean is a true or false value, and you type them just like that,
>`true` and `false`. Often in programming, we need to ask a true or
>false question, like "Is this class in the current semester?" or "Is
>this person's birthday today?" When we ask those questions, we get a
>boolean back.
{: ng-show="block31" .description}

> There is another value like a boolean in some ways, but different.
> This value is `nil`, and it means no value at all. You will not
> often use this value yourself, but you may encounter it in other
> people's code.
{: ng-show="block31" .description}

```clojure
true
false
nil
```
</section>

<section>
### EXERCISE: Store the name of your hometown
{: .slide_title .slide}

* Write the name of your hometown as a string
* Next, assign that string to the name `my-hometown`.
</section>

<section>
### EXERCISE: Make a function to format names
{: .slide_title .slide}

* The `str` function can take any number of arguments, and it
concatenates them together to make a string.
* Write a function called `format-name` that takes two arguments,
`first-name` and `last-name`.
* This function should output the name like so: `Last, First`.
</section>
