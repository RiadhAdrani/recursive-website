import { Code } from "@riadh-adrani/recursive/Recursive-Components";

export default (code) => {
     return Code({
          flags: {
               forceRerender: true,
          },
          className: "language-javascript",
          text: code,
          style: {
               padding: "20px",
          },
     });
};
