import NextButton from "../../components/buttons/NextButton.js";
import BeautifulCodeView from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const stateSnippet = `const times = setState(0);`;
const changeButtonSnippet = `...
text: \`You clicked me \${times.value} time\${times.value > 1 ? "s" : ""}\`,
...`;

const onclickSnippet = `...
events:{
     onClick: () => {
          times.setValue(times.value + 1)
     }
}
...`;

const finalSnippet = `import ButtonView from "./recursivejs/createcomponent/components/forms/ButtonView.js";

// we added the stateful object here
const times = setState(0);

export default () =>
     ButtonView({
          // display the value of times
          text: \`You clicked me \${times.value} time\${times.value > 1 ? "s" : ""}\`,
          style: {
               color: "white",
               backgroundColor: "red",
               textAlign: "center",
               fontSize: "2em",
               padding: "10px",
               alignSelf: "center",
               margin: "auto",
          },
          events: {
               // and changed the onClick event
               onClick: () => {
                    times.setValue(times.value + 1);
               },
          },
     });`;

export default () => {
     return Template({
          title: "Stateful & Stateless Objects",
          subtitle: "One way data binding",
          next: { text: "Routing", route: "/get-started/routing/" },
          children: [
               DocSection({
                    title: "Stateful Object (SetState)",
                    text: `A stateful variable is an object that will change the state of the application whenever you change its value. In this library, you can use "setState", an object having a value property (Obviously containing the var value) and a setValue method which takes one parameter "newValue". calling setState will change the value of the object and execute a rerender of UI (minimal changes).`,
               }),
               DocSection({
                    title: "Let's build on top of the Hello World example",
                    text: `Building on the "Hello World" demo, we will change the code so the button will display the number of times we clicked on it,we will add a couple of things:`,
               }),
               Comment("1. First, add a stateful object and initialize it at 0 :"),
               BeautifulCodeView({ text: stateSnippet }),
               Comment("2. Then, we change the text of the button:"),
               BeautifulCodeView({ text: changeButtonSnippet }),
               Comment(
                    `the expression below will add an "s" if the value of times is greater than 1, else it will add an empty string, which is nothing.`
               ),
               BeautifulCodeView({ text: `\${times.value > 1 ? "s" : ""}` }),
               Comment(
                    `3. Finally, we will change the onClick event to increment the value of times`
               ),
               BeautifulCodeView({ text: onclickSnippet }),
               Comment(`Your App.js should look like this:`),
               BeautifulCodeView({ text: finalSnippet, format: prism }),
               Comment(`Now challenge your friends to a clicking game !`),
          ],
     });
};
