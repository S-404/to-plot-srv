import {authApi, setAuth} from "@entities/auth";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AUTH_TAG} from "@shared/api";
import {delay} from "@shared/lib";


export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
    "authentication/logout",
    async (_: unknown, {dispatch}) => {
        dispatch(setAuth(false));

        // Wait 10ms to invalidateTags in next event loop tick.
        // Otherwise, after invalidate related requests with SESSION_TAG
        // will be started, but isAuthorized will still be equal to true
        await delay(10);

        // 👇 ATTENTION: This line clear all baseApi state instead of authApi
        // dispatch(authApi.util.resetApiState())

        dispatch(authApi.util.invalidateTags([AUTH_TAG]));
    }
);
