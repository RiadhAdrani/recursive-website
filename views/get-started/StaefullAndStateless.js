import Beautiful from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const stateful = `const statful = () => ButtonView({ text: \`You clicked on me \${times.value}\` });`;
const stateless = `const statless = ButtonView({ text: \`You clicked on me \${times.value}\` });`;

export default () => {
     return Template({
          title: "Stateful vs Stateless Components",
          subtitle: "Handling data changes",
          next: { text: "Styling and Style Sheet", route: "/get-started/style-vs-css/" },
          children: [
               DocSection({
                    title: "What do you mean by stateful ?",
                    text: `A Stateful component is a component that can react to state changes. In ${framework}, a Stateful Component is just a function that returns a component, the Stateless one is just a constant.`,
               }),
               Comment(`This component will react to the changes of times`),
               Beautiful({ text: stateful }),
               Comment(`While this one won't, unless you wrap it in another stateful component.`),
               Beautiful({ text: stateless, format: prism }),
               Comment(
                    `If you decide to pass data into your components, which you will do surely, don't forget to create them as functional components !`
               ),
          ],
     });
};
