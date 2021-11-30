import Router from "../recursivejs/router/Router.js";
import GetStarted from "./GetStarted.js";
import GetStartedView from "../views/GetStarted.js";
import Examples from "../views/Examples.js";
import Docs from "../views/Docs.js";
import Welcome from "../views/Welcome.js";

export default () => {
     return [
          Router.Route({
               name: "/",
               title: framework,
               component: () => Welcome(),
          }),
          Router.Route({
               name: "/get-started",
               title: "Get Started",
               component: () => GetStartedView(),
          }),
          Router.Route({ name: "/docs", title: "Docs", component: () => Docs() }),
          Router.Route({ name: "/examples", title: "Examples", component: () => Examples() }),
          ...GetStarted(),
     ].map((route) => {
          return Router.Route({
               name: route.name,
               title: route.title,
               component: () => route.component(),
          });
     });
};
