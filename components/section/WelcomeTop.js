import { Components } from "../../recursivejs/Recursive.js";

const { H1, H2, Div } = Components;

export default ({ title, subtitle }) => {
     return Div({
          styleSheet: {
               className: "welcome-top-section",
               normal: {
                    backgroundColor: theme.secondaryAccent,
                    padding: "100px 50px",
                    textAlign: "center",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              padding: "50px 10px",
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
