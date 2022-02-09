import { Column, H4, I, Img, P, Row, Span } from "@riadh-adrani/recursive/components";

export default (title, icon, text) => {
     return Row({
          styleSheet: {
               className: "home-card",
               normal: {
                    padding: "30px 20px",
                    marginBottom: "10px",
                    backgroundColor: "#00000020",
                    borderRadius: "5px",
               },
          },
          children: [
               Column({
                    styleSheet: {
                         className: "home-card-info",
                         normal: {
                              flex: 2,
                         },
                    },
                    children: [
                         H4({ text: title, style: { color: "#cf2026" } }),
                         P({
                              styleSheet: {
                                   className: "home-card-details",
                                   normal: {
                                        textAlign: "justify",
                                        padding: "10px 0px",
                                        lineHeight: "1.5",
                                   },
                              },
                              text: text
                                   .split(" ")
                                   .filter((word) => !["", " ", "\t", "\n"].includes(word))
                                   .map((word) => {
                                        if (
                                             word.charAt() === "{" &&
                                             word.charAt(word.length - 1) === "}"
                                        ) {
                                             return Span({
                                                  text: [
                                                       Span({
                                                            text: word.substr(1, word.length - 2),
                                                            styleSheet: {
                                                                 className: "code-highlighted-text",
                                                                 normal: {
                                                                      background: "#3e3e3e",
                                                                      color: "white",
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
                         }),
                    ],
               }),
               Column({
                    styleSheet: {
                         className: "home-card-icon",
                         normal: {
                              fontSize: "3em",
                              flex: 1,
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#cf2026",
                         },
                    },
                    children: [
                         I({
                              className: icon,
                         }),
                    ],
               }),
          ],
     });
};
