Making Your First Program
=========================

Now that you know a bit about how to write Clojure code, let's look at how to create a standalone application.

In order to do that, you'll first create a *project*. You'll learn how to organize your project with *namespaces*. You'll also learn how to specify your project's *dependencies*. Finally, you'll learn how to *build* your project to create the standalone application.

## Create a Project

Up until now you've been experimenting in a REPL. Unfortunately, all the work you do in a REPL is lost when you close the REPL. You can think of a project as a permanent home for your code. You'll be using a tool called "Leiningen" to help you create and manage your project. To create a new project, run this command:

```clojure
lein new app project-name
```

This should create a directory structure that looks like this:

```
| .gitignore
| doc
| | intro.md
| project.clj
| resources
| README.md
| src
| | project_name
| | | core.clj
| test
| | project_name
| | | core_test.clj
```

There's nothing inherently special or Clojure-y about this project skeleton. It's just a convention used by Leiningen. You'll be using Leiningen to build and run Clojure apps, and Leiningen expects your app to be laid out this way. Here's the function of each part of the skeleton:

- `project.clj` is a configuration file for Leiningen. It helps
  Leiningen answer questions like, "What dependencies does this
  project have?" and "When this Clojure program runs, what function
  should get executed first?"
- `src/project_name/core.clj` is where we'll be doing our
  Clojure coding for awhile. In general, your source code will fall
  under `src/{project_name}`
- The `test` directory obviously contains tests, which we won't be covering.
- `resources` is a place for you to store assets like images; we won't
  be using it for awhile.

Now let's go ahead and actually run this project. Enter this at the command line:

```
cd project_name
lein run
```

You should see this:

```
Hello, world!
```

## Modify Project

Pretty cool! But also pretty useless. To change the behavior of this project, open up `src/project_name/core.clj` and monkey around with the `-main` function. Try changing it so that it reads:

```clojure
(defn -main
  [& args]
  (println "Hello, ClojureBridge!"))
```

If you run `lein run` again, you should see `Hello, ClojureBridge!` printed.

The `-main` function is the *entry point* to your program. Other than that there's nothing special about it. It acts just like any other Clojure function. It just happens to be the function which gets called first when you run your program. For example, you can write your own functions have `-main` call them:

```clojure
(defn quotify
  [quote author]
  (str quote "\n\n-- " author))
(defn -main
  [& args]
  (println (quotify "A man who carries a cat by the tail learns something he can learn in no other way."
                    "Mark Twain")))
```

This should output:

```
A man who carries a cat by the tail learns something he can learn in no other way.

-- Mark Twain
```

So, you can write programs of arbitrary complexity. Just make sure to use `-main` to kick them off.

## Organization

As your programs get more complex, you'll need to organize them. You organize your Clojure code by placing related functions and data in separate files. Clojure expects each file to correspond to a *namespace*, so you must *declare* a namespace at the top of each file. Here's an example:


