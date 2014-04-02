Making Your First Program
=========================

Now that you know a bit about how to write Clojure code, let's look at how to create a standalone application.

In order to do that, you'll first create a *project*. You'll learn how to organize your project with *namespaces*. You'll also learn how to specify your project's *dependencies*. Finally, you'll learn how to *build* your project to create the standalone application.

## Create a Project

Up until now you've been experimenting in a REPL. Unfortunately, all the work you do in a REPL is lost when you close the REPL. You can think of a project as a permanent home for your code. You'll be using a tool called "Leiningen" to help you create and manage your project. To create a new project, run this command:

```clojure
lein new app global-growth
```

This should create a directory structure that looks like this:

```
| .gitignore
| doc
| | intro.md
| LICENSE
| project.clj
| resources
| README.md
| src
| | global_growth
| | | core.clj
| test
| | global_growth
| | | core_test.clj
```

There's nothing inherently special or Clojure-y about this project skeleton. It's just a convention used by Leiningen. You'll be using Leiningen to build and run Clojure apps, and Leiningen expects your app to be laid out this way. Here's the function of each part of the skeleton:

- `project.clj` is a configuration file for Leiningen. It helps
  Leiningen answer questions like, "What dependencies does this
  project have?" and "When this Clojure program runs, what function
  should get executed first?"
- `src/global_growth/core.clj` is where we'll be doing our
  Clojure coding for awhile.
- The `test` directory contains tests, which we won't be covering.
- `resources` is a place for you to store assets like images; we won't
  be using it today.

Now let's go ahead and actually run this project. Enter this at the command line:

```
cd global_growth
lein run
```

You should see this:

```
Hello, world!
```

## Modify Project

Pretty cool! But also pretty useless. To change the behavior of this project, open up `src/global_growth/core.clj` and monkey around with the `-main` function. Try changing it so that it reads:

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

As your programs get more complex, you'll need to organize them. You organize your Clojure code by placing related functions and data in separate files. Clojure expects each file to correspond to a *namespace*, so you must *declare* a namespace at the top of each file.

Until now, you haven't really had to care about namespaces. Namespaces allow you to define new functions and data structures without worrying about whether the name you'd like is already taken. For example, you could create a function named `println` within the custom namespace `my-special-namespace`, and it would not interfere with Clojure's built-in `println` function. You can use the *fully-qualified name* `my-special-namespace/println` to distinguish your function from the built-in `println`.

A namespace exists in the file `src/global_growth/core.clj`. Open it, and find this line:

```clojure
(ns global-growth.core)
```

This line establishes that everything you define in this file will be stored within the `global-growth.core` namespace.


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

Now you can require the namespaces defined in `clj-http` within your own project. Update `src/global_growth/core.clj` so that it looks like this:

```clojure
(ns global-growth.core
  (:require [clj-http.client :as client]))
```

There are a couple of things going on here. First, we add `require` to `ns` to tell Clojure to load another namespace. The `:as` part of `require` allows you to *alias* the namespace, letting you refer to its definitions without having to type out the entire namespace. In this case, you can use `client/get` instead of `clj-http.client/get`.

Now add:

```clojure
(ns global-growth.core
  (:require [clj-http.client :as client]
            [cheshire.core :as json]))
```

This gives us access to these two libraries we will need to make our project.

## Your first real program

Our program is going to use the World Bank API to give us a list of the top ten countries by population density. Sounds easy, right?

First, we need to be able to talk to the API. You might wonder what an API is. "API" stands for Application Programming Interface, which still doesn't mean a lot. You can think of an API as a web page for a computer. When you go to a web page, you get information from it in a format you can read as a human. An API returns information in a format that is easy for a computer to read. One popular format that we will be using today is called JSON.

Let's look at what the API will return if we ask it for the population density of countries. The URL for this information is:

```sh
http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format=json&date=2010
```

If you go to that in a browser, you should see something like the following. I've added spaces to make it a little more readable.

```json
[
  {
    page: 1,
    pages: 6,
    per_page: "50",
    total: 252
  },
  [
    {
      indicator: {
        id: "EN.POP.DNST",
        value: "Population density (people per sq. km of land area)"
      },
      country: {
        id: "1A",
        value: "Arab World"
      },
      value: "25.5287276250072",
      decimal: "0",
      date: "2010"
    },
    {
      indicator: {
        id: "EN.POP.DNST",
        value: "Population density (people per sq. km of land area)"
      },
      country: {
        id: "S3",
        value: "Caribbean small states"
      },
      value: "17.0236186241818",
      decimal: "0",
      date: "2010"
    }
  ]
]
```

