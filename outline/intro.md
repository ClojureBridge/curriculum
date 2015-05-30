---
layout: default
title: Introduction
permalink: /intro.html
---

{::options parse_block_html="true" /}
<section>
Introduction to Programming with Clojure
----------------------------------------
{: .slide-title .chapter}
</section>

<section>
* Why Clojure?
* What is Clojure good at?
* What does Clojure look like?
* What is a REPL?
* Simple values
    - Numbers
* Assigning names to values
</section>

<section>
## Why Clojure?
{: .slide_title .slide}

<button class="link" ng-model="block11" ng-click="block11=!block11">Background</button>

> If you've never programmed before, you may not know that there are many languages to choose from. Some of the other languages you might have heard of (or will hear of!) are C, JavaScript, Python, and Java.
{: ng-show="block11" .description}

> So why are we teaching Clojure? Although it's not as popular as any of those languages, we're using Clojure because of three qualities it has that make it an ideal first language to learn--or a great language to learn in addition to others you might already know:
{: ng-show="block11" .description}

#### Clojure is _simple_. <button class="link" ng-model="block12" ng-click="block12=!block12">Description</button>

> That's not to say it's not powerful; it is. The number of concepts you have to know to program in Clojure is very small, however, and easy to grasp. Clojure grows with you as you learn it, and you can be very productive with a small subset of the language.
{: ng-show="block12" .description}

#### Clojure is _all-purpose_. <button class="link" ng-model="block13" ng-click="block13=!block13">Description</button>

