export default {
     route: "/project-structure",
     title: "Project Structure",
     content: [
          {
               paragraph: `You will most likely work only in the {src} directory, but its a good thing to know your environment:`,
          },
          { spacer: "20px" },
          { paragraph: "{node_modules} : contains all the libraries needed for the project." },
          { paragraph: "{src} : contains App logic." },
          { paragraph: "{public} : The template ressource." },
          { paragraph: "{webpack.*} : Files needed for the development server." },
          { paragraph: "{package-lock.json} : beefy one." },
          {
               paragraph:
                    "{package.json} : manages and keep track of the libraries installed in the project.",
          },
          { spacer: "20px" },
          {
               danger: "If you don't know what your are doing, just focus on the src folder and its content, all your work will be there.",
          },
     ],
};
