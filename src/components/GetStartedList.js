import { Li, Ul } from "@riadh-adrani/recursive/components";

export default (list) => {
     return Ul({
          styleSheet: {
               className: "get-started-list",
               normal: {
                    margin: "5px 0px",
                    background: "#f0f0f0",
                    padding: "20px 50px",
               },
          },
          children: list.map((item) => Li({ children: item })),
     });
};
