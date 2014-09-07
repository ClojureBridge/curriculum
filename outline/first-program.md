Making Your First Program
=========================

Now that you know a bit about how to write Clojure code, let's look at how to create a standalone application.

In order to do that, you'll first create a *project*. You'll learn how to organize your project with *namespaces*. You'll also learn how to specify your project's *dependencies*. Finally, you'll learn how to *build* your project to create the standalone application.

## Create a Project

Up until now you've been experimenting in a REPL. Unfortunately, all the work you do in a REPL is lost when you close the REPL. You can think of a project as a permanent home for your code. You'll be using a tool called "Leiningen" to help you create and manage your project. To create a new project, run this command:

```clojure
lein new clojurebridge global-growth
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
  Clojure coding for a while.
- The `test` directory contains tests, which we won't be covering.
- `resources` is a place for you to store assets like images; we won't
  be using it today.

Now let's go ahead and actually run this project. Enter this at the command line:

```
cd global-growth
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

The `-main` function is the *entry point* to your program. Other than that there's nothing special about it. It acts just like any other Clojure function. It just happens to be the function which gets called first when you run your program. For example, you can write your own functions and have `-main` call them:

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

To add a dependency, open `project.clj`. You should see a section which reads

```clj
:dependencies [[org.clojure/clojure "1.5.1"]
               [clj-http "0.7.7"]
               [cheshire "5.2.0"]
               [ring "1.2.1"]
               [compojure "1.1.6"]
               [hiccup "1.0.4"]]
```

This is where our dependencies are listed. All the dependencies we need for this project are already included.

In order to use these libraries, we have to _require_ them in our own project. See `src/global_growth/core.clj`, for example:

```clojure
(ns global-growth.core
  (:require [clj-http.client :as client]
            [cheshire.core :as json]))
```

This gives us access to the two libraries we will need to make our project.

There are a couple of things going on here. First, the `:require` in `ns` tells Clojure to load other namespaces. The `:as` part of `:require` creates an *alias* for a namespace, letting you refer to its definitions without having to type out the entire namespace. For example, you can use `client/get` instead of `clj-http.client/get`.

## Your first real program

### World Bank API

The World Bank provides a collection of world development indicators data, showing the current state of global development. They provide an API to this data. A web API is a way to provide access for one program to call another program over HTTP. In this case, the World Bank Indicators API provides access to their set of data.

We will use the World Bank Indicators API to explore some of the world development indicators for different countries. We will sort and compare certain indicators. This is a task that Clojure is well suited for.

Our program is going to use the World Bank API to give us a list of the top ten countries by population density. Sounds easy, right?

### What is an API?

First, we need to be able to talk to the API. You might wonder what an API is. "API" stands for Application Programming Interface, which still doesn't mean a lot. You can think of an API as a web page for a computer. When you go to a web page, you get information from it in a format you can read as a human. An API returns information in a format that is easy for a computer to read. One popular format that we will be using today is called JSON.

Let's look at what the API will return if we ask it for the population density of countries. The URL for this information is:

```
http://api.worldbank.org/countries/all/indicators/EN.POP.DNST?format=json&date=2010
```

If you go to that in a browser, you should see something like the following. I've added spaces to make it a little more readable.

```json
[
  {
    "page": 1,
    "pages": 6,
    "per_page": "50",
    "total": 252
  },
  [
    {
      "indicator": {
        "id": "EN.POP.DNST",
        "value": "Population density (people per sq. km of land area)"
      },
      "country": {
        "id": "1A",
        "value": "Arab World"
      },
      "value": "25.5287276250072",
      "decimal": "0",
      "date": "2010"
    },
    {
      "indicator": {
        "id": "EN.POP.DNST",
        "value": "Population density (people per sq. km of land area)"
      },
      "country": {
        "id": "S3",
        "value": "Caribbean small states"
      },
      "value": "17.0236186241818",
      "decimal": "0",
      "date": "2010"
    }
  ]
]
```

The data is structured in a way that it should make sense just looking at it.

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
```

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

## Removing unwanted data

We have a problem: the World Bank API includes regions in its data, not just countries. The code to remove these is commented out in core.clj, so let's uncomment it. Uncomment the definitions for `remove-aggregate-countries`, `countries`, and `get-indicator-values`. We do not have time to go through each one of these in depth, but let's look at `get-indicator-values`:

```clj
(defn get-indicator-values
  "Returns indicator values for a specified year for all countries."
  [indicator-code year]
  (let [response (get-api (str "/countries/all/indicators/" indicator-code)
                          {:date (str year)})
        values (get-country-and-value response)]
    (for [[country value] values
          :when (and (not (nil? value))
                     (contains? @countries country))]
      [country (read-string value)])))
```

We give this function an indicator code -- we don't have a list yet, but "EN.POP.DNST" is the code for population density -- and a year for the data. We query the API to get a response and then remove the country and value using the code you wrote in the last exercise. (This is also provided in core.clj; uncomment it if you have not written it.) Once we do that, we have this gnarly `for` statement.

**NOTE FOR TEACHERS:** This is some advanced stuff. It's great for classes that have people with previous programming experience. If they don't, feel free to skip.

The first line of the `for` statement -- `[country value] values` -- works like other `for` statements we've seen, but with a twist. We take each item in the `values` sequence. We know each item is a vector with the country and value. Using this syntax lets us deconstruct that so we can break out that country and value for use later.

The second and third lines should be familiar to you from before. The `:when` keyword in a `for` statement lets us conditionally decide what elements of the values sequence to use. The `@` sign in front of `countries` is unfamiliar. That is called a "dereference" and is being used for performance purposes. (Another note for teachers: if you have time, explain what is going on here. `countries` uses `delay` so we don't automatically make a call to the API on start-up and do it when necessary. The deref is used to get the value out of the `delay`.) We are not using any elements where there is no indicator value or where the country isn't in our list of countries. This eliminates the regions that we saw before.

Try out `(get-indicator-values "EN.POP.DNST" 2010)` and see what you get.

## Revisiting -main

Let's make our program print out a list of all countries and their population density when we run it. To do that, we need to go back to our `-main` function. Make sure this is the last function in your file. Why? In Clojure, the order things are defined in matters. We will be using functions that we've written in our `-main` function, so we need to make sure those functions are defined first.

In order to do this, we'll need one new function, `doseq`. `doseq` works like `for`, but instead of returning a new sequence, it just executes its body for side-effects. This is perfect when doing something like printing out data.

### Exercise: Finish -main

Using `doseq` and `println`, write a `-main` function that prints out all the countries and their population densities from the World Bank API. Use `(get-indicator-values "EN.POP.DNST" 2010)` to get the values you need.

### Bonus exercise: Only show the top 10 countries

Change your `-main` function to only print out the top 10 countries and their population densities. You will need the `sort-by` function to make this work.
