Making Your Own Web Application
===============================

You should still have the global-growth project open in Light Table from the previous module. If not, open it now.

Then open `src/global_growth/web.clj` by navigating to it in the left-hand folder navigator and clicking on it.

## Introduction to web applications

We've built a program that runs on the command line. How do we build one that works on the web?

In order to do that, we need to understand a little about how the web works.

### How does the web work?

A web application is software that runs in a web browser (like Chrome, Firefox, Internet Explorer, Safari). It communicates with a server over the Internet that can do central processing and data storage. The browser is the client, or user interface, to the web app where users interact with it. The server does the heavy lifting.

The way that the client and server communicate with each other is through the Hypertext Transfer Protocol, or HTTP. A protocol is a set of rules for communication. Think of the airport ground crew who use wands to communicate with the pilots taxiing the planes around the tarmac. They have a limited set of signals that mean specific things which guide what the pilot does. There are a set of guidelines for when and how the pilot will receive and respond to those signals. HTTP is the protocol for sending requests to a server and for the server to send responses to those requests.

A web app accepts an HTTP request from the client and gives it a response. Think of the server as just like the Clojure functions we have written. They take the input of a request and give the output of a response. In fact, we can write that function:

```clj
(defn app
  [request]

  {:status 200})
````
This function accepts 'request' as a parameter, then returns a map with a status of 200. In HTTP, a status of 200 means everything worked fine.

### What is HTML?

In the previous module, we worked with JSON, which we got from the World Bank API.

HTML is another data format used on the web, but unlike JSON, it's meant to be viewed by humans. Whenever you go to a web page, HTML is what your browser is receiving. Your browser turns that into graphics and text you can see.

Go to the [ClojureBridge](http://www.clojurebridge.org/) web site. Then in your web browser, view the source.
- In Chrome, go to View - Developer - View Source
- In Firefox, go to Tools - Web Developer - Page Source
- In Safari, go to Safari menu - Preferences - Advanced - Check "Show Develop menu in menu bar." Then go to Develop - Show Page Source
- In Internet Explorer, go to View - Source

Look at the parts that have angle brackets around them like `<this>`. Those are HTML tags. Search for `<h1>`. That is a tag that tells the browser to display the text until the close tag, `</h1>`, as a level one header. Look at the web page and see how that text displays.

## Clojure web libraries

We are going to use a few new libraries in order to turn our program into a web application. These are:

* Ring, which handles taking in web requests and returning responses
* Compojure, which reads URLs and decides how to handle them
* Hiccup, which takes Clojure data and turns it into HTML

These are already required in `web.clj`. Look at the top of the file to see them in the `ns` statement:

```clj
(ns global-growth.web
  (:require [global-growth.core :as api]
            [compojure.core :refer [defroutes GET]]
            [compojure.handler :refer [site]]
            [hiccup.core :as hiccup]
            [hiccup.page :as page]
            [hiccup.form :as form]))
```

Note that we also brought in the code we've been working on in `global-growth.core`.

## Routing requests

Go ahead and uncomment everything under the `;;;; MODULE 5` line in `core.clj` and everything in `web.clj`. That's a lot of code: web development can get kind of wordy. For now, let's scroll down in `web.clj` to the bottom, where we'll find this:

```clj
(defroutes main-routes
  (GET "/" [] (main-page))
  (GET "/indicators" [indicator1 indicator2 year]
        (view-indicators indicator1 indicator2 year)))
```

This sets up our application's _routes_. Routes are mappings between URLs and functions that are called when someone accesses those URLs. In this case, if someone goes to "/" -- the root URL for our application -- `main-page` is called. If someone goes to `/indicators`, we get the values `indicator1`, `indicator2`, and `year` from the query parameters, and then call the `view-indicators` function with those values.

## Generating HTML

Go to the `main-page` function in `web.clj`.

... TODO: explain how Hiccup works. This can be done on the fly ...


### Running a web application

Go back to `project.clj`. Add a new key and value to the project:

```clj
:ring {:handler global-growth.web/handler}
```

This sets up the function `handler` in `global-growth.web` as the function that will take in web requests. Once you have added this, go to the command line. Within the `global-growth` directory, run the following:

```sh
lein ring server
```

After a few seconds, you should see something like this:

```
2014-04-02 21:30:06.303:INFO:oejs.Server:jetty-7.6.8.v20121106
2014-04-02 21:30:06.378:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000
Started server on port 3000
```

Your web browser should open a new tab pointing to your web application. If it does not, go to http://localhost:3000 in your web browser to see your application in action.
