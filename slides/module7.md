# Module 7 - Flow control

------------------

# Example: validating data with `if`

If the user's input is valid, then save their data; otherwise, show an
error message.

~~~
      (if (valid? data)
          (save! data)
          (error "Your data was invalid"))

      (if conditional-expression
          expression-to-evaluate-when-true
          expression-to-evaluate-when-false)
~~~

------------------

# `if` examples

~~~
  (if (> 3 1)
      "3 is greater than 1"
      "3 is not greater than 1")
   ;; => "3 is greater than 1"

  (if (> 1 3)
      "1 is greater than 3"
      "1 is not greater than 3")
  ;; => "1 is not greater than 3"
~~~

------------------

# What is truth ?

Everything except `false` or `nil`

------------------

# Truth examples

~~~
  (if "anything other than nil or false is considered true"
      "A string is considered true"
      "A string is not considered true")
  ;; => "A string is considered true"

  (if nil
      "nil is considered true"
      "nil is not considered true")
  ;; => "nil is not considered true"
~~~

~~~
  (if (get {:a 1} :b)
      "expressions evaluating to nil are considered true"
      "expressions evaluating to nil are not considered true")
  ;; => "expressions which evaluate to nil are not considered true"
~~~

------------------


# Exercise: more name formatting

Write a function `format-name` that takes a map representing a user,
with keys `:first`, `:last`, and possibly `:middle`. It should return
their name as a string, like so:

~~~
    (format-name {:first "Margaret" :last "Atwood"})
    ;; => "Margaret Atwood"

    (format-name {:first "Ursula" :last "Le Guin" :middle "K."})
    ;; => "Ursula K. Le Guin"`
~~~

# BONUS: Flexible name formatting

Change `format-name` to take a second argument, `order`. If `order`
equals `:last`, then the format should be "Last, First Middle";
otherwise, it should be "First Middle Last."

# Boolean logic

* `and`, `or`, and `not`
<table>
<tr>
<th colspan="1" rowspan="1">x</th>
<th colspan="1" rowspan="1">y</th>
<th colspan="1" rowspan="1">(and x y)</th>
<th colspan="1" rowspan="1">(or x y)</th>
<th colspan="1" rowspan="1">(not x)</th>
<th colspan="1" rowspan="1">(not y)</th>
</tr>
<tr>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">true</td>
</tr>
<tr>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">true</td>
</tr>
<tr>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">false</td>
</tr>
<tr>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">false</td>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">true</td>
<td colspan="1" rowspan="1">false</td>
</tr>
</table>

# `let`

~~~
  (defn spread
    "Given a collection of numbers, return the difference
     between the largest and smallest number."
    [numbers]
    (let [largest (reduce max numbers)
          smallest (reduce min numbers)]
      (- largest smallest)))

  (spread [10 7 3 -3 8]) ;; => 13
~~~

# Exercise: Rewrite average

Go back to the `average` function you created before and use `let` to
make it easier to read.

# Bonus: Ordinal numbers

Given a number (positive integer), return the string representing the
ordinal number. For many numbers, this is done by adding `th` to the
end.

Part one: return the ordinal number string, but for numbers ending in
1, 2, or 3, add `"st"`, `"2nd"`, and `"rd""` respectively. Example:

~~~
    (ordinal 1)  ;; => "1st"
    (ordinal 2)  ;; => "2nd"
    (ordinal 3)  ;; => "3rd"
    (ordinal 4)  ;; => "4th"
    (ordinal 5)  ;; => "5th"
    (ordinal 21) ;; => "21st"
    (ordinal 22) ;; => "22nd"
~~~

You will need the `rem` function, which takes 2 integers and returns
the remainder from dividing the first by the second. You will also
find that nesting `if` forms (putting one inside another) to be
useful.

------------------

# Bonus: Ordinal numbers

Part two: our exceptions for numbers ending in 1, 2, or 3 are
superceded when the last 2 digits are 11, 12, 13, in which case just
add "th". Example:

~~~
    (ordinal 10) ;; => "10th"
    (ordinal 11) ;; => "11th"
    (ordinal 12) ;; => "12th"
    (ordinal 13) ;; => "13th"
    (ordinal 14) ;; => "14th"
~~~

Part three: rewrite the nested if statements using the `cond`
function.
