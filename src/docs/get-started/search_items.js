export default {
     route: "/search-todos",
     title: "Search todos",
     content: [
          {
               paragraph: `Let's add a search bar!
                    We need a state object and then
                    we will add an {Input} component just after 
                    the {Row} component encapsulating the input field and the add button:`,
          },
          { spacer: "20px" },
          { code: `const [search, setSearch] = setState("search", "");` },
          { spacer: "20px" },
          {
               code: `Input({
    type: "text",
    value: search,
    placeholder: "Search todos...",
    style: {  // 👈 inline style : can be used without className
            marginBottom: "20px",
            width: "50%",
            padding: "10px",
    },
    events: { 
        onChange: (e) => setSearch(e.target.value)
    },
}),`,
          },
          { spacer: "20px" },
          {
               paragraph: `All we need to do is to filter the todos if there is a text in the input, we will add this utility function just before the {return} statement:`,
          },
          { spacer: "20px" },
          {
               code: `// 👇 for each item, check if todo.text contains the search value or if the search value is just an empty string.
const filter = () => todos.filter(
    (todo) => todo.text.includes(search) || !search.trim()
);`,
          },
          { spacer: "20px" },
          {
               paragraph:
                    "We change the todo list to display the items returned from this function:",
          },
          { spacer: "20px" },
          {
               code: `Column({
    children: filter().map((todo) =>
            Row({
                children: [
                    Input({
                        type: "checkbox",
                        checked: todo.done,
                        events: {
                            onChanged: (e) => {
                                todo.done = e.target.checked;
                                setTodods(todos);
                            },
                        },
                    }),
                    P({ text: todo.text }),
                    Button({
                        text: "Delete",
                        events: {
                            onClick: () => {
                                setTodods(
                                    todos.filter((t) => t.uid !== todo.uid)
                                );
                            },
                        },
                    }),
                ],
            })
        ),
    }),`,
          },
          { spacer: "20px" },
          {
               paragraph:
                    "Congratulation 🎉!!! You have completed your first {Recursive} App! It's time to build the next Facebook or Youtube!",
          },
     ],
};
