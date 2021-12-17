import NextButton from "../../components/buttons/NextButton.js";
import WelcomeTop from "../../components/section/WelcomeTop.js";

import { Div } from "../../recursivejs/createcomponent/Components.js";

export default ({ title, subtitle, children, next }) => {
     return Div({
          styleSheet: {
               className: "get-started-section-wrapper",
               normal: {
                    display: "flex",
                    flexDirection: "column",
               },
          },
          children: [
               WelcomeTop({ title, subtitle }),
               Div({
                    children: [
                         ...children,
                         next ? NextButton({ text: next.text, route: next.route }) : null,
                    ],
                    styleSheet: {
                         className: "get-started-content-wrapper",
                         normal: {
                              display: "flex",
                              flexDirection: "column",
                              width: "60%",
                              margin: "auto",
                         },
                         mediaQueries: [
                              {
                                   condition: "(max-width:900px)",
                                   normal: {
                                        width: "100%",
                                   },
                              },
                         ],
                    },
               }),
          ],
     });
};
