import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useLogoutMutation} from "@entities/auth";
import Button from "@mui/material/Button";

export const LogoutButton: FC = () => {
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    const logoutButtonHandler = () => {
        logout(null);
        navigate("/");
    };

    return (
        <Button onClick={logoutButtonHandler} color="inherit">Logout</Button>
    );
};