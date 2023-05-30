import {createApi} from "@reduxjs/toolkit/query/react";

import {baseQueryWithReAuth} from "./baseQueryWithReAuth";
import {AUTH_TAG, FILE_STORAGE_TAG} from "./tags";


export const baseApi = createApi({
    tagTypes: [AUTH_TAG, FILE_STORAGE_TAG],
    reducerPath: "baseApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
});