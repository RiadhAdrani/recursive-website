import { Column, Row } from "@riadh-adrani/recursive/Recursive-Components";
import { renderRouter } from "@riadh-adrani/recursive/Recursive-Router";
import GetStartedSideBar from "../widgets/GetStartedSideBar";

export default () => {
     return Row({
          styleSheet: {
               className: "get-started-wrapper",
               normal: {
                    flex: 1,
               },
          },
          children: [
               GetStartedSideBar(),
               Column({
                    styleSheet: {
                         className: "get-started-route-wrapper",
                         normal: {
                              marginLeft: "320px",
                              flex: 1,
                         },
                    },
                    children: [renderRouter()],
               }),
          ],
     });
};
