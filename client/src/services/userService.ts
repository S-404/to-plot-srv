import {createApi} from "@reduxjs/toolkit/query/react";
import {IUser} from "../models/IUser";
import {baseQueryWithReAuth} from "../api/interceptor";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], number>({
            query: () => 'api/user/all',
        }),
    })
})

