import React, {FC} from "react";
import {
    Box,
    Button,
    DialogActions,
    Typography,
} from "@mui/material";

import {IMyAlertProps} from "./types";
import {MyModal} from "./";

export const MyAlert: FC<IMyAlertProps> = ({
                                               title,
                                               text,
                                               close,
                                               onReject,
                                               isOpen,
                                               onConfirm,
                                               maxWidth,
                                           }) => {
    const handleOnCancel = () => {
        close();
        if (onReject) onReject();

    };

    const handleOnConfirm = () => {
        onConfirm();
    };

    return (
        <MyModal
            title={title}
            isOpen={isOpen}
            close={close}
            maxWidth={maxWidth}
        >
            <Box flexDirection="row" mb={2}>
                <Typography variant="body1" mr={1}>
                    {text}
                </Typography>
            </Box>
            <DialogActions>
                <Button color="error" onClick={handleOnConfirm} size="medium">
                    Confirm
                </Button>
                <Button size="medium" onClick={handleOnCancel}>
                    Cancel
                </Button>
            </DialogActions>
        </MyModal>
    );
};
