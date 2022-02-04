import { createRoute, createRouter } from "@riadh-adrani/recursive/Recursive-Router";
import Home from "../views/Home";

export default () =>
     createRouter(
          createRoute({
               name: "/",
               component: () => Home(),
               subRoutes: [
                    createRoute({ name: "/about", component: () => "" }),
                    createRoute({ name: "/get-started", component: () => "" }),
                    createRoute({ name: "/docs", component: () => "" }),
               ],
          }),
          "recursive-website"
     );
