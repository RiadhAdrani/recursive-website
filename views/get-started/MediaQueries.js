import BeautifulCodeView from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const media_queries = `ButtonView({
     text: "Click",
     styleSheet: {
          className: "button",
          normal: {
               color: "white",
               backgroundColor: "red",
          },
          mediaQueries: [{ 
               condition: "(max-width:1000px)", 
               normal: { 
                    backgroundColor: "blue" 
               } 
          }],
     },
});`;

export default () => {
     return Template({
          title: "Media Queries",
          subtitle: "Make your App responsive",
          next: {
               text: "When styling...",
               route: "/get-started/styling-advice",
          },
          children: [
               DocSection({
                    title: "styleSheet and mediaQueries",
                    text: `MediaQueries are here too, let's add one that changes the color of the button to blue when the browser screen is less than 1000px:`,
               }),
               BeautifulCodeView({ text: media_queries, format: prism }),
               Comment(
                    `We added a key named mediaQueries to styleSheet. This object should contains an array of queries. A query is an object composed of at least one value: condition - the condition to watch for to apply the new style, it is the same in css. state - You can add the name of the state that you want to be changed: normal, hover, focus, active... In our case, we just changed the normal style state.`
               ),
          ],
     });
};
