import WelcomeTop from "../components/section/WelcomeTop.js";
import WelcomeSection from "../components/section/WelcomeSection.js";
import FeatureSection from "../components/section/FeatureSection.js";
import { Components } from "../recursivejs/Recursive.js";

const { Div } = Components;

export default () => {
     return Div({
          children: [
               WelcomeTop({
                    title: "The Future of Web development",
                    subtitle: "Master one skill to rule them all",
               }),
               FeatureSection(),
               Div({
                    styleSheet: {
                         className: "sections-wrapper",
                         normal: {
                              display: "flex",
                              flexDirection: "column",
                              padding: "50px",
                              backgroundColor: theme.primaryVariant,
                         },
                         mediaQueries: [
                              {
                                   condition: "(max-width:900px)",
                                   normal: {
                                        padding: "5px",
                                   },
                              },
                         ],
                    },
                    children: [
                         WelcomeSection({
                              title: "Get Started",
                              links: [
                                   {
                                        text: "Hello World : Create your first App",
                                        link: "/get-started/set-up",
                                   },
                                   {
                                        text: "Styling : Make the best looking UI",
                                        link: "/get-started/style",
                                   },
                                   {
                                        text: "State : One way data binding",
                                        link: "/get-started/state",
                                   },
                                   {
                                        text: "Routing : Create more",
                                        link: "/get-started/routing",
                                   },
                              ],
                              image: "../assets/hello-world-snippet.png",
                         }),
                         WelcomeSection({
                              title: `The new stuff`,
                              links: [
                                   { text: "Events : Handle user's actions", link: "" },
                                   { text: "Statefull and Stateless components", links: "" },
                                   { text: "Flags : Conditional rendering and updates", link: "" },
                                   {
                                        text: "Hooks : Components lifecycle's methods",
                                        link: "",
                                   },
                              ],
                              image: "../assets/advanced-snippet.png",
                              invert: true,
                         }),
                    ],
               }),
               WelcomeTop({
                    title: "Support Libraries",
                    subtitle: "Coming Soon ...",
               }),
          ],
     });
};
