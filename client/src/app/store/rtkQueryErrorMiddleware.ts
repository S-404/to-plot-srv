import {AnyAction, Middleware, ThunkDispatch} from "@reduxjs/toolkit";
import {enqueueSnackbar} from "notistack";

export const rtkQueryErrorMiddleware: Middleware<object, unknown, ThunkDispatch<unknown, unknown, AnyAction>> = () =>
    (next) =>
        (action) => {
            if (action.payload?.data?.message) {
                enqueueSnackbar(action.payload.data.message, {variant: "error"});
            }

            return next(action);
        };
