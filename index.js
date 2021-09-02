import app from "./app.js";
import StateManager from "./recursivejs/StateManager.js";
import VDOM from "./recursivejs/VDOM.js";

new StateManager({ theme: VDOM.setState(true) });

new VDOM({
     appFunction: () => app(),
     root: document.getElementById("app"),
});

vDOM.render();
