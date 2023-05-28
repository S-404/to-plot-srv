import {IAuthQuery, IAuthResponse, IRegistrationQuery} from "@entities/auth/api/types";
import {AUTH_TAG, baseApi} from "@shared/api";


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
        registration: build.mutation<IAuthResponse, IRegistrationQuery>({
            query: (body) => ({
                url: "auth/registration",
                method: "POST",
                body
            }),
            invalidatesTags: [AUTH_TAG],
        })
    })
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegistrationMutation,
} = authApi;

// import {setAuth} from "@entities/auth/model/authSlice";
// import {IAuthResponse} from "@features/auth/models/IAuthResponse";
// import {IUserCredentials} from "@features/auth/models/IUser";
// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// import {AUTH_TAG} from "@shared/api";
// import {baseQueryWithReAuth} from "@shared/api/interceptor";
//
// export const API_URL = process.env.REACT_APP_SERVER_URL;
// export const authApiNoInterceptor = createApi({
//     reducerPath: "authApiNoInterceptor",
//     baseQuery: fetchBaseQuery({
//         baseUrl: API_URL,
//         prepareHeaders(headers) {
//             return headers;
//         },
//         credentials: "include"
//     }),
//     endpoints: (builder) => ({
//         checkAuth: builder.mutation<IAuthResponse, null>({
//             query: () => ({
//                 url: "auth/refresh",
//                 method: "GET",
//             }),
//             async onQueryStarted(id, {dispatch, queryFulfilled}) {
//                 try {
//                     const {data} = await queryFulfilled;
//
//                     localStorage.setItem("token", data.accessToken);
//                     dispatch(setAuth(true));
//                 } catch (e) {
//                     console.error("authApiNoInterceptor", e);
//                 }
//             },
//         }),
//     })
// });
//
// export const authApi = createApi({
//     reducerPath: "authApi",
//     tagTypes: [AUTH_TAG],
//     baseQuery: baseQueryWithReAuth,
//     endpoints: (builder) => ({
//         login: builder.mutation({
//             query: ({email, password}: IUserCredentials) => ({
//                 url: "auth/login",
//                 method: "POST",
//                 body: {
//                     email,
//                     password
//                 },
//             }),
//             async onQueryStarted(id, {dispatch, queryFulfilled}) {
//                 try {
//                     const {data} = await queryFulfilled;
//
//                     localStorage.setItem("token", data.accessToken);
//                     dispatch(setAuth(true));
//                 } catch (e) {
//                     console.error("authApi", e);
//                 }
//             },
//         }),
//         logout: builder.mutation({
//             query: () => ({
//                 url: "auth/logout",
//                 method: "POST",
//             }),
//             async onQueryStarted(id, {dispatch, queryFulfilled}) {
//                 try {
//                     await queryFulfilled;
//                     localStorage.removeItem("token");
//                     dispatch(setAuth(false));
//                 } catch (e) {
//                     console.error("authApi logout", e);
//                 }
//             },
//         }),
//         createUser: builder.mutation({
//             query: ({username, password, email}) => ({
//                 url: "auth/registration",
//                 method: "POST",
//                 body: {
//                     username,
//                     password,
//                     email
//                 }
//             }),
//         })
//     })
// });