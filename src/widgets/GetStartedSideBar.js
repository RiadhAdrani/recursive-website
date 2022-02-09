import { Column, H2, I, Link, Row } from "@riadh-adrani/recursive/components";
import { getRoute } from "@riadh-adrani/recursive/router";
import { setState } from "@riadh-adrani/recursive/state";
import get_started from "../docs/get-started/get_started";
import Colors from "../Style/Colors";
import MediaQuery from "../Style/MediaQuery";

export default () => {
     const [show, setShow] = setState("show-map", false);

     return Column({
          styleSheet: {
               className: "get-started-side-bar",
               normal: {
                    minWidth: "300px",
                    maxWidth: "300px",
                    borderRight: "1px solid #00000033",
                    overflowY: "auto",
                    padding: "10px",
                    position: "fixed",
                    height: "calc(100% - 70px)",
                    background: "white",
               },
               mediaQueries: MediaQuery({
                    small: {
                         normal: {
                              minWidth: show ? "320px" : "40px",
                              maxWidth: show ? "320px" : "40px",
                              height: "calc(100% - 150px)",
                              // animationName: show ? "show-anim" : "unshow-anim",
                              // animationDuration: "0.75s",
                              // animationIterationCount: "1",
                         },
                    },
               }),
               animations: [
                    {
                         name: "show-anim",
                         steps: {
                              "0%": {
                                   minWidth: "40px",
                                   maxWidth: "40px",
                              },
                              "100%": {
                                   minWidth: "320px",
                                   maxWidth: "320px",
                              },
                         },
                    },
                    {
                         name: "unshow-anim",
                         steps: {
                              "100%": {
                                   minWidth: "40px",
                                   maxWidth: "40px",
                              },
                              "0%": {
                                   minWidth: "320px",
                                   maxWidth: "320px",
                              },
                         },
                    },
               ],
          },
          children: [
               Row({
                    style: { flex: 1 },
                    children: [
                         Column({
                              children: [
                                   H2({
                                        text: "Get Started",
                                        styleSheet: {
                                             className: "get-started-nav-bar-title",
                                             normal: {
                                                  color: Colors.darkRed,
                                                  fontWeight: "600",
                                                  margin: "20px 0px",
                                             },
                                             mediaQueries: MediaQuery({
                                                  small: {
                                                       normal: {
                                                            display: show ? "block" : "none",
                                                       },
                                                  },
                                             }),
                                        },
                                   }),
                                   Column({
                                        styleSheet: {
                                             className: "get-started-map",
                                             normal: {
                                                  flex: 1,
                                                  overflowY: "auto",
                                             },
                                             mediaQueries: MediaQuery({
                                                  small: {
                                                       normal: {
                                                            display: show ? "flex" : "none",
                                                       },
                                                  },
                                             }),
                                        },
                                        children: get_started.map((item) =>
                                             Link({
                                                  styleSheet: {
                                                       className: "get-started-side-bar-link",
                                                       normal: {
                                                            textDecoration: "none",
                                                            padding: "10px",
                                                            background: Colors.grey,
                                                            color: "black",
                                                            margin: "5px 0px",
                                                            borderLeft: "5px solid transparent",
                                                       },
                                                       hover: {
                                                            background: Colors.darkGrey,
                                                       },
                                                       active: {
                                                            background: Colors.darkerGrey,
                                                       },
                                                  },
                                                  style: {
                                                       borderLeftColor:
                                                            getRoute() ===
                                                            `/get-started${item.route}`
                                                                 ? `black`
                                                                 : "transparent",
                                                  },
                                                  children: item.title,
                                                  to: `/get-started${item.route}`,
                                             })
                                        ),
                                   }),
                              ],
                         }),
                         I({
                              className: show
                                   ? "far fa-caret-square-left"
                                   : "far fa-caret-square-right",
                              events: { onClick: () => setShow(!show) },
                              styleSheet: {
                                   className: "get-started-show-map",
                                   normal: {
                                        fontSize: "2em",
                                        textAlign: "center",
                                        margin: "auto 0px",
                                        marginLeft: show ? "10px" : "0px",
                                        color: "white",
                                        cursor: "pointer",
                                        transitionDuration: "0.2s",
                                        background: Colors.darkRed,
                                        padding: "5px",
                                        borderRadius: "5px",
                                        alignSelf: "center",
                                        display: "none",
                                   },
                                   hover: {
                                        transform: show ? "translateX(-5px)" : "translateX(5px)",
                                   },
                                   mediaQueries: MediaQuery({
                                        small: {
                                             normal: {
                                                  display: "inline-block",
                                             },
                                        },
                                   }),
                              },
                         }),
                    ],
               }),
          ],
     });
};
