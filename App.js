import Header from "./views/Header.js";
import Footer from "./views/Footer.js";
import Main from "./views/Main.js";

import GetRandomTheme from "./style/GetRandomTheme.js";
import Router from "./recursivejs/RecursiveRouter/Router.js";
import Map from "./map/Map.js";

import { Components } from "./recursivejs/Recursive.js";
const { Div } = Components;

window.framework = "Recursive.Js";
window.theme = GetRandomTheme();
window.router = new Router(Map());

const App = () =>
     Div({
          styleSheet: {
               className: "app-wrapper",
               normal: {
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    fontFamily: "Roboto, sans-serif",
               },
          },
          children: [Header(), Main(), Footer()],
     });

export default () => {
     return App();
};
