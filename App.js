import DividerView from "./recursivejs/createcomponent/components/text/DividerView.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";
import Main from "./views/Main.js";
import GetRandomTheme from "./style/GetRandomTheme.js";
import Router from "./recursivejs/router/Router.js";
import Map from "./map/Map.js";

window.theme = GetRandomTheme();
window.framework = "Kompose";
window.router = new Router([...Map()]);

export default () => {
     return DividerView({
          className: "app-wrapper-2",
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
};
