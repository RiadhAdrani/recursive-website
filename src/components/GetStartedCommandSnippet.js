import { P } from "@riadh-adrani/recursive/Recursive-Components";

export default (code) => {
     return P({
          styleSheet: {
               className: "get-started-command-snippet",
               normal: {
                    padding: "20px",
                    background: "#f0f0f0",
                    margin: "10px 0px",
                    fontFamily: "monospace",
               },
          },
          text: code,
     });
};
