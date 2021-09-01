import Container from "../recursivejs/components/Container.js";
import ImageView from "../recursivejs/components/ImageView.js";
import TextView from "../recursivejs/components/TextView.js";
import TitleView from "../recursivejs/components/TitleView.js";
import InlineSelector from "../recursivejs/InlineSelector.js";

export default () =>
     Container({
          style: InlineSelector({
               textAlign: "center",
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-evenly",
               flexWrap: "wrap",
               alignItems: "center",
               padding: "10px",
               color: "white",
               backgroundColor: "#212121",
          }),
          children: [
               TitleView.h3({
                    text: "PROJECT : RECURSIVE",
                    style: InlineSelector({ color: "#5cb85c", margin: "10px", padding: "0px" }),
               }),
               TextView({
                    style: InlineSelector({
                         display: "flex",
                         flexDirection: "row",
                         alignItems: "center",
                         cursor: "pointer",
                         margin: "10px",
                    }),
                    events: {
                         onClick: () => {
                              window.open("https://github.com/RiadhAdrani", "_blank");
                         },
                    },
                    text: [
                         "Contribute to this project",
                         ImageView({
                              imageURL:
                                   "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
                              style: InlineSelector({
                                   filter: "invert(100)",
                                   width: "30px",
                                   margin: "10px",
                              }),
                         }),
                    ],
               }),
               TextView({ text: "Copyright &copy; 2021 Adrani Riadh" }),
          ],
     });
