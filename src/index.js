// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,

//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <BrowserRouter>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
