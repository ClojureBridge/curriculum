## Data Structures - Vector

### Creating a vector

```clj
(vector 5 10 15)
[1 2 3 4 5]
[56.9 60.2 61.8 63.1 54.3 66.4 66.5 68.1 70.2 69.2 63.1 57.1]
[]
```

#### Functions for vectors

```clj
(vector? [5 10 15])
;=> true

(vector 5 10 15)
;=> [5 10 15]

(conj [5 10] 15)
;=> [5 10 15]

(count [5 10 15])
;=> 3

(nth [5 10 15] 1)
;=> 10

(first [5 10 15])
;=> 5
```

## Data Structures2 - Keyword, Maps

#### Creating a map

```clj
{:first "Sally" :last "Brown"}
{:a 1 :b "two"}
{}
```


#### Functions for Maps

```clj
; determine if value is a map
(map? {:first "Sally" :last "Brown"})
;=> true

; using keyword :first get the value
(get {:first "Sally" :last "Brown"} :first)
;=> "Sally"

; using keyword :first get the value and return :MISS if key doesn't exist in map
(get {:first "Sally"} :last :MISS)
;=> :MISS

; add a key/value to the map
(assoc {:first "Sally"} :last "Brown")
;=> {:first "Sally", :last "Brown"}

; remove (disassociate) the key/value of :last
(dissoc {:first "Sally" :last "Brown"} :last)
;=> {:first "Sally"}

; merge two maps
(merge {:first "Sally"} {:last "Brown"})
;=> {:first "Sally", :last "Brown"}

; get number of key/value pairs in this map
(count {:first "Sally" :last "Brown"})
;=> 2

; get all the keys in this map
(keys {:first "Sally" :last "Brown"})
;=> (:first :last)

; get all the values in this map
(vals {:first "Sally" :last "Brown"})
;=> ("Sally" "Brown")
```

## Defining Functions

```clj
(defn function-name
  "description of function, optional"
  [param1 param2]
  (function-body))
```

* Functions that return true or false--called predicates--usually end in ?
* map and reduce - Functions that take other functions

## Map and Reduce

```clj
; apply a function to every element in a collection
(map inc [1 2 3 4])
;=> (2 3 4 5)
; Similar to [(inc 1) (inc 2) (inc 3) (inc 4)]
```
**`map`** takes a function and a collection, then applies the function to each element in the collection in order. It returns the new collection.

```clj
; reduce a collection to one value using a function
(reduce + [1 3 5 7])
;=> 16
; Similar to (+ 1 3) ;=> 4
;            (+ 4 5) ;=> 9
;            (+ 9 7) ;=> 16
```

**`reduce`** takes a function and a collection. First, it applies the function to the first element and the second element, then it applies the function to the *result* of that, plus the third element. It continues rolling up the results until it gets to the last thing in the collection.


## Flow Control

```clj
(if conditional-expression
  expression-to-evaluate-when-true
  expression-to-evaluate-when-false)
```

## Boolean logic with and, or and not

| x     | y     | (and x y) | (or x y) | (not x) | (not y) |
| ----- | ----- | --------- | -------- | ------- | ------- |
| false | false | false | false | true  | true  |
| true  | false | false | true  | false | true  |
| true  | true  | true  | true  | false | false |
| false | true  | false | true  | true  | false |

## let 
Assigning names to values inside of functions

```clj
(let [first-name (:first-name user)            ; assign to `first-name`
      message (str "Hello, " first-name "!")]  ; assign to `message`
  (println message))                           ; do something with `message`
```


