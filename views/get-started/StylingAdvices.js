import DocSection from "../../components/section/DocSection.js";
import Template from "./Template.js";

export default () => {
     return Template({
          title: `Styling with ${framework}`,
          subtitle: "Just like the old days",
          next: { text: "Hooks", route: "/get-started/hooks" },
          children: [
               DocSection({
                    title: "Something to keep in mind when using styleSheet",
                    text: `While using styleSheet offers many possibilities, it like using the Cascading Style Sheet, so you should be aware of the overriding that could happen when you give two different component the same style className. In fact, every different component should have a different style className.`,
               }),
               DocSection({
                    title: `Where is the styleSheet rendered in?`,
                    text: `The RecursiveDOM collect all the styleSheet and make some computations to remove duplicates and merge styles, and then translate it to plain css and render it in the <style> element that you specified when initiating the virtual DOM.`,
               }),
          ],
     });
};
