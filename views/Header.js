import HeaderButton from "../components/buttons/HeaderButton.js";
import HeaderTitle from "../components/titles/HeaderTitle.js";
import { Header, Div } from "../recursivejs/createcomponent/Components.js";

const b900px = {
     condition: "(max-width:900px)",
     normal: { flexDirection: "column", textAlign: "center" },
};

export default () => {
     return Header({
          styleSheet: {
               className: "header-view",
               normal: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    backgroundColor: theme.primary,
                    color: "white",
                    padding: "5px",
               },
               mediaQueries: [b900px],
          },
          children: [
               HeaderTitle({ text: framework }),
               Div({
                    styleSheet: {
                         className: "header-buttons-wrapper",
                         normal: {
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              flex: 1,
                         },
                         mediaQueries: [b900px],
                    },
                    children: [
                         HeaderButton({ text: "The Library", route: "/" }),
                         HeaderButton({ text: "Get started", route: "/get-started" }),
                         HeaderButton({ text: "Docs", route: "/docs" }),
                         HeaderButton({ text: "Examples", route: "/examples" }),
                    ],
               }),
          ],
     });
};
