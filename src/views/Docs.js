import { Column, H1, H4 } from "@riadh-adrani/recursive/Recursive-Components";
import Colors from "../Style/Colors";

export default () => {
     return Column({
          styleSheet: {
               className: "docs-wrapper",
               normal: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
               },
          },
          children: [
               H1({ text: "Coming Soon...", style: { color: Colors.darkRed } }),
               H4({ text: "The website is still under construction ! Come back later !" }),
          ],
     });
};
