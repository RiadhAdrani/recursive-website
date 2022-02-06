import { B, Column, P, Span } from "@riadh-adrani/recursive/Recursive-Components";
import Colors from "../Style/Colors";

export default (code) => {
     return Column({
          styleSheet: {
               className: "get-started-warning-snippet",
               normal: {
                    padding: "20px",
                    background: "#f0f0ff",
                    margin: "10px 0px",
                    background: Colors.warning,
                    borderLeft: `10px solid ${Colors.warningDarker}`,
               },
          },
          children: [B({ children: "Note:", style: { marginBottom: "10px" } }), P({ text: code })],
     });
};