You should be able to make some sense of that.

### Getting this data with Clojure

We need to get this data within Clojure. In order to do that, we're going to use `clj-http`, one of the libraries we included.

`clj-http` has a namespace, `clj-http.client`, which we've required in `global-growth.core`. In that namespace, there's a function `get` that will make a request to a web address and return the response from that web site or API. Let's try it out:

```clj
(client/get "http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format=json&date=2010")

;; elided and formatted
;;=> {:orig-content-encoding nil,
;;    :request-time 109, :status 200,
;;    :headers {"content-length" "10340", "content-type" "application/json;charset=utf-8"},
;;    :body "[{\"page\":1,\"pages\":6}]"}
```

That worked! You can see JSON in the `:body` value. We need this as Clojure data, however.

### Converting JSON

We need to convert this to Clojure data. This is where we'll use the other of our libraries, Cheshire. Cheshire reads JSON and gives us back Clojure data.

The `cheshire.core` namespace, which we've aliased to `json`, has a function called `parse-string` that can turn a string with JSON in it into Clojure data. Take the time to read the docs for `parse-string`. It has an optional second argument that turns the keys in JSON into keywords in Clojure, which we want. (Why do we want that?)

Try running the following in the REPL:

```clj
(json/parse-string "[{\"page\":1,\"pages\":6}]" true)
;;=> ({:page 1, :pages 6})
```

What happens when you leave out the `true`?

### Exercise: Get the results from our API call

Write a function called `get-population-density` that takes no arguments, and returns Clojure data from the World Bank API on population density.

You will need to make the web request, pull the `:body` value out of the response, and then parse the JSON.

```clj
(get-population-density)
;;=> ({:page 1, :pages 6, :per_page "50", :total 252}
;;    [{:indicator {:id "EN.POP.DNST", :value "Population density (people per sq. km of land area)"},
;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072", :decimal "0", :date "2010"},
;;    ...])


## Making our code more generic

Much of what we do when programming is taking specific examples we have practiced with and turning those into generic functions we can use over and over. The World Bank API has lots of good information we can get from it, and we don't want to be limited just to the population density data.

If you look at the bottom of `core.clj`, you will see a lot of code commented out. You can comment or uncomment code by selecting it and choosing "Editor: toggle comment line(s)" from Light Table's command palette. Select the first function called `get-api` and uncomment it. It should look like this:

```clj
(defn get-api
  "Returns map representing API response."
  [path params]
  (let [url (str "http://api.worldbank.org" path)
        query-params (merge params {:format "json" :per_page 10000})
        response (json/parse-string
                  (:body (client/get url {:query-params query-params})) true)
        metadata (first response)
        results (second response)]
    {:metadata metadata
     :results results}))
```

Let's walk through this together. This function accepts a path -- which is going to be part of the API URL we are retrieving -- and a map of parameters. These parameters are what comes after the `?` in the URL and are called "query parameters." In our previous code, this was equal to `format=json&date=2010`. Since we are going to be creating these dynamically, it's easier to pass them in as a map, which `client/get` can handle. (A fun bonus exercise is to turn a map into a string like this, though.)

We use `let` to set up several values. We make a complete URL by adding the API's domain to the front of the path. Then we make our query parameters by combining whatever we sent into the function with parameters to specify JSON and to get back a lot of data. (This prevents us from having to make multiple requests for each thing we want.) After that, we parse the response and turn it into Clojure data. It returns a vector and we want a map with the metadata and the results, so we change that.

To get the same information we had before, we use `get-api` like this:

```clj
(get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010})
;;=> {:metadata {:page 1, :pages 1, :per_page "10000", :total 252},
;;    :results [{:indicator {:id "EN.POP.DNST",
;;    :value "Population density (people per sq. km of land area)"},
;;    :country {:id "1A", :value "Arab World"}, :value "25.5287276250072",
;;    :decimal "0", :date "2010"} ...]}
```

That is fantastic, but what we really want is the country name and the value. Let's do that.

### Exercise: extracting the data we want

Write a function `get-country-and-value` that can take the return value of `get-api` and get the country names and values out of that value. `get-country-and-value` should return a vector of vectors.

```clj
(get-country-and-value
  (get-api "/countries/all/indicators/EN.POP.DNST" {:date 2010}))
;;=> [["Arab World" "25.5287276250072"]
;;    ["Caribbean small states" "17.0236186241818"]
;;    ...]

```
