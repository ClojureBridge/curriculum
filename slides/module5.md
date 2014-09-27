# Module 5: Function library

# Comparison functions

~~~
    (= 1 2)    ;; => false
    (> 4 3)    ;; => true
    (>= 4 5)   ;; => false
    (< -1 1)   ;; => true
    (<= -1 -2) ;; => false
    (< 1 5 9)  ;; => true
    (< 1 5 3)  ;; => false
~~~

# Using comparison functions

~~~
    (defn meaning-of-life?
      [x]
      (= x 42))
~~~

# String functions

~~~
(str "Chocolate" ", " "strawberry" ", and " "vanilla")
     ;; => "Chocolate, strawberry, and vanilla"
~~~

# Using `str` with `reduce`

~~~
    (defn join-with-space
      [string1 string2]
      (str string1 " " string2))

    (reduce join-with-space
            ["i" "like" "peanut" "butter" "and" "jelly"])

            ;; => "i like peanut butter and jelly"
~~~

# Using `str` with `reduce`

~~~
    (reduce join-with-space
            ["i" "like" "peanut" "butter" "and" "jelly"])

            ;; => "i like peanut butter and jelly"

    (join-with-space "i" "like")
    (join-with-space "i like" "peanut")
    (join-with-space "i like peanut" "butter")
    (join-with-space "i like peanut butter" "and")
    (join-with-space "i like peanut butter and" "jelly")
~~~

# Anonymous functions

~~~
    (map (fn [x] (* 3 x)) [1 2 3]) ;; => [3 6 9]

    (reduce (fn [x y] (+ x y)) [1 2 3]) ;; => 6

    (reduce (fn [s1 s2] (str s1 " " s2))
            ["i" "like" "peanut" "butter" "and" "jelly"])
            ;; => "i like peanut butter and jelly"
~~~
