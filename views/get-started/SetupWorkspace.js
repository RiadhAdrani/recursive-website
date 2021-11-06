import NextButton from "../../components/buttons/NextButton.js";
import DocSection from "../../components/section/DocSection.js";
import WelcomeTop from "../../components/section/WelcomeTop.js";
import Template from "./Template.js";
import Keyword from "../../components/spans/Keyword.js";
import AnchorView from "../../recursivejs/createcomponent/components/inlinetext/AnchorView.js";
import ImageView from "../../recursivejs/createcomponent/components/multimedia/ImageView.js";

export default () => {
     return Template([
          WelcomeTop({ title: "Setup the Workspace", subtitle: "To start correctly" }),
          DocSection({
               title: "Preparing your workspace",
               text: [
                    `Drop this repo into your working directory, 
               where your `,
                    Keyword("index.js"),
                    `is located, and that's it for the setup part. 
               Then, import the library, and make the changes needed so your `,
                    Keyword("index.html"),
                    ` looks like this :
               `,
               ],
          }),
          AnchorView({
               href: "https://github.com/RiadhAdrani/recursive#getting-started",
               target: "blank",
               children: [
                    ImageView({
                         src: "../../assets/setup-index-html.png",
                         width: "600",
                    }),
               ],
          }),

          NextButton({ text: "Hello World >", route: "/get-started/hello World/" }),
     ]);
};
