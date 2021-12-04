import DividerView from "../../recursivejs/createcomponent/components/text/DividerView.js";
import PreformattedTextView from "../../recursivejs/createcomponent/components/text/PreformattedTextView.js";
import CodeView from "../../recursivejs/createcomponent/components/inlinetext/CodeView.js";
import ButtonView from "../../recursivejs/createcomponent/components/forms/ButtonView.js";

export default ({ text, language = "js", format }) => {
     return DividerView({
          styleSheet: {
               className: "beautiful-code-view",
               normal: {
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "25px",
               },
          },
          flags: {
               forceRerender: true,
          },
          children: [
               ButtonView({
                    text: "Copy",
                    styleSheet: {
                         className: "beautiful-code-view-copy-button",
                         normal: {
                              display: "inline",
                              marginLeft: "auto",
                              marginRight: "10px",
                              padding: "5px 15px",
                              border: "none",
                              backgroundColor: "white",
                              marginBottom: "-50px",
                              zIndex: "1",
                              transitionDuration: "0.15s",
                         },
                         hover: {
                              backgroundColor: theme.primary,
                              cursor: "pointer",
                              color: theme.secondary,
                         },
                         active: {
                              backgroundColor: theme.primaryAccent,
                              transform: "scale(0.9)",
                         },
                    },
                    events: {
                         onClick: () => {
                              navigator.clipboard.writeText(text);
                         },
                    },
               }),
               PreformattedTextView({
                    children: CodeView({
                         text,
                         className: `language-${language}`,
                    }),
                    hooks: {
                         onCreated: () => {
                              if (typeof format === "function") {
                                   format();
                              }
                         },
                         onUpdated: () => {
                              if (typeof format === "function") {
                                   format();
                              }
                         },
                    },
               }),
          ],
     });
};
