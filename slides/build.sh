#! /bin/sh

pandoc module1.md -c assets/reveal.js/css/reveal.css -c assets/mozilla-theme.css -c assets/reveal.js/plugin/highlight/github.min.css --self-contained -t revealjs -s --highlight-style pygments -o module1.html
pandoc module2.md -c assets/reveal.js/css/reveal.css -c assets/mozilla-theme.css -c assets/reveal.js/plugin/highlight/github.min.css --self-contained -t revealjs -s --highlight-style pygments -o module2.html
pandoc module3.md -c assets/reveal.js/css/reveal.css -c assets/mozilla-theme.css -c assets/reveal.js/plugin/highlight/github.min.css --self-contained -t revealjs -s --highlight-style pygments -o module3.html
pandoc module4.md -c assets/reveal.js/css/reveal.css -c assets/mozilla-theme.css -c assets/reveal.js/plugin/highlight/github.min.css --self-contained -t revealjs -s --highlight-style pygments -o module4.html
pandoc module5.md -c assets/reveal.js/css/reveal.css -c assets/mozilla-theme.css -c assets/reveal.js/plugin/highlight/github.min.css --self-contained -t revealjs -s --highlight-style pygments -o module5.html
pandoc module6.md -c assets/reveal.js/css/reveal.css -c assets/mozilla-theme.css -c assets/reveal.js/plugin/highlight/github.min.css --self-contained -t revealjs -s --highlight-style pygments -o module6.html
pandoc module7.md -c assets/reveal.js/css/reveal.css -c assets/mozilla-theme.css -c assets/reveal.js/plugin/highlight/github.min.css --self-contained -t revealjs -s --highlight-style pygments -o module7.html
