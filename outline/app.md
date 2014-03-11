Making Your Own Web Application
===============================

1. Open Light Table.
2. Load the global-growth project. File -> Open folder -> find global-growth project.
3. Evaluate the namespace: Go to the line "(ns global-growth.core" and do cmd-shift-enter.
4. Open the instarepl (Ctrl-space, "instarepl") and choose the "global-growth-0.1.0-SNAPSHOT" client.
5. Input the below statements, one-by-one, into the instarepl.

World Bank API
-------------
The World Bank provides a collection of world development indicators data, showing the current state of global development. They provide an API to this data. A web API is a way to provide access for one program to call another program over HTTP. In this case, the World Bank Indicators API provides access to their set of data. 

We will use the World Bank Indicators API to explore some of the world development indicators for different countries. We will sort and compare certain indicators. [Say something about why Clojure is good for this task?]
  
Using Libraries
---------------
Libraries are collections of programs packaged to be reused by others. Common activities such as reading or writing files, doing math, or drawing charts generally have libraries available that you can use. [something about including the dependencies in Leiningen project]

The clj-http library allows you to communicate over HTTP. Load the library and give it an alias that you can use to call it.

    (require '[clj-http.client :as client])

Define a symbol for the URI for the World Bank API so that we can easily refer to it as we need it in our program.

    (def base-uri "http://api.worldbank.org")

Each type of data available through the World Bank API has an API endpoint. The endpoint has a specific path added to the base URI. http://api.worldbank.org/countries is the endpoint that lists all of the countries with data available.
 
    (def base-path (str base-uri "/countries"))
  
Now make a call to the API endpoint: http://api.worldbank.org/countries.

    (client/get base-path)

Query parameters are a part of a URL that provide additional information to the api call - we will ask for JSON formatted results; get 10000 results per page. [Talk about JSON?]

    (def query-params {:format "json" :per_page 10000})

Now load another library: cheshire. It parses JSON.

    (require '[cheshire.core :as json])

Let's create a function to parse json with the cheshire library.

    (defn parse-json [str]
      (json/parse-string str true))

Call an API
-----------
Put all the above together to make a call to the countries API with the query parameters; get the body of that HTTP response; and parse the JSON results. Define a var to hold the result.

    (def response (parse-json (:body (client/get base-path {:query-params query-params}))))

Look at the result of the API call. There are two parts to each result.
Define a var to hold the metadata part. 

    (def metadata (first response))

Define a var to hold the results. 

    (def results (second response))

Put all of the above together into a function.

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

Define a var to hold the results of calling get-api for the countries endpoint.

    (def countries (get-api "/countries" query-params))


Filter the results
------------------
Try going through the results to pull out a couple of the values associated with keys in the results.

    (for [item (:results countries)]
                 [(:name item) (:longitude item)])

Make that into a function where the two keys are parameters that can be passed to the function. Put the values into a map with "into {}"

    (defn get-value-map
      "Returns relation of two keys from API response"
      [path query-params key1 key2]
        (let [response (get-api path query-params)]
            (into {} (for [item (:results response)]
                           [(key1 item) (key2 item)]))))

Call get-value-map to get the map of urban development indicators including their name and indicator ids.The id will be used to retrieve the values for those indicators

    (get-value-map "/topics/16/indicators" {} :name :id)

Create a function based on the above.

    (defn get-indicator-map []
      "Gets map of indicators.
      /topics/16/indicators:   All urban development"
      (get-value-map "/topics/16/indicators" {} :name :id))

Define the results of calling get-indicator-map.

    (def indicator-map (get-indicator-map))

On to getting the values for a specific indicators API endpoint for getting a certain indicator for all countries:
http://api.worldbank.org/countries/all/indicators/EP.PMP.SGAS.CD?format=json&per_page=10000&date=2010

    (get-value-map (str "/countries/all/indicators/EP.PMP.SGAS.CD") {:date 2012} :country :value)

Turn it into a function.

    (defn get-indicator-all
      "Returns indicator for a specified year for all countries"
      [indicator year key1 key2]
        (get-value-map (str "/countries"
                            "/all"
                            "/indicators"
                            "/" indicator)
                         {:date (str year)}
                          key1
                          key2))

Some supporting functions
-------------------------
Just copy/paste these into the REPL (they are in the provided source file). We aren't talking about these.

    (def list-size 10)

    (defn remove-aggregate-countries
      "Remove all countries that aren't actually countries, but are aggregates."
        [countries]
          (remove (fn [country]
                      (= (get-in country [:region :value]) "Aggregates")) countries))

    (defn get-country-ids
      "Get set of country ids so we can filter out aggregate values."
        []
          (let [countries (remove-aggregate-countries (:results (get-api "/countries" {})))]
              (set (map :iso2Code countries))))

    (def country-ids (get-country-ids))


Sort the data 
-------------
Call get-indicator-all to get the pump price indicator for 2012.

    (def inds (get-indicator-all "EP.PMP.SGAS.CD" "2012" :country :value))

Go through the results, making sure that they are actually countries by matching up against the country-ids, then get the value from the country and convert the value from a string.  

    (for [[k v] inds
          :when (and v (country-ids (:id k)))]
        [(:value k) (read-string v)])

Put those results into a map

    (into {} (for [[k v] inds
                  :when (and v (country-ids (:id k)))]
                [(:value k) (read-string v)]))

Sort those values with the sort-by function.

    (sort-by val >
      (into {} (for [[k v] inds
                    :when (and v (country-ids (:id k)))]
                  [(:value k) (read-string v)])))
       
Take just the top 10 of the sorted lists.              

    (take list-size
      (sort-by val >
          (into {} (for [[k v] inds
                        :when (and v (country-ids (:id k)))]
                      [(:value k) (read-string v)]))))

Make that into a function.

    (defn sorted-indicator-map
      "Sort the map of indicator numeric values"
      [inds]
        (take list-size
                (sort-by val >
                  (into {} (for [[k v] inds
                            :when (and v (country-ids (:id k)))]
                           [(:value k) (read-string v)])))))



Package up the app
------------------

1. In Light Table, click global-growth/src/global_growth/core.clj.
2. Copy and paste the functions we have written in the Instarepl into core.clj underneath the namespace definition.
3. Then find in core.clj where it says <<FILL IN THE BLANK>> under ;; WEB APP


That is the place in the web app where you will use the sorted-indicator-map and get-indicator-all functions to call the API to get the indicator data.

When you properly fill in the blanks, save the file. 

4. Go to the command line. Change directories to the global-growth project.

    cd global-growth

5. Run:

    lein ring server

6. Then use your web browser to go to: http://localhost:3000

