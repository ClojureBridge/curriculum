Prism.languages.clojure = {
  comment: /;.*/g,
  string: /"(?:\\"|[^"])*"/g,
  keyword: /:[a-z][-a-z0-9?]*/gi,
  boolean: /(^|[^-])(true|false)/g,
  number: /-?\b\d+([./]\d+)?\b/g,
  punctuation: /[[\](){},]/g
};
