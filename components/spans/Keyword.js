import AnchorView from "../../recursivejs/createcomponent/components/inlinetext/AnchorView.js";
import Span from "../../recursivejs/createcomponent/components/inlinetext/SpanView.js";

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
          return AnchorView({ children: span, href: link, target: "blank" });
     }
     return span;
};
