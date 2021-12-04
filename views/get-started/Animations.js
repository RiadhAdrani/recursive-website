import Beautiful from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const animation = `ButtonView({
     text: "Click",
     styleSheet: {
          className: "button",
          normal: {
               color: "white",
               backgroundColor: "red",
               animation: "change-color 2s infinite",
          },
          animations: [
               {
                    name: "change-color",
                    steps: {
                         "0%": { backgroundColor: "red" },
                         "50%": { backgroundColor: "yellow" },
                         "100%": { backgroundColor: "red" },
                    },
               },
          ],
     },
});`;

export default () => {
     return Template({
          title: "Animations",
          subtitle: "StyleSheet and animations",
          next: { text: "Media Queries", route: "/get-started/media-queries/" },
          children: [
               DocSection({
                    title: "In the styleSheet",
                    text: "In styleSheet, You can add animations: let's add a looping animation that will change the color of the button:",
               }),
               Beautiful({ text: animation, format: prism }),
               Comment(
                    `We added a key named animations that contains an array of animations. The animation object is composed of two keys: name - the name of the animation. steps - the steps of the animation.`
               ),
               Comment(
                    `At the normal style state of the component we added the key animation with the value change-color 2s infinite which translate to "play the animation named change-color for a duration of 2s and loop it an infinite amount of times."`
               ),
               Comment(`You can make things wilder by adding an animations for the hover state.`),
          ],
     });
};
