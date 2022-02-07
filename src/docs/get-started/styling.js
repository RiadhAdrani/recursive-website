export default {
     route: "/styling-with-recursive",
     title: "Styling with Recursive",
     content: [
          {
               paragraph: `The idea behind the majority of Front-End frameworks 
               and libraries is to encapsulate the {logic} and {styling} in a unit that we call {component} .
               Recursive is no different, and it gives the developer many choices.`,
          },
          { subTitle: "Style Sheet" },
          {
               paragraph: `To style an element with {css} , you need a {class} .`,
          },
          {
               paragraph: `To style a component with {Recursive} , you need a {className} .  `,
          },
          { spacer: "20px" },
          {
               paragraph: `Inside a component, we will add the {styleSheet} , 
                    it should have a {className} and a {selector} . 
                    Let's make the {Button} red, with rounded corners`,
          },
          { spacer: "20px" },
          {
               code: `Button({
        text: "Add",
        styleSheet: { // 👈 add styleSheet
            className: "add-button", // 👈 with a className
            normal: { // 👈 add a selector : normal refer to the standard styling
                backgroundColor: "red", // background-color
                color: "white", // color
                border: "none", // border
                padding: "10px 20px", // padding
                marginLeft: "10px", // margin-left
                borderRadius: "20px", // border-radius
            },
        },
        events: {
            onClick: () => {
                if (text.trim()) {
                    setTodods([...todos, text]);
                    setText("");
                }
            },
        },
    })`,
          },
          { spacer: "20px" },
          {
               tip: `In Recursive, styling attributes are a "camelCased" version of css attributes: background becomes background, background-color becomes backgroundColor.`,
               tipTitle: "Style attributes",
          },
          {
               warning: `The same rules of styling with css apply to Recursive, most notably style overriding.`,
          },
          { spacer: "20px" },
          {
               paragraph: `To add a {hover} effect to the button, all you need to do is add the {hover} selector:`,
          },
          { spacer: "20px" },
          {
               code: `Button({
        text: "Add",
        styleSheet: {
            className: "add-button",
            normal: {
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                marginLeft: "10px",
                borderRadius: "20px",
            },
            hover: { // 👈 add the hover selector (:hover in css)
               backgroundColor: "blue", // 🎨 change the color of the button to blue when hovered on.
           },
        },
        events: {
            onClick: () => {
                if (text.trim()) {
                    setTodods([...todos, text]);
                    setText("");
                }
            },
        },
    })`,
          },
          { spacer: "20px" },
          {
               paragraph: `As you can tell, {Recursive} is highly cutsomizable, 
            you can pass variables inside the {StyleSheet} to create a custom experience for the user.`,
          },
          {
               paragraph: `Now go ahead and style your App 👌`,
          },
     ],
};
