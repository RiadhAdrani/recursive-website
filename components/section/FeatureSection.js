import { H4, Section, P, Div } from "../../recursivejs/createcomponent/Components.js";

export default () => {
     const feature = ({ title, content }) => {
          return Section({
               styleSheet: {
                    className: "feature-section-view",
                    normal: {
                         padding: "10px",
                         margin: "10px",
                         backgroundColor: `${theme.primary}44`,
                         flex: 1,
                         borderRadius: "5px",
                         color: theme.primary,
                    },
               },
               children: [
                    H4({
                         text: title,
                         styleSheet: {
                              className: "feature-section-title",
                              normal: {
                                   margin: "0px",
                                   padding: "5px",
                                   fontSize: "1.3em",
                                   fontFamily: "Lato, sans-serif",
                              },
                         },
                    }),
                    P({
                         text: content,
                         styleSheet: {
                              className: "feature-section-content",
                              normal: {
                                   margin: "0px",
                                   padding: "5px",
                                   lineHeight: "1.5em",
                              },
                         },
                    }),
               ],
          });
     };

     return Div({
          styleSheet: {
               className: "feature-section",
               normal: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    padding: "40px 30px",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              flexDirection: "column",
                              padding: "10px 5px",
                         },
                    },
               ],
          },
          children: [
               feature({
                    title: "Component-Based",
                    content: `Build encapsulated components, 
                    then compose them to make complex UIs. 
                    Since component logic is written in JavaScript instead of templates, 
                    you can easily pass rich data through your app and keep state out of the DOM, 
                    while maintaining high performance`,
               }),
               feature({
                    title: "Declarative",
                    content: `${framework} makes it painless to create interactive UIs. 
                    Design simple views for each state in your application, 
                    and ${framework} will efficiently update and render just the right 
                    components when your data changes. 
                    Declarative views make your code more predictable and easier to debug.`,
               }),
               feature({
                    title: "Virtual DOM",
                    content: `${framework} is powered by a virtual DOM, 
                    which is a representation of the actual Document Object Model (DOM) in Javascript. 
                    The VDOM makes it easier to loop over components and compare 
                    them to minimally update specific values in the actual HTML document.`,
               }),
          ],
     });
};
