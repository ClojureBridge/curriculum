Introduction to Programming with Clojure
========================================

* Why Clojure?
* What is Clojure good at?
* What does Clojure look like?
* What is the REPL?
* Getting help in the REPL
* Simple values
    - Numbers
    - Strings
    - Booleans
    - Keywords
* Assigning names to values

## Why Clojure?

If you've never programmed before, you may not know that there are many languages to choose from. Some of the other languages you might have heard of or will hear of are C, JavaScript, Python, and Java.

So why are we teaching Clojure? It's not as popular as any of those languages. We're using Clojure because of three qualities it has that make it an ideal first language to learn -- or great language to learn in addition to others you might already know:

* Clojure is _simple_. That's not to say it's not powerful; it is. The number of concepts you have to know to program in Clojure are very small, however, and easy to grasp. Clojure grows with you as you learn it, and you can be very productive with a small subset of the language.

* Clojure is _all-purpose_. Some languages have a specific focus. JavaScript, for example, was traditionally used only in web pages (although that's changed somewhat.) Objective-C is used mainly for iPhone apps. We're going to make a web application today, but you can use Clojure for any sort of application easily.

* Clojure is _fun_. That's a matter of opinion, of course, but we think it holds true. I hope that during this course you experience the joy of seeing a Clojure program come together and do something powerful and surprising.

## What is Clojure good at?

So, we said Clojure is all-purpose, and it is. That doesn't mean it doesn't have strong suits, though.

Clojure is known for being good at data processing. That's because it has a good set of data structures -- that is, it has several built-in ways to represent data that are easy to use and powerful.

Clojure is known for its concurrency. Think about writing instructions for four of your friends about how to assemble a treehouse, but instead of writing them so one step is done at a time, each of your friends does part of the job and they coordinate at the right time to assemble those parts into bigger parts, and they do this over and over until the end when it all comes together. Those instructions would be really complicated and hard to write and probably hard to read, too. Clojure gives us some easy ways to write these sort of instructions for computers.

Clojure works well for building web applications, which is what we're going to do together.

## What does Clojure look like?

Here's an example of a few lines of Clojure:

```clojure
(+ 3 4)
(max 8 17 2)
(eat "sandwich")
```

The first thing you notice are parentheses, probably. Parentheses enclose instructions to the computer in Clojure. Every time you see a left parenthesis, the next thing you see will be an instruction of some sort. That instruction is normally what we call a _function_. Functions do all the hard work in Clojure. They take in _arguments_, which is everything else inside the parentheses after the function and return a new value.

Take a look at the first line. The plus sign that you see is a function. It takes all its arguments and adds them together, returning the sum. This might look confusing if you try to think of it like writing out math, because you'd put the plus sign in a different place that way. Just think of the plus as a function. If you've used Excel, imagine the `SUM()` function in there: it works like that.

What is the function on the next line? What are its arguments? What do you think it returns? It returns the number 17, which is the largest of the three numbers.

How about the last line? That has a thing called a string in it, which we'll learn more about later. Looks like someone is hungry.

## What is the REPL?

...