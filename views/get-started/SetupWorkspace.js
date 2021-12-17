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
               <!-- static style will be injected here -->
               <style id="app-static-style"></style>
     
               <!-- components style will be dynamically injected and removed here -->
               <style id="app-style"></style>
          </head>
          <body>
               <!-- this div will host your app -->
               <div id="app"></div>
     
               <!-- importing init.js : initiating the RecursiveDOM and global variables -->
               <script src="init.js" type="module"></script>
     
               <!-- importing index.js : include app logic -->
               <script src="index.js" type="module"></script>
          </body>
     </html>`;

     const initSnippet = `import RecursiveDOM from "./recursivejs/RecursiveDOM.js";

RecursiveDOM.init(
          document.getElementById("app"),
          document.getElementById("app-style"),
          document.getElementById("app-static-style")
     );`;

     const indexSnippet = `import { Button } from "./recursivejs/createcomponent/Components.js";

vDOM.app = () =>
     Button({
          text: "Say Hello World",
          events: {
               onClick: () => {
                    alert("Hello World");
               },
          },
     });
     
vDOM.render();`;

     return Template({
          title: "Setup the Workspace",
          subtitle: `Say Hello`,
          next: {
               text: "Styling",
               route: "/get-started/style",
          },
          children: [
               DocSection({
                    title: "First,",
                    text: [
                         `To get started, we need first to make the library works. First, Create your index.html and index.js in a folder, then, download and drop this repo in the same location. Second, we need to import the library, and make the changes needed so your index.html recognize it correctly, your index.html should look something like this:`,
                    ],
               }),
               BeautifulCodeView({ text: htmlSnippets, language: "html" }),
               DocSection({
                    title: "Create an init.js file",
                    text: "If you missed it, you need to create an init.js in which we will initiate the Virtual DOM and global variables:",
               }),
               BeautifulCodeView({ text: initSnippet }),
               DocSection({
                    title: "In index.js",
                    text: `Now, in index.js, we will build our app UI. Let's write Hello World; we will create a button that will display an alert saying "Hello World":`,
               }),
               BeautifulCodeView({ text: indexSnippet, format: fn }),
               Comment(
                    `And that's it as a "Hello World"! You should be on your way to create the new Facebook or Youtube ! Let's take this a step further with styligng !`
               ),
          ],
     });
};
