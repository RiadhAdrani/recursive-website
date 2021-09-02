import Button from "../recursivejs/components/Button.js";
import Container from "../recursivejs/components/Container.js";
import TextView from "../recursivejs/components/TextView.js";
import InlineSelector from "../recursivejs/InlineSelector.js";

const MenuButton = ({ text, onClick, isSelected }) =>
     Button({
          text: `${text}`,
          className: `${window.stateManager.data.theme.value ? "menu-button-dark" : "menu-button"}`,
          style: InlineSelector({
               display: "inline",
               margin: "10px 10px",
               padding: "5px 20px",
               fontSize: "1em",
               border: "none",
               textDecoration: `${isSelected ? "underline" : "none"}`,
               borderRadius: "5px",
               cursor: "pointer",
               color: `${window.stateManager.data.theme.value ? "white" : "#1e1e1e"}`,
               fontFamily: "Trebuchet MS",
               backgroundColor: "inherit",
               outline: "none",
               flex: 1,
               transitionDuration: "0.15s",
          }),
          events: {
               onClick: (e) => {
                    onClick(e);
               },
          },
     });

export default ({ buttons }) =>
     Container({
          style: InlineSelector({
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               margin: "0px 0px",
               position: "sticky",
               top: "0px",
               flexWrap: "wrap",
               padding: "20px 20px",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
               backgroundColor: `${window.stateManager.data.theme.value ? "#1e1e1e" : "white"}`,
          }),
          children: [
               TextView({
                    text: "Recursive",
                    style: InlineSelector({
                         fontSize: "1.4em",
                         color: `${window.stateManager.data.theme.value ? "#5cb85c" : "white"}`,
                         padding: "10px 20px",
                         borderRadius: "5px",
                         fontWeight: "bold",
                         margin: "0px",
                         textTransform: "uppercase",
                         backgroundColor: `${
                              window.stateManager.data.theme.value ? "transparent" : "#5cb85c"
                         }`,
                    }),
               }),
               Container({
                    style: InlineSelector({
                         display: "flex",
                         flexDirection: "row",
                         justifyContent: "space-evenly",
                         margin: "5px 10px",
                         flexWrap: "wrap",
                    }),
                    children: buttons.map((b) =>
                         MenuButton({
                              text: b.title,
                              isSelected: window.router.current.name === b.name,
                              onClick: () => {
                                   window.router.goTo(b.name);
                              },
                         })
                    ),
               }),
               Button({
                    text: `${
                         window.stateManager.data.theme.value
                              ? "Switch to Light Theme"
                              : "Switch to Dark Theme"
                    }`,
                    events: {
                         onClick: () => {
                              const current = window.stateManager.data.theme.value;
                              window.stateManager.data.theme.setValue(!current);
                         },
                    },
                    style: InlineSelector({
                         border: "none",
                         padding: "10px",
                         borderRadius: "5px",
                         cursor: "pointer",
                         backgroundColor: `${
                              window.stateManager.data.theme.value ? "white" : "#2e2e2e"
                         }`,
                         color: `${window.stateManager.data.theme.value ? "#2e2e2e" : "white"}`,
                    }),
               }),
          ],
     });
