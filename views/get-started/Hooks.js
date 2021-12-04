import BeautifulCodeView from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import DocSubSection from "../../components/section/DocSubSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const hooks = `ButtonView({
     text: "Click",
     styleSheet: {
          className: "button",
          normal: {
               color: "white",
               backgroundColor: "red",
               padding: "10px",
          },
     },
     hooks: {
          onCreated: () => {
               console.log("The button was created !");
          },
     },
});`;

export default () => {
     return Template({
          title: "Hooks",
          subtitle: "Lifecycle methods",
          next: {
               text: "More advanced stuff",
               route: "/",
          },
          children: [
               DocSection({
                    title: `What are "Hooks" anyway?`,
                    text: `Hooks are methods executed at lifecycle changes, like when a component is created or destroyed, each case have a dedicated hook. As for now, we have 4 hooks: `,
               }),
               DocSubSection({
                    title: "onCreated",
                    text: `executes after the component has been injected in the DOM. `,
               }),
               DocSubSection({
                    title: "onUpdated",
                    text: ` executes when at least one property has changed. the only property excluded from this rule is the tag property.`,
               }),
               DocSubSection({
                    title: "onDestroyed",
                    text: `executes when the component has been removed from the DOM.`,
               }),
               DocSubSection({
                    title: "beforeDestroyed",
                    text: `executes just before removing the component from the DOM.`,
               }),
               BeautifulCodeView({ text: hooks, format: prism }),
               Comment(`onCreated hook will display the button was created in the console.`),
          ],
     });
};
