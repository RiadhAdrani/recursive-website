import { RecursiveDOM } from "./recursivejs/Recursive.js";

RecursiveDOM.init(
     document.getElementById("app"),
     document.getElementById("app-style"),
     document.getElementById("app-static-style"),
     { multiThreading: false }
);
