import React, {FC} from "react";
import {LoginButton} from "@features/auth/Login";
import {LogoutButton} from "@features/auth/Logout";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {useTypedSelector} from "@shared/lib/useTypedSelector";

import MyDrawer from "../MyDrawer/MyDrawer";

const MyAppBar: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth);

    return (
        <Box sx={{flexGrow: 1}}>

            <AppBar position="static">
                <Toolbar>
                    {isAuth && <MyDrawer/>}
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    {isAuth ?
                        <LogoutButton/>
                        :
                        <LoginButton/>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MyAppBar;