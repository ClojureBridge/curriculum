Prism.languages.clojure = {
  comment: /;.*/g,
  string: /"(?:\\"|[^"])*"/g,
  symbol: /:[a-z][-a-z0-9?]*/gi,
  boolean: /(^|[^-])(true|false)/g,
  number: /-?\b\d+([./]\d+)?\b/g,
punctuation: /[[\](){},]/g,
operator: /(\*|\+|\-\s|%|\/|<=|=>|>=|<|=|>)/,
keyword: /\b(apply|and|assoc|backward|case|count|doseq|lower-case|upper-case|catch|class|conj|cons|const|def|defn|dissoc|do|else|enum|export|extends|finally|first|fn|for|forward|get-in|get|if|implements|import|instanceof|interface|keys|last|let|list|map|max|merge|min|mod|name|new|nil|not|not=|nth|or|partial|println|private|quot|range|reduce|rest|return|right|set|state-all|state|static|str|super|switch|throw|try|turtle-names|vals|var|vector|while|zero\\?)\b/,
};
