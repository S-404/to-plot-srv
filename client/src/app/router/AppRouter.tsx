import React, {FC, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useLazyRefreshTokenQuery} from "@entities/auth";
import {useTypedSelector} from "@shared/lib/useTypedSelector";

import {privateRoutes, publicRoutes} from "./routes";

const AppRouter: FC = () => {
    const isAuth = useTypedSelector((state) => state.auth.isAuth);
    const [checkAuth, {isUninitialized}] = useLazyRefreshTokenQuery();

    useEffect(() => {
        if (!isAuth && isUninitialized) {
            checkAuth();
        }
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