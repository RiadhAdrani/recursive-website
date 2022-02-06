import { createRoute, createRouter } from "@riadh-adrani/recursive/Recursive-Router";
import get_started from "../docs/get-started/get_started";
import prism from "../prism/prism";
import GetStarted from "../views/GetStarted";
import GetStartedTemplate from "../views/GetStartedTemplate";
import Home from "../views/Home";

export default () =>
     createRouter(
          createRoute({
               name: "/",
               component: () => Home(),
               subRoutes: [
                    createRoute({ name: "/about", component: () => "" }),
                    createRoute({
                         name: "/get-started",
                         component: () => GetStarted(),
                         subRoutes: get_started.map((item, index) =>
                              createRoute({
                                   name: item.route,
                                   title: item.title,
                                   onLoad: () => {
                                        prism();
                                   },
                                   component: () => GetStartedTemplate(item, index, get_started),
                              })
                         ),
                    }),
                    createRoute({ name: "/docs", component: () => "" }),
               ],
          }),
          "recursive-website",
          false
     );
