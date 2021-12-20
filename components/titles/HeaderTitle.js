import { Components } from "../../recursivejs/Recursive.js";

const { H2 } = Components;

export default ({ text }) => {
     return H2({
          text,
          styleSheet: {
               className: "header-title",
               normal: {
                    margin: "0px",
                    padding: "5px",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    textTransform: "uppercase",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: { textAlign: "center", paddingBottom: "10px" },
                    },
               ],
          },
     });
};
