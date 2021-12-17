import { Li, Ul } from "../../../recursivejs/createcomponent/Components.js";
import BeautifulCodeView from "../../components/demo/BeautifulCodeView.js";
import Comment from "../../components/demo/Comment.js";
import Step from "../../components/demo/Step.js";
import Steps from "../../components/demo/Steps.js";
import DocSection from "../../components/section/DocSection.js";
import prism from "../../dependencies/prism/prism.js";
import Template from "./Template.js";

const import_router = `import Router from "./recursivejs/router/Router.js";`;

const import_component = `import { Button, P, Div, Link } from "./recursivejs/createcomponent/Components.js";`;

const new_router = `window.router = new Router();`;

const new_route = `Router.Route({
     name: "/",
     title: "Tab title",
     component: () => YourComponent(),
     subRoutes: []
}),`;

const complete_routing = `import { Button, P, Div, Link } from "./recursivejs/createcomponent/Components.js";
import Router from "./recursivejs/router/Router.js";

const iteration = setState(0);

const MainPage = () =>
          Div({
               children:[
                    Button({
                         text: \`You clicked \${iteration.value}\`,
                         events: {
                              onClick: () => {
                                   iteration.setValue(iteration.value + 1);
                              },
                         },
                    }),
                    Link({
                         children:"About",
                         to:"/about"
                    })
               });

const AboutPage = () =>
          Div({
               children:[
                    P({
                         text: \`Hello World made with Recursive.Js\`,
                    }),
                    Link({
                         children:"About",
                         to:"/"
                    })
               })
          ]});


window.router = new Router(
     Router.Route({
          name:"/",
          title: "Hello World",
          component () => MainPage(),
          subRoutes:[
               Router.Route({
                    name:"/about",
                    title: "About",
                    component: () => AboutPage(),
               })
          ]
     );

vDOM.app = router.render();
vDOM.render();`;

export default () => {
     return Template({
          title: "Routing",
          subtitle: "The illusion of directories",
          next: {
               text: "Coming soon : Events",
               route: "/",
          },
          children: [
               DocSection({
                    title: "Routing",
                    text: `To add multiple pages with different URLs, you should use routing, which is a complexe implementation of the setState feature and the browser's history object. If you are coming from React, Angular, Vue or any other web framework, this will be another cup of tea for you, otherwise, just focus and follow along: Let's create an About page:`,
               }),
               Steps([
                    Step([
                         Comment("We will import the Router class:"),
                         BeautifulCodeView({ text: import_router }),
                    ]),
                    Step([
                         Comment("Import other premade components:"),
                         BeautifulCodeView({ text: import_component }),
                    ]),
                    Step([
                         Comment(
                              "We need to initialize the routing system. Just before the export statement, add this line:"
                         ),
                         BeautifulCodeView({ text: new_router }),
                         Comment(
                              `Router constructor accepts one parameter, which is the root Route; a Route is like a directory in your web app. to create one, Router already have a premade function for them:`
                         ),
                         BeautifulCodeView({ text: new_route }),
                         Ul({
                              children: [
                                   "name : the url of the route, the main route should have / as a route, the other can look like this /my-page.",
                                   "title : the title of the route which will appear on the - browser tab.",
                                   "component : the component that represent the route.",
                                   "subRoutes : sub pages as an array of Route",
                              ].map((item) =>
                                   Li({
                                        children: item,
                                        type: "square",
                                        styleSheet: {
                                             className: "params-list",
                                             normal: {
                                                  padding: "5px",
                                             },
                                             marker: {
                                                  color: theme.primaryAccent,
                                                  fontWeight: "bold",
                                                  fontSize: "1.5em",
                                             },
                                        },
                                   })
                              ),
                         }),
                    ]),
               ]),
               Comment(`we will have the root page and an About one, and make the router global:`),
               BeautifulCodeView({ text: complete_routing, format: prism }),
          ],
     });
};
