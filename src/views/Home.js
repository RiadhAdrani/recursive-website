import { Column, H1, H2, Img, P, Row } from "@riadh-adrani/recursive/components";
import HomeCard from "../components/HomeCard";
import HomeFeature from "../components/HomeFeature";
import logo from "../assets/logo.png";
import HomeRoadMap from "../components/HomeRoadMap";
import MediaQuery from "../Style/MediaQuery";
import HomeButton from "../components/HomeButton";

const homeFeatures = [
     {
          title: "Component-Based",
          text: "Build encapsulated components, and compose them to make complex UIs. Since everything is implemented with Javascript, you can highly customize your app by adding data and states to your UI.",
     },
     {
          title: "Declarative",
          text: "Recursive make the job simpler by abstracting a lot of ambiguities. Declarative components are predictable and easier to debug.",
     },
     {
          title: "99.9% Javascript",
          text: "If you love Javascript and hate HTML, this is the way ! With Recursive, even style sheets could be written with Javascript!",
     },
];

const homeCards = [
     {
          title: "Native HTML components and more !",
          icon: "fas fa-sitemap",
          text: `All HTML elements are already made for you!
          While you can use {Div} as a container, 
          you have also {Column} and {Row} 
          which will reduce the boiler plate of specifiying the direction of the flex-box.`,
     },
     {
          title: "Highly Customizable",
          icon: "fas fa-sliders-h",
          text: `Create {styleSheet} objects in your component logic 
          and pass {variables} to make them change as the state do !`,
     },
     {
          title: "Easy State Management",
          icon: "fas fa-database",
          text: `Name your states and access them whenever you are in the Component Tree !
          Use {setState} to create a stateful object,
          call {getState} to access from another component to retrieve its value,
          but make sure that the state exists first !`,
     },
     {
          title: "We have a Router too",
          icon: "fas fa-map-marked-alt",
          text: `Create the illusion of directories in your app 
          by creating a {router} 
          and setting up a {route} that represent a directory.`,
     },
];

const RoadMap = [
     {
          title: "Create Component",
          text: `A modular unit for building web apps.`,
          done: true,
     },
     {
          title: "RecursiveDOM 🔥",
          text: `A lightning-fast Virtual DOM that take care of rendering and updating the actual DOM`,
          done: true,
     },

     {
          title: "Router",
          text: "The SPA (Single Page App) way of faking directories in a web pages 🤫.",
          done: true,
     },

     {
          title: "SetState",
          text: `Create stateful object that will trigger UI updates when changed. 
          Named like "Flutter", used almost like "React". We said "almost" because it
          have its own twist.`,
          done: true,
     },
     {
          title: "Hooks",
          text: `Allow the user to manage component's life cycle: 
          "onCreated", "onUpdated", "onRef", "beforeDestroyed" and "onDestroyed"`,
          done: true,
     },

     {
          title: "RecursiveCSSOM",
          text: `The counter-part of the RecursiveDOM: it manages the style of the App.`,
          done: true,
     },
     {
          title: "v0.5.0 🎉",
          text: `The library (or Framework ?) is publicly available on NPM.`,
          done: true,
     },

     {
          title: "RecursiveOrchestrator 🎼",
          text: `The Engine of the library, manages update requests and keep tracking the state of the App.`,
          done: true,
     },

     {
          title: "RecursiveError ❌",
          text: `Destroy the developer's hopes and dreams by displaying
          errors on the screen.`,
          done: true,
     },
     { title: "v0.6.0 🎉", text: `A step closer to 1.0.0`, done: true },
     {
          title: "RecursiveLogger",
          text: `Automating the logging process to easily debug code.`,
          done: false,
     },
     {
          title: "RecursiveStyleSheet",
          text: `A library containing all CSS attributes, values and some helper functions.`,
          done: false,
     },
     { title: "Kompose", text: `A library that abstract the Styling process`, done: false },
     { title: "v0.7.0 🎉", text: `Another step closer to 1.0.0`, done: false },
];

export default () => {
     return Column({
          children: [
               Column({
                    styleSheet: {
                         className: "home-banner",
                         normal: {
                              textAlign: "center",
                              alignItems: "center",
                              padding: "100px 0px",
                         },
                         mediaQueries: MediaQuery({
                              small: { normal: { padding: "50px" } },
                         }),
                    },
                    children: [
                         Img({ src: logo, height: 100, width: 100 }),
                         H1({
                              text: "Recursive",
                              style: { color: "#cf2026", marginBottom: "10px", fontSize: "3em" },
                         }),
                         P({
                              text: "A Javascript library to build beautiful component-based web apps",
                         }),
                         Row({
                              children: [
                                   HomeButton("Get Started", "/get-started"),
                                   HomeButton("Docs", "/docs"),
                              ],
                         }),
                    ],
               }),
               Row({
                    styleSheet: {
                         className: "home-features-wrapper",
                         normal: {
                              padding: "40px 60px",
                              background: "#8d181b",
                              color: "white",
                         },
                         mediaQueries: MediaQuery({
                              small: { normal: { flexDirection: "column", padding: "40px 20px" } },
                         }),
                    },
                    children: homeFeatures.map((feature) =>
                         HomeFeature(feature.title, feature.text)
                    ),
               }),
               Column({
                    styleSheet: {
                         className: "recursive-plus",
                         normal: {
                              padding: "20px 60px",
                         },
                         mediaQueries: MediaQuery({
                              small: { normal: { padding: "20px" } },
                         }),
                    },
                    children: homeCards.map((card) => HomeCard(card.title, card.icon, card.text)),
               }),
               H2({
                    text: "Road Map",
                    style: {
                         textAlign: "center",
                         background: "#8d181b",
                         color: "white",
                         padding: "10px 0px",
                    },
               }),
               Column({
                    styleSheet: {
                         className: "road-map",
                         normal: {
                              padding: "0px 120px",
                              textAlign: "justify",
                         },
                         mediaQueries: MediaQuery({
                              small: { normal: { padding: "0px 20px" } },
                         }),
                    },
                    children: [
                         Column({
                              style: {
                                   borderLeft: "1px solid black",
                              },
                              children: RoadMap.map((step) =>
                                   HomeRoadMap(step.title, step.text, step.done)
                              ),
                         }),
                    ],
               }),
               H2({
                    text: "1.0.0",
                    style: {
                         textAlign: "center",
                         background: "#8d181b",
                         color: "white",
                         padding: "10px 0px",
                    },
               }),
          ],
     });
};
