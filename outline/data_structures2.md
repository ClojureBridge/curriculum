More Data Structures
===============

* Keywords and Maps
* Collections of Collections

## Keywords

```clj
:first  
:last
```

Keywords are the strangest of the basic value types, because they don't have a real world analog like numbers, strings, and booleans do. You can think of them as a special type of string, one that's used for labels. They are often used as keys for maps.


## Maps

Maps hold a set of keys and values associated with them. You can think of it like a dictionary: you look up things using a word (a keyword) and see the definition (its value). If you've programmed in another language, you might have seen something like maps--maybe called dictionaries, hashes, or associative arrays.

![Map](../img/map.png)

We write maps by enclosing alternating keys and values in curly braces, like so:

```clj
{:first "Sally", :last "Brown"}
{:a 1 :b "two"}
{}
```

You might have noticed by now, in Clojure, commas are optional. They are there to only provide readability. If you see commas in Clojure code, they often occur between key-value pairs in a map definition.

Maps are useful because they can hold data in a way we normally think about it. Take our made up example, Sally Brown. A map can hold her first name and last name, her address, her favorite food, or anything else. It's a simple way to collect that data and make it easy to look up. The last example is an empty map. It is a map that is ready to hold some things, but doesn't have anything in it yet.

Let's look at some functions we can use with maps. We don't have nearly as many functions here in common as vectors and lists did.


```clj
(map? {:first "Sally" :last "Brown"})
;=> true

(get {:first "Sally" :last "Brown"} :first)
;=> "Sally"

(get {:first "Sally"} :last :MISS)
;=> :MISS
```

`map?` determines if the thing passed to it is a map and returns true or false

`get` works a lot like `nth` did with vectors, but takes a key instead of a number. It uses the supplied key to look up a value in the map. What do you think is happening with the second example of `get`? We can supply a value for `get` to return if it can't find the key we asked for. In this case, we supplied the key `:MISS`.

```clj
(assoc {:first "Sally"} :last "Brown")
;=> {:first "Sally", :last "Brown"}

(dissoc {:first "Sally" :last "Brown"} :last)
;=> {:first "Sally"}

(merge {:first "Sally"} {:last "Brown"})
;=> {:first "Sally", :last "Brown"}
```

`assoc` and `dissoc` are paired functions: they associate and disassociate items from a map. See how we add the last name "Brown" to the map with `assoc`, and then we remove it with `dissoc`. 

`merge` merges two maps together to make a new map.


```clj
(count {:first "Sally" :last "Brown"})
;=> 2
```

`count`, every collection has this function. Why do you think the answer is two? `count` is returning the number of associations.

```clj
(keys {:first "Sally" :last "Brown"})
;=> (:first :last)

(vals {:first "Sally" :last "Brown"})
;=> ("Sally" "Brown")
```

Then we have `keys` and `vals`, which are pretty simple: they return the keys and values in the map. The order is not guaranteed, so we could have gotten `(:first :last)` or `(:last :first)`.


Let's look at one more thing about maps before we move on. You can always use `get` to get values out of maps, but you'll more often see something like the following:

```clj
(:first {:first "Sally" :last "Brown"})
=> "Sally"
(:last {:first "Sally"})
=> nil
(:last {:first "Sally"} :MISS)
=> :MISS
```

You can use a keyword like you would use a function in order to look up values in a map. Feel free to use `get` in your own code: it can be more clear and less confusing as you're learning Clojure.


### EXERCISE 1: Modeling Yourself

Make a map representing yourself. Make sure it contains your first name and last name. Then, add your hometown to the map using `assoc` or `merge`.

## Collections of Collections

Simple values such as numbers, keywords, and strings are not the only types of things you can put into collections. You can also put other collections into collections, so you can have a vector of maps, or a list of vectors, or whatever combination fits your data.


### EXERCISE 2: Get the names of people

Create a function called `get-names` that takes a vector of maps of people and returns a vector of their names.

Here is an example of how it should work:

```clj
(get-names [{:first "Margaret" :last "Atwood"}
            {:first "Doris" :last "Lessing"}
            {:first "Ursula" :last "Le Guin"}
            {:first "Alice" :last "Munro"}])

;=> ["Margaret Atwood" "Doris Lessing" "Ursula Le Guin" "Alice Munro"]
```

Hint: First, create a function that returns the name when given a single person's map.

### EXERCISE 3: Modeling your classmates

First, take the map you made about yourself.

Then, find two or three other classmates around you. Ask them their first and last name and their hometown. Make a vector of maps with their information.

Lastly, add your information to their information using `conj`.

Use the `get-names` function from Exercise 2 to output a list of the names.
