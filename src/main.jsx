import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
