import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {IAuthResponse} from "../models/IAuthResponse";

export const API_URL = process.env.REACT_APP_SERVER_URL

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
        if (!headers.has("Authorization")) {
            headers.set("Authorization", `Bearer ${localStorage.getItem('token')}`);
        }
        return headers;
    },
    credentials: "include"
})
export const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseQuery('auth/refresh', api, extraOptions)
        if (refreshResult.data) {
            // store the new token
            const data = refreshResult.data as IAuthResponse
            localStorage.setItem("token", data.accessToken)
            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
        } else {
            console.log('not authorized')
        }
    }
    return result
}