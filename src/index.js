import React from "react";
import ReactDOM from "react-dom/client"; // Use react-dom/client
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);