Ubuntu Setup
==========

* Start a terminal
* Make sure Java is installed
* Get Leiningen installed
* Get Light Table installed
* Get Git installed
* Test installation

## Starting a terminal

For these instructions, and for much of the class, you will need to have a terminal, or command line, open. This is a text-based interface to talk to your computer, and you can open it by clicking "Dash Home" and typing `Terminal`. You can also open a terminal at any time by pressing `CTRL-ALT-T`. If you have never used the terminal before, you may want to spend some time [reading up on command-line basics](http://blog.teamtreehouse.com/command-line-basics).

Go ahead and open your terminal now. It should look something like this:

![blank terminal](img/ubuntu/blank_terminal.png)

The prompt (where you will type your commands) may look different: it usually shows the computer name and user name, as well as the folder or directory you are currently in.

For the rest of this setup, I will tell you to run commands in your terminal. When I say that, I mean "type the command into the terminal and press the Return key."

## Making sure Java is installed

Run `java -version` in your terminal. If you do not have Java installed, Ubuntu will prompt you to install it. It should look something like this:

![no java](img/ubuntu/no_java.png)

Follow all of the directions Ubuntu gives you, selecting the package "openjdk-7-jre" then return to this part of the tutorial and run `java -version` again.

If Java is installed, you will see something like this in your terminal:

![Java version](img/ubuntu/java_version.png)

The details of Java's version may differ from what you see above; that is perfectly fine.

## Installing Leiningen

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

## Installing Light Table

You will need to know whether you are running the 32-bit or 64-bit version of Ubuntu. To find out, click Dash Home and type Details. You should see a window like this:

![Ubuntu Version](img/ubuntu/ubuntu-version.png)

Alternatively, open your terminal and type `uname -m` if the output says "x86_64" you have a 64-bit OS, if it says "i686" you have a 32-bit OS.

Go to the [Light Table site](http://www.lighttable.com/). On the page there, you should see a set of buttons that have download links for Light Table.
Depending on your architecture, click the "Linux64" or "Linux32" button and select the "Save file".

![Light Table downloads](img/light-table-download.png)
![Light Table downloads Ubuntu](img/ubuntu/light-table-download.png)

Open up your terminal and cd to the directory where your downloads go `cd ~/Downloads`.
Check to see that your file is there. `ls`
Extract the compressed file `tar -xzf LightTableLinux64.tar.gz`
Check to see that there is now a directory called LightTable `ls`
Move the LightTable directory to "/usr/local/bin" `sudo mv LightTable /usr/local/bin`
Set your path so you can launch LightTable from the command line `export PATH=$PATH:/usr/local/bin/LightTable`
Launch LightTable `LightTable`

If you want, you can create a launcher for LightTable. `sudo gnome-desktop-item-edit /usr/share/applications/ --create-new`
You should see a window like this:

![Create Icon](img/ubuntu/create_icon.png)

Name the launcher LightTable. Type the path to the command `/usr/local/bin/LightTable/LightTable`. Click the icon. The LightTable icon can be found at `/usr/local/bin/LightTable/core/img/lticon.png`.

### Opening files in LightTable from the command line *(optional)*

If you'd prefer, you can open files/folders in LightTable from the command line by typing `light-table /path/to/the/file/you/want/to/open.clj`.

## Installing Git

See if you already have Git installed with `git version`.
If the `git` command is not found, install it with this command in the terminal:

`sudo apt-get install git`

If you've used Git before then you should already have user.name and user.email configured.
Otherwise, type this in the terminal:

```
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

## Testing your setup

You have set up Java, Leiningen, Light Table, and Git on your computer--all the tools you will need for this course. Before starting, we need to test them out.

Go to your terminal and run the following command:

```
git clone https://github.com/heroku/clojure-sample.git
```

This will check out a sample Clojure application from GitHub, a central repository for lots of source code. Your terminal should look similar to this picture:

![Testing git clone](img/ubuntu/testing-step1.png)

Then run the command:

```
cd clojure-sample
```

This will put you in the directory with the source code for this sample bit of Clojure code. After that completes, run:

```
lein repl
```

This could take a long time, and will download many other pieces of code it relies on. You should see lines that start with `Retrieving ...` on your screen. When it finishes, your terminal should look like the following:

![Testing lein repl](img/ubuntu/testing-step2.png)

This is starting a REPL, which we will learn about soon. It's a special terminal for Clojure. At the REPL prompt, type `(+ 1 1)` and press Return. Did you get the answer `2` back? You will learn more about that in the course. For now, press the Control button and D button on your keyboard together (abbreviated as Ctrl+D). This should take you out of the Clojure REPL and back to your normal terminal prompt.

Now, start Light Table. Once it is started, press the Control button and Space Bar together (abbreviated Ctrl+Space). This is how you start giving Light Table a command. Start typing the word "instarepl" and you should see a menu of options, like below. Choose "Instarepl: open a clojure instarepl."

![Testing Light Table - starting instarepl](img/ubuntu/testing-step3.png)

At the bottom of the screen, you will see a cube moving and some text about connecting and installing dependencies. Once that stops moving, type `(+ 1 1)` into the window. It should look like the following image:

![Testing Light Table - running in the instarepl](img/ubuntu/testing-step4.png)

If that worked, great! Close Light Table.

Finally, let's make sure the application you downloaded will run properly.  To test this, you will use Leiningen to run the application on your computer.  As this is a (very simple) web application, you should be able to use a web browser to see it runnning in all its humble glory.  Let's start with

```
lein run
```

This tells Leiningen to run your application.  Different applications run in different ways - this one starts up it's own little webserver on your computer.  If this is the first time you've run a web application, the output in the Terminal window (see below) may not make much sense, so let's test the application in a browser.

![Testing lein run](img/ubuntu/testing-lein-run.png)

You now need to open a web browser (Chrome, Firefox, Safari, etc) and point it towards the application running on your computer.  Enter the following URL to access your application:

```
http://localhost:8080/
```

This is what your browser should look like if everything has been successful.

![Testing in browser](img/ubuntu/testing-browser.png)

Congratulations! You have actually made a very simple Clojure app, and your computer is all set up to make more.
