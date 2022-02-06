import { Column, EmptyBox, H2, Link, P } from "@riadh-adrani/recursive/Recursive-Components";
import { getRoute } from "@riadh-adrani/recursive/Recursive-Router";
import get_started from "../docs/get-started/get_started";
import Colors from "../Style/Colors";

export default () => {
     return Column({
          styleSheet: {
               className: "get-started-side-bar",
               normal: {
                    minWidth: "300px",
                    maxWidth: "300px",
                    borderRight: "1px solid #00000033",
                    padding: "10px",
                    position: "fixed",
                    height: "calc(100% - 50px)",
               },
          },
          children: [
               EmptyBox({ height: "20px" }),
               H2({ text: "Get Started", style: { color: Colors.darkRed, fontWeight: "600" } }),
               EmptyBox({ height: "20px" }),
               Column({
                    children: get_started.map((item) =>
                         Link({
                              styleSheet: {
                                   className: "get-started-side-bar-link",
                                   normal: {
                                        textDecoration: "none",
                                        padding: "10px",
                                        background: `#00000015`,
                                        color: "black",
                                        margin: "5px 0px",
                                        borderLeft: "5px solid transparent",
                                   },
                              },
                              style: {
                                   borderLeftColor:
                                        getRoute() === `/get-started${item.route}`
                                             ? `black`
                                             : "transparent",
                              },
                              children: item.title,
                              to: `/get-started${item.route}`,
                         })
                    ),
               }),
          ],
     });
};
