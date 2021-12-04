import Beautiful from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const inline_style = `ButtonView({
     text: "Click",
     style: {
          color: "white",
          backgroundColor: "red",
          fontSize: "2em",
          padding: "10px",
          alignSelf: "center",
          },
}),`;

const stylesheet = `ButtonView({
     text: "Click",
     styleSheet:{
          className: "button",
          normal: {
               color: "white",
               backgroundColor: "red",
          }
     },
}),`;

const stylesheet_states = `ButtonView({
     text: "Click",
     styleSheet:{
          className: "button",
          normal: {
               color: "white",
               backgroundColor: "red",
          },
          hover:{
               backgroundColor:"blue",
          },
          active: {
               backgroundColor: "black",
          }
     },
}),`;

export default () => {
     return Template({
          title: "Styling",
          subtitle: "Making your web app look beautiful",
          next: { text: "Animations", route: "/get-started/animations/" },
          children: [
               DocSection({
                    title: "Style vs Stylesheet",
                    text: `The style parameter in ready-made components refer to the inline style that will be applied to the component:`,
               }),
               Beautiful({ text: inline_style }),
               Comment(
                    `style is stronger than styleSheet which is a seperate parameter that too contains style for the components, but it is approached differently, and you can add other features like states, animations and mediaQueries here is the same button but using the styleSheet:`
               ),
               Beautiful({ text: stylesheet }),
               DocSection({
                    title: "StyleSheet and states",
                    text: `In styleSheet, you should add a className, think of it like grouping the style of multiple components into one class. And then we have normal that contains the definition of the style, well, normal refer to the style of the component in the normal state, and you guessed it, you can add hover which will change the style when the component is being hovered on, there are many other states, like active for when the component is being clicked on, focus which define the changes to be made when the element is focused, or placeholder which will style the placeholder text of an InputView.`,
               }),
               Comment(
                    `Here's the same button, but with a different backgroundColor for each state:`
               ),
               Beautiful({ text: stylesheet_states, format: prism }),
               Comment(
                    `But wait, we are not done with the styleSheet object yet! click the button below!`
               ),
          ],
     });
};
