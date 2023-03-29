import React, {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {authApi} from "../../../services/authService";
import MyDrawer from "../MyDrawer/MyDrawer";

const MyAppBar: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    const [logout,] = authApi.useLogoutMutation()
    const navigate = useNavigate()
    const loginButtonHandler = () => {
        navigate('/login')
    }
    const logoutButtonHandler = () => {
        logout(null)
        navigate('/')
    }

    return (
        <Box sx={{flexGrow: 1}}>

            <AppBar position="static">
                <Toolbar>
                    {isAuth && <MyDrawer/>}
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    {isAuth ?
                        <Button onClick={logoutButtonHandler} color="inherit">Logout</Button>
                        :
                        <Button onClick={loginButtonHandler} color="inherit">Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MyAppBar;