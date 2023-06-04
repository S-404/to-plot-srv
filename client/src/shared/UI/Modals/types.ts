import React from "react";
import {DialogProps} from "@mui/material/Dialog/Dialog";

export interface IModalProps {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export interface IMyModalProps extends Omit<IModalProps, "open"> {
    title: string;
    children: React.ReactNode;
    maxWidth?: DialogProps["maxWidth"];
}

export interface IMyAlertProps extends Omit<IMyModalProps, "children"> {
    text: string;
    onConfirm: () => void;
    onReject?: () => void;
}