import { Ol } from "../../../recursivejs/createcomponent/Components.js";
import { Li } from "../../recursivejs/createcomponent/Components.js";

export default (children) => {
     return Ol({
          children: children.map((child) =>
               Li({
                    children: child,
                    styleSheet: {
                         className: "demo-step",
                         marker: { color: theme.primary, fontWeight: "bold", fontSize: "1.2em" },
                    },
               })
          ),
     });
};
