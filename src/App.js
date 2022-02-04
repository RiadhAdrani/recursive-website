import { Column, Div, EmptyBox } from "@riadh-adrani/recursive/Recursive-Components";
import { renderRouter } from "@riadh-adrani/recursive/Recursive-Router";
import { SetStyle } from "@riadh-adrani/recursive/Recursive-Style";
import Router from "./router/Router";
import MediaQuery from "./Style/MediaQuery";
import NavBar from "./widgets/NavBar";

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
          },
          p: {
               margin: "0px",
          },
          "h1,h2,h3,h4,h5,h6": {
               margin: "0px",
          },
     },
});

export default () =>
     Column({
          styleSheet: { className: "app-wrapper", normal: {} },
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
               renderRouter(),
          ],
     });