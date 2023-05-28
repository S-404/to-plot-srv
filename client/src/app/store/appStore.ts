import {authApi, authApiNoInterceptor} from "@features/auth/authService";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

import authSlicer from "./authSlicer";


const rootReducer = combineReducers({
    auth: authSlicer,
    [authApi.reducerPath]: authApi.reducer,
    [authApiNoInterceptor.reducerPath]: authApiNoInterceptor.reducer
});

export const appStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(authApi.middleware)
                .concat(authApiNoInterceptor.middleware)
    });
};

export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof appStore>