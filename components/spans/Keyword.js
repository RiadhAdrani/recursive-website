import { Span, A } from "../../recursivejs/createcomponent/Components.js";

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
