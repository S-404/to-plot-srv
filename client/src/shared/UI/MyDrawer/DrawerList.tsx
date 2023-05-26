import React, {FC} from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import BackupIcon from '@mui/icons-material/Backup';
import DuoIcon from '@mui/icons-material/Duo';
import {Link} from "react-router-dom";
import {SvgIconProps} from "@mui/material";

interface IListItems {
    title: string;
    icon: React.ReactElement<SvgIconProps>;
    link: string;
}

const listItems: IListItems[] = [
    {title: 'Profile', icon: <AccountBoxIcon/>, link: 'user'},
    {title: 'Messages', icon: <EmailIcon/>, link: '/messages'},
    {title: 'File Storage', icon: <BackupIcon/>, link: '/files'},
    {title: 'Meetings', icon: <DuoIcon/>, link: '/meetings'},
]
const DrawerList: FC = () => {

    return (
        <>
            <List>
                {listItems.map(item => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton component={Link} to={item.link}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </>
    );
};

export default DrawerList;