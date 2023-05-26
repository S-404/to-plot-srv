import React, {FC, useEffect} from 'react';
import AppRouter from "./router/AppRouter";
import {authApiNoInterceptor} from "../features/auth/authService";
import MyAppBar from "../shared/UI/MyAppBar/MyAppBar";
import {BrowserRouter as Router,} from 'react-router-dom'

const App: FC = () => {
    const [checkAuth, {}] = authApiNoInterceptor.useCheckAuthMutation()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth(null)
        }
    }, [])

    return (
        <Router>
            <MyAppBar/>
            <AppRouter/>
        </Router>
    );
};

export default App;