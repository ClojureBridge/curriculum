ClojureBridge Teacher's Guide 
=============================

There are many ways to teach the ClojureBridge material, and none of them are "right." The following is a guide to working though the curriculum with students based on the experience of some workshop organizers and teachers.

There are three pieces to the curriculum: the curriculum [narrative](README.md), the [slides](http://clojurebridge.github.io/curriculum), and the capstone app ([part 1](https://github.com/ClojureBridge/drawing/blob/master/curriculum/first-program.md) and [part 2](https://github.com/ClojureBridge/drawing/blob/master/curriculum/create-something.md)). The slides are intended to be in sync with the curriculum narrative; the slides are what you show on the projector in front of the room, while the narrative is a more detailed explanation of what is introduced in the slides. Students follow along with the narrative on their own computers or use it to work on their own.

Curriculum
----------
Fork the curriculum [repository](https://github.com/ClojureBridge/curriculum) using your chapters's GitHub account (or your own personal GitHub account). You can use your own fork to make changes or tweaks to the curriculum for your own workshop. If you make changes that would be valuable for everyone, please consider making a pull request against the main curriculum.

Schedule
--------
Friday evening: Installfest - [Getting Set Up](outline/setup.md) in the outline.

Saturday: The rest of the [curriculum](README.md#outline). 

Preparation
-----------
Print the ([markdown](outline/cheatsheet.md) or [pdf](https://github.com/ClojureBridge/curriculum/blob/master/ClojureBridgeCheatsheet-v1.pdf)) and hand it out to students at the beginning of the day on Saturday.

Room Setup
----------
It works best to have attendees sit around tables, facing one another. This encourages attendees to help one another and makes it easier for TAs to walk around the room, answering questions.

Presentation of the Material
----------------------------
Most workshops have both teachers and TAs. Teachers present the material at the front of the room, and TAs and teachers help students as they work through the exercises on their own and with their tablemates. This is different from how RailsBridge usually works, where students generally work through the material in groups with the help of TAs.

This is not the only way to present the material. It is just the way we have seen it done at most of the workshops so far. Please feel free to experiment.

Light Table
-----------
Make sure to spend some time during the Installfest or at the beginning of Saturday showing a few key things to do in Light Table:

- Open the command pane with `Ctrl-Space`
- Start an Instarepl in the command pane by typing `Insta`
- Set the font size, enable auto-closing parentheses, or add line numbers in `Settings: User behaviors`
- Evaluate a file with `Cmd-Shift-Enter` or, on Windows, `Ctrl-Shift-Enter`

Students who want to do more can take a look at the [Light Table tutorial](http://docs.lighttable.com/tutorials/full/)

Beginner and Advanced Tracks
----------------------------
You can survey the attendees ahead of time or during the Installfest to find out their levels of programming experience. If you have multiple teachers available, you could present the material in separate rooms at a different pace, or you could present separate material. Alternatively, you could keep all attendees in the same room but seat them in different tables according to ability.

Exercises
---------
Provide plenty of time for exercises. That is where the real fun happens. TAs should sit with attendees or circulate around the tables as the attendees work on exercises.

Capstone App
------------
Budget your time so that you have enough time for the final Quil project at the end of the day.

Outline
-------
TODO: add tips under each heading.

* [Getting Set Up](outline/setup.md)
* [Introduction to Programming with Clojure](outline/intro.md)
  - 45 min
* [Data Structures](outline/data_structures.md)
  - 60 min
* [Functions](outline/functions.md)
  - 60 min
* [More Simple Values](outline/simple_values2.md)
  - 20 min
* [More Functions](outline/functions2.md)
  - 30 min
* [More Data Structures](outline/data_structures2.md)
  - 30 min
* [Flow Control](outline/flow_control.md)
  - 20 min

* [Capstone App Pt. 1](https://github.com/ClojureBridge/drawing/blob/master/curriculum/first-program.md)  -- [Repository](https://github.com/ClojureBridge/drawing/blob/master/README.md)
  - 60 min
* [Capstone App Pt. 2](https://github.com/ClojureBridge/drawing/blob/master/curriculum/create-something.md)


Supporting Materials
--------------------
* [Student cheatsheet](outline/cheatsheet.md) | [PDF](ClojureBridgeCheatsheet-v1.pdf)
* [Slides](http://clojurebridge.github.io/curriculum)
* [Old global-growth web app](https://github.com/ClojureBridge/global-growth/blob/master/README.md)

Other Curricula
---------------
The main [curriculum](https://github.com/ClojureBridge/curriculum) is well-tested, but there are a number of other curricula available. Feel free to try them out.

* [Minneapolis chatter](https://github.com/clojurebridge-minneapolis/track1-chatter)
* [Minneapolis threading](https://github.com/clojurebridge-minneapolis/track2-threading)
* [Minneapolis surviving](https://github.com/clojurebridge-minneapolis/track2-surviving)
* More to come! Add yours here.
