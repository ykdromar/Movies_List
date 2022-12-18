import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";
const root = ReactDOM.createRoot(document.getElementById("root"));
//logger middleware

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("ACTION_TYPE= ", action.type);
//       next(action);
//     };
//   };
// };

//new way of writting above function
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("ACTION_TYPE= ", action.type);
    }
    next(action);
  };

// thunk middleware not required beacuse redux gives redux-thunk
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//     }
//     next(action);
//   };
const store = createStore(combineReducers, applyMiddleware(logger, thunk));

root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
