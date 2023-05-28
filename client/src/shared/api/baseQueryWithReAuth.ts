import {BaseQueryApi, FetchArgs} from "@reduxjs/toolkit/query/react";

import {baseQuery} from "./baseQuery";
import {invalidateAccessToken} from "./invalidateTokenEvent";

const AUTH_ERROR_CODES = new Set([401]);

export async function baseQueryWithReAuth(
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: object
) {
    const result = await baseQuery(args, api, extraOptions);

    if (
        typeof result.error?.status === "number" &&
        AUTH_ERROR_CODES.has(result.error.status)
    ) {
        api.dispatch(invalidateAccessToken());
    }

    return result;
}