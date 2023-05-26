import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IAuthState {
    isAuth: boolean;
}

const initialState: IAuthState = {
    isAuth: false
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    },
    extraReducers: {}
})

export default authSlice.reducer
export const {setAuth} = authSlice.actions