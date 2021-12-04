import NextButton from "../../components/buttons/NextButton.js";
import WelcomeTop from "../../components/section/WelcomeTop.js";
import DividerView from "../../recursivejs/createcomponent/components/text/DividerView.js";

export default ({ title, subtitle, children, next }) => {
     return DividerView({
          styleSheet: {
               className: "get-started-section-wrapper",
               normal: {
                    display: "flex",
                    flexDirection: "column",
               },
          },
          children: [
               WelcomeTop({ title, subtitle }),
               DividerView({
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
