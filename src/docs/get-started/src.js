export default {
     route: "/index-js",
     title: "index.js",
     content: [
          {
               paragraph: `In the {src} folder, you will find a file named {index.js} , open it and have a look at the code, but don't worry, we will start from scratch.`,
          },
          {
               tip: "index.js is the entry point that will communicate with the html file to, generate and update the UI.",
               tipTitle: "Project Entry Point",
          },
          {
               subTitle: "Starting from scratch:",
          },
          {
               paragraph:
                    "To render an App with Recursive, we need at least a {Component} and the {Render} method; we will import them like this:",
          },
          { spacer: "20px" },
          { code: `import { CreateComponent, Render } from "@riadh-adrani/recursive/Recursive";` },
          { spacer: "20px" },
          {
               paragraph:
                    "{CreateComponent} : is a class that allow the user to create components. (You : 😑)",
          },
          {
               paragraph: "{Render} : is a method that render the created component into the {DOM}",
          },
          { spacer: "20px" },
          {
               paragraph: "Let's combine both to display something on the screen:",
          },
          { spacer: "20px" },
          { code: `Render(new CreateComponent({ tag: "p", children: "Hello World" }));` },
          { spacer: "20px" },
          {
               danger: "Whoops! You got an error! Recursive is based on functions, so we need to change the component to a function that returns the component.",
          },
          { spacer: "20px" },
          { code: `Render(() => new CreateComponent({ tag: "p", children: "Hello World" }));` },
          { spacer: "20px" },
          {
               warning: `If you are not familiar with the syntax "() => {}", it is just another way to declare functions in Javascript called
          "Arrow Function"`,
          },
          {
               paragraph: `Congratulation, you have rendered your "Hello World" app 🎉.`,
          },
     ],
};
