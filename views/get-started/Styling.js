import Beautiful from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const css_file = `button {
     background: red;
     color: white;
     padding: 5px 10px;
}`;

const static_style = `import { Button } from "./recursivejs/createcomponent/Components.js";

vDOM.app = () =>
     Button({
          text: "Say Hello World",
          events: {
               onClick: () => {
                    alert("Hello World");
               },
          },
     });

// Add static style here:
vDOM.staticStyle = {
     selectors:{
          "button":{
               background: "red";
               color: "white";
               padding: "5px 10px";
          }
     }
}


vDOM.render();`;

const inline_component = `import { Button } from "./recursivejs/createcomponent/Components.js";

vDOM.app = () =>
     Button({
          text: "Say Hello World",
          events: {
               onClick: () => {
                    alert("Hello World");
               },
          },
          // we added the style here:
          style: {
               background: "red",
               color: "white",
               padding: "5px 10px",
          },
     });

vDOM.render();`;

const component_style_sheet = `import { Button } from "./recursivejs/createcomponent/Components.js";

vDOM.app = () =>
     Button({
          text: "Say Hello World",
          events: {
               onClick: () => {
                    alert("Hello World");
               },
          },
          styleSheet: {
               className: "hello-world-button",
               normal: {
                    background: "red",
                    color: "white",
                    padding: "5px 10px",
               },
          },
     });

vDOM.render();`;

const add_hover = `import { Button } from "./recursivejs/createcomponent/Components.js";

vDOM.app = () =>
     Button({
          text: "Say Hello World",
          events: {
               onClick: () => {
                    alert("Hello World");
               },
          },
          styleSheet: {
               className: "hello-world-button",
               normal: {
                    background: "red",
                    color: "white",
                    padding: "5px 10px",
               }
               hover: {
                    background: "blue",
               }
          }
     });

vDOM.render();`;

export default () => {
     return Template({
          title: "Styling",
          subtitle: "Making your web app look beautiful",
          next: { text: "State", route: "/get-started/state" },
          children: [
               DocSection({
                    title: "Style vs StyleSheet vs StaticStyle",
                    text: `To make our button red for example, RecursiveJS provide you with a multitude of methods, with each one having its own advantages and drawbacks:`,
               }),
               DocSection({
                    title: "Standard external style.css",
                    text: "This is the standard way of styling your app, you just create a .css file and link it to your index.html, buisness as usual:",
               }),
               Beautiful({ text: css_file, language: "css" }),
               Comment(
                    `But that's not really why you are using this library, we want everything inside the js files.`
               ),
               DocSection({
                    title: "RecursiveDOM's static style sheet",
                    text: "This feature allow you to create an equivalent style sheet within your index.js, just before rendering:",
               }),
               Beautiful({ text: static_style }),
               Comment(
                    `And as its name suggest, the style written is static and will be injected when the app first load, just like an external css file.`
               ),
               DocSection({
                    title: "Component's inline style",
                    text: "This is the equivalent representation of the inline style in this library, and its simple and easy. In our Hello World app, we will add a key named style in which we will declare our style.",
               }),
               Beautiful({ text: inline_component }),
               Comment(
                    `Yeah that's cool, but what if you wanted to go to the next level with a hover or active effect ? Well for that you need a styleSheet.`
               ),
               DocSection({
                    title: "Component's styleSheet",
                    text: "The styleSheet key is the equivalent of your external .css file, but cooler, because its within your UI declaration and is computed automatically. It provides other features compared to the style key, like the ability to add other states other than the normal one; like hover, active, focus ...etc To implement this feature, we add a key named styleSheet, in which we have to add a className and the description of each state we want. The className is needed for the RecursiveDOM to compute styles and create its own style sheet then inject it in the style tag we specified early. Let's remake our red button :",
               }),
               Beautiful({ text: component_style_sheet }),
               Comment(
                    `Below normal state, we can add a hover state, let's make the button blue when hovered on:`
               ),
               Beautiful({ text: add_hover, format: prism }),
               Comment(
                    `And that's the basics of styleSheet! Yep, we are just scratching the surface, you can add a handful of other useful states, animations and mediaQueries to make your app looks professional!`
               ),
          ],
     });
};
