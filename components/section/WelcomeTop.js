import H1 from "../../recursivejs/createcomponent/components/sectionning/HeadingTitle1View.js";
import H2 from "../../recursivejs/createcomponent/components/sectionning/HeadingTitle2View.js";
import Div from "../../recursivejs/createcomponent/components/text/DividerView.js";

export default ({ title, subtitle }) => {
     return Div({
          styleSheet: {
               className: "welcome-top-section",
               normal: { backgroundColor: theme.secondaryAccent, padding: "100px 50px" },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              padding: "50px 10px",
                              textAlign: "center",
                         },
                    },
               ],
          },
          children: [
               H1({
                    text: title,
                    styleSheet: {
                         className: "welcome-title",
                         normal: { margin: "0px", padding: "5px", fontSize: "2.5em" },
                    },
               }),
               H2({
                    text: subtitle,
                    styleSheet: {
                         className: "welcome-subtitle",
                         normal: {
                              margin: "0px",
                              padding: "5px",
                              fontFamily: "Lato, sans-serif",
                         },
                    },
               }),
          ],
     });
};
