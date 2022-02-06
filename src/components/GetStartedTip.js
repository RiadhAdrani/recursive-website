import { B, Column, P, Span } from "@riadh-adrani/recursive/Recursive-Components";
import Colors from "../Style/Colors";

export default (tipTitle, code) => {
     return Column({
          styleSheet: {
               className: "get-started-tip-snippet",
               normal: {
                    padding: "20px",
                    background: "#f0f0ff",
                    margin: "10px 0px",
                    background: Colors.tip,
                    borderLeft: `10px solid ${Colors.tipDarker}`,
               },
          },
          children: [B({ children: tipTitle, style: { marginBottom: "10px" } }), P({ text: code })],
     });
};
