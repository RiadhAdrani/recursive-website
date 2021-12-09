import Router from "../recursivejs/router/Router.js";
import Animations from "../views/get-started/Animations.js";
import Hooks from "../views/get-started/Hooks.js";
import MediaQueries from "../views/get-started/MediaQueries.js";
import RefactoringCode from "../views/get-started/RefactoringCode.js";
import RoutingSetup from "../views/get-started/RoutingSetup.js";
import SetupWorkspace from "../views/get-started/SetupWorkspace.js";
import StaefullAndStateless from "../views/get-started/StaefullAndStateless.js";
import StateAndBinding from "../views/get-started/StateAndBinding.js";
import Styling from "../views/get-started/Styling.js";
import StylingAdvices from "../views/get-started/StylingAdvices.js";
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
                              name: "/data-binding",
                              title: "Set State & one-way data binding",
                              component: () => StateAndBinding(),
                         }),
                         Router.Route({
                              name: "/routing",
                              title: "Routing",
                              component: () => RoutingSetup(),
                         }),
                         Router.Route({
                              name: "/refactor",
                              title: "Refactoring your code",
                              component: () => RefactoringCode(),
                         }),
                         Router.Route({
                              name: "/statefull-vs-stateless",
                              title: "Statefull vs Stateless Components",
                              component: () => StaefullAndStateless(),
                         }),
                         Router.Route({
                              name: "/style-vs-css",
                              title: "Inline Style vs StyleSheet",
                              component: () => Styling(),
                         }),
                         Router.Route({
                              name: "/animations",
                              title: "Animations",
                              component: () => Animations(),
                         }),
                         Router.Route({
                              name: "/media-queries",
                              title: "Media Queries",
                              component: () => MediaQueries(),
                         }),
                         Router.Route({
                              name: "/styling-advice",
                              title: `Styling with ${framework}`,
                              component: () => StylingAdvices(),
                         }),
                         Router.Route({
                              name: "/hooks",
                              title: "Hooks",
                              component: () => Hooks(),
                         }),
                    ],
               }),
               Router.Route({ name: "/docs", title: "Docs", component: () => Docs() }),
               Router.Route({ name: "/examples", title: "Examples", component: () => Examples() }),
          ],
     });
