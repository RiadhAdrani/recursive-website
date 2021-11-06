import NextButton from "../components/buttons/NextButton.js";
import DocSection from "../components/section/DocSection.js";
import WelcomeTop from "../components/section/WelcomeTop.js";
import AnchorView from "../recursivejs/createcomponent/components/inlinetext/AnchorView.js";
import DividerView from "../recursivejs/createcomponent/components/text/DividerView.js";

export default () => {
     return DividerView({
          styleSheet: {
               className: "get-started",
               normal: {
                    display: "flex",
                    flexDirection: "column",
               },
          },
          children: [
               WelcomeTop({ title: "Get Started", subtitle: "Create your first App!" }),
               DocSection({
                    title: "Ouch ! Section is under construction",
                    text: [
                         "To get started, you can follow the README of the github repository ",
                         AnchorView({
                              children: "Here",
                              href: "https://github.com/RiadhAdrani/recursive#getting-started",
                              target: "blank",
                         }),
                    ],
               }),
          ],
     });
};
