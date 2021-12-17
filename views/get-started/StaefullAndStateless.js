import Beautiful from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const set_state = `const iteration = setState(0);`;

const set_value = `import { Button } from "./recursivejs/createcomponent/Components.js";

const iteration = setState(0);

vDOM.app = () =>
     Button({
          text: \`You clicked \${iteration.value}\`,
          events: {
               onClick: () => {
                    iteration.setValue(iteration.value + 1);
               },
          },
     });

vDOM.render();`;

const update_after_example = `const selection = setState({
     RecursiveJs: { selected: true },
     React: { selected: true },
     Angular: { selected: false },
     Vue: { selected: true },
     Svelte: { selected: true },
     Ember: { selected: false },
});`;

const example_with_set_state = `// inside your component
onClick: () => {
     const currentSelection = selection.value;
     currentSelection.Angular.selected = true;
     selection.setValue(currentSelection);
};`;

const example_with_js_shenanigans = `// inside your component
onClick: () => {
     selection.setValue({ ...selection.value, Angular: { selected: true } });
};`;

const example_with_update_after = `// inside your component
onClick: () => {
     updateAfter(() => {
          selection.value.Angular.selected = true;
     });
};`;

export default () => {
     return Template({
          title: "State",
          subtitle: "Handling data changes",
          next: { text: "Routing", route: "/get-started/routing" },
          children: [
               DocSection({
                    title: "What is a State?",
                    text: `A state is the representation of the UI inside the RecursiveDOM. When the state changes, the virtual DOM create a new representation and compare it to the old one to make minimal changes to the UI which can help save time and improve performance.`,
               }),
               DocSection({
                    title: "SetState",
                    text: "To bind values to the UI, we use a SetState object:",
               }),
               Beautiful({ text: set_state }),
               Comment(
                    `The setState function is available globally, it accepts any type of data as the initial value, let's use it with our button:`
               ),
               Beautiful({ text: set_value }),
               Comment(
                    `Now whenever you click on the button, the value of iteration will increase and the UI will be changed accordingly !`
               ),
               DocSection({
                    title: `updateAfter`,
                    text: `The use of setState can be annoying when the state is represented by a large object, a JSON or Array for example, you need to get the current value and change what you need to change. Let's look at this example;`,
               }),
               Beautiful({ text: update_after_example }),
               Comment(`To change the value of Angular.selected you may do something like this:`),
               Beautiful({ text: example_with_set_state }),
               Comment(`Or maybe something like this if you love Javascript shenanigans:`),
               Beautiful({ text: example_with_js_shenanigans }),
               Comment(
                    `Huh? that's cool, but in reality this is a simple example! What if you need to change specific values in a bigger, more complexe object ? What if you wanted to change multiple State variables/objects ? For that you need updateAfter function; It is a globally available function that will change the UI after executing a function you specify as an argument. The last example will be:`
               ),
               Beautiful({ text: example_with_update_after, format: prism }),
               Comment(
                    `This is a more advanced approach, and it make your code looks cleaner and easier to debug and follow, BUT it's unsafe espacially when you don't use State objects and go with a normal variable.`
               ),
          ],
     });
};
