Making Your First Program
=========================

Now that you know a bit about how to write Clojure code, let's look at how to create a standalone application.

In order to do that, you'll first create a *project*. You'll learn how to organize your project with *namespaces*. You'll also learn how to specify your project's *dependencies*. Finally, you'll learn how to *build* your project to create the standalone application.

## Create a Project

Up until now you've been experimenting in a REPL. Unfortunately, all the work you do in a REPL is lost when you close the REPL. You can think of a project as a permanent home for your code. You'll be using a tool called "Leiningen" to help you create and manage your project. To create a new project, run this command:

```clojure
lein new app world-bank
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
| | world_bank
| | | core.clj
| test
| | world_bank
| | | core_test.clj
```

There's nothing inherently special or Clojure-y about this project skeleton. It's just a convention used by Leiningen. You'll be using Leiningen to build and run Clojure apps, and Leiningen expects your app to be laid out this way. Here's the function of each part of the skeleton:

- `project.clj` is a configuration file for Leiningen. It helps
  Leiningen answer questions like, "What dependencies does this
  project have?" and "When this Clojure program runs, what function
  should get executed first?"
- `src/world_bank/core.clj` is where we'll be doing our
  Clojure coding for awhile. In general, your source code will fall
  under `src/{world_bank}`
- The `test` directory obviously contains tests, which we won't be covering.
- `resources` is a place for you to store assets like images; we won't
  be using it for awhile.

Now let's go ahead and actually run this project. Enter this at the command line:

```
cd world_bank
lein run
```

You should see this:

```
Hello, world!
```

## Modify Project

Pretty cool! But also pretty useless. To change the behavior of this project, open up `src/world_bank/core.clj` and monkey around with the `-main` function. Try changing it so that it reads:

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

## Organization (Good candidate for cutting/mentioning briefly if time is running short)

As your programs get more complex, you'll need to organize them. You organize your Clojure code by placing related functions and data in separate files. Clojure expects each file to correspond to a *namespace*, so you must *declare* a namespace at the top of each file.

Until now, you haven't really had to care about namespaces. Namespaces allow you to define new functions and data structures without worrying about whether the name you'd like is already taken. For example, you could create a function named `println` within the custom namespace `my-special-namespace`, and it would not interfere with Clojure's built-in `println` function. You can use the *fully-qualified name* `my-special-namespace/println` to distinguish your function from the built-in `println`.

Let's create a new namespace for making world bank API calls. First, create the file `src/world_bank/api.clj`. Then write this in it:

```clojure
(ns world-bank.api)
```

This line establishes that everything you define in this file will be stored within the `world-bank.api` namespace. For example, add this to your file:

```clojure
(def base-uri "http://api.worldbank.org")
```

You should be able to access that from your `core.clj` file. Change that file so that it reads:

```clojure
(ns world-bank.core)
(require '[world-bank.api :as api])

(defn -main
  [& args]
  (println api/base-uri))
```

If you run the `-main` function it should print `http://api.worldbank.org`.

There are couple things going on here. First, you use `require` to tell Clojure to load another namespace. The `:as` part of `require` allows you to *alias* the namespace, letting you refer to its definitions without having to type out the entire namespace. In this case, you can use `api/base-uri` instead of `world-bank.api/base-uri`.

## Dependencies

The final part of working with projects is managing their *dependencies*. Dependencies are just code libraries that others have written which you can incorporate in your own project.

To add a dependency, open `project.clj`. You should see a line which reads

```
:dependencies [[org.clojure/clojure "1.5.1"]]
```

That's where you specify your dependencies. You can add a dependency by adding another vector with the dependency's name and its version. Let's add the `clj-http` and `cheshire` projects. `clj-http` will let us make HTTP calls so that we can get data using the World Bank API. `cheshire` will let us decode the results. Update the dependencies line in your `project.clj` so that it looks like this:

```
:dependencies [[org.clojure/clojure "1.5.1"]
               [clj-http "0.9.0"]
               [cheshire "5.3.1"]]
```

Now you can require the namespaces defined in `clj-http` within your own project. Update `src/world_bank/api.clj` so that it looks like this:

```clojure
(ns world-bank.api)
(require '[clj-http.client :as client])
(require '[cheshire.core :as json]

(def base-uri "http://api.worldbank.org")
(def query-params {:format "json" :per_page 10000})

(defn get-api
  "Returns map representing API response."
  [path qp]
    (let [base-path (str base-uri path)
          query-params (merge qp {:format "json" :per_page 10000})
          response (parse-json (:body (client/get base-path {:query-params query-params})))
          metadata (first response)
          results (second response)]
      {:metadata metadata
       :results results}))
```

Ta-da!
