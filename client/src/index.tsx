import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";

const appStore = store()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={appStore}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);
