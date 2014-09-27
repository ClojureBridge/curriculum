# Module 2: Data Structures

# Data structures

  * Vectors
  * Maps
  * Lists
  * Sets

We will only look at vectors for now.

# Vectors
<img src="img/vector.png" alt="vector">

# Vectors

~~~
    [1 2 3 4 5]

    [56.9 60.2 61.8 63.1 64.3 66.4 66.5 68.1 70.2 69.2 63.1 57.1]

    []
~~~


# Vector functions

~~~
    (vector? [5 10 15]) ;; => true

    (vector 5 10 15)    ;; => [5 10 15]

    (conj [5 10] 15)    ;; => [5 10 15]
~~~


# Vector functions

~~~
(count [5 10 15]) ;; => 3

(nth [5 10 15] 1) ;; => 10

(first [5 10 15]) ;; => 5
~~~


# Exercise: Make a vector

Make a vector of the high temperatures for the next 7 days in the town
where you live. Then use the <code>nth</code> function to get the high
temperature for next Tuesday.
