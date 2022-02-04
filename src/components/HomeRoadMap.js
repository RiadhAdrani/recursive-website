import { Column, Div, H3, P, Row } from "@riadh-adrani/recursive/Recursive-Components";

export default (title, description, done = true) =>
     Row({
          styleSheet: {
               className: "road-map-item",
               normal: {
                    alignItems: "center",
                    padding: "15px 0px",
               },
          },
          children: [
               Div({
                    style: {
                         background: done ? "#8d181b" : "white",
                         borderColor: done ? "white" : "#8d181b",
                    },
                    styleSheet: {
                         className: "roap-map-item-circle",
                         normal: {
                              minHeight: "15px",
                              minWidth: "15px",
                              border: "2px solid transparent",
                              borderRadius: "50%",
                              marginRight: "30px",
                              marginLeft: "-10px",
                         },
                    },
               }),
               Column({
                    style: { padding: "20px", background: "#ddddddcc", flex: 1 },
                    children: [
                         H3({ text: title, style: { color: "#8d181b" } }),
                         P({
                              text: description,
                         }),
                    ],
               }),
          ],
     });
