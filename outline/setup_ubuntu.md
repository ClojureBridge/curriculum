Ubuntu Setup
==========

* Start a terminal
* Install Git
* Configure Git
* Make sure Java is installed
* Install Leiningen
* Install Nightcode
* Test your setup

## Starting a terminal

For these instructions, and for much of the class, you will need to have a terminal, or command line, open. This is a text-based interface to talk to your computer, and you can open it by clicking "Dash Home" and typing `Terminal`. You can also open a terminal at any time by pressing `CTRL-ALT-T`. If you have never used the terminal before, you may want to spend some time [reading up on command-line basics](http://blog.teamtreehouse.com/command-line-basics).

Go ahead and open your terminal now. It should look something like this:

![blank terminal](img/ubuntu/blank_terminal.png)

The prompt (where you will type your commands) may look different: it usually shows the computer name and user name, as well as the folder or directory you are currently in.

For the rest of this setup, I will tell you to run commands in your terminal. When I say that, I mean "type the command into the terminal and press the Return key."

## Installing Git

See if you already have Git installed with `git version`.
If the `git` command is not found, install it with this command in the terminal:

```bash
sudo apt-get install git
```

## Configure Git

If you've used Git before then you should already have user.name and user.email configured.
Otherwise, type this in the terminal:

```bash
git config --global user.name "Your Actual Name"
git config --global user.email "Your Actual Email"
```

TIP: Use the same email address for git, github, and ssh.

Verify by typing this in the terminal:

`git config --get user.name`
Expected result:
`your name`

`git config --get user.email`
Expected result:
`your email address`


## Making sure Java is installed

Run `java -version` in your terminal. If you do not have Java installed, Ubuntu will prompt you to install it. It should look something like this:

![no java](img/ubuntu/no_java.png)

Follow all of the directions Ubuntu gives you, selecting the package "openjdk-7-jre" then return to this part of the tutorial and run `java -version` again.

If Java is installed, you will see something like this in your terminal:

![Java version](img/ubuntu/java_version.png)

The details of Java's version may differ from what you see above; that is perfectly fine.

## Install Leiningen

Leiningen is a tool used on the command line to manage Clojure projects.

Go to the [Leiningen website](http://leiningen.org/). You will see a link to the `lein` script under the "Install" heading. Right-click that link and choose "Save Link As...". Save it in your Downloads directory.

![Leiningen site](img/leiningen_site.png)
![Leiningen site](img/lein_install.png)

After that, run the following commands in your terminal. You will be prompted to enter your password.

```
sudo mkdir -p /usr/local/bin/
sudo mv ~/Downloads/lein* /usr/local/bin/lein
sudo chmod a+x /usr/local/bin/lein
export PATH=$PATH:/usr/local/bin
```

After you run the above commands, run the `lein version` command. It should take a while to run, as it will download some resources it needs the first time. If it completes successfully, you are golden! If not, ask an instructor for help.

## Install Nightcode

Go to the [Nightcode site](https://sekao.net/nightcode/). On the page there, you should see a link to download Nightcode, "Free Download(Version x.y.z)." Click the link and you will download a file, `nightcode-x.y.z-standalone.jar`. As of June 2016, the version is 1.3.1.

![Nightcode downloads](img/nightcode-download.png)

Once the download finished, we want to start the editor.
To startup, go into your Downloads folder (or wherever you save files from your browser) and run the nightcode-x.y.z-standalone.jar file using `java` command.


Open a terminal and run the following commands:

```bash
cd ~/Downloads/
java -jar nightcode-1.3.1-standalone.jar
```

![Nightcode](img/nightcode-startup.png)


## Testing your setup

You have set up Java, Leiningen, Nightcode, and Git on your computer--all the tools you will need for this course. Before starting, we need to test them out.

#### Cloning out github repository

Go to your terminal and run the following command:

```bash
git clone https://github.com/ClojureBridge/welcometoclojurebridge
```

This will clone `welcometoclojurebridge` repository which includes sample Clojure apps.
Your terminal should look similar to this picture:

![Testing git clone](img/ubuntu/testing-git-clone.png)

#### Testing `lein repl`

Then run the command:

```bash
cd welcometoclojurebridge
```

This will take you to the directory with the source code. After that completes, run:

```bash
lein repl
```

This could take a long time, and will download many other pieces of code it relies on. You should see lines that start with `Retrieving ...` on your screen. When it finishes, your terminal should look like the following:

![Testing lein repl](img/ubuntu/testing-lein-repl.png)

This is starting a REPL, which we will learn about soon. It's a
special terminal for Clojure. At the REPL prompt, type `(+ 1 1)` and
press Return. Did you get the answer `2` back? You will learn more
about that in the course. For now, press the Control button and D
button on your keyboard together (abbreviated as Ctrl+D). This should
take you out of the Clojure REPL and back to your normal terminal
prompt. Then, the terminal will show you the following message: `user=> Bye for now!`


#### Testing Nightcode

If Nightcode isn't started yet or closed, open it by typing the command on terminal:

```bash
java -jar nightcode-1.3.1-standalone.jar
```

At the bottom left of the screen, type `(+ 1 1)` into the window. It should look like the following image:

<img src="img/nightcode-repl.png" alt="Testing Nightcode" width="500">

If you see the result, 2, that worked, great!


### Testing apps

Now we will open and run the sample Clojure apps in Nightcode.
On the top left corner, click "Import" then find the directory,
`welcometoclojurebridge`, which was created when you ran
`git clone` command. Click "Open."
In the project directory tree on the left, click on `src` - `welcometoclojurebridge` - `core.clj`. The `core.clj` file will be opened on the right side.
This is a Clojure program.

<img src="img/nightcode-click-import.png" alt="Testing apps - click import" width="500">
<img src="img/nightcode-open-project.png" alt="Testing apps - open welcometoclojurebridge" width="500">
![Testing apps - core.clj](img/nightcode-welcometoclojurebridge-core.png)


The next step is to run the code shown in the window.
Click "Run with REPL" on the bottom of the right side.
It may take a while.
Eventually, repl will start and show a prompt on the bottom of the window.
Once, you see the prompt, click "Reload" button.


![Testing apps - start repl](img/nightcode-welcometoclojurebridge-run-with-repl.png)
![Testing apps - repl started](img/nightcode-repl-started.png)
![Testing apps - repl reload](img/nightcode-repl-reload.png)


You should see a fun welcome message.

![Testing apps - welcome](img/testing-welcomeclojurebridge.png)


Let's try one more sample.
In the directory tree on the left, click on
`welcometoclojurebridge` - `src` - `clojurebridge-turtle` -
`walk.clj`. The `walk.clj` file will open on the right side.
Like we did before, click "Reload" button.

![Testing apps - walk code](img/nightcode-turtle-walk.png)
![Testing apps - walk reload](img/nightcode-turtle-walk-reload.png)


An initial image of the turtles app should pop up.
A small triangle on the center is the *turtle*.


Type `(forward 40)` on the repl at the bottom of the window.
You should see the turtle moved upword:

![Testing apps - forward](img/nightcode-turtle-forward-40.png)



#### Success!

Congratulations! You have opened and run your first Clojure apps, and
your install and setup are all completed!

If you want to know what the turtle (*a small triangle*) can do,
see [Turtle App API](https://github.com/ClojureBridge/welcometoclojurebridge/blob/master/outline/TURTLE.md) and
[How to Walk Turtles](https://github.com/ClojureBridge/welcometoclojurebridge/blob/master/outline/TURTLE-SAMPLES.md) for more information.