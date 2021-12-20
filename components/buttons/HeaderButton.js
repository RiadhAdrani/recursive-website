import { Components } from "../../recursivejs/Recursive.js";

const { Link } = Components;

export default ({ text, route }) => {
     return Link({
          children: text,
          to: route,
          styleSheet: {
               className: "header-button",
               normal: {
                    backgroundColor: "transparent",
                    color: "inherit",
                    padding: "10px 5px",
                    border: "3px solid transparent",
                    transitionDuration: "0.25s",
                    textDecoration: "none",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "1.05em",
                    cursor: "pointer",
                    animation: "slide-down 1s",
               },
               hover: {
                    borderBottomColor: theme.secondary,
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         hover: {
                              borderBottomColor: "transparent",
                              backgroundColor: theme.primaryVariant,
                         },
                    },
               ],
          },
     });
};
