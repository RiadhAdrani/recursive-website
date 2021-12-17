import { H3, Div } from "../../recursivejs/createcomponent/Components.js";
import GetStartedLink from "../links/GetStartedLink.js";

export default ({ title = "", links = [], inverted = false }) => {
     return Div({
          styleSheet: {
               className: `welcome-get-started-links${inverted ? "inverted" : ""}`,
               normal: {
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: theme.primary,
                    color: theme.secondary,
                    flex: 1,
                    padding: "20px",
                    transitionDuration: "0.3s",
                    borderLeft: !inverted ? `none` : `solid 5px ${theme.secondary}`,
                    borderRight: inverted ? `none` : `solid 5px ${theme.secondary}`,
                    textAlign: inverted ? "right" : "",
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
                    {
                         condition: "(max-width:400px)",
                         normal: {
                              textAlign: "center",
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
                              fontSize: "2em",
                              margin: "10px 0px",
                              padding: "5px",
                              fontFamily: "Lato, sans-serif",
                              textTransform: "uppercase",
                         },
                    },
               }),
               ...links.map((item) => GetStartedLink({ text: item.text, link: item.link })),
          ],
     });
};
