import App from "./App.js";

vDOM.app = () => App();

vDOM.devMode = false;

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
          "h1,h2,h3,h4,p": {
               margin: "0px",
               padding: "5px",
          },
          h4: {
               fontFamily: "Roboto",
               fontWeight: "bold",
          },
          "::-webkit-scrollbar": {
               width: "15px",
          },
          "::-webkit-scrollbar-track": {
               boxShadow: "inset 0 0 5px grey",
          },
          "::-webkit-scrollbar-thumb": {
               background: theme.primary,
          },
          "::-webkit-scrollbar-thumb:hover": {
               background: theme.primaryAccent,
          },
     },
};

vDOM.render();
