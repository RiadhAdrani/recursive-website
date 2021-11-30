import csstotext from "./csstotext.js";

/**
 * Convert media Queries to css format
 * @param {JSON} mediaQueries processed media queries
 */
export default (mediaQueries, isClass = true) => {
     let mediaQueryText = "\n";
     for (var cond in mediaQueries) {
          mediaQueryText += `@media ${cond}{\n`;
          for (var s in mediaQueries[cond]) {
               mediaQueryText += `\t${isClass ? "." : ""}${s}{\n${csstotext(
                    mediaQueries[cond][s]
               )}\t}\n`;
          }
          mediaQueryText += "}\n\n";
     }

     return mediaQueryText;
};
