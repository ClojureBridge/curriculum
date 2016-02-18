Ubuntu Setup
==========

* Start a terminal
* Install Git
* Configure Git
* Make sure Java is installed
* Install Leiningen
* Install Light Table
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
sudo apt-get install git`
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

## Install Light Table

LightTable is only available for 64-bit version of Ubuntu (or you can [build it from source](https://github.com/LightTable/LightTable) for 32-bit Linux).  To find out if you have 64-bit Ubuntu, click Dash Home and type Details. You should see a window like this:

![Ubuntu Version](img/ubuntu/ubuntu-version.png)

Alternatively, open your terminal and type `uname -m` if the output says "x86_64" you have a 64-bit OS, if it says "i686" you have a 32-bit OS.

Go to the [Light Table site](http://www.lighttable.com/) and click the "Linux64" button and select the "Save file".

![Light Table downloads](img/light-table-download.png)
![Light Table downloads Ubuntu](img/ubuntu/light-table-download.png)

Open up your terminal and cd to the directory where your downloads go `cd ~/Downloads`.
Check to see that your file is there. `ls`
Extract the compressed file `tar -xzf LightTableLinux64.tar.gz`
Check to see that there is now a directory called LightTable `ls`
Move the LightTable directory to "/usr/local/bin" `sudo mv LightTable /usr/local/bin`
Set your path so you can launch LightTable from the command line `export PATH=$PATH:/usr/local/bin/LightTable`
Launch LightTable `LightTable`

If you want, you can create a launcher for Light Table. `sudo gnome-desktop-item-edit /usr/share/applications/ --create-new`
You should see a window like this:

![Create Icon](img/ubuntu/create_icon.png)

Name the launcher LightTable. Type the path to the command `/usr/local/bin/LightTable/LightTable`. Click the icon. The LightTable icon can be found at `/usr/local/bin/LightTable/core/img/lticon.png`.

### Opening files in Light Table from the command line *(optional)*

If you'd prefer, you can open files/folders in LightTable from the command line by typing `light-table /path/to/the/file/you/want/to/open.clj`.


## Testing your setup

You have set up Java, Leiningen, Light Table, and Git on your computer--all the tools you will need for this course. Before starting, we need to test them out.

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

#### Testing Light Table

Now we will open and run the sample Clojure apps in Light Table, so start Light Table

In Light Table, click on the menu "File" then choose "Open Folder." Find the
directory, `welcometoclojurebridge`, which was created when you ran
`git clone` command. Click "Upload." In the workspace menu on the
left, click on `welcometoclojurebridge` - `src` -
`welcometoclojurebridge` - `core.clj`. Double-click the `core.clj` file
to open it. This is a Clojure program.

![Testing apps - welcome code](img/testing-welcome-app-code.png)


Click on the file contents and
press the following key combination:

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>

You should see a fun welcome message.

![Testing apps - welcome](img/testing-welcomeclojurebridge.png)


Next, in the workspace menu on the left, click on
`welcometoclojurebridge` - `src` - `clojurebridge-turtle` -
`walk.clj`. Double-click the core.clj file to open it.

![Testing apps - walk code](img/testing-turtle-walk-code.png)

press the following key combination:

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>

An initial image of the turtles app will pop up.

Type `(forward 40)` at the end of the `walk.clj` and press the
following combination:

<kbd>Ctrl</kbd> + <kbd>Enter</kbd>

You should see this on the Light Table:

![Testing apps - forward](img/testing-turtle-forward.png)

also, your turtle should move.

> Pressing the Control button and Space Bar together (abbreviated `Ctrl+Space`) is how you start giving Light Table a command. 


#### Success!

Congratulations! You have opened and run your first Clojure apps, and
your install and setup are all completed!
