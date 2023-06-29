//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SimpleCounter from "./component/counter.jsx";

//render your react application
//set interval ejectar una accion o acciones cada tiempo defina,
let counter = 0;
setInterval(function () {
  ReactDOM.render(
    <SimpleCounter seconds={counter} />,
    document.querySelector("#app")
  );
  counter++;
}, 100);
