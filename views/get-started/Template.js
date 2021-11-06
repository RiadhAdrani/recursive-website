import DividerView from "../../recursivejs/createcomponent/components/text/DividerView.js";

export default (children) => {
     return DividerView({
          styleSheet: {
               className: "get-started-section-wrapper",
               normal: {
                    display: "flex",
                    flexDirection: "column",
               },
          },
          children: children,
     });
};
