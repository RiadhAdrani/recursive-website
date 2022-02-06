import { P, Span } from "@riadh-adrani/recursive/Recursive-Components";

export default (text) => {
     return P({
          text: text
               .split(" ")
               .filter((word) => !["", " ", "\t", "\n"].includes(word))
               .map((word) => {
                    if (word.charAt() === "{" && word.charAt(word.length - 1) === "}") {
                         return Span({
                              text: [
                                   Span({
                                        text: word.substr(1, word.length - 2),
                                        styleSheet: {
                                             className: "code-highlighted-text",
                                             normal: {
                                                  background: "#00000015",
                                                  padding: "2px 5px",
                                                  borderRadius: "3px",
                                             },
                                        },
                                   }),
                                   " ",
                              ],
                         });
                    } else return Span({ text: word + " " });
               }),
          styleSheet: {
               className: "get-started-paragraph",
               normal: {
                    lineHeight: "1.75",
                    textAlign: "justify",
               },
          },
     });
};
