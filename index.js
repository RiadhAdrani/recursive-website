import App from "./App.js";

vDOM.app = () => App();

vDOM.devMode = true;

vDOM.staticStyle = {
     import: [
          'url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,400;1,700&display=swap")',
     ],
     selectors: {
          "#app,body": {
               display: "flex",
               flexDirection: "column",
               minHeight: "100%",
               padding: "0px",
               flex: 1,
               margin: "0px",
          },
          "#app": {
               animation: "fade-in 1s",
          },
          "h4,p": {
               margin: "0px",
               padding: "5px",
          },
          h4: {
               fontFamily: "Roboto",
               fontWeight: "bold",
          },
     },
};

vDOM.render();
