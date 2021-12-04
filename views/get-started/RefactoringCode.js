import NextButton from "../../components/buttons/NextButton.js";
import BeautifulCodeView from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const template = `const Template = ({ buttonText, buttonOnClick, text, directTo }) =>
DividerView({
     style: {
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
     },
     children: [
          ButtonView({
               text: buttonText,
               style: {
                    color: "white",
                    backgroundColor: "red",
                    fontSize: "2em",
                    padding: "10px",
                    alignSelf: "center",
               },
               events: {
                    onClick: () => buttonOnClick(),
               },
          }),
          ParagraphView({
               text: text,
               style: {
                    color: "blue",
                    cursor: "pointer",
               },
               events: {
                    onClick: () => {
                         router.goTo(directTo);
                    },
               },
          }),
     ],
});`;

const button_clicker = `const ButtonClicker = () =>
Template({
     buttonText: \`You clicked me \${times.value} time\${times.value > 1 ? "s" : ""}\`,
     buttonOnClick: () => {
          times.setValue(times.value + 1);
     },
     text: "Go to reset page",
     directTo: "/reset",
});`;

const reset_clicker = `const ResetClicker = () =>
Template({
     buttonText: "Reset Clicker",
     buttonOnClick: () => {
          times.setValue(0);
     },
     text: "go to clicker",
     directTo: "/",
});`;

const import_template = `import Template from "./Template.js";`;

export default () => {
     return Template({
          title: "Refactoring your code",
          subtitle: "Avoiding repetitivness",
          next: {
               text: "Statefull vs Stateless Components",
               route: "/get-started/statefull-vs-stateless/",
          },
          children: [
               DocSection({
                    title: `Don't repeat yourself`,
                    text: `In the previous section, we wrote duplicate code that could be written differently and efficiently, and that is for ButtonClicker and ResetClicker:`,
               }),
               Comment(
                    `We will make a function named Template that will have some parameters to change the UI accordingly:`
               ),
               Comment(
                    `buttonText change the text of the button buttonOnClick the function that will execute when the button is clicked text text below the button directTo the route that the app will redirect to when the text is clicked`
               ),
               BeautifulCodeView({ text: template }),
               Comment(`Now we will change ButtonClicker to look like this:`),
               BeautifulCodeView({ text: button_clicker }),
               Comment(`and the same goes to ResetClicker :`),
               BeautifulCodeView({ text: reset_clicker }),
               Comment(
                    `You can go another step and make Template in a seperate file and import it in your App.js to make the file look cleaner.`
               ),
               BeautifulCodeView({ text: import_template, format: prism }),
          ],
     });
};
