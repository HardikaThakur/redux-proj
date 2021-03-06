import React from "react";
import ReactDOM from "react-dom";
import App from "./container";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";
//import registerServiceWorker from "./registerServiceWorker";
import reportWebVitals from "./reportWebVitals";
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
//registerServiceWorker();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
