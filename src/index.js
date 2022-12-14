import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ThemeProvider from "react-bootstrap/ThemeProvider";

import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(
  process.env.NODE_ENV === "development" ? "/" : process.env.PUBLIC_URL
);
root.render(
  <HashRouter
  // basename={
  //   process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL
  // }
  >
    {" "}
    <Provider store={store}>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      >
        <App />
      </ThemeProvider>{" "}
    </Provider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
