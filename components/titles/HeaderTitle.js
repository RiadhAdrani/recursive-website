import H2 from "../../recursivejs/createcomponent/components/sectionning/HeadingTitle2View.js";

export default ({ text }) => {
     return H2({
          text,
          styleSheet: {
               className: "header-title",
               normal: {
                    margin: "0px",
                    padding: "5px",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: { textAlign: "center", paddingBottom: "10px" },
                    },
               ],
          },
     });
};
