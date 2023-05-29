import React, {FC} from "react";
import {LoginButton} from "@features/auth/login";
import {LogoutButton} from "@features/auth/logout";
import {useTypedSelector} from "@shared/lib";
import {MyAppBar} from "@shared/UI/MyAppBar";
import {MyDrawer} from "@shared/UI/MyDrawer";

import DrawerList from "./DrawerList";

export const AppBar: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth);

    return (
        <MyAppBar>
            {isAuth ?
                <MyDrawer>
                    <DrawerList/>
                    <LogoutButton/>
                </MyDrawer>
                :
                <LoginButton/>
            }
        </MyAppBar>
    );
};

