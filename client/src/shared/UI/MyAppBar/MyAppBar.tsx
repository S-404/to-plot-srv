import React, {FC} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

type MyAppBarProps = {
    children: React.ReactNode;
}

export const MyAppBar: FC<MyAppBarProps> = ({children}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
    );
};