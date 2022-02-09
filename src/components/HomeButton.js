import { Button } from "@riadh-adrani/recursive/components";
import { goTo } from "@riadh-adrani/recursive/router";

export default (text, to) =>
     Button({
          text: text,
          events: {
               onClick: () => goTo(to),
          },
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
