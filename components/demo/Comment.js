import P from "../../recursivejs/createcomponent/components/text/ParagraphView.js";

export default (text) => {
     return P({
          text: text,
          styleSheet: {
               className: "doc-section-content",
               normal: {
                    margin: "0px",
                    padding: "10px",
                    lineHeight: "1.75em",
                    margin: "0px 0px 0px 5px",
               },
          },
     });
};