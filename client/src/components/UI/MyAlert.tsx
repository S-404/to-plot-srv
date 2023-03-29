import React, {FC} from 'react';
import {Alert, AlertTitle} from "@mui/material";
import {color} from "./types/TypesMUI";

interface IMyAlertProps {
    title: string,
    message: string,
    type: color,
    visibility: boolean
}

const MyAlert: FC<IMyAlertProps> = ({title, message, type, visibility}) => {

    if (!visibility) return null
    return (
        <Alert severity={type}>
            <AlertTitle>{title}</AlertTitle>
            {message}
        </Alert>
    );
};

export default MyAlert;