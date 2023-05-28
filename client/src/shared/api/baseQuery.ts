import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const API_URL = import.meta.env.VITE_SERVER_URL;
export const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
        if (!headers.has("Authorization")) {
            headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
        }

        return headers;
    }
});