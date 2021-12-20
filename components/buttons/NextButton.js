import { Components } from "../../recursivejs/Recursive.js";

const { Button } = Components;

export default ({ text, route }) => {
     return Button({
          text: `Next : ${text}`,
          styleSheet: {
               className: "next-section-button",
               normal: {
                    padding: "10px 20px",
                    width: "50%",
                    alignSelf: "center",
                    marginTop: "30px",
                    marginBottom: "30px",
                    backgroundColor: "transparent",
                    color: theme.primary,
                    border: `2px solid ${theme.primary}`,
                    borderRadius: "2.5px",
                    display: "inline-block",
                    fontFamily: "inherit",
                    transition: "0.4s",
               },
               hover: {
                    backgroundColor: theme.primary,
                    color: "white",
                    cursor: "pointer",
               },
          },
          events: {
               onClick: () => {
                    router.goTo(route);
               },
          },
     });
};
