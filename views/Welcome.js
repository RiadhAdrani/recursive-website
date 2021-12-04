import Div from "../recursivejs/createcomponent/components/text/DividerView.js";
import WelcomeTop from "../components/section/WelcomeTop.js";
import WelcomeSection from "../components/section/WelcomeSection.js";
import FeatureSection from "../components/section/FeatureSection.js";

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
                                   { text: "Hello World", link: "/get-started/set-up/" },
                                   { text: "Styling", link: "/get-started/style-vs-css/" },
                                   { text: "Animations", link: "/get-started/animations/" },
                                   { text: "Media Queries", link: "/get-started/media-queries/" },
                              ],
                              image: "../assets/hello-world-snippet.png",
                         }),
                         WelcomeSection({
                              title: `The new stuff`,
                              links: [
                                   { text: "Create your own component", link: "" },
                                   { text: "Conditional Rendering", links: "" },
                                   { text: "Events - Event listeners", link: "" },
                                   {
                                        text: "Hooks - Lifecycle methods",
                                        link: "/get-started/hooks/",
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
