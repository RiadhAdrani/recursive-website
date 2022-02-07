import { Column, EmptyBox, Link, Row } from "@riadh-adrani/recursive/Recursive-Components";
import GetStartedCode from "../components/GetStartedCode";
import GetStartedCommandSnippet from "../components/GetStartedCommandSnippet";
import GetStartedDanger from "../components/GetStartedDanger";
import GetStartedHeadingTitle from "../components/GetStartedHeadingTitle";
import GetStartedList from "../components/GetStartedList";
import GetStartedParagraph from "../components/GetStartedParagraph";
import GetStartedSectionSubTitle from "../components/GetStartedSectionSubTitle";
import GetStartedSectionTitle from "../components/GetStartedSectionTitle";
import GetStartedSpacer from "../components/GetStartedSpacer";
import GetStartedTip from "../components/GetStartedTip";
import GetStartedWarning from "../components/GetStartedWarning";
import prism from "../prism/prism";
import Colors from "../Style/Colors";

export default (json, index, all) => {
     const StepLink = (title, to, marginLeft, marginRight) => {
          return Link({
               to,
               children: title,
               style: {
                    marginLeft,
                    marginRight,
               },
               styleSheet: {
                    className: "step-shortcut",
                    normal: {
                         color: Colors.darkRed,
                         fontSize: "0.9em",
                         textAlign: "center",
                    },
               },
          });
     };

     return Column({
          hooks: {
               onRef: () => {
                    prism();
               },
               onCreated: () => {
                    prism();
               },
          },
          styleSheet: {
               className: "get-started-template",
               normal: {
                    padding: "30px",
               },
          },
          children: [
               Row({
                    styleSheet: {
                         className: "shortcut-wrapper",
                         normal: {
                              marginBottom: "30px",
                         },
                    },
                    children: [
                         index > 0
                              ? StepLink(
                                     `< ${all[index - 1].title}`,
                                     `/get-started${all[index - 1].route}`,
                                     "0px",
                                     "auto"
                                )
                              : "",
                         index < all.length - 1
                              ? StepLink(
                                     `${all[index + 1].title} >`,
                                     `/get-started${all[index + 1].route}`,
                                     "auto",
                                     "0px"
                                )
                              : "",
                    ],
               }),
               GetStartedHeadingTitle(json.title),
               ...json.content.map((item) => {
                    if (item.paragraph) return GetStartedParagraph(item.paragraph);
                    if (item.title) return GetStartedSectionTitle(item.title);
                    if (item.subTitle) return GetStartedSectionSubTitle(item.subTitle);
                    if (item.list) return GetStartedList(item.list);
                    if (item.command) return GetStartedCommandSnippet(item.command);
                    if (item.warning) return GetStartedWarning(item.warning);
                    if (item.danger) return GetStartedDanger(item.danger);
                    if (item.tip) return GetStartedTip(item.tipTitle, item.tip);
                    if (item.spacer) return GetStartedSpacer(item.spacer);
                    if (item.code) return GetStartedCode(item.code);
               }),
               EmptyBox({ height: "40px" }),
               index < all.length - 1
                    ? StepLink(
                           `${all[index + 1].title} >`,
                           `/get-started${all[index + 1].route}`,
                           "auto",
                           "0px"
                      )
                    : "",
               index === all.length - 1
                    ? StepLink(
                           `The real journey just began! Check the documentation for more!`,
                           "/docs",
                           "auto",
                           "auto"
                      )
                    : "",
          ],
     });
};
