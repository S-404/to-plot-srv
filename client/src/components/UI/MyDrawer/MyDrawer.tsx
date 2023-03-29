import React, {FC} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerList from "./DrawerList";

const ANCHOR = 'left'
const MyDrawer: FC = () => {
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
                    <DrawerList/>
                </Box>
            </Drawer>
        </>
    );
};

export default MyDrawer;