Introduction to Web Applications
================================

* How does the web work?
    
A web application is software that runs in a web browser (like Chrome, Firefox, Internet Explorer, Safari). It communicates with a server over the Internet that can do central processing and data storage. The browser is the client, or user interface, to the web app where users interact with it. The server does the heavy lifting.

The way that the client and server communicate with each other is through a protocol called HTTP. A protocol is a set of rules for communication. Think of the airport ground crew who use wands to communicate with the pilots taxiing the planes around the tarmac. They have a limited set of signals that mean specific things which guide what the pilot does. There are a set of guidelines for when and how the pilot will receive and respond to those signals. HTTP is the protocol for sending requests to server and for the server to send responses to those requests. 

A web app accepts an HTTP request from the client and gives it a response. Think of the server as just like the Clojure functions we have written. They take the input of a request and give the output of a response. In fact, we can write that function:

```clj
(defn handler 
  [request]

  {:status 200})
````
This function accepts 'request' as a parameter, then returns a map with a status of 200. In HTTP, a status of 200 means everything worked fine.
   

* What is HTML?

When you bring up something in your web browser you want more than a status code, though. You want to see words and images and dancing gifs (ok, maybe not that). You want it to be easy to read and pleasant to look at. HTML is what makes web pages look that way. It is a markup language, which is different from a programming language. It is a way to put tags around words that suggest to the web browser the way you want them to look. 

Go to the [ClojureBridge](http://www.clojurebridge.org/) web site. Then in your web browser, view the source.
- In Chrome, go to View - Developer - View Source
- In Firefox, go to Tools - Web Developer - Page Source
- In Safari, go to Safari menu - Preferences - Advanced - Check "Show Develop menu in menu bar." Then go to Develop - Show Page Source
- In Internet Exploer, go to View - Source 

Look at the parts that have angle brackets around them like <this>. Those are HTML tags. Search for <h1>. That is a tag that tells the browser to display the text until the close tag, </h1>, as a level one header. Look at the web page and see how that text displays.


* Making the simplest web application

Let's make the simplest possible web application. It will say hello in the bbrowser

```clj
(ns hello) 

(defn handler
    
  "Return a status."
  ;; A request comes in the handler.  
  [request]

  ;; The handler returns a response map.
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body ( "Hello, world.")})
              
````

* Making it look nicer with HTML

Now let's do the same thing but with HTML so that the text displays with formatting.

```clj
(ns hello 
    (:require [clojure.pprint :refer [pprint]]))

(defn handler
    
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
   
   *** Talk about Ring here or before?
   *** Need ring depended lein project definiton
* URLs and routes

```clj
(require '[compojure.core :refer [routes]])
(require '[compojure.route :as route])

(routes
         
  ;verb  route   parameters        handler
  (GET   "/"     []                (index-page))
  (GET   "/debts/:person" [person] (person-page person))
  (GET   "/add-debt" []            (add-debt-page))
  (POST  "/add-debt" [from to amount] 
        (add-debt-post {:from from,
                        :to to,
                        :amount amount}))
  
  (route/resources "/")
  (route/not-found "Page not found"))
````
  *** Compojure

