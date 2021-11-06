import ButtonView from "../../recursivejs/createcomponent/components/forms/ButtonView.js";

export default ({ text, route }) => {
     return ButtonView({
          text,
          styleSheet: {
               className: "header-button",
               normal: {
                    backgroundColor: "transparent",
                    color: "inherit",
                    border: "3px solid transparent",
                    transitionDuration: "0.25s",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "1.05em",
                    cursor: "pointer",
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
          events: {
               onClick: () => {
                    router.goTo(route);
               },
          },
     });
};