> Some languages have a specific focus. JavaScript, for example, was traditionally used only in web pages (although that's changed somewhat). Objective-C is used mainly for iPhone apps. We're going to make a drawing application today, but you can use Clojure for any sort of application easily.
{: ng-show="block13" .description}

#### Clojure is _fun_. <button class="link" ng-model="block14" ng-click="block14=!block14">Description</button>

> That's a matter of opinion, of course, but we think it holds true. I hope that during this course you experience the joy of seeing a Clojure program come together and do something powerful and surprising.
{: ng-show="block14" .description}
</section>

<section>
## What is Clojure good at?
{: .slide-title .slide}

<button class="link" ng-model="more" ng-click="more=!more">More...</button>

> So, we said Clojure is all-purpose, and it is. That doesn't mean it doesn't have strong suits, though.
{: ng-show="more" .description}

#### Data processing <button class="link" ng-model="block21" ng-click="block21=!block21">Description</button>
> Clojure is known for being good at data processing. That's because it has a good set of data structures--that is, it has several built-in ways to represent data that are easy to use and powerful.
{: ng-show="block21" .description}

#### Concurrent <button class="link" ng-model="block22" ng-click="block22=!block22">Description</button>

> Clojure is known for its concurrency. Think about writing instructions for four of your friends about how to assemble a treehouse, but instead of writing them so one step is done at a time, each of your friends does part of the job. Then, they coordinate at the right time to assemble those parts into bigger parts, and they do this over and over again until the end, when it all comes together. Those instructions would be really complicated and hard to write--and probably hard to read, too. Clojure gives us some easy ways to write these sorts of instructions for computers.
{: ng-show="block22" .description}

#### Everything! <button class="link" ng-model="block23" ng-click="block23=!block23">Description</button>

> Clojure also works well for building drawing applications with [Quil](https://github.com/quil/quil), which is what we're going to do together.
{: ng-show="block23" .description}
</section>

<section>
## What does Clojure look like?
{: .slide-title .slide}

Here's an example of a few lines of Clojure:

```clojure
(+ 3 4)
(max 8 17 2)
(eat "sandwich")
```

#### Parentheses <button class="link" ng-model="block31" ng-click="block31=!block31">Description</button>

> The first thing you notice are parentheses, probably. Parentheses enclose instructions to the computer in Clojure. Every time you see a left parenthesis, the next thing you see will be an instruction of some sort. That instruction is normally what we call a _function_. Functions do all the hard work in Clojure. They take in _arguments_--which are everything else inside the parentheses after the function--and return a new value.
{: ng-show="block31" .description}

#### Plus sign <button class="link" ng-model="block32" ng-click="block32=!block32">Description</button>
> Take a look at the first line. The plus sign that you see is a function. It takes all its arguments and adds them together, returning the sum. This might look confusing if you try to think of it like writing out math, because you'd put the plus sign in a different place that way. Just think of the plus as a function. If you've used Excel, imagine the `SUM()` function in there; it works like that.
{: ng-show="block32" .description}

#### Functions <button class="link" ng-model="block33" ng-click="block33=!block33">Description</button>
> What is the function on the next line? What are its arguments? What do you think it returns? It returns the number 17, which is the largest of the three numbers.
> How about the last line? That has a thing called a string in it, which we'll learn more about later. Looks like someone is hungry.
{: ng-show="block33" .description}
</section>

<section>
### Comments
{: .slide-title .slide}

<button class="link" ng-model="block41" ng-click="block41=!block41">Description</button>

> When we write code, we try to make it as clear as possible. Doing so is a huge advantage because our code gets read by others (oftentimes more so than by us!), or we come back to our own code to read it later, by which point we may have forgotten each exact detail of the code. One way that we can clarify our code is annotating it with comments. Comments are notes that we add to code, for our own sake, that the computer ignores.
{: ng-show="block41" .description}

> In Clojure, comments can be started with a semicolon. Everything after a semicolon until the end of that line is a comment that gets ignored by the computer. Only one semicolon is necessary, but sometimes you see two semicolons in a row, depending on stylistic tastes.
{: ng-show="block41" .description}

```clojure
;; more food code
(eat "cookie") ; nom nom nom
(eat "donut") ; mmm donuts
```
</section>

<section>
## What is a REPL?
{: .slide-title .slide}

**R**ead, **E**val, **P**rint, **L**oop

![Instarepl](img/instarepl.png)

</section>

<section>
## REPL in action
{: .slide-title .slide}

#### REPL <button class="link" ng-model="block51" ng-click="block51=!block51">Description</button>

>"REPL" stands for "Read-Eval-Print-Loop," which still doesn't make a ton of sense without context. Many programming languages, including Clojure, have a way to execute code interactively so you get instant feedback. In other words, the code is read, then it is evaluated, then the result is printed, and you begin again--thus, a loop.
{: ng-show="block51" .description}

#### Clojure's REPL <button class="link" ng-model="block52" ng-click="block52=!block52">Description</button>

> Clojure has a REPL that you can run from the terminal easily, and we'll talk more about that later, but for now, let's use Light Table's "insta-REPL," a nice way to interact with Clojure from within Light Table.
{: ng-show="block52" .description}

#### Start REPL <button class="link" ng-model="block53" ng-click="block53=!block53">Description</button>

> Go ahead and start Light Table, if you haven't already. Once it's started, go to the "View" menu and click "Commands." Notice that you can get to the command by typing ctrl+space from now on, if that's faster for you. Type "insta" and press enter when the "Instarepl: Open a Clojure instarepl" choice is highlighted.
{: ng-show="block53" .description}

> After you hit enter, a blank new page will open. At the bottom of Light Table, you should see a message about "connecting" or "retrieving deps." Wait for the instarepl to finish connecting before typing anything.
{: ng-show="block53" .description}

#### Try it out <button class="link" ng-model="block54" ng-click="block54=!block54">Description</button>

> Once that's done, let's try out the REPL together! Type `(+ 2 3)` and see what happens. Did you see the result appearing beside what you were typing? Once you've done that, hit enter and type `(max 8 17 2)`. You might see an error in red while typing. This happens because Light Table is continually evaluating what you are typing, and before you finish, the code might not be valid.
{: ng-show="block54" .description}
</section>

<section>
## Simple values
{: .slide-title .slide}

<button class="link" ng-model="block61" ng-click="block61=!block61">More...</button>

> In order to do anything in a programming language, you need to have values to do stuff with. In Clojure, simple values are numbers, strings, booleans, and keywords.
{: ng-show="block61" .description}
</section>

<section>
### Numbers
{: .slide-title .slide}

Clojure has several different types of numbers.

#### Integers <button class="link" ng-model="block71" ng-click="block71=!block71">Description</button>

> First up are integers. Integers include zero, the positive whole numbers, and the negative whole numbers, and you write them just like we write them normally.
{: ng-show="block71" .description}

```clojure
0
12
-42
```

#### Floats <button class="link" ng-model="block72" ng-click="block72=!block72">Description</button>
> Then we have decimal numbers, which are also called floats. They include any numbers that have a decimal point in them.
{: ng-show="block72" .description}

```clojure
0.0000072725
10.5
-99.9
```

#### Fractions <button class="link" ng-model="block73" ng-click="block73=!block73">Description</button>
> Finally, we have fractions, which are also called ratios. Computers cannot perfectly represent all floats, but ratios are always exact. We write them with a slash.
{: ng-show="block73" .description}

> Note that, just like with pen-and-paper math, the [denominator](http://en.wikipedia.org/wiki/Fraction_%28mathematics%29) of your ratio cannot be equal to `0`.
{: ng-show="block73" .description}

```clojure
1/2
-7/3
```
</section>

<section>
### Arithmetic
{: .slide-title .slide}

#### Examples <button class="link" ng-model="block81" ng-click="block81=!block81">Description</button>

> You can add, subtract, multiply, and divide numbers. In Clojure, arithmetic looks a little different than it does when you write it out with pen and paper.
{: ng-show="block81" .description}

```clojure
(+ 1 1)  ;=> 1 + 1 = 2
(- 12 4) ;=> 12 - 4 = 8
(* 13 2) ;=> 13 * 2 = 26
(/ 27 9) ;=> 27 / 9 = 3
```

> This is called _prefix notation_. What you're used to seeing is called _infix notation_, as the arithmetic operator is in-between the two operands.
{: ng-show="block81" .description}

#### With all number types <button class="link" ng-model="block82" ng-click="block82=!block82">Description</button>
> I used integers with all of the above, but we can use floats or ratios just fine, as well. See these examples:
{: ng-show="block82" .description}

```clojure
(+ 4/3 7/8)   ;=> 53/24
(- 9 4.2 1/2) ;=> 4.3
(/ 27/2 1.5)  ;=> 9.0
```
</section>

<section>
### Infix vs. prefix notation
{: .slide-title .slide}

#### Examples <button class="link" ng-model="block91" ng-click="block91=!block91">Description</button>

> Prefix notation is useful for many reasons. Look at this example of an infix expression and the prefix equivalent:
{: ng-show="block91" .description}

```clojure
Infix:  1 + 2 * 3 / 4 + 5 - 6 * 7 / 8 + 9

Prefix: (+ (- (+ (+ 1 (/ (* 2 3) 4)) 5) (/ (* 6 7) 8)) 9)
```

> I imagine both are unclear, but notice that in the prefix version, you do not have to ever think about the precedence of operators. Because each expression has the operator before all the operands and the entire expression is wrapped in parentheses, all precendence is explicit.
{: ng-show="block91" .description}


#### Less repetitive <button class="link" ng-model="block92" ng-click="block92=!block92">Description</button>

> Another reason prefix notation can be nice is that it can make long expressions less repetitive.
{: ng-show="block92" .description}

```clojure
Infix:  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
Prefix: (+ 1 2 3 4 5 6 7 8 9)
```

> With prefix notation, if we plan to use the same operator on many operands, we do not have to repeat the operator between them.
{: ng-show="block92" .description}
</section>

<section>
### Other simple value types
{: .slide-title .slide}

<button class="link" ng-model="block101" ng-click="block101=!block101">Description</button>

> Although we will look at these in more depth later, here are some examples of other types of simple values so that you may recognize them along the way in any code that you see. The following are examples of strings, keywords, and booleans.
{: ng-show="block101" .description}

```clojure
;; strings
"Salut tout le monde"
"Prost!"

;; keywords
:surname
:birth-date
:r2

;; booleans
true
false
```
</section>

<section>
## Assigning names to values
{: .slide-title .slide}

<button class="link" ng-model="block111" ng-click="block111=!block111">More...</button>

> If we had to type the same values over and over, it would be very hard to write a program. What we need are names for values, so we can refer to them in a way we can remember. We do that using `def`. Type the following into your instarepl:
{: ng-show="block111" .description}

```clojure
(def mangoes 3)
(def oranges 5)
(+ mangoes oranges)
```

<button class="link" ng-model="block112" ng-click="block112=!block112">Description</button>

> When you assign a name to a value, that name is called a _symbol_. You can assign more than simple values to symbols. Try the following:
{: ng-show="block112" .description}

```clojure
(def fruit (+ mangoes oranges))
(def average-fruit-amount (/ fruit 2))
average-fruit-amount
```

> Look at the last line, and see how we can use symbols by themselves to refer to a value.
{: ng-show="block112" .description}
</section>

<section>
### EXERCISE: Basic arithmetic
{: .slide-title .slide}

* Take your height in feet and inches and convert it to inches using arithmetic in Clojure.

* Then convert that to centimeters. There are 2.54 centimeters in an inch.

* Lastly, ask two people near you for their height in centimeters. Find the average of your heights.

* Bonus: Convert that average back to feet and inches. The feet and the inches will be separate numbers. `(quot x y)` will give you the whole number part when dividing two numbers. `(mod x y)` will give you the remainder when dividing two numbers.
</section>
