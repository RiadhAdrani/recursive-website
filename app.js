import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import NavBar from "./components/NavBar.js";
import Container from "./recursivejs/components/Container.js";
import TextView from "./recursivejs/components/TextView.js";
import CreateComponent from "./recursivejs/CreateComponent.js";
import InlineSelector from "./recursivejs/InlineSelector.js";
import Router from "./recursivejs/Router.js";

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

window.router = new Router([
     Router.Route({ name: "/", title: "Recursive", component: () => Main() }),
     Router.Route({
          name: "/get-started",
          title: "Get Started",
          component: () => underConstruction("Get Started"),
     }),
     Router.Route({
          name: "/documentation",
          title: "Docs",
          component: () => underConstruction("Docs"),
     }),
     Router.Route({
          name: "/tutorials",
          title: "Tutorials",
          component: () => underConstruction("Tutorial"),
     }),
     Router.Route({
          name: "/about-us",
          title: "About",
          component: () => underConstruction("About us"),
     }),
]);

const body = () =>
     new CreateComponent({
          tag: "div",
          key: "0",
          className: "body",
          inlineStyle: InlineSelector({
               minHeight: "100vh",
               width: "100%",
               background: `${window.stateManager.data.theme.value ? "#1e1e1e" : "white"}`,
               flex: 1,
               flexDirection: "column",
               display: "flex",
               color: `${window.stateManager.data.theme.value ? "white" : "#1e1e1e"}`,
               fontFamily: "Trebuchet MS",
          }),
          children: [
               NavBar({
                    buttons: window.router.routes,
               }),
               window.router.render(),
               Footer(),
          ],
     });

export default () => body();
