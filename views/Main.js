import { Components } from "../recursivejs/Recursive.js";
const { Main } = Components;

export default () => {
     return Main({
          styleSheet: {
               className: "main-view",
               normal: { display: "flex", flexDirection: "column", flexGrow: "1" },
          },
          children: router.render(),
     });
};
