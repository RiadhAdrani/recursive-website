import { Column, H3, P } from "@riadh-adrani/recursive/Recursive-Components";
import MediaQuery from "../Style/MediaQuery";

export default (title, text) => {
     return Column({
          hooks: { onRef: () => "title" },
          styleSheet: {
               className: "home-feature-view",
               normal: {
                    flex: 1,
                    padding: "30px 20px",
                    border: "1px solid #ffffff40",
                    margin: "0px 5px",
                    borderRadius: "5px",
               },
               mediaQueries: MediaQuery({
                    small: { normal: { marginBottom: "10px" } },
               }),
          },
          children: [H3({ text: title, style: { marginBottom: "10px" } }), P({ text })],
     });
};
