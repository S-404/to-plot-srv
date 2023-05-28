import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "@app/App";
import {appStore} from "@app/store/appStore";

import "./index.css";

const store = appStore();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
