import { H2 } from "@riadh-adrani/recursive/components";
import Colors from "../Style/Colors";

export default (title) => {
     return H2({
          text: title,
          styleSheet: {
               className: "get-started-section-title",
               normal: {
                    fontSize: "2em",
                    marginBottom: "10px",
                    fontWeight: "400",
                    color: Colors.red,
               },
          },
     });
};
