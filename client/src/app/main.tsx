import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "@app/App";
import {store} from "@app/store/store";

import "./index.css";

const appStore = store();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={appStore}>
        <App/>
    </Provider>
);
