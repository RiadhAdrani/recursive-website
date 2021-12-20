import { Components } from "../../recursivejs/Recursive.js";

const { Link } = Components;

export default ({ text, link }) => {
     return Link({
          children: text,
          to: link,
          styleSheet: {
               className: `section-link-${link ? "allowed" : "not-allowed"}`,
               normal: {
                    margin: "2.5px 2.5px 2.5px 10px",
                    padding: "15px 20px",
                    cursor: link ? "pointer" : "not-allowed",
                    transition: "0.5s",
                    color: "white",
                    textDecoration: "none",
               },
               hover: {
                    transform: "translateX(10px)",
                    textDecoration: "underline solid white 1px",
                    backgroundColor: theme.primaryVariant,
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              margin: "2.5px",
                         },
                    },
               ],
          },
     });
};
