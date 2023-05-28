import {rtkQueryErrorMiddleware} from "@app/store/rtkQueryErrorMiddleware";
import {authApi} from "@entities/auth/api/authApi";
import authSlicer from "@entities/auth/model/authSlice";
import {invalidateAccessTokenListener} from "@features/auth/invalidateAccessToken";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";


const rootReducer = combineReducers({
    auth: authSlicer,
    [authApi.reducerPath]: authApi.reducer,
});

export function makeStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(
                    authApi.middleware,
                    invalidateAccessTokenListener.middleware,
                    rtkQueryErrorMiddleware,
                )

    });

    setupListeners(store.dispatch);

    return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof appStore
export type AppDispatch = typeof appStore.dispatch