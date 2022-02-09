import { Column, H1, H4 } from "@riadh-adrani/recursive/components";
import Colors from "../Style/Colors";

export default () => {
     return Column({
          styleSheet: {
               className: "docs-wrapper",
               normal: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
               },
          },
          children: [
               H1({
                    text: "Coming Soon...",
                    style: { color: Colors.darkRed, textAlign: "center" },
               }),
               H4({
                    text: "The website is still under construction ! Come back later !",
                    style: { textAlign: "center" },
               }),
          ],
     });
};
