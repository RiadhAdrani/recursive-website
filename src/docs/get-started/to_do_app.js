export default {
     route: "/to-do-app",
     title: "Basic Todo App",
     content: [
          {
               paragraph: `We mentioned, at the start, what we want the app to offer, but it is a good practice to study the need for every project.`,
          },
          {
               subTitle: "Describing the UI",
          },
          {
               paragraph: `To make a simple {todo} ,
               we need to create a todo containing some text, 
               add it to a list and display that list, 
               we may want to delete an item from the list or search for an item, 
               but let's just stick with the two main functionalitites.`,
          },
          {
               paragraph: `Let's create an {input} field in which the user can enter some text. 
               We are not going to create {Components} from scratch (defining the tag, children and properties) 
               because Recursive already provide (almost) all {htmlElements} as ready-made components, 
               all we need to do is importing them.`,
          },
          { spacer: "10px" },
          { code: `import { Input, Column } from "@riadh-adrani/recursive/Recursive-Components";` },
          { spacer: "10px" },
          {
               paragraph: `We grabbed the {Column} component as well, which is a container that display items inside vertically. 
               Think of it as a {<div>} with a {display} : {flex} and {flex-direction} : {column} .`,
          },
          {
               paragraph: `Let's combine both components to display something:`,
          },
          { spacer: "10px" },
          {
               code: `Render(() => {
    return Column({
        children: [
            Input({ 
                type: "text", 
                value: "", 
                placeholder: "Enter some text here..."
            })
        ],
    });
});`,
          },
          { spacer: "10px" },
          {
               paragraph: `We can see an {<input>} element rendered on the screen 
               with a placeholder saying "Enter some text here..."`,
          },
          {
               paragraph: `"Let's add an {Add} button" 😎, let's append it just after the {Input} component.`,
          },
          { spacer: "10px" },
          {
               code: `Render(() => {
    return Column({
        children: [
            Input({
                type: "text",
                value: "",
                placeholder: "Enter some text here...",
            }),
            // 👇 Add button here 
            Button({
                text: "Add",
            }),
        ],
    });
});`,
          },
          { spacer: "10px" },
          {
               paragraph: `Well it is not a very beautiful sight, 
               let's put the {Input} and the {Button} components
               inside a {Row} .`,
          },
          { spacer: "10px" },
          {
               code: `Render(() => {
    return Column({
        children: [
            // 👇 We wrapped both component in a Row container:
            Row({
                children: [
                    Input({
                        type: "text",
                        value: "",
                        placeholder: "Enter some text here...",
                    }),
                    Button({
                        text: "Add",
                    }),
                ],
            }),
        ],
    });
});`,
          },
          { subTitle: `Using "setState"` },
          {
               paragraph: `To keep track of data,
          we need to store it inside a {stateful} object,
          which handled by the {setState} method. 
          Let's make a stateful object that store of the input field.
          Add the following line just before the {return} statement.`,
          },
          {
               spacer: "10px",
          },
          { code: `const [text, setText] = setState("text", "");` },
          { spacer: "10px" },
          {
               paragraph: `The {setState} method accepts up to {4} parameters, 
               but we will focus on the {2} most important one: `,
          },
          {
               spacer: "20px",
          },
          {
               paragraph: `{uid} : (1) this parameter is mandatory, 
            and it should be unique across the whole app. 
            In this example we passed "text" as a uid.`,
          },
          {
               paragraph: `{value} : (2) assign an initial value to the state. 
               In the example we assigned an empty string as an initial value.`,
          },
          {
               spacer: "20px",
          },
          {
               paragraph: `The {setState} method return an array of {5} elements 
               that we can use with a {decontructing assignment} 
               to give us the choice of naming our variables. 
               In our case we will focus on the first 2 elements: `,
          },
          {
               spacer: "20px",
          },
          {
               paragraph: `{value} - {any} : the value of the state object at the current rendering iteration.`,
          },
          {
               paragraph: `{setValue} - {function} : A method that allow the changing of the state, triggering an {update}`,
          },
          {
               spacer: "20px",
          },
          { paragraph: `Let's use what we saw here to keep track of the Input's {value} .` },
          {
               spacer: "20px",
          },
          {
               code: `Render(() => {
// 👇 Add the state here:
const [text, setText] = setState("text", "");

return Column({
     children: [
         Row({
             children: [
                 Input({
                     type: "text",
                     // 👇 Change the value to be "text"
                     value: text,
                     placeholder: "Enter some text here...",
                 }),
                 Button({
                     text: "Add",
                 }),
             ],
         }),
     ],
 });
});`,
          },
          {
               spacer: "20px",
          },
          {
               paragraph: `Good Job! 
               but we forgot to add something! 
               We need to change the value of the state whenever the user write some text in the {Input} field:
               We will add an event called {onChange} that listen for these changes and update the text value:`,
          },
          {
               spacer: "20px",
          },
          {
               code: `Render(() => {
const [text, setText] = setState("text", "");

return Column({
     children: [
         Row({
             children: [
                 Input({
                     type: "text",
                     value: text,
                     placeholder: "Enter some text here...",
                     // 👇 inside events, we will add onChange,
                     events:{
                         onChange: (e) => setText(e.target.value),
                     }
                 }),
                 Button({
                     text: "Add",
                 }),
                 // 👇 Add the text variable here and see how it changes when you write something.
                 text,
             ],
         }),
     ],
  });
});`,
          },
          {
               warning: `"onChange" is the equivalent of "oninput". On the other hand, the counterpart of "onchange" event is "onChanged" in Recursive.`,
          },
          { spacer: "20px" },
          { subTitle: "Adding items" },
          {
               paragraph: `To add items, we need first a state to store our items like with what we did for the {input} text, 
               but this time we will initiate it with an empty array.`,
          },
          { spacer: "20px" },
          { code: `const [todos, setTodods] = setState("todos", []);` },
          { spacer: "20px" },
          {
               paragraph: `Then, just below the {Row} components, inside the children of {Column} , we wil display our {todo} items:`,
          },
          { spacer: "20px" },
          {
               code: `Column({
    children: todos.map((todo) => P({ text: todo })),
}),`,
          },
          { spacer: "20px" },
          {
               paragraph: `Nothing display! 
               That's because we did't add any {todo} yet, 
               let's implement an {onClick} event on the button that add whatever we wrote to the {todos}`,
          },
          { spacer: "20px" },
          {
               code: `Button({
    text: "Add",
        events: {
            onClick: () => {
                if (text.trim()) { // 👈 Check if the text is not empty
                    setTodods([...todos, text]); // 👈 add an item to the todo list
                    setText(""); // 👈 reset the input field
                }
            },
        },
}),`,
          },
          { spacer: "20px" },
          {
               paragraph: `Congratulation ! You can add todos now 🎉 ! 
               But our application is far from being ready, 
               we need to be be able delete todos,
               search for todos,
               and we will add an about page.
               Let's look at {Styling} with Recursive.`,
          },
     ],
};
