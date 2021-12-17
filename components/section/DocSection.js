import { H4, Section, P } from "../../recursivejs/createcomponent/Components.js";

export default ({ title, text }) => {
     return Section({
          styleSheet: {
               className: "doc-section",
               normal: {
                    padding: "5px",
                    margin: "5px 0px 5px 0px",
                    borderRadius: "5px",
               },
          },
          children: [
               H4({
                    text: title,
                    styleSheet: {
                         className: "doc-section-title",
                         normal: {
                              margin: "0px",
                              padding: "5px",
                              fontSize: "1.5em",
                              color: theme.primaryVariant,
                         },
                    },
               }),
               P({
                    text: text,
                    styleSheet: {
                         className: "doc-section-content",
                         normal: {
                              margin: "0px",
                              padding: "5px",
                              lineHeight: "1.75em",
                              margin: "0px 0px 0px 0px",
                         },
                    },
               }),
          ],
     });
};
