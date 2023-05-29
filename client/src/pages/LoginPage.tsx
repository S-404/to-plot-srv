import React, {FC} from "react";
import {SignInForm} from "@features/auth/login";

const LoginPage: FC = () => {
    return (
        <div>
            <SignInForm/>
        </div>
    );
};

export default LoginPage;