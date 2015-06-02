# How to change curriculum markdown files

### Jekyll framework with kramdown

ClojureBridge curriculum slides,
<http://clojurebridge.github.io/curriculum/>, are rendered from
markdown files using [Jekyll](http://jekyllrb.com/) framework.
Those markdowns are parsed by [kramdown](http://kramdown.gettalong.org/).

If your pull request on those markdown files are merged,
the changes are immediately reflected on slides.
You can see the changes at
<http://clojurebridge.github.io/curriculum/>.

This way, the curriculum team eliminated duplicated works: updating
markdown files, updating slides, and finally, copying slides to
gh-pages branch.
The duplicated works have caused synchronization problems between
outline and slides, which was headache for the curriculum team.
However, now, those all went away.

Down side would be HTML tags and styling notations are mixed in
the markdown files.
To create [reveal.js](http://lab.hakim.se/reveal-js/) slides, it is
unable to avoid.
But, still, the markdown files are readable as documents on github
repository.

This new style requires you to be a bit careful to edit curriculum
markdown files. Please read below and help our curriculum in a good
shape and always up-to-date.


### Be careful about HTML tags and styling notations

If you mistakenly break a styling stuff, slides won't be rendered
correctly.
If you are not familiar with those tags and notations, read below.

* front matter

    On top of each markdown files, you'll see five lines like this:

    ```
    ---
    layout: default
    title: Introduction
    permalink: /outline/intro.html
    ---
    ```

    This is called
    [front matter](http://jekyllrb.com/docs/frontmatter/) and important
    information for Jekyll.
    Jekyll sees these lines and creates complete HTML.


* `{::options parse_block_html="true" /}` notation

    This notation is for kramdown to notify this markdown file has html
    tags other than markdown syntax.


* `<section></section>` tags

    You'll see a lot of `<section></section>` tags.
    This section tag creates each single slide.
    Make sure opening and closing tags match correctly.


* `{: .slide-title .slide}` notations

    These are reveal.js styling notations.
    This curly braces are parsed by kramdown and added to html tags as css
    class names or attributes.


* ng-model, ng-click, ng-show notations and buttons

    These AngularJS directives are used to show/hide long sentences.
    Since the markdown files are documents as well, the files have many
    explanations in long sentences to clarify what that means.
    However, such long sentences won't fit in a slide.
    Also, those are not appropriate as the slide.

    Using angular, our slides got the feature to show/hide explanations
    Most of slides have "Intro" or "Details" buttons (those look links,
    but actually, buttons), which act as a toggle button.


* newlines matters

    Sometime, newlines must present, and in another cases, newline should not
    be there.
    In general, before curly braces notations, you should not put a
    newline, but you should put newlines before markdown notations.
    See markdown files closely if you are not clear about this.
    Also, test your changes.


## How to test the changes

You should test your changes before you'll make a pull request.
There are two ways to test.

#### 1. push changes to your repository's gh-pages branch

This may be an easy way to test your changes.
If you forked ClojureBridge curriculum repository, and keep the same
name as the repository name, you can see the change at:

* http://your-github-id.github.io/curriculum/

Make sure you have pushed to gh-pages branch, not master.

If your repository name is not _curriculum_,
change line `baseurl: /curriculum` in `_config.yml`.
But, don't commit the change on `_config.yml`.


#### 2. setup local development environment

At the very first time, you need to spend a half hour or so to complete.
However, local dev env is quite handy and worth to use your time for
setup.
It is not complicated as well.

If you decide to setup local dev env, follow the steps below.

- Step 1: Install Ruby

    * [Installing Ruby](https://www.ruby-lang.org/en/documentation/installation/)

    Since Jekyll is a framework written in Ruby, you need Ruby installed
    in your computer.
    The recommended version is 2.2.1 or later, but probably, 2.0.0 or
    later would work.

- Step 2: Install bundler gem

    ```
    gem install bundler
    ```

    The bundler gem is Ruby's package manager.
    This tool installs Jekyll gem and other gems(packages/libraries) in dependencies.


- Step 3: Install gems

    ```
    bundle install
    ```

    The bundler looks at Gemfile and installs all gems necessary to run
    Jekyll.


- Step 4: Run Jekyll

    ```
    bundle exec jekyll serve
    ```

    Jekyll will start up and generate files and spit out under `_site` directory.


- Step 5: See slides on a browser

    <http://localhost:5555/curriculum/>

    If you want to use a different port number, change the line `port: 5555` in
    your `_config.yml` file.
    Again, don't commit the change on `_config.yml` file.



If your changes look good on slides, make a pull request!
The curriculum team welcomes your contribution.
