import { createRoute, createRouter } from "@riadh-adrani/recursive/router";
import get_started from "../docs/get-started/get_started";
import About from "../views/About";
import Docs from "../views/Docs";
import GetStarted from "../views/GetStarted";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import GetStartedTemplate from "../widgets/GetStartedTemplate";

export default () =>
     createRouter(
          createRoute({
               name: "/",
               component: Home,
               title: "Recursive : A tool to build beautiful web Apps",
               subRoutes: [
                    createRoute({ name: "/404", title: "Not Found", component: NotFound }),
                    createRoute({ name: "/about", title: "About", component: About }),
                    createRoute({ name: "/docs", title: "Documentation", component: Docs }),
                    createRoute({
                         name: "/get-started",
                         redirectTo: `/get-started${get_started[0].route}`,
                         component: GetStarted,
                         subRoutes: get_started.map((item, index) =>
                              createRoute({
                                   name: item.route,
                                   title: item.title,
                                   component: () => GetStartedTemplate(item, index, get_started),
                              })
                         ),
                    }),
               ],
          }),
          "recursive-website",
          true
     );
