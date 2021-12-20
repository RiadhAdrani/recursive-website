import NextButton from "../components/buttons/NextButton.js";
import DocSection from "../components/section/DocSection.js";
import WelcomeTop from "../components/section/WelcomeTop.js";
import { Components } from "../recursivejs/Recursive.js";
const { A, Div } = Components;

export default () => {
     return Div({
          styleSheet: {
               className: "get-started",
               normal: {
                    display: "flex",
                    flexDirection: "column",
               },
          },
          children: [
               WelcomeTop({ title: "Get Started", subtitle: "Create your first App!" }),
               Div({
                    styleSheet: {
                         className: "get-started-doc-sections-wrapper",
                         normal: {
                              display: "flex",
                              flexDirection: "column",
                              width: "85%",
                              alignSelf: "center",
                              marginTop: "10px",
                              marginBottom: "10px",
                              backgroundColor: theme.secondaryAccent,
                              boxShadow: "0px 0px 3px #00000011",
                         },
                         mediaQueries: [
                              {
                                   condition: "(max-width:900px)",
                                   normal: {
                                        width: "100%",
                                   },
                              },
                         ],
                    },
                    children: [
                         DocSection({
                              title: `Try ${framework}`,
                              text: `${framework} is designed from a Javascript lover to Javascript lovers, 
                                   but you can still use other UI libraries like bootstrap. ${framework}
                                   can be used with other libraries and frameworks like "Electron" to build desktop application
                                   with less dependencies.`,
                         }),
                         DocSection({
                              title: "Online Playground",
                              text: `Unfortunately, we do not offer a CDN.`,
                         }),
                         DocSection({
                              title: "Create a new project from scratch",
                              text: [
                                   `You can easily create a new ${framework} project by downloading the github repo and following the steps `,
                                   A({
                                        children: "here",
                                        href: "https://github.com/RiadhAdrani/recursive#getting-started",
                                        target: "blank",
                                   }),
                              ],
                         }),
                         DocSection({
                              title: "Stay informed",
                              text: [
                                   `We still not have an online presence, but you can star and watch the repo `,
                                   A({
                                        children: "RiadhAdrani/recursive",
                                        href: "https://github.com/RiadhAdrani/recursive",
                                        target: "blank",
                                   }),
                              ],
                         }),
                    ],
               }),
               NextButton({ text: "Setup your workspace", route: "/get-started/set-up" }),
          ],
     });
};
