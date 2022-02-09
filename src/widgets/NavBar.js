import { A, H2, I, Img, Input, Link, Row } from "@riadh-adrani/recursive/components";

import logo from "../assets/logo.png";
import Colors from "../Style/Colors";
import MediaQuery from "../Style/MediaQuery";

export default () =>
     Row({
          styleSheet: {
               className: "nav-menu",
               normal: {
                    justifyContent: "space-between",
                    height: "50px",
                    alignItems: "center",
                    borderBottom: "1px solid #00000033",
                    position: "fixed",
                    width: "100%",
                    zIndex: 2,
                    background: "white",
               },
               mediaQueries: MediaQuery({
                    small: {
                         normal: {
                              flexDirection: "column",
                              height: "120px",
                              paddingBottom: "10px",
                         },
                    },
               }),
          },
          children: [
               Row({
                    styleSheet: {
                         className: "nav-title",
                         normal: {
                              alignItems: "center",
                              flex: 1,
                              justifyContent: "start",
                              padding: "5px 10px",
                              color: Colors.darkRed,
                         },
                    },
                    children: [
                         H2({
                              text: "Recursive",
                              styleSheet: {
                                   className: "nav-title-h2",
                                   mediaQueries: MediaQuery({
                                        smaller: { normal: { display: "none" } },
                                   }),
                              },
                         }),
                         Img({ src: logo, height: 40, width: 40 }),
                    ],
               }),
               Row({
                    styleSheet: {
                         className: "nav-links",
                         normal: { flex: 2, justifyContent: "center" },
                    },
                    children: [
                         { title: "Home", to: "/" },
                         { title: "About", to: "/about" },
                         { title: "Get Started", to: "/get-started/first-app" },
                         { title: "Docs", to: "/docs" },
                    ].map((item) =>
                         Link({
                              children: item.title,
                              to: item.to,
                              styleSheet: {
                                   className: "nav-bar-link",
                                   normal: {
                                        color: "black",
                                        textDecoration: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                   },
                                   hover: {
                                        background: "#1e1e1e22",
                                   },
                              },
                         })
                    ),
               }),
               Row({
                    styleSheet: {
                         className: "nav-search",
                         normal: { flex: 1, justifyContent: "end", padding: "5px 10px" },
                    },
                    children: [
                         Input({
                              type: "text",
                              value: "",
                              placeholder: "Search...",
                              styleSheet: {
                                   className: "nav-bar-search",
                                   normal: {
                                        border: "none",
                                        borderBottom: "1px solid #000000",
                                        marginRight: "10px",
                                        padding: "0px 10px",
                                   },
                                   focus: {
                                        outline: "2px solid #cf2026",
                                        borderBottom: "none",
                                   },
                              },
                         }),
                         A({
                              children: I({ className: "fab fa-github" }),
                              href: "https://github.com/RiadhAdrani/recursive",
                              target: "blank",
                              style: {
                                   textDecoration: "none",
                                   color: "inherit",
                                   fontSize: "1.5em",
                              },
                         }),
                    ],
               }),
          ],
     });
