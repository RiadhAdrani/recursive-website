import Main from "../recursivejs/createcomponent/components/sectionning/MainView.js";
import Welcome from "./Welcome.js";

export default () => {
     return Main({
          styleSheet: {
               className: "main-view",
               normal: { display: "flex", flexDirection: "column", flexGrow: "1" },
          },
          children: router.render(),
     });
};
