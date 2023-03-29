import React, {FC, useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {authApi} from "../../services/authService";
import {Link} from "react-router-dom";
import {IAuthErrorResponse} from "../../models/IAuthResponse";
import MyAlert from "../UI/MyAlert";
import {color} from "../UI/types/TypesMUI";


const SignInForm: FC = () => {
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [login, {isError, isLoading, error}] = authApi.useLoginMutation()

    useEffect(() => {
        if (isError && error) {
            const err = error as IAuthErrorResponse
            setErrorMessage(err.data.message)
        }
    }, [isError, error])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const password = data.get('password')

        if (email && password) {
            login({
                email: email.toString(),
                password: password.toString()
            })
        }

    };


    return (
        <Container component="main">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 2}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        disabled={isLoading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        {isLoading ? 'Sign In...' : 'Sign In'}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to={'/restore-password'}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to={'/registration'}>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                    <Box>
                        <MyAlert
                            type={color.error}
                            message={errorMessage}
                            title={'Error'}
                            visibility={isError}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default SignInForm;