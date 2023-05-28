import {logoutThunk} from "@features/auth/Logout";
import {createListenerMiddleware, TypedStartListening} from "@reduxjs/toolkit";
import {invalidateAccessToken} from "@shared/api";

export const invalidateAccessTokenListener = createListenerMiddleware();

export type TypedListening = TypedStartListening<RootState, AppDispatch>

export const startInvalidateAccessTokenListener =
    invalidateAccessTokenListener.startListening as TypedListening;

startInvalidateAccessTokenListener({
    actionCreator: invalidateAccessToken,
    effect: async (_, api) => {
        api.dispatch(logoutThunk());
    }
});