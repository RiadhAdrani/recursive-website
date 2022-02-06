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
               paragraph: `To style an element in {css} , you need a {class} .
               To style a component in {Recursive} , you need a {className} .  `,
          },
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
               warning: `The same rules of styling with css apply to Recursive, most notably style overriding.`,
          },
          { spacer: "20px" },
          {
               paragraph: `As you can tell, {Recursive} is highly cutsomizable, 
            you can pass variables inside the {StyleSheet} to create a custom experience for the user`,
          },
          {
               paragraph: `Now go ahead and style your App 👌`,
          },
     ],
};
