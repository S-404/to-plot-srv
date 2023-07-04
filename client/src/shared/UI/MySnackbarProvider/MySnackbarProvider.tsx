import React, {FC, PropsWithChildren} from "react";
import {SnackbarProvider} from "notistack";

export const MySnackbarProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <SnackbarProvider
            anchorOrigin={{
                horizontal: "center",
                vertical: "top"
            }}
            maxSnack={3}
        >
            {children}
        </SnackbarProvider>
    );
};
