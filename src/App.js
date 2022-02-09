import { Column, Div } from "@riadh-adrani/recursive/components";
import { renderRoute } from "@riadh-adrani/recursive/router";
import { SetStyle } from "@riadh-adrani/recursive/style";
import Router from "./router/Router";
import MediaQuery from "./Style/MediaQuery";
import NavBar from "./widgets/NavBar";
import prismcss from "./prism/prismstyle";

Router();

SetStyle({
     import: [
          "url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap')",
     ],
     selectors: {
          html: {
               width: "100%",
               minHeight: "100vh",
          },
          body: {
               display: "flex",
               margin: "0px",
               fontFamily: "Source Sans Pro",
               flexDirection: "column",
               lineHeight: "1.25",
               fontSize: "17px",
          },
          p: {
               margin: "0px",
          },
          "h1,h2,h3,h4,h5,h6": {
               margin: "0px",
          },
          ...prismcss({ background: "#1e1e1e" }),
     },
});

export default () =>
     Column({
          styleSheet: { className: "app-wrapper", normal: { minHeight: "100vh" } },
          children: [
               NavBar(),
               Div({
                    styleSheet: {
                         className: "nav-bar-offset",
                         normal: {
                              height: "50px",
                         },
                         mediaQueries: MediaQuery({ small: { normal: { height: "130px" } } }),
                    },
               }),
               renderRoute(),
          ],
     });
