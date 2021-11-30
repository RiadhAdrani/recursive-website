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
               animations: [
                    {
                         name: "slide-down",
                         steps: {
                              "0%": {
                                   transform: "translateX(-100px)",
                                   opacity: 0,
                              },
                              "100%": {
                                   transform: "translateX(0px)",
                                   opacity: 1,
                              },
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
