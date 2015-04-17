Getting Set Up
==============

## Requirements

Everyone in the workshop should have a laptop. If it is running Windows, it should be running Windows 7 or above. If it is running OS X, it should be running 10.7 "Lion" or above. If it is running Linux, you are probably fine.

If anyone attending does not have access to a laptop running one of the above choices, let the instructors know. You can either pair with someone else, or we can provide a virtual machine that you can run if you have a laptop.

## What we are installing

By the end of these instructions, you will have the following installed:

* **Java standard edition (SE)** - Clojure runs on top of Java.  The Java Runtime Enviromment (JRE) is needed to run Clojure. 
* **Leiningen** - a tool for running Clojure programs, also creating & managing Clojure projects
* **LightTable** - an easy to use development tool for Clojure and other programming languages
* **Git** - versioning your Clojure code (so you can go back to earlier versions if you make a mistake)

> Java version 1.8 (Java 8) is the latest version.  Java 1.7 (Java 7) & 1.6 (Java 6) will also work.

## Instructions by operating system

Choose your operating system to get setup instructions:

* [OS X](setup_osx.md)
* [Windows 7](setup_win7.md)
* [Windows 8](setup_win8.md)
* [Ubuntu Linux](setup_ubuntu.md)

## Make Light Table more convenient

All of the following is optional add and remove what you like.

**automatic closing of parentesses**

[Enabling auto-closing parens.](http://stackoverflow.com/questions/27818505/light-table-parentheses-are-not-auto-closing)
*This has been disabled, because it tends to break with none english kayboard layouts!*
But if you use the EN layout you should be fine.

Quote from the link:
> What I needed to do was add this form to the User behaviors configuration:

> To do so, I followed these steps:

> * `Ctrl-Space` to open Commands
> * Type `user behaviors` and click the proposed command
> This open a file that you can edit to add
> `[:app :lt.objs.settings/pair-keymap-diffs]`


**show line numbers**

To show line numbers:
* `Ctrl-Space` to open Commands
* Type `user behaviors` and click the proposed command
* This open a file that you can edit to add `[:editor :lt.objs.editor/line-numbers]`

**down wrap lines around**

To not have lines wrap around if they are to long for the screen:
* `Ctrl-Space` to open Commands
* Type `user behaviors` and click the proposed command
* This open a file that you can edit to add `[:editor :lt.objs.editor/no-wrap]`
