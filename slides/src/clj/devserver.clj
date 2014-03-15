(ns devserver
  (:require [clojure.string :as string]
            [compojure.route :as route]
            [compojure.core :refer [defroutes]]
            [compojure.handler :refer [site]]
            [org.httpkit.server :as httpd]))


(defn- log [msg & vals]
  (let [line (apply format msg vals)]
    (locking System/out (println line))))

(defn logging [handler]
  (fn [{:keys [request-method uri] :as req}]
    (let [start (System/currentTimeMillis)
          resp (handler req)
          finish (System/currentTimeMillis)
          total (- finish start)
          method (string/upper-case (name request-method))
          now (java.util.Date.)]
      (log "%s - %s - %s - (%dms) - %s" now method uri total resp)
      resp)))

(defroutes server-routes
  (route/files "/" {:root "resources/public/"})
  (route/not-found "404"))

(defn run []
  (httpd/run-server
    (site (-> server-routes logging)) {:port 9999}))
