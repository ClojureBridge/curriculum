More Simple Values
========================================

* Simple values
    - Strings
    - Booleans and nil
    - Keywords

## Simple values

We have already seen simple values that are numbers.  Now we will take a closer look at simple values that are strings, booleans, and keywords.

### Strings and characters

What is a string? A string is just a piece of text. To make a string, you enclose it in quotation marks.

```clj
"Hello world"
"This is a longer string that I wrote for purposes of an example."
"Aubrey said, \"I think we should go to the Orange Julius.\""
```

Look at the last example. A backslash is how we put a quotation mark inside a string. Do not try using single quotes to make a string.

Strings are made up of characters. You can make a single character by using a backslash, but we won't need to make individual characters for this course.

### Booleans and nil

A boolean is a true or false value, and you type them just like that, `true` and `false`. Often in programming, we need to ask a true or false question, like "Is this class in the current semester?" or "Is this person's birthday today?" When we ask those questions, we get a boolean back.

There is another value like a boolean in some ways, but different. This value is `nil`, and it means no value at all. You will not often use this value yourself, but you may encounter it in other people's code.

### Keywords

Keywords are the strangest of the basic value types, because they don't have a real world analog like numbers, strings, and booleans do. You can think of them as a special type of string, one that's used for labels. They are easiest to understand when we cover maps later, as they are most commonly used as keys in maps.

## EXERCISE: Store the name of your hometown

Write the name of your hometown as a string, and then assign that string to the symbol `my-hometown`.