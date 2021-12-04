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

export default () => {
     return [
          {
               name: "/get-started/set-up/",
               title: "Set up the library",
               component: () => SetupWorkspace(),
          },
          {
               name: "/get-started/data-binding/",
               title: "Set State & one-way data binding",
               component: () => StateAndBinding(),
          },
          {
               name: "/get-started/routing/",
               title: "Routing",
               component: () => RoutingSetup(),
          },
          {
               name: "/get-started/refactor/",
               title: "Refactoring your code",
               component: () => RefactoringCode(),
          },
          {
               name: "/get-started/statefull-vs-stateless/",
               title: "Statefull vs Stateless Components",
               component: () => StaefullAndStateless(),
          },

          {
               name: "/get-started/style-vs-css/",
               title: "Inline Style vs StyleSheet",
               component: () => Styling(),
          },
          {
               name: "/get-started/animations/",
               title: "Animations",
               component: () => Animations(),
          },
          {
               name: "/get-started/media-queries/",
               title: "Media Queries",
               component: () => MediaQueries(),
          },
          {
               name: "/get-started/styling-advice/",
               title: `Styling with ${framework}`,
               component: () => StylingAdvices(),
          },
          {
               name: "/get-started/hooks/",
               title: "Hooks",
               component: () => Hooks(),
          },
     ];
};
