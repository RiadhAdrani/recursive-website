import H4 from "../../recursivejs/createcomponent/components/sectionning/HeadingTitle4View.js";
import SectionView from "../../recursivejs/createcomponent/components/sectionning/SectionView.js";
import P from "../../recursivejs/createcomponent/components/text/ParagraphView.js";

export default ({ title, text }) => {
     return SectionView({
          styleSheet: {
               className: "doc-section",
               normal: {
                    padding: "20px",
               },
          },
          children: [
               H4({
                    text: title,
                    styleSheet: {
                         className: "doc-section-title",
                         normal: { margin: "0px", padding: "5px", fontSize: "1.3em" },
                    },
               }),
               P({
                    text: text,
                    styleSheet: {
                         className: "doc-section-content",
                         normal: {
                              margin: "0px",
                              padding: "10px",
                              lineHeight: "1.75em",
                              margin: "0px 0px 0px 10px",
                         },
                    },
               }),
          ],
     });
};
