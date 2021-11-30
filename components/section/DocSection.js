import H4 from "../../recursivejs/createcomponent/components/sectionning/HeadingTitle4View.js";
import SectionView from "../../recursivejs/createcomponent/components/sectionning/SectionView.js";
import P from "../../recursivejs/createcomponent/components/text/ParagraphView.js";

export default ({ title, text }) => {
     return SectionView({
          styleSheet: {
               className: "doc-section",
               normal: {
                    padding: "15px",
                    margin: "5px 0px 5px 0px",
                    borderRadius: "5px",
               },
          },
          children: [
               H4({
                    text: title,
                    styleSheet: {
                         className: "doc-section-title",
                         normal: {
                              margin: "0px",
                              padding: "5px",
                              fontSize: "1.5em",
                              color: theme.primaryVariant,
                         },
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
                              margin: "0px 0px 0px 5px",
                         },
                    },
               }),
          ],
     });
};
