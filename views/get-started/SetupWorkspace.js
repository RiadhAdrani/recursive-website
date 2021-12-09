import NextButton from "../../components/buttons/NextButton.js";
import DocSection from "../../components/section/DocSection.js";
import WelcomeTop from "../../components/section/WelcomeTop.js";
import Template from "./Template.js";
import Keyword from "../../components/spans/Keyword.js";
import BeautifulCodeView from "../../components/demo/BeautifulCodeView.js";
import fn from "../../dependencies/prism/prism.js";
import Comment from "../../components/demo/Comment.js";

export default () => {
     const htmlSnippets = `<!DOCTYPE html>
<html lang="en">
     <head>
          <title>First App</title>

          <!-- Style will be injected here -->
          <style id="app-style"></style>
     </head>
     <body>
          <!-- UI will be injected here -->
          <div id="app"></div>

          <!-- Initializing global variables and methods -->
          <script src="init.js" type="module"></script>

          <!-- This is your starting point -->
          <script src="index.js" type="module"></script>
     </body>
</html>`;

     const initSnippet = `import RecursiveDOM from "./recursivejs/RecursiveDOM.js";
RecursiveDOM.init(
     document.getElementById("app"), 
     document.getElementById("app-style"
     ));`;

     const indexSnippet = `import App from "./App.js";

vDOM.app = () => App();
vDOM.render();`;

     const appSnippet = `import ButtonView from "./recursivejs/createcomponent/components/forms/ButtonView.js";

export default () =>
     ButtonView({
          text: "Say 'Hello World'",
          style: {
               color: "white",
               backgroundColor: "red",
               textAlign: "center",
               fontSize: "2em",
               padding: "10px",
               alignSelf: "center",
               margin: "auto",
          },
          events: {
               onClick: () => {
                    alert("Hello World");
               },
          },
     });`;

     return Template({
          title: "Setup the Workspace",
          subtitle: `Say Hello`,
          next: {
               text: "State and data binding",
               route: "/get-started/data-binding",
          },
          children: [
               DocSection({
                    title: "First,",
                    text: [
                         `Drop `,
                         Keyword("the repo", "https://github.com/RiadhAdrani/recursive"),
                         ` into your working directory, 
               where your `,
                         Keyword("index.js"),
                         ` is located, and that's it for the setup part. 
               Then, import the library, and make the changes needed so your `,
                         Keyword("index.html"),
                         ` looks like this :
               `,
                    ],
               }),
               BeautifulCodeView({ text: htmlSnippets, language: "html" }),
               DocSection({
                    title: "Create an init.js file",
                    text: "Inside the just-created file, add these couple lines of code:",
               }),
               BeautifulCodeView({ text: initSnippet }),
               DocSection({
                    title: "In index.js",
                    text: "This new file will host all your configurations, and it will be the starting point of the app.",
               }),
               BeautifulCodeView({ text: indexSnippet }),
               DocSection({
                    title: "Hello World",
                    text: "You guessed it, you should create another Javascript file named App.js which will export the UI component. This is not necessary but organization is key if you want to build the next Facebook or Youtube.",
               }),
               BeautifulCodeView({ text: appSnippet, format: fn }),
               Comment(
                    `The code above will render a red button containing a white text "Say'Hello World'" that will display an alert saying "Hello World".`
               ),
               Comment(
                    `And that's it for your first app! You should be on your way to create the new Facebook or Youtube !`
               ),
          ],
     });
};
