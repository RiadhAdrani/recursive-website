import ButtonView from "../../recursivejs/createcomponent/components/forms/ButtonView.js";

export default ({ text, route }) => {
     return ButtonView({
          text: text,
          styleSheet: {
               className: "next-section-button",
               normal: {
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: theme.primary,
                    border: `2px solid ${theme.primary}`,
                    borderRadius: "2.5px",
                    marginBottom: "20px",
                    marginLeft: "auto",
                    marginRight: "40px",
                    fontFamily: "inherit",
                    transition: "0.4s",
               },
               hover: {
                    transform: "translateX(15px)",
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
