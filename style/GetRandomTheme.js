import Themes from "./Themes.js";

export default () => {
     const l = Object.keys(Themes).length;
     const index = Math.floor(Math.random() * l);
     return Themes[Object.keys(Themes)[index]];
};
