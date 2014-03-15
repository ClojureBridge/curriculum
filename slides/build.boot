#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.2.1"

(set-env!
  :project      'clojurebridge.slides
  :version      "0.1.0-SNAPSHOT"
  :dependencies '[[tailrecursion/boot.task   "2.1.1"]                  
                  [tailrecursion/hoplon      "5.5.1"]
                  [tailrecursion/boot.ring   "0.1.0-SNAPSHOT"]
                  [org.clojure/clojurescript "0.0-2156"]]
  :out-path     "resources/public"
  :src-paths    #{"src"})

;; Static resources (css, images, etc.):
(add-sync! (get-env :out-path) #{"resources/assets"})

(require '[tailrecursion.hoplon.boot :refer :all])
(require '[tailrecursion.boot.task.ring :as web])

(deftask serve
  []
  (comp (web/files "resources/public/") (web/jetty)))

(deftask development
  "Build for development."
  []
  (comp (watch) (hoplon {:prerender false :pretty-print true}) (serve)))

(deftask production
  "Build for production."
  []
  (hoplon {:optimizations :advanced}))
