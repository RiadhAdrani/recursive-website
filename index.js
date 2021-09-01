import app from "./app.js";
import VDOM from "./recursivejs/VDOM.js";

window.vDOM = new VDOM({
     appFunction: () => app(),
     root: document.getElementById("app"),
});

window.vDOM.render();
