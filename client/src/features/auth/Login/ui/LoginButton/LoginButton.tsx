import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

export const LoginButton: FC = () => {
    const navigate = useNavigate();
    const loginButtonHandler = () => {
        navigate("/login");
    };

    return (
        <Button onClick={loginButtonHandler} color="inherit">Login</Button>
    );
};
