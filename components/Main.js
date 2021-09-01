import Button from "../recursivejs/components/Button.js";
import Container from "../recursivejs/components/Container.js";
import TextView from "../recursivejs/components/TextView.js";
import TitleView from "../recursivejs/components/TitleView.js";
import InlineSelector from "../recursivejs/InlineSelector.js";

const Section = (title, paragraph) =>
     Container({
          style: InlineSelector({
               flex: 1,
               padding: "20px",
               minWidth: "250px",
               boxShadow: "1px 1px 1px 2px #00000022",
               backgroundColor: `${window.theme.value ? "#212121" : "inherit"}`,
               color: `${window.theme.value ? "white" : "inherit"}`,
               margin: "10px 25px",
          }),
          children: [TitleView.h3({ text: title }), TextView({ text: paragraph })],
     });

const roadMapElement = (text, isOdd) =>
     TitleView.h3({
          text: text,
          style: InlineSelector({
               backgroundColor: isOdd ? "#5cb85c" : "inherit",
               color: isOdd ? "white" : "inherit",
               margin: "5px 0px",
               padding: "15px",
               cursor: "help",
               border: `0.5px solid ${
                    isOdd ? "transparent" : window.theme.value ? "white" : "#212421"
               }`,
          }),
     });

const roadMap = [
     "Improve The rerender system (Update)",
     "Add The equivalent of Hooks in React",
     "Add State Management System",
     "Add Routing System",
     "Fix bugs continuously",
];

const createRoadMap = () => roadMap.map((e) => roadMapElement(e, roadMap.indexOf(e) % 2 !== 0));

export default () =>
     Container({
          style: InlineSelector({
               marginBottom: "50px",
          }),
          children: [
               Container({
                    style: InlineSelector({
                         display: "flex",
                         flexDirection: "column",
                         backgroundColor: "#212421",
                         justifyContent: "center",
                         alignItems: "center",
                         padding: "125px 0px",
                         textAlign: "center",
                         color: "white",
                    }),
                    children: [
                         TextView({
                              text: "PROJECT : Recursive",
                              style: InlineSelector({
                                   fontFamily: "Helvetica",
                                   fontSize: "3em",
                                   fontWeight: "bold",
                                   color: "#5cb85c",
                                   margin: "10px 0px",
                              }),
                         }),
                         TextView({
                              text: "A Javascript library to build beautiful web apps",
                              style: InlineSelector({
                                   fontFamily: "Trebuchet MS",
                                   fontSize: "1.3em",
                                   margin: "10px 0px",
                              }),
                         }),
                         Container({
                              style: InlineSelector({
                                   margin: "40px 0px 0px 0px",
                                   display: "inline-flex",
                                   flexDirection: "row",
                                   padding: "5px",
                                   fontSize: "1.2em",
                              }),
                              children: [
                                   Button({
                                        text: "Get Started",
                                        style: InlineSelector({
                                             backgroundColor: "#5cb85c",
                                             color: "white",
                                             border: "none",
                                             padding: "10px 15px",
                                             borderRadius: "2px",
                                             marginRight: "20px",
                                             fontSize: "0.90em",
                                             cursor: "pointer",
                                        }),
                                        events: {
                                             onClick: () => {
                                                  window.currentPage.setValue(1);
                                             },
                                        },
                                   }),
                                   TextView({
                                        text: "Start the Tutorial >",
                                        style: InlineSelector({
                                             color: "#5cb85c",
                                             cursor: "pointer",
                                             textDecoration: "underline",
                                        }),
                                        events: {
                                             onClick: () => {
                                                  window.currentPage.setValue(3);
                                             },
                                        },
                                   }),
                              ],
                         }),
                    ],
               }),
               Container({
                    style: InlineSelector({
                         display: "flex",
                         flexDirection: "row",
                         flexWrap: "wrap",
                         margin: "10px",
                    }),
                    children: [
                         Section(
                              "Declarative",
                              "Recursive makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug."
                         ),
                         Section(
                              "Component-Based",
                              `Build encapsulated components that manage their own state, then compose them to make complex UIs.
                              Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM, while maintaining high performance`
                         ),
                         Section(
                              "Learn Once, Write Anywhere",
                              `You can use Recursive with any other technology stack!`
                         ),
                         Section(
                              "Native Solution",
                              `Recursive uses the native web functionalities to render, update and manage the state of your components.`
                         ),
                         Section(
                              "Virtual DOM",
                              `Recursive is powered by a virtual DOM, which is a representation of the actual Document Object Model (DOM) in Javascript. The VDOM makes it easier to loop over components and compare them to minimally update specific values in the actual HTML document.`
                         ),
                    ],
               }),
               Container({
                    style: InlineSelector({
                         display: "flex",
                         flexDirection: "column",
                         flexWrap: "wrap",
                         padding: "10px 20%",
                         textAlign: "center",
                    }),
                    children: [
                         TitleView.h1({
                              text: "Road Map",
                         }),
                         ...createRoadMap(),
                    ],
               }),
          ],
     });
