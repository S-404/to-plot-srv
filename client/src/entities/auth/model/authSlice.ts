import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API_URL} from "@shared/api/baseQuery";
import axios from "axios";

import {authApi} from "../api/authApi";

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    () =>
        axios
            .get(`${API_URL}/auth/refresh`, {withCredentials: true})
            .then(response => {
                localStorage.setItem("token", response.data.accessToken);
            })
);

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
        builder.addCase(checkAuth.fulfilled, (state) => {
            state.isAuth = true;
        });
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
    }
});

export default authSlice.reducer;
export const {setAuth} = authSlice.actions;