import { Column, Row } from "@riadh-adrani/recursive/components";
import { renderRoute } from "@riadh-adrani/recursive/router";
import MediaQuery from "../Style/MediaQuery";
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
                              maxWidth: "calc(100vw - 320px)",
                              overflow: "hidden",
                              flex: 1,
                         },
                         mediaQueries: MediaQuery({
                              small: {
                                   normal: {
                                        marginLeft: "40px",
                                        maxWidth: "calc(100vw - 40px)",
                                   },
                              },
                         }),
                    },
                    children: [renderRoute()],
               }),
          ],
     });
};
