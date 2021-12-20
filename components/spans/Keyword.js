import { Components } from "../../recursivejs/Recursive.js";

const { A, Span } = Components;

export default (text, link) => {
     const span = Span({
          text,
          styleSheet: {
               className: "keyword",
               normal: {
                    fontStyle: "italic",
                    fontWeight: "bold",
                    color: theme.primaryVariant,
               },
          },
     });

     if (link) {
          return A({ children: span, href: link, target: "blank" });
     }
     return span;
};
