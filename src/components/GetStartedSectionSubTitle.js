import { H3 } from "@riadh-adrani/recursive/components";

export default (text) => {
     return H3({
          text,
          styleSheet: {
               className: "get-started-section-sub-title",
               normal: {
                    fontSize: "1.5em",
                    fontWeight: "400",
                    marginBottom: "10px",
                    marginTop: "20px",
               },
          },
     });
};
