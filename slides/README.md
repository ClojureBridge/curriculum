## ClojureBridge slides

These slides are written in Markdown, with special annotations for
Clojure source-code hightlighting. You can build HTML slides
targetting either revealjs or slidy using
[Pandoc](https://github.com/jgm/pandoc/releases).

For OS X,
```
  wget https://github.com/jgm/pandoc/releases/download/1.13.1/pandoc-1.13.1-osx.pkg
  open ./pandoc-1.13.1-osx.pkg # ... and install
  # For a single slide ...
  pandoc module1.md  -t slidy -s --highlight-style kate -o module1.html
  pandoc module7.md -c assets/reveal.js/css/reveal.css \
                    -c assets/mozilla-theme.css
                    -c assets/reveal.js/plugin/highlight/github.min.css \
                    --self-contained \
                    -t slidy \
                    -s --highlight-style pygments -o module7.html
  # For all slides ...
  bash build.sh
```
