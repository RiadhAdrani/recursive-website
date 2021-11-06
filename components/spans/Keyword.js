import Span from "../../recursivejs/createcomponent/components/inlinetext/SpanView.js";

export default (text) => {
     return Span({
          text,
          styleSheet: {
               className: "key-word",
               normal: {
                    backgroundColor: theme.secondaryVariant,
                    padding: "3px",
                    color: theme.secondary,
                    marginLeft: "2px",
                    marginRight: "2px",
                    borderRadius: "5px",
               },
          },
     });
};
