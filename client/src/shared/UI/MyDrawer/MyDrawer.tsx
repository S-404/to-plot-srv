import React, {FC} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

const ANCHOR = "left";

type MyAppBarProps = {
    children: React.ReactNode;
}
export const MyDrawer: FC<MyAppBarProps> = ({children}) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const toggleDrawer = (open: boolean) => () => {
        setIsVisible(open);
    };

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
                onClick={toggleDrawer(true)}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor={ANCHOR}
                open={isVisible}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {children}
                </Box>
            </Drawer>
        </>
    );
};