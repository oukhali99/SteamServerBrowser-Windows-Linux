import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "@renderer/store";

import { App } from "@renderer/modules/main";

const documentRoot = document.getElementById("root");
if (!documentRoot) {
    throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(documentRoot);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
