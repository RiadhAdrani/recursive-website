import Router from "../recursivejs/router/Router.js";
import RoutingSetup from "../views/get-started/RoutingSetup.js";
import SetupWorkspace from "../views/get-started/SetupWorkspace.js";
import StaefullAndStateless from "../views/get-started/StaefullAndStateless.js";
import Styling from "../views/get-started/Styling.js";
import GetStartedView from "../views/GetStarted.js";
import Examples from "../views/Examples.js";
import Docs from "../views/Docs.js";
import Welcome from "../views/Welcome.js";

export default () =>
     Router.Route({
          name: "/",
          title: framework,
          component: () => Welcome(),
          subRoutes: [
               Router.Route({
                    name: "/get-started",
                    title: "Get Started",
                    component: () => GetStartedView(),
                    subRoutes: [
                         Router.Route({
                              name: "/set-up",
                              title: "Set up the library",
                              component: () => SetupWorkspace(),
                         }),
                         Router.Route({
                              name: "/routing",
                              title: "Routing",
                              component: () => RoutingSetup(),
                         }),
                         Router.Route({
                              name: "/state",
                              title: "Statefull vs Stateless Components",
                              component: () => StaefullAndStateless(),
                         }),
                         Router.Route({
                              name: "/style",
                              title: "Inline Style vs StyleSheet",
                              component: () => Styling(),
                         }),
                    ],
               }),
               Router.Route({ name: "/docs", title: "Docs", component: () => Docs() }),
               Router.Route({ name: "/examples", title: "Examples", component: () => Examples() }),
          ],
     });
