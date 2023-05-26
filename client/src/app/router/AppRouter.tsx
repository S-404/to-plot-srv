import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom'
import {useTypedSelector} from "../../shared/lib/hooks/useTypedSelector";
import {privateRoutes, publicRoutes} from "./routes";

const AppRouter: FC = () => {

    const isAuth = useTypedSelector((state) => state.auth.isAuth)

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