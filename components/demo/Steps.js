import { Components } from "../../recursivejs/Recursive.js";

const { Ol, Li } = Components;

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
