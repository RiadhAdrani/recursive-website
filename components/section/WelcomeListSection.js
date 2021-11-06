import H3 from "../../recursivejs/createcomponent/components/sectionning/HeadingTitle3View.js";
import Div from "../../recursivejs/createcomponent/components/text/DividerView.js";
import Link from "../links/GetStartedLink.js";

export default ({ title = "", links = [] }) => {
     return Div({
          styleSheet: {
               className: "welcome-get-started-links",
               normal: {
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: theme.primary,
                    color: theme.secondary,
                    flex: 1,
                    padding: "20px",
                    transitionDuration: "0.3s",
               },
               hover: {
                    backgroundColor: theme.primaryAccent,
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              padding: "10px",
                         },
                    },
               ],
          },
          children: [
               H3({
                    text: title,
                    styleSheet: {
                         className: "welcome-get-started-title",
                         normal: {
                              fontSize: "1.75em",
                              margin: "10px 0px",
                              padding: "5px",
                              fontFamily: "Lato, sans-serif",
                         },
                    },
               }),
               ...links.map((item) => Link({ text: item.text, link: item.link })),
          ],
     });
};
