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

We will use the World Bank Indicators API to explore some of the world development indicators for different countries. We will sort and compare certain indicators. This is a task that Clojure is well suited for.
  
Using Libraries
---------------
Libraries are collections of programs packaged to be reused by other programs. Common activities such as reading or writing files, doing math, or drawing charts generally have libraries available that you can use. We saw how to use libraries in Clojure projects when we wrote our first program. 

The clj-http library allows you to communicate over HTTP. Load the library and give it an alias that you can use to call it.

    (require '[clj-http.client :as client])

Define a symbol for the URL for the World Bank API so that we can easily refer to it as we need it in our program.

    (def base-uri "http://api.worldbank.org")

Each type of data available through the World Bank API has an API endpoint. The endpoint has a specific path added to the base URL. http://api.worldbank.org/countries is the endpoint that lists all of the countries with data available. Create a var to refer to that URL by combining the base-uri and "/countries".
 
    (def base-path (str base-uri "/countries"))
  
Now make a call using the clj-http client's get function to the API endpoint: http://api.worldbank.org/countries.

    (client/get base-path)

Query parameters are part of the query string that is the part of a URL that provide additional information to the api call - we will ask for JSON formatted results; get 10000 results per page. 

    (def query-params {:format "json" :per_page 10000})

Now load another library: cheshire. It reads and understands the JSON format.

    (require '[cheshire.core :as json])

Let's create a function to read (parse) json with the cheshire library. Pass the second argument true to get Clojure keywords back for the map keys.

    (defn parse-json [str]
      (json/parse-string str true))

Call an API
-----------
Put all the above together to make a call to the countries API with the query parameters; get the body of that HTTP response; and parse the JSON results. Define a var to hold the result.

    (def response (parse-json (:body (client/get base-path {:query-params query-params}))))

Look at the result of the API call. Notice the format of the result. See how each country has its own section surrounded by {}. Each country has its own data such as longitude and latitude. There are two parts to each result.
Metadata is data about data. The metadata here are things like the number of results. Define a var to hold the metadata part.

    (def metadata (first response))

Define a var to hold the actual results. 

    (def results (second response))

Put all of the above together into a function called get-api. You will need two parameters to the function to hold the path in the API you are calling (such as "/countries") and any additional query parameters that need to be added to the API URL. You can put all of the above pieces into the let part of the function.  You need: base-path, query-params, response, metadata, and results. Then return a map with keys :metadata and :results, each of which has that corresponding value.


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

Define a var to hold the results of calling get-api for the countries endpoint. You have to pass get-api the path and query-params that you need to call that API.

    (def countries (get-api "/countries" {}))


Filter the results
------------------
Try going through the results to pull out a couple of the values associated with keys in the results. You can use the for function to do this.  You want to pull out the values for the "name" and "longitude" items from the results section. Those will have been turned into Clojure keywords by the json library, so you can refer to them as :name and :longitude.

    (for [item (:results countries)]
          [(:name item) (:longitude item)])

Make that into a function called get-value-map where the two keys to look up in the results are parameters that can be passed to the function. Put the values into a map with "into {}"

    (defn get-value-map
      "Returns relation of two keys from API response"
      [path query-params key1 key2]
        (let [response (get-api path query-params)]
            (into {} (for [item (:results response)]
                           [(key1 item) (key2 item)]))))

Call get-value-map to get the map of urban development indicators including their name and indicator ids.The id will be used to retrieve the values for those indicators

    (get-value-map "/topics/16/indicators" {} :name :id)

Create a function based on the above called get-indicator-map.

    (defn get-indicator-map []
      "Gets map of indicators.
      /topics/16/indicators:   All urban development"
      (get-value-map "/topics/16/indicators" {} :name :id))

Define a var to hold the results of calling get-indicator-map.

    (def indicator-map (get-indicator-map))

Onto getting the values for a specific indicators API endpoint for getting a certain indicator for all countries. Here is the URL that does that:
http://api.worldbank.org/countries/all/indicators/EP.PMP.SGAS.CD?format=json&per_page=10000&date=2010
Out of the results, we want "country" and "value"

    (get-value-map (str "/countries/all/indicators/EP.PMP.SGAS.CD") {:date 2012} :country :value)

Turn it into a function called get-indicator-all. The indicator name needs to be a parameter to the function. So should the data and two keys. We make these parameters so we would be able to get other indicators and pull out different pieces of the results.

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
Call get-indicator-all to get the pump price indicator for 2012. EP.PMP.SGAS.CD is the indicator name. We want the country and value. 

    (def inds (get-indicator-all "EP.PMP.SGAS.CD" "2012" :country :value))

Take a look at the results. There are a pair of values that describe a country with keys :id and :value. Then there is a value with the actual pump price.

Go through the results, making sure that they are actually countries by matching up against the country-ids, then get the value from the country and convert the value from a string. Use for, :when, and and. Another function, read-string, allows you to pull a value out of a string, which you will want to do with the value. [This is a crazy one... not sure how to make this simpler]

    (for [[k v] inds
          :when (and v (country-ids (:id k)))]
        [(:value k) (read-string v)])

Put those results into a map with into{}

    (into {} (for [[k v] inds
                  :when (and v (country-ids (:id k)))]
                [(:value k) (read-string v)]))

Sort those values from biggest to smallest with the sort-by function.

    (sort-by val >
      (into {} (for [[k v] inds
                    :when (and v (country-ids (:id k)))]
                  [(:value k) (read-string v)])))
       
Take just the top 10 of the sorted lists.              

    (take 10 
      (sort-by val >
          (into {} (for [[k v] inds
                        :when (and v (country-ids (:id k)))]
                      [(:value k) (read-string v)]))))

Make that into a function called sorted-indicator-map.

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

