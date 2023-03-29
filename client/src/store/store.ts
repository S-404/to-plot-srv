import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userApi} from "../services/userService";
import {authApi, authApiNoInterceptor} from "../services/authService";
import authSlicer from "./authSlicer";


const rootReducer = combineReducers({
    auth: authSlicer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [authApiNoInterceptor.reducerPath]: authApiNoInterceptor.reducer
})

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(userApi.middleware)
                .concat(authApi.middleware)
                .concat(authApiNoInterceptor.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>