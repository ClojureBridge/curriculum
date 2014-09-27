OS X Setup
==========

* Start a terminal
* Install Git
* Configure Git
* Make sure Java is installed
* Get Leiningen installed
* Get LightTable installed
* Get Heroku installed
* Test installation

## Starting a terminal

For these instructions, and for much of the class, you will need to
have a terminal, or command line, open. This is a text-based interface
to talk to your computer, and you can open it by running Terminal.app,
which is found under `/Applications/Utilities`. If you have never used
the terminal before, you may want to spend some time [reading up on
command-line
basics](http://blog.teamtreehouse.com/command-line-basics).

Go ahead and open your terminal now. It should look something like
this:

![blank terminal](img/os_x/blank_terminal.png)

The prompt (where you will type your commands) may look different: it
usually shows the computer name and user name, as well as the folder
or directory you are currently in.

For the rest of this setup, I will tell you to run commands in your
terminal. When I say that, I mean "type the command into the terminal
and press the Return key."

## Install Git

To see if you have git installed type in: `git --version` If you have
`git version 1.9.3 (Apple Git-50)` or above you should be fine.

If not, visit [git-scm.com](http://git-scm.com/). Click "Downloads for
Mac". The Git installer may begin downloading automatically. If it
does not, click the manual download link. Once the download has
finished, open __~/Downloads__ in Finder and double-click the
downloaded file (named something like
__git-2.0.1-intel-universal-snow-leopard.dmg__). This will mount the
disk image and open a new Finder window. Double-click the installer
package (named something like
__git-2.0.1-intel-universal-snow-leopard.pkg__). You may be told that
the installer can't be opened because it is from an unidentified
developer. If so, click "OK", then right-click (or control-click) the
file and select "Open" from the contextual menu. You may be warned
again that the installer is from an unidentified developer, but this
time you'll have the option to click "Open". Do so. This will launch
the installer. Follow its directions, and enter your password when
prompted to do so. Once you have finished this process it's safe to
unmount the disk image (by clicking the eject button in the Finder
sidebar) and delete the file from the Downloads folder.

## Configure Git

If you've used Git before then you should already have user.name and
user.email configured.  Otherwise, type this in the terminal:

```
git config --global user.name "Your Actual Name"
git config --global user.email "Your Actual Email"
```
TIP: Use the same email address for heroku, git, github, and ssh.

Verify by typing this in the terminal:

`git config --get user.name`
Expected result:
`your name`

`git config --get user.email`
Expected result:
`your email address`

## Making sure Java is installed

Run `java -version` in your terminal. If you do not have Java
installed, OS X will prompt you to install it. Follow all of the
directions OS X gives you, then return to this part of the tutorial
and run `java -version` again.

If Java is installed, you will see something like this in your
terminal:

![Java version](img/os_x/java_version.png)

The details of Java's version may differ from what you see above; that
is perfectly fine.

## Installing Leiningen

Leiningen is a tool used on the command line to manage Clojure
projects.

To install `lein`, execute the following commands in your
terminal. You will be prompted to enter your password.

```
curl https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein > lein
sudo mkdir -p /usr/local/bin/
sudo mv lein /usr/local/bin/lein
sudo chmod a+x /usr/local/bin/lein
export PATH=$PATH:/usr/local/bin
```

After you run the above commands, run the `lein version` command. It
should take a while to run, as it will download some resources it
needs the first time. If it completes successfully, you are golden! If
not, ask an instructor for help.

## Installing Light Table

Go to the [LightTable site](http://www.lighttable.com/). On the page
there, you should see a set of buttons that have download links for
Light Table. Click the "OS X 10.7+" button and you will download a
.zip file.

![Light Table downloads](img/light-table-download.png)
![Light Table downloads Mac](img/os_x/light-table-download.png)

There should now be a file named LightTableMac.zip in your Downloads
folder. Double-click the file to unzip it, then move LightTable.app to
your Applications folder.

The first time you launch LightTable you will be presented with a
confirmation prompt. Click "Open".

<img alt="Light Table first-run dialog" src="img/os_x/light-table-first-run-dialog@2x.png" width="595" height="290">
