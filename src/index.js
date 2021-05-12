// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React, { useState } from "react";
// import App from "./App";

// Initial React element
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

// Another type of creating react element
// ReactDOM.render(
//   React.createElement(
//     "div",
//     null,
//     React.createElement(
//       "h1",
//       {
//         style: {
//           color: "blue"
//         }
//       },
//       "Hello!"
//     )
//   ),
//   document.getElementById("root")
// );

// Another type of creating react element
// ReactDOM.render(
//   <ul>
//     <li>Hot dogs</li>
//     <li>Pizza</li>
//     <li>Hamburgers</li>
//   </ul>,
//   document.getElementById("root")
// );

// Another type of creating react element using Babel compiler from JSX
// ReactDOM.render(
//   /*#__PURE__*/ React.createElement(
//     "ul",
//     null,
//     /*#__PURE__*/ React.createElement("li", null, "Hot dogs"),
//     /*#__PURE__*/ React.createElement("li", null, "Pizza"),
//     /*#__PURE__*/ React.createElement("li", null, "Hamburgers")
//   ),
//   document.getElementById("root")
// );

// let city = {
//   name: "Bengaluru",
//   country: "India"
// };

// ReactDOM.render(
//   <div>
//     <h1 id="heading">This is very cool city {city.name}</h1>
//     <p className="cool-text">From {city.country}</p>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   /*#__PURE__*/ React.createElement(
//     "div",
//     null,
//     /*#__PURE__*/ React.createElement(
//       "h1",
//       null,
//       "This is very cool city ",
//       city.name
//     ),
//     /*#__PURE__*/ React.createElement("p", null, "From ", city.country)
//   ),
//   document.getElementById("root")
// );

// function Hello(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Welcome to {props.library} !</h1>
//       <p>Lets do something interesting! {props.message}</p>
//       {/* <p>{props.number} Props total</p> */}
//       <p>{Object.keys(props).length} Props total</p>
//     </div>
//   );
// }

// function Hello({ library, message, number }) {
//   return (
//     <div>
//       <h1>Welcome to {library} !</h1>
//       <p>Lets do something interesting! {message}</p>
//       <p>{number} Props total</p>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Hello library="React" message="Have fun dude..." number={3} />,
//   document.getElementById("root")
// );

// function Lake({ name }) {
//   return <h1>{name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Lake name="Dal lake"></Lake>
//       <Lake name="Manas lake"></Lake>
//       <Lake name="VV lake"></Lake>
//     </div>
//   );
// }

/**
 * Rendering Lists
 */
let lakeList = [
  {
    id: 1,
    name: "Dal",
    city: "Kashmir"
  },
  {
    id: 2,
    name: "Mussorie",
    city: "Uttarpradesh"
  },
  {
    id: 3,
    name: "Durga rao",
    city: "Andhra Pradesh /"
  }
];

// function App(props) {
//   return (
//     <div>
//       {props.lakes.map((lake, index) => {
//         return (
//           <div key={index}>
//             <h1>
//               {lake.id}: {lake.name}{" "}
//             </h1>
//             <li>City: {lake.city}</li>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));

function Lake({ name }) {
  return <h1>Visit {name}</h1>;
}

function SkiResort({ name }) {
  return <h1>Visit {name}</h1>;
}

// function App(props) {
//   return (
//     <div>
//       {props.season === "summer" ? (
//         <Lake name="Manali" />
//       ) : props.season === "winter" ? (
//         <SkiResort name="Sri lanka" />
//       ) : (
//         <h1>Come back in Winter or Summer!</h1>
//       )}
//     </div>
//   );
// }

// ReactDOM.render(<App season="winter" />, document.getElementById("root"));

/**
 * To Render multiple adjacent components enclose components within  <React.Fragment> or just <> tags
 * ERROR: SyntaxError: /src/index.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (203:6)
 */
// function App(props) {
//   return (
//     <React.Fragment>
//       <Lake name="Manali" />
//       <SkiResort name="Sri lanka" />
//     </React.Fragment>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

/**
 * Array destructuring
 */
// const [first, , third] = ["Pineapple", "Pizza", "Kaboom"];
// console.log(first);
// console.log(third);

function App() {
  const [year, setYear] = useState(2021);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <>
      <div>
        <h1>New Year {year}</h1>
        <button onClick={() => setYear(year + 1)}>Set Year</button>
      </div>
      <div>
        <h1>Manager On Duty: {manager}</h1>
        <button onClick={() => setManager("Racheal")}>Set Racheal</button>
      </div>
      <div>
        <h1>Status:{status}</h1>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Back in 5 mins")}>
          Back in 5 mins
        </button>
        <button onClick={() => setStatus("Closed")}>Closed</button>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
