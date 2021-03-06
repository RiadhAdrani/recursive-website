export default {
     route: "/project-structure",
     title: "Project Structure",
     content: [
          {
               paragraph: `You will most likely work only in the {src} directory, but its a good thing to know your environment:`,
          },
          { spacer: "20px" },
          {
               paragraph: `{node_modules} : contains all the libraries needed for the project. 
          For example, If you follow this path {node_modules\\@riadh-adrani\\recursive} , 
          you will find the {Recursive} library files.`,
          },
          {
               paragraph:
                    "{src} : contains logic, assets and all what you need to develop and build the App.",
          },
          {
               paragraph:
                    "{public} : contains the template ressource for the project; with a fresh project you will find an {index.html} and a {favicon.png}",
          },
          {
               paragraph:
                    "{package-lock.json} : A big beefy Json file containing the exact tree that was generated by installing the node modules.",
          },
          {
               paragraph:
                    "{package.json} : manages and keep track of the libraries installed in the project.",
          },
          {
               paragraph:
                    "{webpack.common.js} , {webpack.dev.js} and {webpack.prod.js} : Files needed for the development server and build settings. Solve problems like {Hot Reloading} for a better developer experience.",
          },
          { spacer: "10px" },
          {
               danger: "If you don't know what your are doing, just focus on the src folder and its content, all your work will be there.",
          },
     ],
};
