Introduction to Programming with Clojure
========================================

* Why Clojure?
* What is Clojure good at?
* What does Clojure look like?
* What is the REPL?
* Simple values
    - Numbers
* Assigning names to values

## Why Clojure?

If you've never programmed before, you may not know that there are
many languages to choose from. Some of the other languages you might
have heard of or will hear of are C, JavaScript, Python, and Java.

So why are we teaching Clojure? It's not as popular as any of those
languages. We're using Clojure because of three qualities it has that
make it an ideal first language to learn--or a great language to learn
in addition to others you might already know:

* Clojure is _simple_. That's not to say it's not powerful; it is. The
  number of concepts you have to know to program in Clojure is very
  small, however, and easy to grasp. Clojure grows with you as you
  learn it, and you can be very productive with a small subset of the
  language.

* Clojure is _all-purpose_. Some languages have a specific
  focus. JavaScript, for example, was traditionally used only in web
  pages (although that's changed somewhat). Objective-C is used mainly
  for iPhone apps. We're going to make a web application today, but
  you can use Clojure for any sort of application easily.

* Clojure is _fun_. That's a matter of opinion, of course, but we
  think it holds true. I hope that during this course you experience
  the joy of seeing a Clojure program come together and do something
  powerful and surprising.

## What is Clojure good at?

So, we said Clojure is all-purpose, and it is. That doesn't mean it
doesn't have strong suits, though.

Clojure is known for being good at data processing. That's because it
has a good set of data structures--that is, it has several built-in
ways to represent data that are easy to use and powerful.

Clojure is known for its concurrency. Think about writing instructions
for four of your friends about how to assemble a treehouse, but
instead of writing them so one step is done at a time, each of your
friends does part of the job. Then, they coordinate at the right time
to assemble those parts into bigger parts, and they do this over and
over again until the end, when it all comes together. Those
instructions would be really complicated and hard to write--and
probably hard to read, too. Clojure gives us some easy ways to write
these sorts of instructions for computers.

Clojure also works well for building web applications, which is what
we're going to do together.

## What does Clojure look like?

Here's an example of a few lines of Clojure:

```clojure
(+ 3 4)
(max 8 17 2)
(eat "sandwich")
```

The first thing you notice are parentheses, probably. Parentheses
enclose instructions to the computer in Clojure. Every time you see a
left parenthesis, the next thing you see will be an instruction of
some sort. That instruction is normally what we call a
_function_. Functions do all the hard work in Clojure. They take in
_arguments_--which is everything else inside the parentheses after the
function--and return a new value.

Take a look at the first line. The plus sign that you see is a
function. It takes all its arguments and adds them together, returning
the sum. This might look confusing if you try to think of it like
writing out math, because you'd put the plus sign in a different place
that way. Just think of the plus as a function. If you've used Excel,
imagine the `SUM()` function in there; it works like that.

What is the function on the next line? What are its arguments? What do
you think it returns? It returns the number 17, which is the largest
of the three numbers.

How about the last line? That has a thing called a string in it, which
we'll learn more about later. Looks like someone is hungry.

### Comments

When we write code, we try to make it as clear as possible.  Doing so
is a huge advantage because our code gets read by others (oftentimes
more so than by us!), or we come back to our own code to read it later
by which point we may have forgotten each exact detail of the code.
One way that we can clarify our code is annotating it with comments.
Comments are notes that we add to code, for our own sake, that the
computer ignores.

In Clojure, comments can be started with a semicolon.  Everything
after the semicolon until the end of a line is a comment and gets
ignored by the computer.  Only one semicolon is necessary, but
sometimes you see two semicolons in a row depending on stylistic
tastes.

```clojure
;; more food code
(eat "cookie") ; nom nom nom
(eat "donut") ; mmm donuts
```

## What is the REPL?

"REPL" stands for "Read-Eval-Print-Loop," which still doesn't make a
ton of sense without context. Many programming languages, including
Clojure, have a way to execute code interactively so you get instant
feedback. In other words, the code is read, then it is evaluated, then
the result is printed, and you begin again--thus, a loop.

Clojure has a REPL that you can run from the terminal easily, and
we'll talk more about that later, but for now, let's use Light Table's
"insta-REPL," a nice way to interact from within Light Table.

Go ahead and start Light Table, if you haven't already. Once it's
started, go to the "View" menu and click "Commands." Notice that you
can get to the command by typing ctrl+space from now on, if that's
faster for you. Type "insta" and press enter when the "Instarepl: Open
a Clojure instarepl" choice is highlighted.

After you hit enter, a blank new page will open. At the bottom of
Light Table, you should see a message about "connecting" or
"retrieving deps." Wait for the instarepl to finish connecting before
typing anything. Once that's done, let's try out the REPL together!
Type `(+ 2 3)` and see what happens. Did you see the result appearing
beside what you were typing? Once you'd done that, hit enter and type
`(max 8 17 2)`. You might see an error in red while typing. This
happens because Light Table is continually evaluating what you are
typing, and before you finish, the code might not be valid.

## Simple values

In order to do anything in a programming language, you need have
values to do stuff with. Simple values are numbers, strings, booleans,
and keywords. The first of those, numbers, you can probably guess what
it is, but the rest will need some more explanation.

### Numbers

Actually, let's start with numbers. Clojure has several different
types of numbers.

First up are integers. Integers are zero and the positive and negative
whole numbers, and you write them just like we write them
normally. Examples:

```clj
0
12
-42
```

Then we have decimals, also called floats, which are exactly what you
think they are. Examples:

```clj
10.5
-99.9
0.0000072725
```

We also have fractions, also called ratios. Computers cannot perfectly
represent all floats, but ratios are always exact. We write them with
a slash, like so:

```
1/2
-7/3
```

### Arithmetic

You can add, subtract, multiply, and divide numbers. In Clojure,
arithmetic looks a little different than it does when you write
out. Look at these examples:

```clj
(+ 1 1)  ;=> 1 + 1 = 2
(- 12 4) ;=> 12 - 4 = 8
(* 13 2) ;=> 13 * 2 = 26
(/ 27 9) ;=> 27 / 9 = 3
```

This is called _prefix notation_. What you're used to seeing is called
_infix notation_, as the arithmetic operator is in-between the two
operands.

Prefix notation is useful for many reasons. Look at this example of an
infix expression and the prefix equivalent:

```
Infix:  1 + 2 * 3 / 4 + 5 - 6 * 7 / 8 + 9

Prefix: (+ (- (+ (+ 1 (/ (* 2 3) 4)) 5) (/ (* 6 7) 8)) 9)
```

I imagine both are unclear, but notice that in the prefix version, you
do not have to ever think about the precedence of operators. Because
each expression has the operator before all the operands and the
entire expression is wrapped in parentheses, all precendence is
explicit.

Another reason prefix notation can be nice is that it can make long
expressions less repetitive. Take this example:

```
Infix:  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
Prefix: (+ 1 2 3 4 5 6 7 8 9)
```

With prefix notation, if we plan to use the same operator on many
operands, we do not have to repeat the operator between them.

I used integers with all of the above, but they can use floats or
ratios just fine. See these examples:

```clj
(+ 4/3 7/8)   ;=> 53/24
(- 9 4.2 1/2) ;=> 4.3
(* 8 1/4)     ;=> 2   ;; this produces 2N which means 2 is a BigInt.
(/ 27/2 1.5)  ;=> 3.0
```

### Other simple value types

Although we will look at these in more depth later, here are some
examples of other types of simple values so that you may recognize
them along the way in any code that you see.  The following are
examples of Strings, keywords, and booleans:

```clj
;;Strings
"Salut tout le monde"
"Prost!"

;;keywords
:surname
:birth-date
:r2

;;booleans
true
false
```

## Assigning names to values

If we had to type the same values over and over, it would be very hard
to write a program. What we need are names for values, so we can refer
to them in a way we can remember. We do that using `def`. Type the
following into your instarepl:

```clj
(def mangoes 3)
(def oranges 5)
(+ mangoes oranges)
```

When you assign a name to a value, that name is called a _symbol_. You
can assign more than simple values to symbols. Try the following:

```clj
(def fruit (+ mangoes oranges))
(def average-fruit-amount (/ fruit 2))
average-fruit-amount
```

Look at the last line, and see how we can use symbols by themselves to
refer to a value.

### EXERCISE: Basic arithmetic

Take your height in feet and inches and convert it to inches using
arithmetic in Clojure.

Then convert that to centimeters. There are 2.54 centimeters in an
inch.

Lastly, ask two people near you for their height in centimeters. Find
the average of your heights.

Bonus: Convert that average back to feet and inches. The feet and the
inches will be separate numbers. `(quot x y)` will give you the whole
number part when dividing two numbers. `(mod x y)` will give you the
remainder when dividing two numbers.
