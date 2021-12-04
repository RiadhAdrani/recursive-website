import P from "../../recursivejs/createcomponent/components/text/ParagraphView.js";

export default ({ text, link }) => {
     return P({
          text,
          events: {
               onClick: () => {
                    if (link) {
                         router.goTo(link);
                    }
               },
          },
          styleSheet: {
               className: `section-link-${link ? "allowed" : "not-allowed"}`,
               normal: {
                    margin: "2.5px 2.5px 2.5px 10px",
                    padding: "15px 20px",
                    cursor: link ? "pointer" : "not-allowed",
                    transition: "0.5s",
               },
               hover: {
                    transform: "translateX(10px)",
                    textDecoration: "underline solid white 1px",
                    backgroundColor: theme.primaryVariant,
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              margin: "2.5px",
                         },
                    },
               ],
          },
     });
};
