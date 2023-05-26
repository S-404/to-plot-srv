import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authApi, authApiNoInterceptor} from "../../features/auth/authService";
import authSlicer from "./authSlicer";


const rootReducer = combineReducers({
    auth: authSlicer,
    [authApi.reducerPath]: authApi.reducer,
    [authApiNoInterceptor.reducerPath]: authApiNoInterceptor.reducer
})

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(authApi.middleware)
                .concat(authApiNoInterceptor.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>