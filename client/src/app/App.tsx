import React, {FC} from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router,} from "react-router-dom";
import {appStore} from "@app/store/appStore";
import {AppBar} from "@widgets/AppBar";

import AppRouter from "./router/AppRouter";

const App: FC = () => {
    return (
        <Provider store={appStore}>
            <Router>
                <AppBar/>
                <AppRouter/>
            </Router>
        </Provider>
    );
};

export default App;