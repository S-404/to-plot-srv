import React, {FC} from "react";
import {SignUpForm} from "@features/auth/Registration";
import Box from "@mui/material/Box";

const RegistrationPage: FC = () => {
    return (
        <Box>
            <SignUpForm/>
        </Box>
    );
};

export default RegistrationPage;