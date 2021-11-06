import SetupWorkspace from "../views/get-started/SetupWorkspace.js";

export default () => {
     return [
          {
               name: "/get-started/set-up/",
               title: "Set up the library",
               component: () => SetupWorkspace(),
          },
          {
               name: "/get-started/hello World/",
               title: "Hello World App",
               component: () => "Hello World",
          },
          {
               name: "/get-started/routing/",
               title: "Routing",
               component: () => "Routing",
          },
          {
               name: "/get-started/statefull-vs-stateless/",
               title: "Statefull vs Stateless Components",
               component: () => "Statefull vs Stateless",
          },
          {
               name: "/get-started/refactor/",
               title: "Refactoring your code",
               component: () => "Refactor",
          },
          {
               name: "/get-started/style-vs-css/",
               title: "Inline Style vs StyleSheet",
               component: () => "Inline style vs StyleSheet",
          },
          {
               name: "/get-started/animations/",
               title: "Animations",
               component: () => "Animatons",
          },
          {
               name: "/get-started/media-queries/",
               title: "Media Queries",
               component: () => "Media Queries",
          },
          {
               name: "/get-started/hooks/",
               title: "Hooks",
               component: () => "Hooks",
          },
     ];
};
