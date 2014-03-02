Making Your Own Web Application
===============================

Open Light Table.

Load the global-growth project. File -> Open folder -> find global-growth project.

Evaluate the namespace. Go to the line "(ns global-growth.core" and do cmd-shift-enter.

Open the instarepl and choose the "global-growth-0.1.0-SNAPSHOT" client.

Input the following statements, one-by-one, into the instarepl

    ; load library clj-http.client. Give it an alias
    (use '[clj-http.client :as client])

    ; define a constant for the API URL
    (def base-uri "http://api.worldbank.org")

    ; define a specific API URL - list of countries
    (def base-path (str base-uri "/countries"))
  
    ; use clj-http.client to make an api call
    (client/get base-path)

    ; define query parametesr for the api call - get JSON formatted results; get 10000 per page
    (def query-params {:format "json" :per_page 10000})

    ; load cheshire.core library for parsing json
    (use '[cheshire.core :as json])

    ; create a function to parse json using cheshire library
    (defn parse-json [str]
      (json/parse-string str true))

    ; put the above together to make call to the countries API
    (def response (parse-json (:body (client/get base-path {:query-params query-params}))))

    ; first part of the response is metadata
    (def metadata (first response))

    ; second part of the response are the actual results
    (def results (second response))

    ; put it all together into a function
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

    (def countries (get-api "/countries" query-params))

    (for [item (:results countries)]
                 [(:name item) (:longitude item)])



    ; put it together into a functon
    (defn get-value-map
      "Returns relation of two keys from API response"
      [path query-params key1 key2]
        (let [response (get-api path query-params)]
            (into {} (for [item (:results response)]
                           [(key1 item) (key2 item)]))))

    ; Call get-value-map to get the map of urban development indicators 
    ; including their name and indicators.
    ; The id will be used to retrieve the values for those indicators
    (get-value-map "/topics/16/indicators" {} :name :id)

    ; Create a function based on the above
    (defn get-indicator-map []
      "Gets map of indicators.
      /topics/16/indicators:   All urban development"
      (get-value-map "/topics/16/indicators" {} :name :id))

    ; Define the resutls of calling get-indicator-map
    (def indicator-map (get-indicator-map))

    ; On to getting the values for a specific indicators
    ; API endpoint for getting a certain indicator for all countries:
    ; http://api.worldbank.org/countries/all/indicators/EP.PMP.SGAS.CD
    ; ?format=json&per_page=10000&date=2010
    (get-value-map (str "/countries/all/indicators/EP.PMP.SGAS.CD") {:date 2012} :country :value)


    ; Turn it into a function
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


    ; I would like to cover sorted-indicator-map as it's the meat of the data processing
    ; but not quite sure what to do here
    (defn sorted-indicator-map
      "Sort the map of indicator numeric values"
      [inds]
        (take list-size
                (sort-by val >
                  (into {} (for [[k v] inds
                            :when (and v (country-ids (:id k)))]
                           [(:value k) (read-string v)])))))




