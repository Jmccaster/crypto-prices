import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

//Wrap the App Component with the Router component to enable the router features
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
