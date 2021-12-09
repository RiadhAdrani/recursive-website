import NextButton from "../../components/buttons/NextButton.js";
import BeautifulCodeView from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import DocSection from "../../components/section/DocSection.js";
import Keyword from "../../components/spans/Keyword.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const import_route = `import Router from "./recursivejs/router/Router.js";`;

const import_views = `import ParagraphView from "./recursivejs/createcomponent/components/text/ParagraphView.js";
import DividerView from "./recursivejs/createcomponent/components/text/DividerView.js";`;

const import_views_short = `import p from "./recursivejs/createcomponent/components/text/ParagraphView.js";
import div from "./recursivejs/createcomponent/components/text/DividerView.js";`;

const new_router = `const router = new Router();`;

const create_route = `Router.Route({
     name: "/",
     title: "Tab title",
     component: () => YourComponent,
}),`;

const create_router = `const router = new Router([
     Router.Route({
          name: "/",
          title: "Button Clicker",
          component: () => ButtonClicker(),
     }),
     Router.Route({
          name: "/reset",
          title: "Button Reset",
          component: () => ResetClicker(),
     }),
]);`;

const button_clicker = `const ButtonClicker = () =>
DividerView({
     style: {
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
     },
     children: [
          ButtonView({
               text: \`You clicked me \${times.value} time\${times.value > 1 ? "s" : ""}\`,
               style: {
                    color: "white",
                    backgroundColor: "red",
                    fontSize: "2em",
                    padding: "10px",
                    alignSelf: "center",
               },
               events: {
                    onClick: () => {
                         times.setValue(times.value + 1);
                    },
               },
          }),
          ParagraphView({
               text: "Go to reset page.",
               style: {
                    color: "blue",
                    cursor: "pointer",
               },
               events: {
                    onClick: () => {
                         router.goTo("/reset");
                    },
               },
          }),
     ],
});`;

const reset_clicker = `const ResetClicker = () =>
DividerView({
     style: {
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
     },
     children: [
          ButtonView({
               text: \`Reset Clicker\`,
               style: {
                    color: "white",
                    backgroundColor: "red",
                    fontSize: "2em",
                    padding: "10px",
                    alignSelf: "center",
               },
               events: {
                    onClick: () => {
                         times.setValue(0);
                    },
               },
          }),
          ParagraphView({
               text: "Go to clicker.",
               style: {
                    color: "blue",
                    cursor: "pointer",
               },
               events: {
                    onClick: () => {
                         router.goTo("/");
                    },
               },
          }),
     ],
});`;

const render_route = `vDOM.app = () => router.render();`;

export default () => {
     return Template({
          title: "Routing",
          subtitle: "The illusion of directories",
          next: {
               text: "Refactoring your code",
               route: "/get-started/refactor",
          },
          children: [
               DocSection({
                    title: "Routing",
                    text: `To add multiple pages with different URLs, you should use routing, which is a complexe implementation of the setState feature and the browser's history object. If you are coming from React, Angular, Vue or any other web framework, this will be another cup of tea for you, otherwise, just focus and follow along:`,
               }),
               Comment("1. We will import the Router class:"),
               BeautifulCodeView({ text: import_route }),
               Comment(
                    "2. Import two other premade component: ParagraphView, the equivalent of <p> and DividerView which plays the role of the most used tag <div>:"
               ),
               BeautifulCodeView({ text: import_views }),
               Comment(
                    `you can import them as p and div or whatever you are comfortable with, like this:`
               ),
               BeautifulCodeView({ text: import_views_short }),
               Comment(`But, we will use the first import statement.`),
               Comment(
                    `3. We need to initialize the routing system. Just before the export statement, add this line:`
               ),
               BeautifulCodeView({ text: new_router }),
               Comment(
                    `Router constructor accepts one parameter, which is an array of Routes, a Route is like a directory in your web app. to create one, Router already have a premade function for them:`
               ),
               BeautifulCodeView({ text: create_route }),
               Comment([
                    Keyword("name "),
                    `the url of the route, the main route should have / as a route, the other can look like this /my-page.`,
               ]),
               Comment([
                    Keyword("title "),
                    `the title of the route which will appear on the - browser tab.`,
               ]),
               Comment([Keyword("component "), `the component that represent the route.`]),
               Comment(
                    `we will have two routes, a main one for the button clicker and second one to reset the counter:`
               ),
               BeautifulCodeView({ text: create_router }),
               Comment(`We will create ButtonClicker and ResetClicker`),
               Comment(
                    `4. We will add both component just before the Router. for the ButtonClicker we will add a ParagraphView as a text, below the button that will direct us to the reset page when clicked. We will wrap them both in a DividerView as a container, we will make some changes so the elements are centered. Your function should look like this:`
               ),
               BeautifulCodeView({ text: button_clicker }),
               Comment(
                    `If you missed it, We added an event listener to the ParagraphView, we used the router method goTo() that accepts one argument which is the name of the route that the app will redirect to.`
               ),
               Comment(
                    `5. For ResetClicker, we will copy paste the ButtonClicker and make some changes: the text property of the button will contain "Reset Clicker", the onClick event will change the value of the stateful object to 0, and the ParagraphView will redirect us to the main page and have its text changed. Your function for the ResetClicker should look something like this:`
               ),
               BeautifulCodeView({ text: reset_clicker }),
               Comment(
                    `6. At the end of the file, change the value of vDOM.app and set it to render the current Route:`
               ),
               BeautifulCodeView({ text: render_route, format: prism() }),
          ],
     });
};
