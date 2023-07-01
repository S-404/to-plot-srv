import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {authApi} from "../api/authApi";

export interface IAuthState {
    isAuth: boolean;
}

const initialState: IAuthState = {
    isAuth: false
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                state.isAuth = true;
                localStorage.setItem("token", payload.accessToken);
            }
        );
        builder.addMatcher(
            authApi.endpoints.logout.matchFulfilled,
            (state) => {
                state.isAuth = false;
                localStorage.removeItem("token");
            }
        );
        builder.addMatcher(
            authApi.endpoints.refreshToken.matchFulfilled,
            (state, {payload}) => {
                state.isAuth = true;
                localStorage.setItem("token", payload.accessToken);
            }
        );
    }
});

export default authSlice.reducer;
export const {setAuth} = authSlice.actions;