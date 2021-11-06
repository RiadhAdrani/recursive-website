import stringList from "./stringList.js";

export default function ({
     theLibrary = "The Library",
     getStarted = "Get Started",
     docs = "Docs",
     examples = "Examples",
     welcomeTitle = "The Future of Web development",
     welcomeSubtitle = "Master one skill to rule them all",
     getStartedSubtitle = "Create your first app!",
     helloWorld = "Hello World",
     styling = "Styling",
     routing = "Routing",
     hooks = "Hooks",
}) {
     const output = {};

     for (let str in stringList) {
          output[stringList[str]] = arguments[0][stringList[str]];
     }

     console.log(output);
     return output;
}
