export default {
     route: "/setup-env",
     title: "Setup Your work environment",
     content: [
          {
               paragraph: `While you can work with vanilla {Javascript} , 
               We recommend you to use {Node.js} 
               with which the tutorial will continue.`,
          },
          {
               subTitle: "Using create-recursive-app",
          },
          { warning: "Make sure to have Node.js installed on your machine!" },
          { paragraph: "In a folder run this command using your OS {terminal}" },
          { command: "npx @riadh-adrani/create-recursive-app my-app" },
          {
               paragraph:
                    "When everything is completed you should have a bunch of files in your folder, but don't worry, We will slowly but surely understand the role of each one.",
          },
          {
               paragraph:
                    "Don't close the terminal yet, {cd} into the project directory and start the dev server:",
          },
          { command: "npm start" },
          {
               paragraph:
                    "This will create a dev server for you and it will open your browser at {http://localhost:8080} .",
          },
     ],
};
