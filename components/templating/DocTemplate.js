import { Components } from "../../recursivejs/Recursive.js";

const { Div, H1, H2, H3, H4, P, Sub, Section, Span } = Components;

const webC = `Web Components are a set of features that provide a standard component model for the Web[1] allowing for encapsulation and interoperability of individual HTML elements.`;
const c = {
     paragraph: "This is a constructor of Component",
     props: {
          tag: { text: "HTML Tag.", type: "String" },
          children: { text: "Children to be injected.", type: "Array | CreateComponent | String" },
          style: { text: "Inline style", type: "JSON" },
          styleSheet: {
               text: "The equivalent of CSS style sheet. Should contains a key named `className to work correctly`",
               type: "JSON",
          },
          hooks: { text: "Define lifecycle methods", type: "JSON" },
     },
};

const transformIntoDoc = () => {
     return Section({
          children: [
               H3({ text: "Constructor" }),
               P({ text: c.paragraph }),
               Div({
                    children: (() => {
                         const output = [];
                         for (let p in c.props) {
                              output.push(
                                   Div({
                                        styleSheet: {
                                             className: "constructor-property",
                                             normal: {
                                                  display: "flex",
                                                  flexDirection: "row",
                                                  marginBottom: "5px",
                                             },
                                        },
                                        children: [
                                             P({
                                                  styleSheet: {
                                                       className: "property-name-type",
                                                       normal: {
                                                            color: theme.primary,
                                                       },
                                                  },
                                                  text: [
                                                       Span({
                                                            text: p,
                                                            style: {
                                                                 color: theme.secondaryAccent,
                                                                 background: theme.primary,
                                                                 padding: "2.5px 10px",
                                                                 borderRadius: "2.5px",
                                                                 fontFamily: "Lato, sans-serif",
                                                            },
                                                       }),
                                                       Sub({
                                                            text: `${c.props[p].type}`,
                                                            style: { margin: "0px 5px" },
                                                       }),
                                                       " - ",
                                                  ],
                                             }),
                                             P({ text: c.props[p].text }),
                                        ],
                                   })
                              );
                         }
                         return output;
                    })(),
               }),
          ],
     });
};

export default () => {
     return Div({
          styleSheet: {
               className: "doc-component-view",
          },
          children: [
               Div({
                    styleSheet: {
                         className: "doc-component-header",
                         normal: {
                              padding: "30px 20px",
                              backgroundColor: theme.secondaryAccent,
                         },
                    },
                    children: [
                         H1({
                              text: [
                                   "Component ",
                                   Span({
                                        text: "<tag>",
                                        styleSheet: {
                                             className: "component-html-tag",
                                             normal: {
                                                  borderWidth: "2px",
                                                  borderStyle: "solid",
                                                  borderColor: theme.primary,
                                                  padding: "2.5px 15px",
                                                  fontSize: "0.5em",
                                                  fontStyle: "italic",
                                                  borderRadius: "30px",
                                             },
                                        },
                                   }),
                              ],
                         }),
                         H2({ text: "The Component Element" }),
                         H4({
                              text: [
                                   "Instance of ",
                                   Span({
                                        text: "CreateComponent",
                                        styleSheet: {
                                             className: "component-instance-of",
                                             normal: {
                                                  borderWidth: "2px",
                                                  borderStyle: "solid",
                                                  borderColor: theme.primary,
                                                  padding: "2.5px 15px",
                                                  fontSize: "0.75em",
                                                  fontStyle: "italic",
                                                  borderRadius: "30px",
                                             },
                                        },
                                   }),
                              ],
                         }),
                    ],
               }),
               Section({
                    styleSheet: { className: "doc-component-constructor" },
                    children: transformIntoDoc(),
               }),
          ],
     });
};
