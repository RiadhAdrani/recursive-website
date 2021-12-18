import RecursiveDOM from "./recursivejs/RecursiveDOM.js";

RecursiveDOM.init(
     document.getElementById("app"),
     document.getElementById("app-style"),
     document.getElementById("app-static-style"),
     { multiThreading: false }
);
