import H3 from "../../recursivejs/createcomponent/components/sectionning/HeadingTitle3View.js";
import SectionView from "../../recursivejs/createcomponent/components/sectionning/SectionView.js";
import P from "../../recursivejs/createcomponent/components/text/ParagraphView.js";

export default ({ title, text }) => {
     return SectionView({
          styleSheet: {
               className: "doc-sub-section",
               normal: {
                    padding: "5px",
                    margin: "5px 0px 5px 0px",
                    borderRadius: "5px",
               },
          },
          children: [
               H3({
                    text: title,
                    styleSheet: {
                         className: "doc-sub-section-title",
                         normal: {
                              margin: "0px",
                              padding: "5px",
                              fontSize: "1.1em",
                              color: "white",
                              display: "inline",
                              fontStyle: "italic",
                              fontWeight: "normal",
                              borderRadius: "3px",
                              backgroundColor: theme.primaryVariant,
                         },
                    },
               }),
               P({
                    text: text,
                    styleSheet: {
                         className: "doc-sub-section-content",
                         normal: {
                              margin: "0px",
                              padding: "5px",
                              lineHeight: "1.75em",
                              margin: "0px 0px 0px 0px",
                         },
                    },
               }),
          ],
     });
};
