import {AUTH_TAG, baseApi} from "@shared/api";

import {IAuthQuery, IAuthResponse, IRegistrationQuery, IRegistrationResponse} from "./types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<IAuthResponse, IAuthQuery>({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                body
            }),
            invalidatesTags: [AUTH_TAG],
        }),
        logout: build.mutation<null, null>({
            query: () => ({
                url: "auth/logout",
                method: "POST"
            }),
        }),
        registration: build.mutation<IRegistrationResponse, IRegistrationQuery>({
            query: (body) => ({
                url: "auth/registration",
                method: "POST",
                body
            }),
            invalidatesTags: [AUTH_TAG],
        }),
        refreshToken: build.query<IAuthResponse, void>({
            query: () => ({
                url: "auth/refresh",
            }),
            providesTags: [AUTH_TAG],
        }),
    })
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegistrationMutation,
    useLazyRefreshTokenQuery,
} = authApi;