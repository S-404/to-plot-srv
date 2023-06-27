import React, {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {checkAuth} from "@entities/auth";
import {useTypedSelector} from "@shared/lib/useTypedSelector";

import {privateRoutes, publicRoutes} from "./routes";

const AppRouter: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useTypedSelector((state) => state.auth.isAuth);

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route => (
                    <Route
                        key={Date.now() + route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                ))}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => (
                    <Route
                        key={Date.now() + route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                ))}
            </Routes>
    );
};

export default AppRouter;