Introduction to Web Applications
================================

##How does the web work?
    
A web application is software that runs in a web browser (like Chrome, Firefox, Internet Explorer, Safari). It communicates with a server over the Internet that can do central processing and data storage. The browser is the client, or user interface, to the web app where users interact with it. The server does the heavy lifting.

The way that the client and server communicate with each other is through a protocol called HTTP. A protocol is a set of rules for communication. Think of the airport ground crew who use wands to communicate with the pilots taxiing the planes around the tarmac. They have a limited set of signals that mean specific things which guide what the pilot does. There are a set of guidelines for when and how the pilot will receive and respond to those signals. HTTP is the protocol for sending requests to server and for the server to send responses to those requests. 

A web app accepts an HTTP request from the client and gives it a response. Think of the server as just like the Clojure functions we have written. They take the input of a request and give the output of a response. In fact, we can write that function:

```clj
(defn app
  [request]

  {:status 200})
````
This function accepts 'request' as a parameter, then returns a map with a status of 200. In HTTP, a status of 200 means everything worked fine.
   

##What is HTML?

When you bring up something in your web browser you want more than a status code, though. You want to see words and images and dancing gifs (ok, maybe not that). You want it to be easy to read and pleasant to look at. HTML is what makes web pages look that way. It is a markup language, which is different from a programming language. It is a way to put tags around words that suggest to the web browser the way you want them to look. 

Go to the [ClojureBridge](http://www.clojurebridge.org/) web site. Then in your web browser, view the source.
- In Chrome, go to View - Developer - View Source
- In Firefox, go to Tools - Web Developer - Page Source
- In Safari, go to Safari menu - Preferences - Advanced - Check "Show Develop menu in menu bar." Then go to Develop - Show Page Source
- In Internet Exploer, go to View - Source 

Look at the parts that have angle brackets around them like `<this>`. Those are HTML tags. Search for `<h1>`. That is a tag that tells the browser to display the text until the close tag, `</h1>`, as a level one header. Look at the web page and see how that text displays.


##Making the simplest web application

Let's make the simplest possible web application. It will say hello in the browser.

First, run ```lein new basic-app``` in the console.

Create the file ```src/basic_app.clj``` and make it look like this:

```clj
(ns basic-app)

(defn app

  "Return a status."
  ;; A request comes in the handler.
  [request]

  ;; The handler returns a response map.
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello, world."})
````

We need some supporting pieces to run this. We need the project.clj for Leiningen.

```clj
(defproject basic-app "0.1.0-SNAPSHOT"

  ;; We require ring.
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.2.1"]]

  ;; We use the lein-ring plugin to start ring.
  :plugins [[lein-ring "0.8.10"]]

  ;; We tell Ring what our handler function is and
  ;; what port to start on.
  :ring {:handler basic-app/app
         :port 3001})
````

There are multiple dependencies in this file: Ring and Lein-ring. Ring is a Clojure library [need to talk about libraries in First Program section] that handles HTTP requests and responses. Lein-ring allows Leiningen to start ring.

To run the web app, type the following at the command line:

```
lein ring server
````
 


##Making it look nicer with HTML

Now let's do the same thing but with HTML so that the text displays with formatting.

```clj
(ns basic-app
  (:require [clojure.pprint :refer [pprint]]))

(defn app

  "Return the request as HTML."
  ;; A request comes in the handler.
  [request]

  ;; The handler returns a response map.
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (str "<h1>Hello World</h1><pre>"
              (with-out-str (pprint request))
              "</pre>")})
````

##URLs and Routes
The web browser gets to the right server with an address called a URL. Take a look at the following URLS:

+ http://www.google.com/advanced_search 
+ http://www.amazon.com/Clojure-Programming-Chas-Emerick/dp/1449394701

After the "http://", "www.google.com" identifies the server. Then the part after that, "/advanced_search" is the path to the resource (or program?) on that server that will handle this request. In a single web application, you will almost certainly have many actions. For example, you may want to order a book, look up all the books you ordered, or check the status of an order. If one web applications handles all of that, it needs to track who takes care of what.

The process of coordinating which path goes to what action is called routing. The Clojure library that does this is called Compojure. Here is an example of routing with Compojure.

```clj
(ns basic-app
  (:use compojure.core)
  (:require [clojure.pprint :refer [pprint]]
            [compojure.route :as route]))


(defn index-page []
  "index content")

(defn person-page [person]
  "person content")

(defn add-debt-page []
  "add debt content")

(defn add-debt-post [xfer]
  "add debt post content")

(defroutes app

  ;verb  route             parameters        handler
  (GET   "/"               []                (index-page))
  (GET   "/debts/:person"  [person]          (person-page person))
  (GET   "/add-debt"       []                (add-debt-page))
  (POST  "/add-debt"       [from to amount]
         (add-debt-post {:from from,
                         :to to,
                         :amount amount}))

  (route/resources "/")
  (route/not-found "Page not found"))

````

The verbs - GET, POST - are part of the http request and say what you want to do with this URL. GET is just fetching some data. POST is usually doing some processing on that data. The route is the path part of the URL. The handler is the Clojure function that is going to handle this particular request. The routes table maps that combination of verb and route to the handler function. 

One more thing about URLs. They can contain query strings at the end. These are a way to pass additional information to web applications.

+ https://twitter.com/search?q=marmots&lang=en

Here you see the URL for Twitter search: https://twitter.com/search. The part after the ? is the query string: q=marmots&lang=en. What am I searching for? Marmots. What language do I want results for? English.

##JSON
A brief word about JSON. JSON is a format for providing data. Sometimes, instead of a web page you see in your browser, you want to provide a list of information from a web application. Having a format that everyone agrees on makes it easier to deal with the data. Here's an example that describes a book:

```
{"book": {
    "title": "The Fault in our Stars",
    "author": "John Green",
    "characters": [
        {"name": "Hazel Grace Lancaster", "age": 16},
        {"name": "Augustus Waters", "age": 17}
       ]
}}
```

