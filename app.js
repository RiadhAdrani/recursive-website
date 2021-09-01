import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import NavBar from "./components/NavBar.js";
import Container from "./recursivejs/components/Container.js";
import TextView from "./recursivejs/components/TextView.js";
import CreateComponent from "./recursivejs/CreateComponent.js";
import InlineSelector from "./recursivejs/InlineSelector.js";
import VDOM from "./recursivejs/VDOM.js";

const underConstruction = (text) =>
     Container({
          style: InlineSelector({
               display: "flex",
               flexDirection: "column",
               fontSize: "2em",
               textAlign: "center",
               justifyContent: "center",
               alignItems: "center",
               flex: 1,
          }),
          children: [
               TextView({
                    text: text,
                    style: InlineSelector({
                         fontFamily: "Helvetica",
                         fontSize: "2em",
                         fontWeight: "bold",
                         color: "#5cb85c",
                         margin: "10px 0px",
                    }),
               }),
               TextView({ text: "This page is under construction! You can check back later!" }),
          ],
     });

const pages = [
     { name: "/", title: "Recursive", component: () => Main() },
     {
          name: "get-started",
          title: "Start Here",
          component: () => underConstruction("Get Started"),
     },
     {
          name: "documentation",
          title: "Documentation",
          component: () => underConstruction("Docs"),
     },
     {
          name: "tutorials",
          title: "Tutorials",
          component: () => underConstruction("Tutorials"),
     },
     {
          name: "about-us",
          title: "About Us",
          component: () => underConstruction("About Us"),
     },
];

window.theme = VDOM.setState(true);
window.currentPage = VDOM.setState(0);

const Router = () => {
     console.log(history.pushState);

     history.pushState(
          {},
          `${pages[window.currentPage.value].title}`,
          `${pages[window.currentPage.value].name}`
     );
     return pages[window.currentPage.value].component();
};

const body = () =>
     new CreateComponent({
          tag: "div",
          key: "0",
          className: "body",
          inlineStyle: InlineSelector({
               minHeight: "100vh",
               width: "100%",
               background: `${window.theme.value ? "#1e1e1e" : "white"}`,
               flex: 1,
               flexDirection: "column",
               display: "flex",
               color: `${window.theme.value ? "white" : "#1e1e1e"}`,
               fontFamily: "Trebuchet MS",
          }),
          children: [
               NavBar({
                    buttons: pages,
               }),
               Router(),
               Footer(),
          ],
     });

export default () => body();
