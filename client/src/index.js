import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "state/store";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import {persistStore} from "redux-persist";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
