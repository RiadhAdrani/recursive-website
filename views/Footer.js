import HeaderTitle from "../components/titles/HeaderTitle.js";
import AnchorView from "../recursivejs/createcomponent/components/inlinetext/AnchorView.js";
import Footer from "../recursivejs/createcomponent/components/sectionning/FooterView.js";
import P from "../recursivejs/createcomponent/components/text/ParagraphView.js";

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
                         AnchorView({
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
