import { Code } from "@riadh-adrani/recursive/components";
import Colors from "../Style/Colors";
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
                    overflow: "auto",
               },
               webkitScrollbar: {
                    height: "10px",
               },
               webkitScrollbarTrack: {
                    background: Colors.grey,
               },
               webkitScrollbarThumb: {
                    background: Colors.darkerGrey,
               },
               webkitScrollbarThumbHover: {
                    background: Colors.darkerGrey,
               },
               webkitScrollbarThumbActive: {
                    background: Colors.darkRed,
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
