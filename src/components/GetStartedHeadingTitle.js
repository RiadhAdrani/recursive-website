import { H1 } from "@riadh-adrani/recursive/Recursive-Components";
import Colors from "../Style/Colors";

export default (text) =>
     H1({
          text,
          styleSheet: {
               className: "get-started-heading-title",
               normal: {
                    color: Colors.red,
                    marginBottom: "20px",
                    fontSize: "3.5em",
                    fontWeight: 600,
               },
          },
     });
