import { B, Column, P } from "@riadh-adrani/recursive/Recursive-Components";
import Colors from "../Style/Colors";

export default (code) => {
     return Column({
          styleSheet: {
               className: "get-started-danger-snippet",
               normal: {
                    padding: "20px",
                    background: "#f0f0ff",
                    margin: "10px 0px",
                    background: Colors.red,
                    color: "white",
                    borderLeft: `10px solid ${Colors.darkerRed}`,
               },
          },
          children: [P({ text: code })],
     });
};
