import { Div } from "../../recursivejs/createcomponent/Components.js";

export default (on, onClick) => {
     return Div({
          styleSheet: {
               className: "input-switcher-wrapper",
               normal: {
                    display: "inline-block",
                    width: "50px",
                    height: "25px",
                    backgroundColor: theme.secondary,
                    borderRadius: "30px",
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "auto",
                    marginBottom: "auto",
                    alignItems: "center",
               },
          },
          events: { onClick: onClick },
          children: [
               Div({
                    styleSheet: {
                         className: "cusor",
                         normal: {
                              height: "20px",
                              width: "20px",
                              borderRadius: "50%",
                              backgroundColor: theme.primary,
                              marginLeft: `${on ? "auto" : "0px"}`,
                              animation: `${on ? "set-on" : "set-off"} 0.5s forwards`,
                         },
                         animations: [
                              {
                                   name: "set-on",
                                   steps: {
                                        from: { marginLeft: "5px" },
                                        to: { marginLeft: "25px" },
                                   },
                              },
                              {
                                   name: "set-off",
                                   steps: {
                                        from: { marginLeft: "25px" },
                                        to: { marginLeft: "5px" },
                                   },
                              },
                         ],
                    },
               }),
          ],
     });
};
