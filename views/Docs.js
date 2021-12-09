import DocSection from "../components/section/DocSection.js";
import WelcomeTop from "../components/section/WelcomeTop.js";
import DividerView from "../recursivejs/createcomponent/components/text/DividerView.js";
import { A } from "../recursivejs/createcomponent/Components.js";

export default () => {
     return DividerView({
          styleSheet: {
               className: "docs-view",
               normal: {
                    display: "flex",
                    flexDirection: "column",
               },
          },
          children: [
               WelcomeTop({
                    title: "Documentation",
                    subtitle: "A deep dive",
               }),
               DocSection({
                    title: "Ouch ! Section is under construction",
                    text: [
                         "To get started, you can follow the README of the github repository ",
                         A({
                              children: "Here",
                              href: "https://github.com/RiadhAdrani/recursive#getting-started",
                              target: "blank",
                         }),
                    ],
               }),
          ],
     });
};
