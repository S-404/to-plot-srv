import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "@app/router/AppRouter";
import {appStore} from "@app/store/appStore";
import {MySnackbarProvider} from "@shared/UI/MySnackbarProvider";
import {AppBar} from "@widgets/AppBar";

import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={appStore}>
            <Router>
                <MySnackbarProvider>
                    <AppBar/>
                    <AppRouter/>
                </MySnackbarProvider>
            </Router>
        </Provider>
    </React.StrictMode>
);
