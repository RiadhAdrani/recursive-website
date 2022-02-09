import { Column, H1, H3, Link } from "@riadh-adrani/recursive/components";
import Colors from "../Style/Colors";

export default () => {
     return Column({
          style: {
               flex: 1,
               alignItems: "center",
               justifyContent: "center",
          },
          children: [
               H1({ text: "404 NOT FOUND", style: { color: Colors.darkRed, fontSize: "2.5em" } }),
               H3({ text: "Whoops! The URL you are looking for does not exists at the moment !" }),
               Link({
                    children: "Go back to the main page",
                    to: "/",
                    style: {
                         background: Colors.darkerRed,
                         padding: "5px 20px",
                         color: "white",
                         marginTop: "10px",
                         borderRadius: "5px",
                    },
               }),
          ],
     });
};
