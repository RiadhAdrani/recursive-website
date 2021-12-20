import HeaderTitle from "../components/titles/HeaderTitle.js";
import { Components } from "../recursivejs/Recursive.js";
const { P, Footer, A } = Components;

export default () => {
     return Footer({
          styleSheet: {
               className: "footer-view",
               normal: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: theme.primary,
                    color: theme.secondary,
                    padding: "5px",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              flexDirection: "column",
                              textAlign: "center",
                         },
                    },
               ],
          },
          children: [
               HeaderTitle({ text: framework }),
               P({
                    text: [
                         "Help this project by contributing in ",
                         A({
                              children: "Github",
                              href: "https://github.com/RiadhAdrani/recursive",
                              target: "blank",
                              styleSheet: {
                                   className: "footer-link-github",
                                   normal: {
                                        color: "white",
                                   },
                              },
                         }),
                    ],
                    styleSheet: {
                         className: "footer-contribute",
                         normal: { margin: "0px", padding: "10px", lineHeight: "1.5em" },
                    },
               }),
          ],
     });
};
