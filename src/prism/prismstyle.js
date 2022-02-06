export default ({
     background = "#2d2d2d",
     comment = "#999",
     punctuation = "#ccc",
     tag = "#e2777a",
     functionName = "#6196cc",
     boolean = "#f08d49",
     propertyClassNameConstant = "#f8c555",
     selector = "#cc99cd",
     string = "#67cdcc",
     inserted = "green",
}) => {
     return {
          'code[class*="language-"],pre[class*="language-"]': {
               color: "#ccc",
               background: "none",
               fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
               fontSize: "0.9em",
               textAlign: "left",
               whiteSpace: "pre",
               wordSpacing: "normal",
               wordBreak: "break-word !important",
               wordWrap: "normal",
               lineHeight: 1.35,
               mozTabSize: 4,
               oTabSize: 4,
               tabSize: 4,

               webkitHyphens: "none",
               mozHyphens: "none",
               msHyphens: "none",
               hyphens: "none",
          },
          'pre[class*="language-"]': {
               padding: "1em",
               margin: ".5em 0",
               overflow: "auto",
          },
          ':not(pre) > code[class*="language-"],pre[class*="language-"]': {
               background: background,
          },
          ':not(pre) > code[class*="language-"]': {
               padding: ".1em",
               whiteSpace: "break-spaces",
          },
          ".token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata": {
               color: comment,
          },
          ".token.punctuation": {
               color: punctuation,
          },
          ".token.tag,.token.attr-name,.token.namespace,.token.deleted": {
               color: tag,
          },
          ".token.function-name": {
               color: functionName,
          },
          ".token.boolean,.token.number,.token.function": {
               color: boolean,
          },
          ".token.property,.token.class-name,.token.constant,.token.symbol": {
               color: propertyClassNameConstant,
          },
          ".token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin": {
               color: selector,
          },
          ".token.string,.token.char,.token.attr-value,.token.regex,.token.variable": {
               color: string,
          },
          ".token.important,.token.bold": {
               fontWeight: "bold",
          },
          ".token.entity": {
               cursor: "help",
          },
          ".token.inserted": {
               color: inserted,
          },
     };
};
