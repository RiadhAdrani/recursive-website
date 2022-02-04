import { Button } from "@riadh-adrani/recursive/Recursive-Components";

export default (text, onClick) =>
     Button({
          text: text,
          styleSheet: {
               className: "home-button",
               normal: {
                    padding: "10px",
                    background: "white",
                    border: "1px solid #cf2026",
                    cursor: "pointer",
                    margin: "15px 5px",
                    minWidth: "100px",
                    color: "#cf2026",
               },
               hover: {
                    background: "#cf202611",
               },
               active: {
                    background: "#cf2026",
                    color: "white",
               },
          },
     });
