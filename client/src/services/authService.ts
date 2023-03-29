import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUserCredentials} from "../models/IUser";
import {setAuth} from "../store/authSlicer";
import {baseQueryWithReAuth} from "../api/interceptor";
import {IAuthResponse} from "../models/IAuthResponse";

export const API_URL = process.env.REACT_APP_SERVER_URL
export const authApiNoInterceptor = createApi({
    reducerPath: 'authApiNoInterceptor',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders(headers) {
            return headers;
        },
        credentials: "include"
    }),
    endpoints: (builder) => ({
        checkAuth: builder.mutation<IAuthResponse, null>({
            query: () => ({
                url: 'auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    localStorage.setItem("token", data.accessToken)
                    dispatch(setAuth(true))
                } catch (e) {
                    console.error('authApiNoInterceptor', e)
                }
            },
        }),
    })
})

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({email, password}: IUserCredentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: {
                    email,
                    password
                },
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    localStorage.setItem("token", data.accessToken)
                    dispatch(setAuth(true))
                } catch (e) {
                    console.error('authApi', e)
                }
            },
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    localStorage.removeItem("token")
                    dispatch(setAuth(false))
                } catch (e) {
                    console.error('authApi logout', e)
                }
            },
        }),
        createUser: builder.mutation({
            query: ({username, password, email}) => ({
                url: 'auth/registration',
                method: 'POST',
                body: {
                    username,
                    password,
                    email
                }
            }),
        })
    })
})