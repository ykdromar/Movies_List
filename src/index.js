import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import movies from "./reducers";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(movies);
// console.log("Before", store.getState());
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });

root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
