export default {
     route: "/check-delete-items",
     title: "Check and delete items from the Todo list",
     content: [
          {
               paragraph: `Until this moment, 
               a {todo} item is represented only by its {text} , 
               we need to change that so every item has a {uid} (unique identifier),
               changing the {blueprint} of a todo will allow us to manipulate the {list} of todos
               without affecting two items having the exact same {text} , 
               which is an edge case, 
               but that's what differntiate a good developer form an average one.`,
          },
          {
               paragraph: `We will create a function that create a todo object, 
          accepts the {text} as the only argument,
          and return a {JSON} object. After the {states} declaration and before the return statement, add this function:`,
          },
          { spacer: "10px" },
          {
               code: `// 👇 a function that create a todo item.
const todo = (text) => {
    return {
        text,
        done: false,
        uid: Date.now(),
    };
};`,
          },
          { spacer: "10px" },
          {
               tipTitle: "Date.now()",
               tip: `The method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.`,
          },
          { paragraph: `Let's change the {Add} button click event:` },
          { spacer: "10px" },
          {
               code: `onClick: () => {
    if (text.trim()) {
            const newTodo = todo(text); // 👈 create a new todo item
            todos.push(newTodo); // 👈 add it to the todos list
            setTodods(todos); 
            setText("");
    }
},`,
          },
          { spacer: "10px" },
          { paragraph: `Or just like this:` },
          { spacer: "10px" },
          {
               code: `onClick: () => {
    if (text.trim()) {
            setTodods([...todos, todo(text)]);
            setText("");
    }
},`,
          },
          { spacer: "10px" },
          { paragraph: `Finally, we need to update the {todo} component:` },
          { spacer: "10px" },
          {
               code: `Row({ // 👈 we wrapped the content in a container
    styleSheet: {
    className: "todo-item",
        normal: {
            border: "2px solid black",
            padding: "5px 10px",
            width: "100%",
            alignItems: "center",
            marginBottom: "5px",
            borderRadius: "10px",
        },
    },
    children: [
            Input({ // 👈 input of type checkbox to toggle the state of the item.
                type: "checkbox",
                checked: todo.done,
            }),
            P({ // 👈 display the text
                text: todo.text,
                styleSheet: {
                    className: "todo-item-text",
                    normal: { flex: 1, marginLeft: "20px" },
                },
            }),
            Button({ // 👈 delete button
                text: "Delete",
            }),
        ],
    })`,
          },
          { spacer: "20px" },
          {
               paragraph:
                    "We need now to handle item checking and deleting. First, we will add an {onClick} event to the {delete} button: ",
          },
          { spacer: "20px" },
          {
               code: `Button({
    text: "Delete",
    events: {
        onClick: () => {
            setTodods( // 👈 update the todos state with a filtered one, removing the current todo
                todos.filter((item) => item.uid !== todo.uid) 
            );
        },
    },
}),`,
          },
          { spacer: "20px" },
          { paragraph: "Then, we will handle the todo checking using {onChanged} event:" },
          { spacer: "20px" },
          {
               code: `Input({
    type: "checkbox",
    checked: todo.done,
    events: {
            onChanged: (e) => {
                todo.done = e.target.checked; // 👈 update done value with the one of Input.
                setTodods(todos);
            },
    },
}),`,
          },
     ],
};
