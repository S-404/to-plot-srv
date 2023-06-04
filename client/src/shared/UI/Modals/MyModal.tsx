import React, {FC} from "react";
import CloseIcon from "@mui/icons-material/Close";
import {Dialog, DialogContent, DialogTitle, IconButton,} from "@mui/material";
import {IMyModalProps} from "@shared/UI/Modals/types";


export const MyModal: FC<IMyModalProps> = ({
                                               title,
                                               children,
                                               isOpen,
                                               close,
                                               maxWidth
                                           }) => {
    return (
        <Dialog
            fullWidth
            maxWidth={maxWidth}
            onClose={close}
            open={isOpen}
        >
            <DialogTitle sx={{m: 0, p: 2}}>
                {title}
                <IconButton
                    onClick={close}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
};
