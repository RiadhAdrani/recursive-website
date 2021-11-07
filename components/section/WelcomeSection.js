import Img from "../../recursivejs/createcomponent/components/multimedia/ImageView.js";
import Section from "../../recursivejs/createcomponent/components/sectionning/SectionView.js";
import Div from "../../recursivejs/createcomponent/components/text/DividerView.js";
import WelcomeListSection from "./WelcomeListSection.js";

export default ({
     title = "Get Started",
     invert = false,
     links = [],
     image = "../assets/welcome-fig.png",
}) => {
     const SectionList = WelcomeListSection({ links, title, inverted: invert });

     const SectionImage = Div({
          renderIf: false,
          styleSheet: {
               className: `welcome-section-img-wrapper-${invert ? "inverted" : ""}`,
               normal: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flex: 1,
                    padding: "20px",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              display: invert ? "none" : "flex",
                         },
                    },
               ],
          },
          children: [
               Img({
                    src: image,
                    styleSheet: {
                         className: "welcome-section-img",
                         normal: { maxHeight: "300px" },
                         mediaQueries: [
                              {
                                   condition: "(max-width:900px)",
                                   normal: {
                                        maxHeight: "auto",
                                        maxWidth: "100%",
                                   },
                              },
                         ],
                    },
               }),
          ],
     });

     return Section({
          styleSheet: {
               className: "welcome-get-started-section-wrapper",
               normal: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    margin: "20px",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:900px)",
                         normal: {
                              flexDirection: "column",
                         },
                    },
               ],
          },
          children: !invert ? [SectionList, SectionImage] : [SectionImage, SectionList],
     });
};
