//import package
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//impoerter store et app
import store from "./JS/store/store";
import App from "./App";
// import css 
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />-
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
