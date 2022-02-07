import { Code } from "@riadh-adrani/recursive/Recursive-Components";
import MediaQuery from "../Style/MediaQuery";

export default (code) => {
     return Code({
          flags: {
               forceRerender: true,
          },
          className: "language-javascript",
          text: code,
          styleSheet: {
               className: "get-started-code-snippet",
               normal: {
                    padding: "20px !important",
               },
               mediaQueries: MediaQuery({
                    small: {
                         normal: {
                              fontSize: "0.8em !important",
                         },
                    },
               }),
          },
     });
};
